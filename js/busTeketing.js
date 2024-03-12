function bookingHandler(seatNumber, price){
     const seatId = document.getElementById(seatNumber);
     seatId.classList.add('bg-[#1dd100]');
     const next = document.getElementById('phoneNumber');
     const inputValue = next.value;
     
      if(inputValue){
          document.getElementById('next').removeAttribute('disabled');
      }
     

     // append or add 
     append(seatNumber);
     totalSeatValue()
     selectedSeat()
     total()
     buttonDisable()
     // coupon()
}

