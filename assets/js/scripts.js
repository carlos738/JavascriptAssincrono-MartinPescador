const BASE_URL = 'https://pixabay.com/es/photos/mart%c3%adn-pescador-p%c3%a1jaro-de-cerca-2046453/';
const martinpescadorBtn = document.getElementById('change-martin');
const martinpescadorImg = document.getElementById('martinpescador');

const getMartinpescador = async () =>{
    try{
        const data  = await fetch(BASE_URL='https://pixabay.com/es/photos/mart%c3%adn-pescador-p%c3%a1jaro-de-cerca-2046453/');
        const json = await data.json();

        return json.webpurl;
    }catch(e){
        console.log(e.message);
}};
const loadImg = async () =>{
    martinpescadorImg.src = await getMartinpescador();
};
martinpescadorBtn.addEventListener('click',loadImg)
loadImg();