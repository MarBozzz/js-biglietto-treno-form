
const prezzoAlKm = 0.21;
const input1 = document.getElementById('input-name-surname');
/*const kmDaPercorrere = prompt ('Quanti Kilometri percorrerai?');*/
const input2 = document.getElementById('km-da-percorrere').value;
let input3 = document.getElementById('eta-dichiarata').value;
let scontoApplicabile;
let prezzoTotaleViaggio;
const btnInput = document.getElementById('btn-input');
btnInput.addEventListener('click', function(){
  const name = document.getElementById('input-name-surname').value;
  document.getElementById('output-name').innerHTML = name;
  if (input3 === 'Under18') {
    scontoApplicabile = 0.2;
  } else if (input3 === "Over65") {
    scontoApplicabile = 0.4;
  } else {
    scontoApplicabile = 0;
  }

  prezzoTotaleViaggio = (prezzoAlKm * input2 * (1 - scontoApplicabile)).toFixed(2);
  
  document.getElementById('output-prezzo').innerHTML = prezzoTotaleViaggio;
});

//resetto il value dell'input
const btnInputReset = document.getElementById('btn-input-2');
btnInputReset.addEventListener('click', function(){
document.getElementById('input-name-surname').value = '';
document.getElementById('km-da-percorrere').value = '';
document.getElementById('eta-dichiarata').value = '';
});
