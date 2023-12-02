import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';

const menuItems = [
  {
    picsrc: img1,
    name: 'Example',
    info: "This dish is quite the flavour journey. Ingrediants: blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah ",
    price: 'R134',
    side: 'left'
  }, 
  {
    picsrc: img2,
    name: 'Example',
    info: "This dish is quite the flavour journey. Ingrediants: blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah ",
    price: 'R134',
    side: 'right'
  }, 
  {
    picsrc: img3,
    name: 'Example',
    info: "This dish is quite the flavour journey. Ingrediants: blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah ",
    price: 'R134',
    side: 'left'
  }, 
  {
    picsrc: img4,
    name: 'Example',
    info: "This dish is quite the flavour journey. Ingrediants: blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah ",
    price: 'R134',
    side: 'right'
  }, 
];

function menu(a){
  const header = document.createElement('span');
        header.setAttribute('class', 'tabHead');
        header.textContent = 'Menu';
        
  a.appendChild(header)
  
  for(let i of menuItems){
    
    const item = document.createElement('div');
          item.setAttribute('class', 'menu-item');
          
      const itemImg = document.createElement('img');
            itemImg.setAttribute('class', 'item-img');
            itemImg.src = i.picsrc;
            itemImg.setAttribute('data', `${i.side}`);
            
      const itemName = document.createElement('span');
            itemName.setAttribute('class','item-name');
            itemName.textContent = i.name;
    
      const itemInfo = document.createElement('span');
            itemInfo.setAttribute('class','item-info');
            itemInfo.textContent = i.info;
    
      const itemPrice = document.createElement('span');
            itemPrice.setAttribute('class','item-price');
            itemPrice.textContent = i.price;
    
    item.appendChild(itemImg)
    item.appendChild(itemName)
    item.appendChild(itemInfo)
    item.appendChild(itemPrice)
    a.appendChild(item)
  }
  
}

export default menu
