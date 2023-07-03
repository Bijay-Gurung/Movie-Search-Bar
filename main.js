document.addEventListener("DOMContentLoaded", () => {
    const defaultTitle = "Avatar";
    const apiKey = '95bcce50';
    const defaultUrl = `https://www.omdbapi.com/?t=${defaultTitle}&apikey=${apiKey}`;
    
    const title = document.getElementById('title');
    const director = document.getElementById('director');
    const image = document.getElementById('image');
    
    fetch(defaultUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        title.innerHTML = `Title: <b>${data.Title}</b>`;
        director.innerHTML = `Director: <b>${data.Director}</b>`;
        image.innerHTML = `<img src="${data.Poster}" alt="Image not found" height="250px" width="200px">`;
    })
    
    .catch((error) => {
        console.log("Error: ",error);
        title.innerHTML = `Title: <b>${defaultTitle}</b>`;
        director.innerHTML = '';
        image.innerHTML = '';
    });
});

const searchButton = document.querySelector("button");
  const inputField = document.querySelector("input");
  const movieTitle = document.getElementById("title");
  const director = document.getElementById("director");
  const image = document.getElementById("image");
  
  searchButton.addEventListener("click", () => {
    const title = inputField.value;
    const apikey = "95bcce50";
    const url = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        movieTitle.innerHTML = `Title: <b>${data.Title}</b>`;
        director.innerHTML = `Director: <b>${data.Director}</b>`;
        image.innerHTML = `<img src="${data.Poster}" alt="Movie Poster" style="max-width: 160px;">`;
      })
      .catch((error) => {
        console.log("Error:", error);
        movieTitle.innerHTML = `Title: <b>${title}</b>`;
        director.innerHTML = "";
        image.innerHTML = "";
      });
  });
