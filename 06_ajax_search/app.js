var input = document.getElementById("searchInput");
var results = document.getElementById("results");

function parseXmlResponse(request) {
  var xml = request.responseXML;
  if (xml && !xml.getElementsByTagName("parsererror").length) {
    return { xml: xml };
  }

  var raw = request.responseText ? request.responseText.trim() : "";
  if (!raw) {
    return { error: "Empty response from PHP backend." };
  }

  if (raw.indexOf("<?php") !== -1) {
    return {
      error:
        "PHP code was returned instead of XML. Run this experiment on a PHP server.",
    };
  }

  var parsed = new DOMParser().parseFromString(raw, "application/xml");
  if (parsed.getElementsByTagName("parsererror").length) {
    return { error: "Backend response is not valid XML." };
  }

  return { xml: parsed };
}

function searchUsers(query) {
  var request = new XMLHttpRequest();
  request.open("GET", "search.php?q=" + encodeURIComponent(query), true);

  request.onreadystatechange = function () {
    if (request.readyState !== 4) {
      return;
    }

    if (request.status !== 200) {
      results.innerHTML = "<li>Unable to fetch data from PHP backend.</li>";
      return;
    }

    var parsed = parseXmlResponse(request);
    if (!parsed.xml) {
      results.innerHTML = "<li>" + parsed.error + "</li>";
      return;
    }

    var xml = parsed.xml;

    var errorNode = xml.getElementsByTagName("error")[0];
    if (errorNode) {
      results.innerHTML = "<li>" + errorNode.textContent + "</li>";
      return;
    }

    var users = xml.getElementsByTagName("user");
    render(users);
  };

  request.send();
}

input.addEventListener("input", function () {
  searchUsers(input.value.trim());
});

function render(userNodes) {
  if (!userNodes.length) {
    results.innerHTML = "<li>No matching users.</li>";
    return;
  }

  var html = "";
  for (var i = 0; i < userNodes.length; i++) {
    var name = userNodes[i].getElementsByTagName("name")[0].textContent;
    var email = userNodes[i].getElementsByTagName("email")[0].textContent;
    html += "<li>" + name + " (" + email + ")</li>";
  }

  results.innerHTML = html;
}

searchUsers("");
