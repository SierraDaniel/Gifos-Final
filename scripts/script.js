console.log("Hola Mundo !!!");

/* Toggle de dropdown */
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

darkBtn = document.getElementById("sailor_night")
darkBtn.addEventListener("click", () => {
  document.getElementById("styleSheet").setAttribute('href', 'styles/dark_mode.css');
  document.getElementById("logo-img").setAttribute('src', "images/gifOF_logo_dark.png");
  document.getElementById("lupaIcon").setAttribute("src", "images/Combined Shape.svg");
  document.getElementById("dropIcon").setAttribute("src", "images/dropdown2.svg");
})

// funcion light mode
lightBtn = document.getElementById("sailor_day")
lightBtn.addEventListener("click", () => {
  document.getElementById("styleSheet").setAttribute('href', 'styles/styles.css');
  document.getElementById("logo-img").setAttribute('src', "images/gifOF_logo.png");
  document.getElementById("lupaIcon").setAttribute("src", "images/lupa_inactive.svg");
  document.getElementById("dropIcon").setAttribute("src", "images/dropdown.svg");
})

// home con logo
document.getElementById("logo-img").addEventListener("click", () => {
  document.getElementById("logo-img").setAttribute('href', 'index.html');
})


// muestra el panel de sugerencias

let input = document.getElementsByTagName('input')[0];
input.addEventListener("keyup", () => {

  let suggestions = document.getElementById("mySuggestion");
  let button = document.getElementById("button_search");

  if (input.value !== "") {
    suggestions.classList.replace("search_hidden", "search_container");
    button.classList.replace("search_button", "search_button_input");
    lupaIcon.setAttribute("src", "images/lupa.svg");

  } else {
    suggestions.classList.replace("search_container", "search_hidden");
    button.classList.replace("search_button_input", "search_button");
    lupaIcon.setAttribute("src", "images/lupa_inactive.svg");
  }
})

// Busca Sugerencia 1
function search_suggestion1() {
  document.getElementById("results_container").classList.replace("results_hidden", "grid_container2");
  for (let i = 0; i < 4; i++) {
    let found = fetch('https://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + "cats")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        gifTitle = json.data[i].title
        gifTitle = json.data[i].title
        return json.data[i].images.downsized.url
      })
      .then((data1) => {

        var div1 = document.createElement("div");
        var span1 = document.createElement("span");
        span1.innerHTML = gifTitle
        div1.style.margin = "5px"
        div1.style.width = "290px"
        div1.style.height = "290px"
        div1.style.backgroundImage = "url(" + data1 + ")"
        document.getElementById("trend_container").appendChild(div1);
        div1.appendChild(span1);
        document.getElementById("results_container").scrollIntoView({
          behavior: "smooth"
        })
      })
  }
}

// Busca Sugerencia 2
function search_suggestion2() {
  document.getElementById("results_container").classList.replace("results_hidden", "grid_container2");
  for (let i = 0; i < 4; i++) {
    let found = fetch('https://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + "sailor moon")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        gifTitle = json.data[i].title
        return json.data[i].images.downsized.url
      })
      .then((data1) => {

        var div1 = document.createElement("div");
        var span1 = document.createElement("span");
        span1.innerHTML = gifTitle
        div1.style.margin = "5px"
        div1.style.width = "290px"
        div1.style.height = "290px"
        div1.style.backgroundImage = "url(" + data1 + ")"
        document.getElementById("trend_container").appendChild(div1);
        div1.appendChild(span1);
        document.getElementById("results_container").scrollIntoView({
          behavior: "smooth"
        })
      })
  }
}

// Busca Sugerencia 3
function search_suggestion3() {
  document.getElementById("results_container").classList.replace("results_hidden", "grid_container2");
  for (let i = 0; i < 4; i++) {
    let found = fetch('https://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + "stay home")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        gifTitle = json.data[i].title
        return json.data[i].images.downsized.url
      })
      .then((data1) => {

        var div1 = document.createElement("div");
        var span1 = document.createElement("span");
        span1.innerHTML = gifTitle
        div1.style.margin = "5px"
        div1.style.width = "290px"
        div1.style.height = "290px"
        div1.style.backgroundImage = "url(" + data1 + ")"
        document.getElementById("trend_container").appendChild(div1);
        div1.appendChild(span1);
        document.getElementById("results_container").scrollIntoView({
          behavior: "smooth"
        })
      })
  }
}

/* Función muestra tendencias desde API*/
var gifTitle;

for (let i = 0; i < 24; i++) {
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      gifTitle = json.data[i].title
      return json.data[i].images.downsized.url
    })
    .then((data1) => {

      var div1 = document.createElement("div");
      var span1 = document.createElement("span");
      span1.innerHTML = gifTitle
      div1.style.margin = "5px"
      div1.style.width = "290px"
      div1.style.height = "290px"
      div1.style.backgroundImage = "url(" + data1 + ")"
      document.getElementById("trend_container").appendChild(div1);
      div1.appendChild(span1);

    })
}

// Botones ver más
// ver más 1

document.getElementById("vermas1").addEventListener('click', (ev) => {

  document.getElementById("results_container").classList.replace("results_hidden", "grid_container2");
  for (let i = 0; i < 4; i++) {
    let found = fetch('https://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + "Jonathan queer eye")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        gifTitle = json.data[i].title
        return json.data[i].images.downsized.url
      })
      .then((data1) => {

        var div1 = document.createElement("div");
        var span1 = document.createElement("span");
        span1.innerHTML = gifTitle
        div1.style.margin = "5px"
        div1.style.width = "290px"
        div1.style.height = "290px"
        div1.style.backgroundImage = "url(" + data1 + ")"
        document.getElementById("trend_container").appendChild(div1);
        div1.appendChild(span1);
        document.getElementById("results_container").scrollIntoView({
          behavior: "smooth"
        })
      })
  }
})
// ver más 2
document.getElementById("vermas2").addEventListener('click', (ev) => {

  document.getElementById("results_container").classList.replace("results_hidden", "visible_grid");
  for (let i = 0; i < 4; i++) {
    let found = fetch('https://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + "SailorMoon")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        gifTitle = json.data[i].title
        return json.data[i].images.downsized.url
      })
      .then((data1) => {

        var div1 = document.createElement("div");
        var span1 = document.createElement("span");
        span1.innerHTML = gifTitle
        div1.style.margin = "5px"
        div1.style.width = "290px"
        div1.style.height = "290px"
        div1.style.backgroundImage = "url(" + data1 + ")"
        document.getElementById("trend_container").appendChild(div1);
        div1.appendChild(span1);
        document.getElementById("results_container").scrollIntoView({
          behavior: "smooth"
        })
      })
  }
})

// ver más 3
document.getElementById("vermas3").addEventListener('click', (ev) => {

  document.getElementById("results_container").classList.replace("results_hidden", "visible_grid");
  for (let i = 0; i < 4; i++) {
    let found = fetch('https://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + "Queer eye")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        gifTitle = json.data[i].title
        return json.data[i].images.downsized.url
      })
      .then((data1) => {

        var div1 = document.createElement("div");
        var span1 = document.createElement("span");
        span1.innerHTML = gifTitle
        div1.style.margin = "5px"
        div1.style.width = "290px"
        div1.style.height = "290px"
        div1.style.backgroundImage = "url(" + data1 + ")"
        document.getElementById("trend_container").appendChild(div1);
        div1.appendChild(span1);
        document.getElementById("results_container").scrollIntoView({
          behavior: "smooth"
        })
      })
  }
})

// ver más 4
document.getElementById("vermas4").addEventListener('click', (ev) => {

  document.getElementById("results_container").classList.replace("results_hidden", "visible_grid");
  for (let i = 0; i < 4; i++) {
    let found = fetch('https://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + "Rainbow unicorn")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        gifTitle = json.data[i].title
        return json.data[i].images.downsized.url
      })
      .then((data1) => {

        var div1 = document.createElement("div");
        var span1 = document.createElement("span");
        span1.innerHTML = gifTitle
        div1.style.margin = "5px"
        div1.style.width = "290px"
        div1.style.height = "290px"
        div1.style.backgroundImage = "url(" + data1 + ")"
        document.getElementById("trend_container").appendChild(div1);
        div1.appendChild(span1);
        document.getElementById("results_container").scrollIntoView({
          behavior: "smooth"
        })
      })
  }
})


// variables para busqueda

const searchInput = document.getElementById('search_input');
const results = document.getElementById('mySearch');
const searchButton = document.getElementById('search_button');
const visibleGrid = document.getElementsByClassName("results_hidden");


//  Buscar lo que el usuario ingresa

//Imprime imágenes de la búsqueda
function gifSearch() {
  document.getElementById("results_container").classList.replace("results_hidden", "grid_container2");
  let suggestions = document.getElementById("mySuggestion");
  suggestions.classList.replace("search_container", "search_hidden", );
  for (let i = 0; i < 24; i++) {
    let found = fetch('https://api.giphy.com/v1/gifs/search?api_key=cwvIclC4Z5Ondbs0vcsTLdgXmOOllsEM&q=' + search_input.value)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        gifTitle = json.data[i].title
        return json.data[i].images.downsized.url
      })
      .then((data2) => {
        var img2 = document.createElement("IMG");
        img2.style.margin = "5px"
        img2.style.width = "290px"
        img2.style.height = "290px"
        img2.src = data2
        document.getElementById("results_container").appendChild(img2);
        document.getElementById("results_container").scrollIntoView({
          behavior: "smooth"
        })
      })
  }
}