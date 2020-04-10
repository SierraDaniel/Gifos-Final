console.log("Hola Mundo");

/* Toggle de dropdown */
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Cierra el dropdown si se hace click por fuera de él

// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
//onclick = "darkMode()"

function modeSelector(sheet) {
  document.getElementById("styleSheet").setAttribute('href', sheet);
  document.getElementById("logo-img").setAttribute('src', "images/gifOF_logo_dark.png");
}

// muestra el panel de sugerencias

let input = document.getElementsByTagName('input')[0];
input.addEventListener("keyup", () => {

  let suggestions = document.getElementById("mySuggestion");
  if (input.value !== "") {
    suggestions.classList.replace("search_hidden", "search_container");
  }else {
    suggestions.classList.replace("search_container","search_hidden");
    }
} )

// Busca Sugerencia 1
function search_suggestion1() {
  document.getElementById("results_container").classList.replace("results_hidden","visible_grid");
  for (let i = 0; i < 8; i++) {
    let found = fetch('http://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + "cats")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json.data[i].images.downsized.url
      })
      .then((data2) => {
        var imgA = document.createElement("IMG");
        imgA.style.margin = "5px"
        imgA.style.width = "290px"
        imgA.style.height = "290px"
        imgA.src = data2
        document.getElementById("results_container").appendChild(imgA);
      })
  }
}

// Busca Sugerencia 2
function search_suggestion2() {
  document.getElementById("results_container").classList.replace("results_hidden","visible_grid");
  for (let i = 0; i < 8; i++) {
    let found = fetch('http://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + "sailor moon")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json.data[i].images.downsized.url
      })
      .then((data2) => {
        var imgB = document.createElement("IMG");
        imgB.style.margin = "5px"
        imgB.style.width = "290px"
        imgB.style.height = "290px"
        imgB.src = data2
        document.getElementById("results_container").appendChild(imgB);
      })
  }
}

// Busca Sugerencia 3
function search_suggestion3() {
  document.getElementById("results_container").classList.replace("results_hidden","visible_grid");
  for (let i = 0; i < 8; i++) {
    let found = fetch('http://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + "stay home")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json.data[i].images.downsized.url
      })
      .then((data2) => {
        var imgC = document.createElement("IMG");
        imgC.style.margin = "5px"
        imgC.style.width = "290px"
        imgC.style.height = "290px"
        imgC.src = data2
        document.getElementById("results_container").appendChild(imgC);
      })
  }
}

/* Función muestra tendencias desde API*/
for (let i = 0; i < 24; i++) {
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.data[i].images.downsized.url
    })
    .then((data1) => {

      var img1 = document.createElement("IMG");
      img1.style.margin = "5px"
      img1.style.width = "290px"
      img1.style.height = "290px"
      img1.src = data1
      document.getElementById("trend_container").appendChild(img1);
    })
}

// variables para busqueda

//let searchInput = document.getElementById('search_input');

const searchInput = document.getElementById('search_input');
const results = document.getElementById('mySearch');
const searchButton = document.getElementById('search_button');
const visibleGrid = document.getElementsByClassName("results_hidden");


//  Buscar lo que el usuario ingresa

//Imprime imágenes de la búsqueda
function gifSearch() {
  document.getElementById("results_container").classList.replace("results_hidden","visible_grid");
  for (let i = 0; i < 24; i++) {
    let found = fetch('http://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + search_input.value)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json.data[i].images.downsized.url
      })
      .then((data2) => {
        var img2 = document.createElement("IMG");
        img2.style.margin = "5px"
        img2.style.width = "290px"
        img2.style.height = "290px"
        img2.src = data2
        document.getElementById("results_container").appendChild(img2);
      })
  }
}