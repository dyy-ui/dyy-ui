// 节流
const throttle = {
  inserted: (el, binding) => {
    let delay = binding.arg;
    if (!delay) delay = 1000;
    let time = null;
    el.addEventListener("click", () => {
      if (!time) {
        time = setTimeout(() => {
          binding.value();
          time = null;
        }, delay);
      }
    });
  },
};
// 防抖
const debounce = {
  inserted: (el, binding) => {
    let delay = binding.arg;
    if (!delay) {
      delay = 1000;
    }
    let time;
    el.addEventListener("click", () => {
      if (time) {
        clearTimeout(time);
      }
      time = setTimeout(() => {
        binding.value();
      }, delay);
    });
  },
};

// input 数字
const numberInput = {
  bind: (el, binding) => {
    el.firstElementChild.oninput = function (e) {
      if (
        (binding.value?.min == 0 || binding.value?.min) &&
        binding.value.min > Number(e.target.value)
      ) {
        e.target.value = binding.value.min;
        el["__vue__"].handleInput(e);
        return;
      }
      if (binding.value?.max && binding.value?.max < e.target.value) {
        e.target.value = binding.value.max;
        el["__vue__"].handleInput(e);
        return;
      }

      if (/\./.test(e.target.value) && binding.arg) {
        let num = e.target.value.match(/\.(\S*)/)[1].length;
        if (num > binding.arg) {
          e.target.value = Number(
            e.target.value.match(/(\S*)\./)[0] +
              e.target.value.match(/\.(\S*)/)[1].slice(0, binding.arg)
          );
          el["__vue__"].handleInput(e);
        }
      } else {
        if (/\./.test(e.target.value)) {
          e.target.value = Number(
            e.target.value.match(/(\S*)\./)[1] +
              e.target.value.match(/\.(\S*)/)[1]
          );
          el["__vue__"].handleInput(e);
        }
      }
    };
    el.firstElementChild.onfocus = function (e) {
      if (e.target.value == 0) {
        e.target.value = null;
      }
    };
    el.firstElementChild.onblur = function (e) {
      if (!e.target.value) {
        if (binding.value?.init === null) {
          return (e.target.value = null);
        }
        e.target.value = 0;
      } else {
        while (/^-?0\d+/.test(e.target.value)) {
          e.target.value = Number(e.target.value.substring(1));
        }
        el["__vue__"].handleInput(e);
      }
    };
  },
};

const directives = {
  throttle,
  debounce,
  numberInput,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
