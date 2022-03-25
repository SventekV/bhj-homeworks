let timer = document.getElementById('timer');
let c = setInterval(() => {
    timer.textContent = Number(timer.textContent) - 1;
     if (timer.textContent == 0) {
         alert('Вы победили в конкурсе'); clearInterval(c)}
    }, 1000);





