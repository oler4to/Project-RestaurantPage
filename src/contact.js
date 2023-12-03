import callImg from './png/call.png';
import emailImg from './png/email.png';
import fbImg from './png/facebook.png';
import instaImg from './png/instagram.png';
import twtImg from './png/twitter.png';
import lnkdinImg from './png/linkedin.png';


const timeslots = [
  {
    days: 'Monday - Thursday',
    time: '08:00 - 21:00',
  },
  {
    days: 'Friday',
    time: '08:00 - 20:00',
  },
  {
    days: 'Saturday & Sunday',
    time: '08:00 - 20:00',
  },
  {
    days: 'Public Holidays',
    time: '08:00 - 19:00',
  },
]

function contact(a){
  const header = document.createElement('span');
        header.setAttribute('class', 'tabHead');
        header.textContent = "About Us";
        
  const about = document.createElement('span');
        about.setAttribute('class', 'about');
        about.innerHTML = `
        <p>
      "Since its inception in 2015, 'Savor Haven' has been a vibrant culinary haven nestled in the heart of our community. Co-founded by Chef Mia Rodriguez and Restaurateur Max Bennett, our restaurant was born from a shared vision to create a dining experience that marries innovation with tradition. Through the years, we've evolved into a cherished destination, drawing inspiration from local produce and global flavors to craft a menu that delights the senses.
        </p>
      <p>
      At 'Savor Haven,' we prioritize quality and sustainability, sourcing fresh, seasonal ingredients from trusted local farmers and artisans. Our commitment to excellence extends beyond the kitchen—our warm and attentive staff ensures each guest feels welcomed and valued. We pride ourselves on creating an inviting atmosphere where friends and families gather to share moments, savor exceptional cuisine, and create lasting memories.
      </p>
      <p>
      Driven by our passion for culinary artistry and community, 'Savor Haven' continues to be a place where every dish tells a story, and every visit leaves a lasting impression. Join us on this gastronomic journey where tradition meets innovation, and every bite is an invitation to indulge in the finest flavors."
      </p>
      `;
        
  const header2 = document.createElement('span');
        header2.setAttribute('class', 'tabHead');
        header2.textContent = "Contact";
        
  const times = document.createElement('div');
        times.setAttribute('class', 'times');
        
    for(let t of timeslots){
      
      const timeslot = document.createElement('div');
            timeslot.setAttribute('class', 't-slot');
      
        const day = document.createElement('span');
              day.classList.add('day')
        const time = document.createElement('span')
              time.classList.add('time')
        
              day.textContent = t.days;
              time.textContent = t.time;
              
      timeslot.appendChild(day);
      timeslot.appendChild(time);
      times.appendChild(timeslot);
      
    }
    
  const contacts = document.createElement('div');
        contacts.setAttribute('class', 'contacts');
        
    const call = document.createElement('span');
          call.setAttribute('class', 'c-call');
          call.innerHTML = `
          <img class="c-social" src='${callImg}'/> 
          <span>Call</span>`
          
    const email = document.createElement('span');
          email.setAttribute('class', 'c-email');
          email.innerHTML = `
          <img class="c-social" src='${emailImg}'/> 
          <span>Email</span>`
          
          
    const fb = new Image();
          fb.src = fbImg;
          fb.setAttribute('class', 'c-social');
    const insta = new Image();
          insta.src = instaImg;
          insta.setAttribute('class', 'c-social');
    const twitter = new Image();
          twitter.src = twtImg;
          twitter.setAttribute('class', 'c-social');
    const linkedin = new Image();
          linkedin.src = lnkdinImg;
          linkedin.setAttribute('class', 'c-social');
    
  contacts.appendChild(call);
  contacts.appendChild(email);
  contacts.appendChild(fb);
  contacts.appendChild(insta);
  contacts.appendChild(twitter);
  contacts.appendChild(linkedin);
  
  a.appendChild(header);
  a.appendChild(about);
  a.appendChild(header2);
  a.appendChild(times);
  a.appendChild(contacts);
          
}

export default contact