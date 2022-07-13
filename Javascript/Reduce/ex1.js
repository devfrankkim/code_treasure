var la = { JavaScript: 1, CSS: 1, HTML: 1 };
var LANGUAGE = "REACT";

// if la[LANGUAGE] ===> la[LANGUAGE] + 1 or 1;
// undefined + 1 => NaN
// la[LANGUAGE] === NaN ===> 1

la[LANGUAGE] = la[LANGUAGE] + 1 || 1;
// la[LANGUAGE]  = la[LANGUAGE] ?  la[LANGUAGE] + 1 :  la[LANGUAGE] = 1

console.log(la); // {JavaScript: 1, CSS: 1, HTML: 1, REACT: 1}
//
