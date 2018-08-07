/*

	Rikaisan-universal
	Copyright (C) 2018 eyeS Code
	http://code.google.com/p/rikaisan-universal

	---

	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation; either version 2 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

	---

	Please do not change or remove any of the copyrights or links to web pages
	when modifying any of the files. - Jon

*/

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('language').addEventListener("change", lingua);  
});
function lingua(){
	var e = document.getElementById("language");
	var itemSelecionado = e.options[e.selectedIndex].value;
	if(itemSelecionado == '1'){
        document.getElementById('ling').innerHTML='Selecione seu idioma:';
        document.getElementById('language').options[0].innerHTML='Inglês';
		document.getElementById('language').options[1].innerHTML='Português';
		document.getElementById('language').options[2].innerHTML='Espanhol';
		document.getElementById('popupcolor').options[0].innerHTML="Azul";
		document.getElementById('popupcolor').options[1].innerHTML="Azul claro";
		document.getElementById('popupcolor').options[2].innerHTML="Preto";
		document.getElementById('popupcolor').options[3].innerHTML="Amarelo";
		document.getElementById('general').innerHTML="Geral";
		document.getElementById('popupclr').innerHTML="Cor do Popup";
		document.getElementById('dpl').innerHTML="Localização Default do popup";
		document.getElementById('popupLocation').options[1].innerHTML="Canto superior esquerdo";
		document.getElementById('popupLocation').options[2].innerHTML="Canto inferior direito";
		document.getElementById('rlt').innerHTML="Realçar Texto";
		document.getElementById('rtb').innerHTML="Realce o texto dentro de caixas de texto";
		document.getElementById('eds').innerHTML="Ocultar definições e mostrar apenas leitura";
		document.getElementById('smh').innerHTML="Mostrar mini ajuda";
		document.getElementById('spwd').innerHTML="Mostrar pop-up com atraso";
		document.getElementById('milis').innerHTML="milissegundos";
		document.getElementById('keybor').innerHTML="Teclado";
		document.getElementById('mpo').innerHTML= "Mostrar pop-up apenas na tecla pressionada";
		document.getElementById('nu').innerHTML="Não usado";
		document.getElementById('kwp').innerHTML="Teclas quando o pop-up é visível";
		document.getElementById('apl').innerHTML="Localização de popup alternativo";
		document.getElementById('mpld').innerHTML="Mover o local do popup para baixo";
		document.getElementById('ctc').innerHTML="Copiar para área de transferência";
		document.getElementById('hsd').innerHTML="Ocultar / mostrar definições";
		document.getElementById('sdd').innerHTML="Trocar dicionários";
		document.getElementById('ppc').innerHTML="Caractere anterior";
		document.getElementById('ncc').innerHTML="Próximo caractere";
		document.getElementById('nww').innerHTML="Próxima palavra";
		document.getElementById('dtk').innerHTML="Desativar essas teclas";
		document.getElementById('kdic').innerHTML="Dicionário de Kanji"
		document.getElementById('dispi').innerHTML="Informação exibida:";
		document.getElementById('kcc').innerHTML="Componentes Kanji";
		document.getElementById('ctcc').innerHTML="Copiar para área de transferência";
		document.getElementById('ledg').innerHTML="Final da linha:";
		document.getElementById('fisp').innerHTML="Separador de campo:";
		document.getElementById('copySeparator').options[1].innerHTML="Vírgula";
		document.getElementById('copySeparator').options[2].innerHTML="Espaço";
		document.getElementById('mee').innerHTML="Número máximo de entradas:";
        document.getElementById('submit').value="Salvar";
	}else if(itemSelecionado == '0'){
        document.getElementById('ling').innerHTML='Select your language:';
        document.getElementById('language').options[0].innerHTML='English';
		document.getElementById('language').options[1].innerHTML='Portuguese';
		document.getElementById('language').options[1].innerHTML='Spanish';
		document.getElementById('popupcolor').options[0].innerHTML="Blue";
		document.getElementById('popupcolor').options[1].innerHTML="Light Blue";
		document.getElementById('popupcolor').options[2].innerHTML="Black";
		document.getElementById('popupcolor').options[3].innerHTML="Yellow";
		document.getElementById('general').innerHTML="General";
		document.getElementById('popupclr').innerHTML="Popup color";
		document.getElementById('dpl').innerHTML="Default popup location";
		document.getElementById('popupLocation').options[1].innerHTML="Top Left";
		document.getElementById('popupLocation').options[2].innerHTML="Bottom Right";
		document.getElementById('rlt').innerHTML="Highlight text";
		document.getElementById('rtb').innerHTML="Highlight text inside of text boxes";
		document.getElementById('eds').innerHTML="Hide definitions and show only reading";
		document.getElementById('smh').innerHTML="Show mini help";
		document.getElementById('spwd').innerHTML="Show popup with delay";
		document.getElementById('milis').innerHTML="milliseonds";
		document.getElementById('keybor').innerHTML="Keyboard";
		document.getElementById('mpo').innerHTML= "Show popup only on pressed key";
		document.getElementById('nu').innerHTML="Not used";
		document.getElementById('kwp').innerHTML="Keys when popup is visible";
		document.getElementById('apl').innerHTML="Alternate popup location";
		document.getElementById('mpld').innerHTML="Move popup location down";
		document.getElementById('ctc').innerHTML="Copy to clipboard";
		document.getElementById('hsd').innerHTML="Hide/show definitions";
		document.getElementById('sdd').innerHTML="Switch dictionaries";
		document.getElementById('ppc').innerHTML="Previous character";
		document.getElementById('ncc').innerHTML="Next character";
		document.getElementById('nww').innerHTML="Next word";
		document.getElementById('dtk').innerHTML="Disable these keys";
		document.getElementById('kdic').innerHTML="Kanji Dictionary"
		document.getElementById('dispi').innerHTML="Displayed information:";
		document.getElementById('kcc').innerHTML="Kanji Components";
		document.getElementById('ctcc').innerHTML="Copy to Clipboard";
		document.getElementById('ledg').innerHTML="Line ending:";
		document.getElementById('fisp').innerHTML="Field separtor:";
		document.getElementById('copySeparator').options[1].innerHTML="Common";
		document.getElementById('copySeparator').options[2].innerHTML="Space";
		document.getElementById('mee').innerHTML="Maximun entries:";
        document.getElementById('submit').value="Save";    
    }else{
		document.getElementById('ling'). innerHTML = 'Seleccione su idioma:';
		document.getElementById('language').options[0].innerHTML ='Inglés';
		document.getElementById('language').options[1].innerHTML ="Portuguesa";
		document.getElementById('language').options[2].innerHTML = "Español";
		document.getElementById('popupcolor').options[0].innerHTML ="Azul.";
		document.getElementById('popupcolor').options[1].innerHTML = "Azul claro";
		document.getElementById('popupcolor').options[2].innerHTML = "Negro";
		document.getElementById('popupcolor').options[3].innerHTML = "Amarillo.";
		document.getElementById('general').innerHTML = "General";
		document.getElementById('popupclr').innerHTML = "Color del popup";
		document.getElementById('dpl').innerHTML = "Ubicación predeterminada del popup";
		document.getElementById('popupLocation').options[1].innerHTML = "Canto superior izquierdo";
		document.getElementById('popupLocation'). options[2].innerHTML = "Canto inferior derecho";
		document.getElementById('rlt').innerHTML = "Resaltar texto";
		document.getElementById('rtb').innerHTML = "Resalte el texto dentro de los cuadros de texto";
		document.getElementById('eds').innerHTML = "Ocultar definiciones y mostrar sólo lectura";
		document.getElementById('smh').innerHTML = "Mostrar mini ayuda";
		document.getElementById('spwd').innerHTML = "Mostrar pop-up con retraso";
		document.getElementById('milis').innerHTML = "milisegundos";
		document.getElementById('keybor').innerHTML = "teclado.";
		document.getElementById('mpo').innerHTML = "Mostrar pop-up sólo en la tecla presionada";
		document.getElementById('nu').innerHTML = "No utilizado";
		document.getElementById('kwp').innerHTML = "Teclas cuando el pop-up es visible";
		document.getElementById('apl').innerHTML = "Ubicación de popup alternativo";
		document.getElementById('mpld').innerHTML = "Mover la ubicación del popup hacia abajo";
		document.getElementById('ctc').innerHTML = "Copiar al portapapeles";
		document.getElementById('hsd').innerHTML = "Ocultar / mostrar definiciones";
		document.getElementById('sdd').innerHTML = "Cambiar diccionarios";
		document.getElementById('ppc').innerHTML = "Carácter anterior";
		document.getElementById('ncc').innerHTML = "Siguiente carácter";
		document.getElementById('nww').innerHTML = "Siguiente palabra";
		document.getElementById('dtk').innerHTML = "Desactivar estas teclas";
		document.getElementById('kdic').innerHTML = "Diccionario de Kanji"
		document.getElementById('dispi').innerHTML = "Información mostrada:";
		document.getElementById('kcc').innerHTML = "Componentes Kanji";
		document.getElementById('ctcc').innerHTML = "Copiar al portapapeles";
		document.getElementById('ledg').innerHTML = "Final de línea:";
		document.getElementById('fisp').innerHTML = "Separador de campo:";
		document.getElementById('copySeparator').options[1].innerHTML = "coma.";
		document.getElementById('copySeparator').options[2].innerHTML ="espacio";
		document.getElementById('mee').innerHTML = "Número máximo de entradas:";
		document.getElementById('submit').value = "Guardar";		
	}
}