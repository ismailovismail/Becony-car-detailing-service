const links=document.querySelectorAll('.list li a')

for (let liItems of links) {
    liItems.onclick=()=>{
        document.querySelector('.active').classList.remove('active')
        liItems.classList.add('active')
    }
}

let count=0

let timer=setInterval(counter,100)

function counter() {
    document.querySelector('.counter1 .count').innerHTML=(count++)+' +'
  
    if (count===16) {
        clearInterval(timer)
    }
    

}

let countCorp=0
let timerCorporate=setInterval(counterCorporate,100)
function counterCorporate() {
   let counter=document.querySelector('.counter2 .count')
   counter.innerHTML=(countCorp++)+' +'
   if (countCorp===24) {
    clearInterval(timerCorporate)
   }
}

let carCount=0
let carCountTimer=setInterval(carDetallingCounter,100)
function carDetallingCounter() {
    let counterCar=document.querySelector('.counter3 .count')
    counterCar.innerHTML=(carCount++)+' K'
    if (carCount===18) {
        clearInterval(carCountTimer)
    }
}

let serviceCount=0
let serviceTimer=setInterval(serviceCounter,100)
function serviceCounter() {
    let serviceCounter=document.querySelector('.counter4 .count')
    serviceCounter.innerHTML=(serviceCount++)+" +"
    if (serviceCount===41) {
        clearInterval(serviceTimer)       
    }
}


const carCards=[
    {source:'assets/img/carepair.jpg',title:'Express Exterior',text:'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',link:'VIEW DETAIL'},
    {source:'assets/img/carwash-station.jpg',title:'Auto Detailing',text:'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',link:'VIEW DETAIL'},
    {source:'assets/img/black-car-wash.jpg',title:'Full Service Wash',text:'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',link:'VIEW DETAIL'},
    {source:'assets/img/yellow-car.jpg',title:'Nano Ceramic Coating',text:'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',link:'VIEW DETAIL'},
    {source:'assets/img/carin-wash.jpg',title:'Cosmetic Repair',text:'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',link:'VIEW DETAIL'},
    {source:'assets/img/whitecar.jpg',title:'Paint Correction',text:'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',link:'VIEW DETAIL'}
]
cardsDisplay()
function cardsDisplay() {
    const row=document.querySelector('.service .sec-body .row')
    for (let index of carCards) {
        const li=`<div class="card p-0 col-12 col-sm-6 col-md-4" style="width: 23rem;">
        <img src="${index.source}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${index.title}</h5>
          <p class="card-text">${index.text}</p>
          <div class="link">  
          <a href="#">${index.link} <i class="bi bi-arrow-right-circle-fill"></i></a>
          <div class="line"></div>
          </div>
        </div>
      </div>`


      row.insertAdjacentHTML("beforeend",li)
    }
}

const btns=document.querySelectorAll('.vehicle-package .card-head button')

for (let butons of btns) {
    butons.onclick=()=>{
        document.querySelector('button.active').classList.remove('active') 
        butons.classList.add('active')
    }
}

const smallcarBtn=document.querySelector('.small-car')
smallcarBtn.onclick=()=>{
    smallcarBtn.classList.add('active')
    mediumBtn.classList.remove('active')
    smallSuvBtn.classList.remove('active')
    document.querySelector('.vehicle-package .card-text').innerText='Erat adipiscing aliquet commodo si morbi. Mauris porttitor scelerisque iaculis natoque dolor. Volutpat dictum malesuada sodales quam netus mollis. Gravida parturient leo condimentum ut ligula nulla taciti. Facilisi euismod molestie sociosqu tincidunt erat eu sodales. Id sagittis mattis cras accumsan metus molestie ac malesuada. Auctor facilisis amet volutpat et ultrices rhoncus. Bibendum enim condimentum ac maximus posuere quis malesuada.'
}

const mediumBtn=document.querySelector('.medium-car')

mediumBtn.onclick=()=>{
    mediumBtn.classList.add('active')
    smallcarBtn.classList.remove('active')
    smallSuvBtn.classList.remove('active')
    document.querySelector('.vehicle-package .card-text').innerText='Consectetuer fames ad diam etiam arcu duis finibus. Commodo odio gravida lobortis est ultricies nunc nec vestibulum. Nisi malesuada elementum consectetuer feugiat adipiscing. Ridiculus lacinia per dolor iaculis eros magnis penatibus praesent. Integer mauris maximus dis faucibus viverra egestas porta. Nisl vivamus lacinia hac egestas aliquam maecenas felis sem sapien. Volutpat pretium venenatis congue maecenas sit orci. Pulvinar in venenatis amet netus dapibus.'
}

const smallSuvBtn=document.querySelector('.small-suv')
smallSuvBtn.onclick=()=>{
    smallSuvBtn.classList.add('active')
    mediumBtn.classList.remove('active')
    smallcarBtn.classList.remove('active')
    document.querySelector('.vehicle-package .card-text').innerText='Orci cras at non libero laoreet tristique leo tempor pulvinar donec. Gravida auctor phasellus elementum pharetra ultricies diam scelerisque velit. Mattis cubilia curae lectus justo ullamcorper suscipit venenatis vitae. Mattis facilisi cras enim himenaeos litora. Ante donec nulla sapien eu orci condimentum fringilla in libero semper nullam. Tristique phasellus blandit ut curae convallis massa elit ornare per ante sed.'

}

const texts=[
    {title:'Attention To Detail',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'},
    {title:'Premium Car Care',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'},
    {title:'Professional Detailers',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'},
    {title:'Standardized Procedure',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'},
    {title:'Online Booking',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'},
    {title:'Great Result',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'}
]
displayText()
function displayText() {
    const row=document.querySelector('.polished .texts .row')

    for (let index of texts) {

        const text=` <div class="text col-12 col-sm-6 col-md-4 ">
        <div class="title-text">
            <h1><i class="bi bi-arrow-right-circle-fill text-warning"></i>  ${index.title}</h1>
        </div>
        <div class="text-body">
            <p>
                ${index.text}
            </p>
        </div>
        </div>`
        
        row.insertAdjacentHTML('beforeend',text)
    }
}

const latestArCards=[
{source:'assets/img/beauty-washing.jpg',text:'RESTORATION',bodytitle:"Restoring Gloss Plastic Trim",bodytext:"In venenatis semper hendrerit ligula risus condimentum bibendum. Senectus vehicula augue viverra nascetur elit arcu",bodyfooter:'August 10, 2022  <span>//</span>  No Comments'},
{source:'assets/img/redcar.jpg',text:'AUTO DETAILING',bodytitle:'Detailing Essentials To Get You Back On The Road After Winter',bodytext:'In venenatis semper hendrerit ligula risus condimentum bibendum. Senectus vehicula augue viverra nascetur elit arcu',bodyfooter:'August 10, 2022  <span>//</span>  No Comments'},
{source:'assets/img/bus.jpg',text:'CAR POLISH',bodytitle:'This Isn’t Just Any Work Van',bodytext:'In venenatis semper hendrerit ligula risus condimentum bibendum. Senectus vehicula augue viverra nascetur elit arcu',bodyfooter:'August 10, 2022  <span>//</span>  No Comments'},
{source:'assets/img/washing-man.jpg',text:'CAR WASH',bodytitle:'No Wet Seat',bodytext:'In venenatis semper hendrerit ligula risus condimentum bibendum. Senectus vehicula augue viverra nascetur elit arcu',bodyfooter:'August 10, 2022  <span>//</span>  No Comments'}
]
latestArtCardsDisplay()
function latestArtCardsDisplay() {
    const row=document.querySelector('.latest-article .body .row')

    for (let index of latestArCards) {
        
        const cards=` <div class="card col-12 col-sm-6 col-md-3 p-0" style="width:18rem;">
        <div class="image">
            <div class="text bg-warning">
                ${index.text}
            </div>
            <img src="${index.source}"  alt="" class="card-img-top">
        </div>
        <div class="card-body p-3">
        <h1 class="card-title"><a href="#">${index.bodytitle}</a></h1>
        <p class="card-text"> ${index.bodytext}</p>
        </div>
         <div class="card-footer">${index.bodyfooter}</div>
      </div>
   </div>`

   row.insertAdjacentHTML('beforeend',cards)
    }

}

$(document).ready(function() {
    $("#owl-example").owlCarousel({
        margin:10,
        loop:true,
        responsiveClass:true,
        dots:true,
        dotsEach:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        
        responsive:{
            1350:{
                items:2,
                
              
                 
            },
        
        }
    })
  })
