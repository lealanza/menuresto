const getValueInput = () =>{
  let inputValue ="Su Pedido contiene: " + document.getElementById("domTipoMedallon").value + ", " + document.getElementById("domTipoPan").value + ", " + document.getElementById("domTipoTopping").value+ ", " + document.getElementById("domTipoAdhereso").value+ ", " + document.getElementById("domTipoBebida").value + ", " +document.getElementById("domAmpliaCombo").value
  document.getElementById("valueInput").innerHTML = inputValue; 
}