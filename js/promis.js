const Red = function(url) {
  return new Promise((result, reject) => {
    const XHTTP = new XMLHttpRequest();
    XHTTP.onreadystatechange = function() {
      if (XHTTP.readyState === 4 && XHTTP.status === 200)
        result(JSON.parse(this.response));
      else if (XHTTP.status === 404) reject(new Error("page not found"));
    };
    XHTTP.open("GET", url, true);
    XHTTP.send();
  });
};
