const modalOverlayEl = document.querySelector('.overlay');
const modalContEl = document.querySelector('.modal_container');
const modalBtnEl = document.querySelector('.modal_btn');
const closeBtnEl = document.querySelector('.close_modal_btn');
const scheduleBtnEl = document.querySelector('.schedule-btn');


scheduleBtnEl.addEventListener('click', function(){
    modalOverlayEl.classList.remove('modal_hidden');
    modalContEl.classList.remove('modal_hidden');
});

modalOverlayEl.addEventListener('click', function(){
    modalOverlayEl.classList.add('modal_hidden');
    modalContEl.classList.add('modal_hidden');
});


