root = document.getElementsByTagName('body')[0];
$('#dark').click(function() {
  root.style.setProperty('--color','white');
  root.style.setProperty('--bgcolor','black');  //modul in care setam o prop pe un element
});
$('#blue').click(function() {
  root.style.setProperty('--color','black');
  root.style.setProperty('--bgcolor','lightblue');  //modul in care setam o prop pe un element
});
$('#light').click(function() {
  root.style.setProperty('--color','black');
  root.style.setProperty('--bgcolor','white');  //modul in care setam o prop pe un element
});
