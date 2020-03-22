const Red = function(url, callback) {
  return new Promise((result, reject) => {
    const XHTTP = new XMLHttpRequest();
    XHTTP.onreadystatechange = function() {
      if (XHTTP.readyState === 4 && XHTTP.status === 200) {
        callback(JSON.parse(this.response));
      }
    };
    XHTTP.open("GET", url, true);
    XHTTP.send();
  });
};
