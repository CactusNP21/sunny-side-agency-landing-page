// verbinden van de html met de javascript 

// verbinden met het icoontje van de hamburger menu

const icon = document.querySelector('.hamb_line');


// verbinden met het hamburger menu 

const menu = document.querySelector('nav'); 


// event listener voor het icoontje 

icon.addEventListener('click', () => {
    menu.classList.add("menu_open"); 
})
