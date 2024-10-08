// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];



let mainEl = document.querySelector("main")
mainEl.style.backgroundColor =  "#4a4e4d";
 let header = document.createElement('h1')
 header.textContent = 'DOM Manipiulation';
 mainEl.append(header)
 mainEl.classList.add('flex-ctr')


 let topMenuEl = document.getElementById('top-menu')
 topMenuEl.style.height = '100%';
 topMenuEl.style.backgroundColor = "#0e9aa7";
 topMenuEl.classList.add('flex-around')


 menuLinks.forEach((link) =>{
    let make = document.createElement('a')
    make.setAttribute('href', link.href)
    make.textContent = link.text
    topMenuEl.append(make)
 }) 

 