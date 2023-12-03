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
        about.innerHTML = 'This is a text about us and this website';
        
  const header2 = document.createElement('span');
        header2.setAttribute('class', 'tabHead');
        header2.textContent = "Contact";
        
  const times = document.createElement('div');
        times.setAttribute('class', 'times');
        
    for(let t of timeslots){
      
      const timeslot = document.createElement('div');
            timeslot.setAttribute('class', 't-slot');
      
        const day = document.createElement('span');
        const time = document.createElement('span')
        
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