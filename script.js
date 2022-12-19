

  document.getElementById("cardnumber").addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
}); /* este eventlistener hace que mediante el method .replace cada 4 digitos /(.{4})/g  me agruegue un espacio*/



  document.querySelectorAll("input").forEach(input => { 
    input.addEventListener('invalid', () => {
      let pes = document.querySelectorAll("input");
      let shows = document.querySelectorAll("p");
        if (pes = document.querySelectorAll("input").value){ /*lo pongo asi para indicar si es valido el input*/
          for (let x = 0; x < shows.length; x++) /* aqui debo loopear por que para varios elementos (query all) debo dar una solucion a cada uno*/
          shows[x].style.display = 'none';
        } else {
          for (let x = 0; x < shows.length; x++)
          shows[x].style.display = '';
        }
    }); /* con este foreach que en capsula un eventlistener "invalid" hago que cada elemento del query selector all me de un rresultado para varios elementos, en este caso las tag "p" */
});  




 document.getElementById("name").addEventListener('change', function() {
  document.getElementById("jane").innerText = document.getElementById("name").value; /* debo pasar ese text a mayusculas pero eso lo hago en css con el selector*/
 })  /* con este event listener mando el texto del input al <p> de la img tarjeta*/

 document.getElementById("cardnumber").addEventListener('change', function() {
  document.getElementById("zero").innerText = document.getElementById("cardnumber").value; 
 })  

 document.getElementById("date").addEventListener('change', function() {
  document.getElementById("mon").innerText = document.getElementById("date").value;
 })  

 document.getElementById("year").addEventListener('change', function() {
  document.getElementById("yea").innerText = document.getElementById("year").value; 
 })  

 document.getElementById("cvc").addEventListener('change', function() {
  document.getElementById("cv").innerText = document.getElementById("cvc").value; 
 })  


function thanks() {
  document.getElementById("form").style.display = "none"
  document.getElementById("than").style.display = "block"
} /* coloco esta function en el onsubmit para que muestre el div thanks cuando sea exitoso el submmitt*/

document.getElementById("than").addEventListener('click', function() {
  window.location.reload()
}) /* con este click event listener la pagina se me vuelve a cargar para introducir otra credit card data*/