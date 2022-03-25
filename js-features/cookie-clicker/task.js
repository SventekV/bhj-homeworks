const img = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter')
img.onclick = () => {
    counter.textContent = Number(counter.textContent) + 10;
    img.width += 20;
    img.heigth += 20; 
    setTimeout(() => {img.width -= 20;
        img.heigth -= 20;}, 50);
}
