const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnTickets = $$('.js-buy-ticket');
const modal = $('.modal');
const modalClóe = $('.modal-close');

for (const btnTicket of btnTickets) {
    btnTicket.addEventListener('click',function(e){
        modal.classList.add('open');
    })
}