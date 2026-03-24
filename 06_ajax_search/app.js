var input = document.getElementById("searchInput");
var results = document.getElementById("results");

var users = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    users = data;
    render(users);
  })
  .catch(function () {
    results.innerHTML = "<li>Unable to fetch data.</li>";
  });

input.addEventListener("input", function () {
  var query = input.value.trim().toLowerCase();
  var filtered = users.filter(function (user) {
    return user.name.toLowerCase().includes(query);
  });
  render(filtered);
});

function render(list) {
  if (!list.length) {
    results.innerHTML = "<li>No matching users.</li>";
    return;
  }

  results.innerHTML = list
    .map(function (user) {
      return "<li>" + user.name + " (" + user.email + ")</li>";
    })
    .join("");
}
