import TableImage from './home-images/table.jpg';
import WaitressImage from './home-images/waitress.jpg';

function home(a) {
  const header = document.createElement('span');
        header.setAttribute('class', 'tabHead');
        header.textContent = 'Home'
        
  const intro = document.createElement('p');
        intro.setAttribute('class', 'para');
        intro.innerHTML = `
        <span >Welcome to "Savor Haven"</span> 
        <br/> Where culinary artistry meets a welcoming ambiance. 
        <br/> Nestled in the heart of the city, our restaurant offers a fusion of flavors crafted from locally sourced ingredients and inspired by global cuisine.`;
        
  const table = new Image();
        table.src = TableImage;
        table.setAttribute('class', 'image');
        
  const para2 = document.createElement('p');
        para2.setAttribute('class', 'para');
        para2.textContent = "Step into an inviting space adorned with warm hues and contemporary design, where each detail, from the flickering candlelight to the soothing background music, is curated to elevate your dining experience.";
  
  const waitress = new Image();
        waitress.src = WaitressImage;
        waitress.setAttribute('class', 'image');
        
  const para3 = document.createElement('p');
        para3.setAttribute('class', 'para');
        para3.textContent = `Our menu is a symphony of delectable options, catering to diverse palates and dietary preferences, ensuring an unforgettable culinary journey. Whether you're seeking an intimate dinner for two or a celebration with loved ones, our attentive staff is dedicated to providing impeccable service, making every visit to "Savor Haven" a feast for the senses and a cherished memory.`
    
    a.appendChild(header);
    a.appendChild(intro);
    a.appendChild(table);
    a.appendChild(para2);
    a.appendChild(waitress);
    a.appendChild(para3);
}

export default home