localStorage.setItem('name','John');

var name = localStorage.getItem('name');
document.getElementById('container').innerHTML = 'Hello ' + name + '!';
