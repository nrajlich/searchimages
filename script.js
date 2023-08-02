const accessKey = "bjzNqVF5awLsO28W0ePA50MuH2CosLRzSRLLycygK20"
const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${accessKey}` 
    const response = await fetch(url)
    const data = await response.json()
}
