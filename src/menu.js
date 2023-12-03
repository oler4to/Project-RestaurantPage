import item1 from './item-images/item1.jpeg';
import item2 from './item-images/item2.jpeg';
import item3 from './item-images/item3.jpeg';
import item4 from './item-images/item4.jpeg';
import item5 from './item-images/item5.jpeg';
import item6 from './item-images/item6.jpeg';
import item7 from './item-images/item7.jpeg';
import item8 from './item-images/item8.jpeg';


// Menu item objects
const menuItems = [
  {
    picsrc: item1,
    name: "Seared Scallops with Citrus Risotto",
    info: "Pan-seared jumbo scallops served atop creamy citrus-infused risotto, garnished with fresh herbs.",
    price: "R215",
    side: "left"
  },
  {
    picsrc: item2,
    name: "Miso-Glazed Chilean Sea Bass",
    info: "Grilled Chilean sea bass glazed with savory miso, accompanied by a medley of roasted seasonal vegetables.",
    price: "R104",
    side: "right"
  },
  {
    picsrc: item3,
    name: "Truffle Mushroom Ravioli",
    info: "Handcrafted ravioli stuffed with wild mushrooms and drizzled with a luxurious truffle-infused cream sauce, finished with shaved parmesan.",
    price: "R99",
    side: "left"
  },
  {
    picsrc: item4,
    name: "Moroccan Spiced Lamb Tagine",
    info: "Tender braised lamb infused with Moroccan spices, served with couscous and a medley of roasted vegetables.",
    price: "R129",
    side: "right"
  },
  {
    picsrc: item5,
    name: "Szechuan Crispy Tofu Stir-Fry",
    info: "Crispy tofu cubes tossed in a zesty Szechuan sauce with colorful bell peppers, snow peas, and served over fragrant jasmine rice.",
    price: "R164",
    side: "left"
  },
  {
    picsrc: item6,
    name: "Prime Ribeye Steak",
    info: "A succulent grilled ribeye steak seasoned to perfection, accompanied by garlic mashed potatoes and sauteed spinach.",
    price: "R225",
    side: "right"
  },
  {
    picsrc: item7,
    name: "Gourmet Veggie Pizza",
    info: "A thin-crust pizza topped with a vibrant assortment of roasted vegetables, artisanal cheeses, and a drizzle of balsamic glaze.",
    price: "R169",
    side: "left"
  },
  {
    picsrc: item8,
    name: "Decadent Chocolate Lava Cake",
    info: "A rich, warm chocolate cake with a molten center, paired with a scoop of vanilla bean ice cream and a raspberry coulis.",
    price: "R108",
    side: "right"
  }
];



function menu(a){
  const header = document.createElement('span');
        header.setAttribute('class', 'tabHead');
        header.textContent = 'Menu';
        
  a.appendChild(header)
  
  const items = document.createElement('div');
        items.setAttribute('class', 'items')
  
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
    items.appendChild(item)
  }
  
  a.appendChild(items)
  
}

export default menu
