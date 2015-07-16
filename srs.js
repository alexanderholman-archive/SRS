( function(){
 var w = window;
 var d = document;
 var s = d.styleSheets;
 for (var j = 0; j < s.length; j++) {
  var c = s[j].cssRules;
  if (c != null && typeof(c) != "undefined") {
   if ( typeof( w.SRS ) == "undefined" ) {
    w.SRS = {};
   }
   w.SRS[s[j].href] = {
    rules: c.length,
    selectors: 0,
    bySelector: {}
   };
   for (var i = 0; i < w.SRS[s[j].href].rules; i++) {
    if (c[i].selectorText) {
     w.SRS[s[j].href].selectors += c[i].selectorText.split(",").length;
     if (typeof w.SRS[s[j].href].bySelector[c[i].selectorText.split(",").length] == "undefined") {
      w.SRS[s[j].href].bySelector[c[i].selectorText.split(",").length] = {}
     }
     w.SRS[s[j].href].bySelector[c[i].selectorText.split(",").length][i + ":" + c[i].selectorText] = {
      style: c[i].style.cssText
     };
    }
   }
   if ( w.SRS[s[j].href].selectors > 4095 ) {
    console.error( "There are to many selectors in this stylesheet (" + s[j].href + ") for IE 9 and below to handle it correctly!" );
   }
  }
 }
 return w.SRS;
} ) ( window );
