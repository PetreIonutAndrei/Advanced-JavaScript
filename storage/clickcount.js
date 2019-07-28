
if(localStorage.getItem('count') == null) {
  localStorage.setItem('count', 0);
}

function addClick() {
  let  count = localStorage.getItem('count') //1.let e echivalent cu var in js6; 2.count = itemul
  count++;
  localStorage.setItem('count', count); //count ia valuaraea variabilei count de mai sus
  updateButton();
}

function updateButton() {
  let value = 'Clicked ' + localStorage.getItem('count') + ' times';
  document.getElementById('btn').setAttribute('value', value);
}

updateButton();
