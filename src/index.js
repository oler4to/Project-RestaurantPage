import './style.css'
import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'


const restaurantPage = document.getElementById('restaurant-page');

const createHeader = (() => {
  const header = document.createElement('header');
        header.setAttribute('id', 'head');
  
  //HEAD
  const restaurantName = document.createElement('span');
        restaurantName.setAttribute('id', 'restaurant-name');
        restaurantName.textContent = 'SAVOUR HAVEN';
  
  //TABS
  const navtabs = document.createElement('div');
        navtabs.setAttribute('id', 'navtabs');
        
    const homeTab = document.createElement('span');
    const menuTab = document.createElement('span');
    const contactTab = document.createElement('span');
    
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";
  
  navtabs.appendChild(homeTab);
  navtabs.appendChild(menuTab);
  navtabs.appendChild(contactTab);
  
  header.appendChild(restaurantName);
  header.appendChild(navtabs);
  
  restaurantPage.appendChild(header)
})()

let currentTab = 'home';
let setCurrentTab = ''

function createHome(){
  const hometab = document.createElement('section');
        hometab.setAttribute('id', 'home');
    
  home(hometab);
  restaurantPage.appendChild(hometab);
}

createHome()

function createMenu(){
  const menutab = document.createElement('section');
        menutab.setAttribute('id', 'menu');
  
  menu(menutab);
  restaurantPage.appendChild(menutab)
}

createMenu()

function createContact(){
  const contacttab = document.createElement('section');
        contacttab.setAttribute('id', 'contact');
        
  contact(contacttab)
  restaurantPage.appendChild(contacttab)
}

createContact()