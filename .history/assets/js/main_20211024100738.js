const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnTickets = $$('.js-buy-ticket');
const modal = $('.modal');
const modalContainer = $('.modal-container');
const modalClose = $('.modal-close');

for (const btnTicket of btnTickets) {
    btnTicket.addEventListener('click',function(e){
        modal.classList.add('open');
    })
}
modalClose.addEventListener('click',function(e){
    modal.classList.remove('open');
})

// Phải xác định sẽ không nổi bọt tới đâu
modal.addEventListener('click',function(e){
    modal.classList.remove('open');
})
modalContainer.addEventListener('click',function(e){
    e.stopPropagation();
})

// MENU MOBILE
var header = $('#header');
var mobileMenu = $('.header-icon-list');
var headerHeight = header.clientHeight;

mobileMenu.addEventListener('click',function(e){
    var isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
})

//Tự động đóng khi chọn MENU
var menuItems = $$('#nav li a[href*="#"]');
for()
