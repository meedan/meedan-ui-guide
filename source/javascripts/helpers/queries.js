// Read the query string to get the params (eg, from hubot)
// 
var queries = {};
$.each(document.location.search.substr(1).split('&'),function(c,q){
  var i = q.split('=');

  // If there are queries, build an array
  if (i[1]) {
    queries[i[0].toString()] = i[1].toString();  
  }

  // If there aren't, make sure to set a default view
  // 
  if (typeof queries.view == "undefined") {
    queries.view = "timeline";
  }
});
