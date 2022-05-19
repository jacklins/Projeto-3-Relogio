function clock () { 

    let display = document.querySelector('.display');
  
    
    let now = new Date();
    
    let hours = correctClock(now.getHours()) + " :" + correctClock(now.getMinutes()) + " :" + correctClock(now.getSeconds()) + ":" + correctClock(now.getMilliseconds());

    
    
    display.innerText = hours;
   


setInterval(clock, 1); // como setinteval recebe como parametro outra função, todo o código acima deve ser encapsulado como uma function. O outro parametro é o tempo de atualização

clock()

function correctClock (num) {
    if ( num <10) {
        num = '0' + num;
    }
    return num;
}
}