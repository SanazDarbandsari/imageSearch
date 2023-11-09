const accessKey = "aqXLicF8HRQFVC4eELK-6fSxt8dV70chsniawCWnDBU";
const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('search-box');
const searchresult = document.getElementById('search-result');
const showmorebtn = document.getElementById('show-more-btn');

let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchbox.value;
    const url = `http://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if(page== 1){
        searchresult.innerHTML  = ""
    }
    results.map((result) =>{
        const img = document.createElement("img");
        img.src = result.urls.small;
        const imagelink = document.createElement('a');
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(img);
        searchresult.appendChild(imagelink);
    });
    showmorebtn.style.display = 'block'
}
searchform.addEventListener('submit', (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});
showmorebtn.addEventListener("click" , ()=>{
    page++;
    searchImages();
})