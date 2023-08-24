const qoute = document.querySelector("#qoute");
const author = document.querySelector("#author");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getQoute);

function getQoute(e){
e.preventDefault();
    console.log("In function");
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(data =>{
        qoute.innerHTML = `"${data.content}"`
        author.innerHTML = data.author
    });
}