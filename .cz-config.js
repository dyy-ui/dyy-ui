"use strict";
module.exports = {
  types: [
    { value: "ð¯", name: "æ°å¢:    æ°å¢ä¸ä¸ªç»ä»¶" },
    { value: "â¨", name: "ç¹æ§:    ä¸ä¸ªæ°çç¹æ§" },
    { value: "ð", name: "ä¿®å¤:    ä¿®å¤ä¸ä¸ªBug" },
    { value: "ð", name: "ææ¡£:    åæ´çåªæææ¡£" },
    { value: "ð", name: "æ ¼å¼:    ç©ºæ ¼, åå·ç­æ ¼å¼ä¿®å¤" },
    { value: "â»ï¸", name: "éæ:    ä»£ç éæï¼æ³¨æåç¹æ§ãä¿®å¤åºåå¼" },
    { value: "â¡ï¸", name: "æ§è½:    æåæ§è½" },
    { value: "â", name: "æµè¯:    æ·»å ä¸ä¸ªæµè¯" },
    { value: "ð§", name: "å·¥å·:    å¼åå·¥å·åå¨(æå»ºãèææ¶å·¥å·ç­)" },
    { value: "âª", name: "åæ»:    ä»£ç åé" },
  ],
  scopes: [{ name: "component" }, { name: "docs" }, { name: "cli" }],
  messages: {
    type: "éæ©ä¸ç§ä½ çæäº¤ç±»å:",
    scope: "éæ©ä¸ä¸ªscope (å¯é):",
    customScope: "Denote the SCOPE of this change:",
    subject: "ç­è¯´æ:\n",
    body: 'é¿è¯´æï¼ä½¿ç¨"|"æ¢è¡(å¯é)ï¼\n',
    breaking: "éå¼å®¹æ§è¯´æ (å¯é):\n",
    footer: "å³èå³é­çissueï¼ä¾å¦ï¼#31, #34(å¯é):\n",
    confirmCommit: "ç¡®å®æäº¤è¯´æ?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["ç¹æ§", "ä¿®å¤"],
  subjectLimit: 100,
};
