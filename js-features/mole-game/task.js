 
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let getHole = index => document.getElementById(`hole${index}`);
 for (let index = 1; index <= 9; index++) {
   getHole(index).onclick = () => {
     if (Number(lost.textContent) >= 5) { alert ('вы проиграли'); window.location.reload()};
     if (Number(dead.textContent) >= 10) {alert ('вы выиграли');window.location.reload()};
     if (getHole(index).className.includes( 'hole hole_has-mole' )) {
        dead.textContent = Number(dead.textContent) + 1;   
    }
     else {
        lost.textContent = Number(lost.textContent) + 1;  
     }
   }
}

   


    





   

