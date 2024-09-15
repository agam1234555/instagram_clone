/******************Add the story ******************/
const image_profile = [
    ['https://i.ibb.co/GWHM9Xk/Screenshot-2024-09-15-034626.png','nscc_srm'],
    ['https://i.ibb.co/MpjsXFy/Screenshot-2024-09-15-040904.png','diljitdosanjh'],
    ['https://i.ibb.co/y8LP227/Screenshot-2024-09-15-041633.png','pjexplained'],
    ['https://i.ibb.co/NL4qgcF/Screenshot-2024-09-15-042028.png','maisamay..'],
    ['https://i.ibb.co/nMD1fxM/Screenshot-2024-09-15-042457.png','puravjha'],
    ['https://i.ibb.co/nj8pPqZ/account6.jpg','Exhibit1'],
    ['https://i.ibb.co/vkXPdxN/account7.jpg','Exhibit1'],
    ['https://i.ibb.co/7R0Vzp3/account8.jpg','Exhibit1'],
    ['https://i.ibb.co/gvrfhjL/account9.jpg','Exhibit1'],
    ['https://i.ibb.co/j8L7FPY/account10.jpg','Exhibit1'],
    ['https://i.ibb.co/JcXRPht/account11.jpg','Exhibit1'],
    ['https://i.ibb.co/6WvdZS9/account12.jpg','Exhibit1'],
    ['https://i.ibb.co/pJ8thst/account13.jpg','Exhibit1'],
    ['https://i.ibb.co/4M3W996/account14.jpg','Exhibit1'],
    ['https://i.ibb.co/Fzpg5yd/account15.jpg','Exhibit1'],
]
const story_container = document.querySelector('.owl-carousel.items');
if(story_container){
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <img src="${image_profile[i][0]}">
            <p>${image_profile[i][1]}</p>
            `;
        story_container.appendChild(parentDiv);
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        500:{
            items:7,
            nav:false
        }
    }
})