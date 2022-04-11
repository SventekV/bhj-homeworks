const main = document.querySelector('#modal_main');
const showSuccess = document.querySelector('.show-success');
const sd = document.querySelector('.gh')
const mainSuccess = document.querySelector('#modal_success');
const duj = document.querySelector('#modal_suc')
const closeButtons = document.querySelectorAll('.modal__close');




main.classList.add('modal_active');


// этот подход не работает , почему не пойму.  не понимаю что мешает, Array.from или неправильное использование цикла?
//let arr = Array.from(closeButtons);
//for (let i=0; i <= arr.length; i++) {
  //  arr[i].onclick = () => {
    //    arr[i].closest('.modal').classList.remove('modal_active');
    //};
//}   


for (let btn of closeButtons) {
    btn.onclick = () => {
        btn.closest('.modal').classList.remove('modal_active');
    };
};

// можно ли сначала найти элемент а потом применить обработчик события? 
//или есть только вариант прохождения по циклу?
//немного не понимаю принцип применения обработчиков в цикле
//active.onclick = () => {active.classList.remove('.modal_active')};

showSuccess.onclick = () => {
    main.classList.remove('modal_active');
    mainSuccess.classList.add('modal_active')
};
sd.onclick = () => {
        mainSuccess.classList.remove('modal_active');
        duj.classList.add('modal_active')
    };

   // for (let btn of closeButtons) {
     //   btn.onclick = () => {
       //     btn.closest('.modal').classList.remove('modal_active');
        //};
    //} 
    // почему при перестановке цикла в конец кода, программа не работает?

    // еще просьба объяснить как работает выключение, всплывающего меню при нажатии на другое всплывающее меню.
    