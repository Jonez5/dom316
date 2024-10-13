// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

//  PART 2

let SubMenuEl = document.querySelector("#sub-menu")
SubMenuEl.style.height = "100%"
SubMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
SubMenuEl.classList.add("flex-around")
SubMenuEl.style.position = "absolute"
SubMenuEl.style.top = "0"


let topMenuLinks = document.querySelectorAll("a")
topMenuEl.addEventListener("click", (event) =>{
  event.preventDefault()
  if(event.target.tagName !== "A") {
    return
  }
  function buildSubmenu(arrr) {
    while (SubMenuEl.firstChild) {
      SubMenuEl.removeChild(firstChild)
    }
    for (let n = 0; n < arrr.length; n++) {
      let a = document.createElement("a")
      a.setAttribute("href", arrr[n].href)
      a.textContent = arrr[n].text
      SubMenuEl.appendChild(a)
    }
  }
  if(!event.target.classList.contains("active")){
    // console.log(topMenuLinks[0])
    if(event.target !== topMenuLinks[0]) {
      SubMenuEl.style.top = "100%"
      for (let n = 1; n < menuLinks.length; n++) {
        if (menuLinks[n].text != event.target.innerHTML){
          continue
        } else {
          let subArr = menuLinks[n].subLinks
          console.log(subArr)
          buildSubmenu(subArr)
          break
        }
      }
      
    } else {SubMenuEl.style.top = "0"}
  } else {
    SubMenuEl.style.top = "0"
  }
  // console.log(event.target)
    event.target.classList.toggle("active")
    
    for(let n = 0; n < topMenuLinks.length; n++) {
      // console.log(event.target)
      // console.log(topMenuLinks[n])
      if(event.target == topMenuLinks[n]) {
        continue
      } else {topMenuLinks[n].classList.remove("active")}
    }
    
  })

  SubMenuEl.addEventListener("click", (event) => {
    event.preventDefault()
    if(!event.target.tagName == "A") {
      return
    }
    console.log(event.target)
  })

  


  
 