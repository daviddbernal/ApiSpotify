(function(w) {
  w.onload = function() {
    console.log("la pagina se cargo");
    Red("https://swapi.co/api/people/", resuls => console.log(resuls));
  };
}.call(null, window));
