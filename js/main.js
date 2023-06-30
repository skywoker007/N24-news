const elModal = document.querySelector('.modal');
const elModalClose = elModal.querySelector('.js-modal-close');
if (elModalClose){
    elModalClose.addEventListener('click', function () {
        elModal.classList.remove('modal-open');
    });

}
// 30 soniyadan keyin modalni och setimout 2 qismni oladi

setTimeout(function(){
    elModal.classList.add('modal-open');

}, 30000);