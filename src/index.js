import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  const breeds = ["akita", "shiba", "collie", "rottweiler", "bulldog"];
  breeds.forEach((x) => {
    createtemplate(x);
  });
}

function createtemplate(name) {
  let container = document.getElementById("container");
  let wikiItem = document.createElement("div");
  wikiItem.setAttribute("class", "wiki-item");
  container.appendChild(wikiItem);

  let wikiHeader = document.createElement("h1");
  wikiHeader.setAttribute("class", "wiki-header");
  wikiHeader.innerHTML = name;
  wikiItem.appendChild(wikiHeader);

  let wikiContent = document.createElement("div");
  wikiContent.setAttribute("class", "wiki-content");
  wikiHeader.appendChild(wikiContent);

  let wikiText = document.createElement("p");
  wikiText.setAttribute("class", "wiki-text");
  const textt = getTextAbout(name);
  textt.then((x) => {
    wikiText.innerText = x.extract;
  });
  wikiContent.appendChild(wikiText);

  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img-container");
  wikiContent.appendChild(imgContainer);

  let image = document.createElement("img");
  image.setAttribute("class", "wiki-img");
  image.src = getImage(image, name);
  imgContainer.appendChild(image);
}

async function getTextAbout(name) {
  const url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + name;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getImage(image, name) {
  "Chihuahua";
  let urli = "https://dog.ceo/api/breed/" + name + "/images/random";
  fetch(urli)
    .then((res) => res.json())
    .then((result) => {
      image.src = result.message;
      return result;
    });
}
