document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
const choice = document.querySelector('input').value


const url = `https://api.nasa.gov/planetary/apod?api_key=4cOoX6NFhxxjNnpAs3N52fJJOJ9ca3v1hyKPqvee&date=${choice}`


fetch(url)
.then(res => res.json())
.then(data => {
  if(data.media_type === "image"){
    document.querySelector('img').src = data.hdurl
    document.querySelector('iframe').src = "", alt=""

  } else if (data.media_type === 'video'){
    document.querySelector('iframe').src = data.url
    document.querySelector('img').src = "", alt=""
  }
  document.querySelector('h3').textContent = data.explanation
  document.querySelector('h2').textContent = data.title
  // document.getElementById("date").textContent = data.date;
  })
}


