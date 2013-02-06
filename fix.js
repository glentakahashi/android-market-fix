// ==UserScript==
// @name           Android Market Fix
// @namespace      glentakahashi
// @description    Fixes the blank pages in android market when browsing My Library.
// @include /^https?:\/\/market\.android\.com\/mylibrary.*/
// ==/UserScript==
var strCSS = 'cssRules';
if( document.all ) { strCSS = 'rules'; }
for(var i = 0; i < document.styleSheets.length; i++) {
    for(var j = 0; j < document.styleSheets[i][strCSS].length; j++) {
        //found!
        if( document.styleSheets[i][strCSS][j].cssText.indexOf( ".carousel-pages-wrapper" ) == 0 ) {
            document.styleSheets[i][strCSS][j].style.width = "auto";
        }
    }
}
