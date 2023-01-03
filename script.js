//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

function encriptar() {
	var texto = document.getElementById("textoInput").value.toLowerCase();


	var txtcifrado = texto.replace(/e/igm,"enter");
	var txtcifrado = txtcifrado.replace(/o/igm,"ober");
	var txtcifrado = txtcifrado.replace(/i/igm,"imes");
	var txtcifrado = txtcifrado.replace(/a/igm,"ai");
	var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

	document.getElementById("muñeco").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("copiar").style.display = "show";
	document.getElementById("textoFinal").innerHTML = txtcifrado;
	document.getElementById("textoInput").innerHTML = " ";
	document.getElementById("copiar").style.display = "inherit";
}
function desencriptar() {
	var texto = document.getElementById("textoInput").value.toLowerCase();
	var txtcifrado = texto.replace(/enter/igm,"e");
	var txtcifrado = txtcifrado.replace(/ober/igm,"o");
	var txtcifrado = txtcifrado.replace(/imes/igm,"i");
	var txtcifrado = txtcifrado.replace(/ai/igm,"a");
	var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

	document.getElementById("muñeco").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("copiar").style.display = "show";
	document.getElementById("textoFinal").innerHTML = txtcifrado;
	document.getElementById("textoInput").innerHTML = " ";
	document.getElementById("copiar").style.display = "inherit";
}
function copiar() {
	var contenido = document.querySelector("#textoFinal");
	contenido.select();
	document.execCommand('copy');
//	alert("Copied!");
}