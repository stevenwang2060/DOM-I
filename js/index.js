const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll('a');

navLinks.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index+1}`];
  link.style.color = 'blue';
})

let mainImg = document.querySelector('#cta-img');
mainImg.setAttribute('src', siteContent['cta']['img-src'])

let header = document.querySelector("h1");
    header.textContent = "  DOM \r\n Is \r\n Awesome";
    header.setAttribute('style', 'white-space: pre;');

let button = document.querySelector('.cta-text>button');
button.textContent = siteContent['cta']['button'];

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let headers = document.querySelectorAll('h4');
headers[0].textContent = siteContent['main-content']['features-h4'];
headers[1].textContent = siteContent['main-content']['about-h4'];
headers[2].textContent = siteContent['main-content']['services-h4'];
headers[3].textContent = siteContent['main-content']['product-h4'];
headers[4].textContent = siteContent['main-content']['vision-h4'];
headers[5].textContent = siteContent['contact']['contact-h4'];

let paragraphs = document.querySelectorAll('p');
paragraphs[0].textContent = siteContent['main-content']['features-content']; 
paragraphs[1].textContent = siteContent['main-content']['about-content']; 
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];
paragraphs[5].textContent = siteContent['contact']['address'];
paragraphs[6].textContent = siteContent['contact']['phone'];
paragraphs[7].textContent = siteContent['contact']['email'];
paragraphs[8].textContent = siteContent['footer']['copyright'];

let newNav1 = document.createElement('a');
let newNav2 = document.createElement('a');

let parentElement = document.querySelector('nav');

parentElement.appendChild(newNav1);
parentElement.prepend(newNav2);

let newButton = document.createElement('button');

newButton.textContent = "Stretch Goal Button";
newButton.style.color = 'white';
newButton.style.backgroundColor = "blue";
newButton.style.border = '2px outset grey';
newButton.style.borderRadius = '25px';
newButton.style.margin = '5px';

let btnParent = document.querySelector('body');

btnParent.prepend(newButton);

newButton.addEventListener('click', changeButton);

function changeButton() {
  newButton.style.color = 'blue';
  newButton.style.backgroundColor = 'white';
  header.style.color = 'darkblue';
  button.style.color = 'white';
  button.style.backgroundColor = 'blue';
  button.style.borderRadius = '25px';
}