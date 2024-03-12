// Bus seat Value
function totalSeatValue(){
    const totalSeat = document.getElementById('seat-40');
    const convart = parseInt(totalSeat.innerText);
    const update = convart - 1;

    totalSeat.innerText = update;
}

// selected Bus seat value 
function selectedSeat(){
    const totalSeat = document.getElementById('seat-value');
    const convart = parseInt(totalSeat.innerText);
    const update = convart + 1;

    totalSeat.innerText = update; 
}


// Append selected seat details  
function append(seatNumber){
     const h1 = document.createElement('h1');
     h1.innerText = seatNumber;

     const h2 = document.createElement('h2');
     h2.innerText = 'Economy';
 
     const h3 = document.createElement('h3');
     h3.innerText = 550;
 
     const empty = document.getElementById('space');
     const div = document.createElement('div');
     div.className = 'flex justify-between';

     div.appendChild(h1);
     div.appendChild(h2);
     div.appendChild(h3);

     empty.appendChild(div);
} 
     
// total seat Price 
function total(){
    const total = document.getElementById('totalPrices');
    total.innerText = parseFloat(total.innerText) + 550;
}

// next button anable 
function buttonDisable(){
    const money = 550;
    const phoneNumber = document.getElementById('phoneNumber');
    phoneNumber.addEventListener('keyup', function(event){
        const inputValue = event.target.value;
        if(money === 550 && inputValue ){
            document.getElementById('next').removeAttribute('disabled');
        }
    })
}

// coupon input 
function coupon(){
    const input = document.getElementById('coupon');
    const inputValue = input.value.toLowerCase();
    
    if(inputValue === 'new15'){
        const totalValue = document.getElementById('totalPrices');
        const value = parseInt(totalValue.innerText);
        
        // 15%
        const fifteen = value * (15/100);
        const grandPrice = value - fifteen;

        const grand = document.getElementById('grandPrice');
        grand.innerText = grandPrice;
    }
    else if(inputValue === 'couple 20'){
        const totalValue = document.getElementById('totalPrices');
        const value = parseInt(totalValue.innerText);

        // 20% 
        const tweenty = value * (20/100);
        const grandPrice = value - tweenty;
        const grand = document.getElementById('grandPrice');
        grand.innerText = grandPrice;
    }
}
