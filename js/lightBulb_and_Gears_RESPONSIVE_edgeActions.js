/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'gear'
   (function(symbolName) {   
   
   })("gear");
   //Edge symbol end:'gear'

   //=========================================================
   
   //Edge symbol: 'flowerGear_100'
   (function(symbolName) {   
   
   })("flowerGear_100");
   //Edge symbol end:'flowerGear_100'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3331931");