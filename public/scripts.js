/* function which makes an http request to the server
   to provide an example of the API in real-time
   based on user input */
function httpRequest() {
  // HTML location to append result
  var dataAnchor = document.getElementById('live-sample');
  // user input
  var requestData = document.getElementById('request-field').value;
  // the url where the request is being made
  var url = 'https://radiant-forest-74929.herokuapp.com/';
  // concatenation of base url and user request
  var requestUrl = url + requestData;

  // the http request
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var response = JSON.stringify(xhr.responseText, undefined, 2);
      dataAnchor.innerHTML = response;
    }
  };
  xhr.open('GET', requestUrl, true);
  xhr.send(null);
};
