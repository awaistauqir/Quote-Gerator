'use strict'
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const newbtn = document.querySelector("#new");
const twitter = document.querySelector("#twitter-btn");
const loader = document.querySelector(".loader");
const quoteContainer = document.querySelector(".quote-container");
let data;

const showloader = function(){
    loader.style.display = "block";
    loader.hidden = false;
    quoteContainer.hidden = true;
    // quoteContainer.style.display = "none";
    quote.hidden = true;
    author.hidden = true;
}
const hideloader = function(){
    quote.hidden = false;
    author.hidden = false;
    if(!loader.hidden){
        quoteContainer.hidden = false;
        // quoteContainer.style.display = "block";
        loader.style.display = "none";
         loader.hidden = true;
         console.log(loader)
    }
}

async function randomQuote() {
    showloader();
    const response = await fetch('https://api.quotable.io/random');
    data = await response.json();
    quote.textContent = data.content;
    author.textContent = data.author;
    if(data.content.length > 50){
        quote.setAttribute("style","font-size:1.5rem");
    }
    else{
        quote.setAttribute("style","font-size:2.75rem");
        
    }
    

    console.log(`${data.content} —${data.author}`);
    hideloader();
  };

randomQuote();
newbtn.addEventListener("click",function(){
    randomQuote();
});
twitter.addEventListener("click",function(e){
    const twitterLink = `https://www.twitter.com/intent/tweet/?text=${data.content} - ${data.author}`;
    window.open(twitterLink,"_blank");
});

