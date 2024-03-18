
const ticBtn= document.getElementById('ticBtn');
const ticketSection= document.getElementById('ticket-section');
ticBtn.addEventListener('click', function() {
  // Scroll to the ticket section
  ticketSection.scrollIntoView({ behavior: 'smooth' });
});

let count = 0;

let totalSeat = 40;
const allbtns = document.getElementsByClassName('seat');
for (const allbtn of allbtns) {

  allbtn.addEventListener('click', function (event) {

    // Condition for seat cart update 
    if (count >= 4) {
      alert("Your Limit is Over");
      return;
    }
    count++;
    // inner value determine 
    const seatName = event.target.parentNode.childNodes[0].innerText;
    const seatRent = getConvertedValue('seat_rent');
    const seatClass = "Economy";
    // dynamic div creation 
    const dynamicDivContainer = document.getElementById('dynamic-div-container');
    const div = document.createElement('div');
    div.classList.add('seat_style');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.innerText = seatName;
    p2.innerText = seatClass;
    p3.innerText = seatRent;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    dynamicDivContainer.appendChild(div);

    // update of cart 

    const cartsum = updateOfcard('card-total');
    document.getElementById('card-total').innerText = cartsum;

    // update of total price 
    const total = updateOfTotal('total-sum');
    document.getElementById('total-sum').innerText = total;
    document.getElementById('grand-sum').innerText = total;

    //  upadate of available seat 
    const updatedSeat = updateOfSeat('avail_seat');
    document.getElementById('avail_seat').innerText = updatedSeat;
  
    allbtn.disabled = true;
    allbtn.style.backgroundColor = '#00ff00';
  
  }
  )
}



// function part 
function getConvertedValue(id) {
  const innerValue = parseInt(document.getElementById(id).innerText);
  return innerValue;
}

function updateOfcard(id) {
  const cardvalue = parseInt(document.getElementById(id).innerText);
  const sum = cardvalue + 1;
  return sum;
}

function updateOfTotal(id) {
  const cardvalue = parseInt(document.getElementById(id).innerText);
  const total = cardvalue + 550;
  return total;

}
function updateOfSeat(id) {
  const numOfSeat = parseInt(document.getElementById(id).innerText);
  const updatedSeat = numOfSeat - 1;
  return updatedSeat;
}
// Grand total for discount 
function updateGrandTotal() {
  const cupponField = document.getElementById('cuppon-field');
  const cupponValue = cupponField.value;
  const grandTotal = document.getElementById('total-sum').innerText;
  
if (cupponValue !== 'NEW15' && cupponValue !== 'couple20') {
  alert('Enter a Valid Cuppon Code');
} else { if (cupponValue === 'NEW15') {
  document.getElementById('grand-sum').innerText = grandTotal * 0.85;
} else {
  if (cupponValue === 'couple20')
  document.getElementById('grand-sum').innerText = grandTotal * 0.80;
}
  } 
}