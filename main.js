let menu = document.querySelector('#menu-btn');
let navBar = document.querySelector('.navbar .links');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('.header .navbar').classList.add('active');
    }else{
        document.querySelector('.header .navbar').classList.remove('active');

    }
}

// Light Gallery 

lightGallery(document.querySelector('.gallery .gallery-container'));