(function(w) {
  w.onload = function() {
    console.log("la pagina se cargo");
    Red("https://swapi.co/api/people/").then(resul => console.log(resul));
  };
}.call(null, window));
