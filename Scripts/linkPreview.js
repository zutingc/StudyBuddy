// API https://docs.linkpreview.net/
// Ex: https://codepen.io/alcalbg/pen/XWambRd

var data = {key: 'a8a8c89dcf90bfb42a09e1d0298e5e02', q: 'https://docs.google.com/document/d/1_kqT9U67ykmkiETOd21G-Yl2tgYb8fhWFrzeMe-SNQM/edit'}

fetch('https://api.linkpreview.net', {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify(data),
})
  .then(res => res.json())
  .then(response => {
document.getElementById("mytitle").innerHTML = response.title;
document.getElementById("mydescription").innerHTML = response.description;
document.getElementById("myimage").src = response.image;
document.getElementById("myurl").innerHTML = response.url;
})
