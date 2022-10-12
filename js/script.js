
const prezzoAlKm = 0.21;
const input1 = document.getElementById('input-name-surname');
/*const kmDaPercorrere = prompt ('Quanti Kilometri percorrerai?');*/
const input2 = document.getElementById('km-da-percorrere');
const input3 = document.getElementById('eta-dichiarata');
/*= prompt ('Quanti anni hai?');*/
console.log('input1',input1);
let scontoApplicabile;
let prezzoTotaleViaggio;
let richiestaABuonFine;


const btnInput = document.getElementById('btn-input');
btnInput.addEventListener('click', function(){
  const name = document.getElementById('input-name-surname').value;
  document.getElementById('output-name').innerHTML = name;
  if (input3 = "Under 18" ) {
    scontoApplicabile = 0.2;
  } else if (input3 = "Over 65") {
    scontoApplicabile = 0.4;
  } else {
    scontoApplicabile = 0;
  }

  prezzoTotaleViaggio = (prezzoAlKm * input2 * (1 - scontoApplicabile)).toFixed(2);
  document.getElementById('output-prezzo').innerHTML = prezzoTotaleViaggio;
  //resetto i lvalue dell'input
  /*document.getElementById('input2').value = '';*/
});

