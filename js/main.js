//شغل java لم يطبق

//select landing page elemwnt
let landingpage = document.querySelector(".landing-page");
//get arrey of imags
let imagsArray = ["image1", "image2", "image3", "image4"];

setInterval(() => {
  //GET Random Number
  let randomNuber = Math.floor(Math.random() * imagsArray.length);
  
  //change background  image url
  landingpage.style.backgroundImage =
    `url("../imgs/backgrounds/${imagsArray[randomNuber]}.jpeg")`;
}, 5000);
