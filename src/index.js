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
        
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');
    
          homeTab.setAttribute('name', 'home');
          menuTab.setAttribute('name', 'menu');
          contactTab.setAttribute('name', 'contact');
    
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";
    
    homeTab.style = "border-bottom-style: solid";
  
  navtabs.appendChild(homeTab);
  navtabs.appendChild(menuTab);
  navtabs.appendChild(contactTab);
  
  header.appendChild(restaurantName);
  header.appendChild(navtabs);
  
  restaurantPage.appendChild(header)
})()
function createHome(){
  const hometab = document.createElement('section');
        hometab.setAttribute('id', 'home');
  
  home(hometab);
  restaurantPage.appendChild(hometab);
  
  hometab.style.display = 'flex';
}
function createMenu(){
  
  const menutab = document.createElement('section');
        menutab.setAttribute('id', 'menu');
  
  menu(menutab);
  restaurantPage.appendChild(menutab)
  
  menutab.style.display = "flex";
}
function createContact(){
  
  const contacttab = document.createElement('section');
        contacttab.setAttribute('id', 'contact');
        
  contact(contacttab)
  restaurantPage.appendChild(contacttab)
  
  contacttab.style.display = "flex";
}

const tabs = document.querySelectorAll('#navtabs button');
let currentTab = 'home';
  
function removeChild(){
  restaurantPage.removeChild(restaurantPage.children[1])
}
function checkCurrentTab(b){
    switch (b){
      case 'home': 
        tabs[0].style = "border-bottom-style: solid;";
        tabs[2].style = "border-bottom-style: none;";
        tabs[1].style = "border-bottom-style: none;";
        createHome();
        break;
      case 'menu':
        tabs[1].style = "border-bottom-style: solid;";
        tabs[0].style = "border-bottom-style: none;";
        tabs[2].style = "border-bottom-style: none;";
        createMenu();
        break;
      case 'contact':
        tabs[2].style = "border-bottom-style: solid;";
        tabs[1].style = "border-bottom-style: none;";
        tabs[0].style = "border-bottom-style: none;";
        createContact();
        break;
      default:
      return false
    }
}

const switchTabs = (() =>{
  
createHome()

    tabs.forEach((tab) =>{
      tab.addEventListener('click', () =>{
        removeChild(),
        currentTab = tab.name,
        checkCurrentTab(currentTab)
        })
      })
})()
