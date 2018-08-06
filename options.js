/*

	Rikaisan-universal
	Copyright (C) 2018 Carlos Daniel
	http://code.google.com/p/rikaisan-universal

	---

	Originally based on Rikaikun
	by Erek Speed
	http://code.google.com/p/rikaikun/
	
	---

	Originally based on Rikaichan 1.07
	by Jonathan Zarate
	http://www.polarcloud.com/

	---

	Originally based on RikaiXUL 0.4 by Todd Rudick
	http://www.rikai.com/
	http://rikaixul.mozdev.org/

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

function fillVals() {
	var store = localStorage['popupcolor'];
	for(var i=0; i < document.optform.popupcolor.length; ++i) {
		if(document.optform.popupcolor[i].value == store) {
			document.optform.popupcolor[i].selected = true;
			break;
		}
	}

	document.optform.popupLocation.selectedIndex = localStorage['popupLocation'];
	document.optform.language.selectedIndex = localStorage['language'];
	if (document.optform.language.selectedIndex == '1'){
		document.getElementById('language').options[0].innerHTML = 'Inglês';
		document.getElementById('language').options[1].innerHTML = 'Português';
		document.getElementById('popupcolor').options[0].innerHTML="Azul";
		document.getElementById('popupcolor').options[1].innerHTML="Azul claro";
		document.getElementById('popupcolor').options[2].innerHTML="Preto";
		document.getElementById('popupcolor').options[3].innerHTML="Amarelo";
		document.getElementById('popupLocation').options[1].innerHTML="Canto superior esquerdo";
		document.getElementById('popupLocation').options[2].innerHTML="Canto inferior direito";				
	}
	if (localStorage['defi'] == '1'){
		document.getElementById('ling').innerHTML = localStorage['ling'];
		document.getElementById('general').innerHTML = localStorage['general'] ;
		document.getElementById('popupclr').innerHTML = localStorage['popuclr'];
		document.getElementById('dpl').innerHTML =localStorage['dpl']  ;
		document.getElementById('rlt').innerHTML =localStorage['rlt']  ;
		document.getElementById('rtb').innerHTML =localStorage['rtb']   ;
		document.getElementById('eds').innerHTML =localStorage['eds'] ;
		document.getElementById('smh').innerHTML =localStorage['smh']  ;
		document.getElementById('spwd').innerHTML =localStorage['spwd']  ;
		document.getElementById('milis').innerHTML =localStorage['milis'] ;
		document.getElementById('keybor').innerHTML =localStorage['keybor']  ;
		document.getElementById('mpo').innerHTML =localStorage['mpo']  ;
		document.getElementById('nu').innerHTML =localStorage['nu']  ;
		document.getElementById('kwp').innerHTML =localStorage['kwp']  ;
		document.getElementById('apl').innerHTML =localStorage['apl']  ;
		document.getElementById('mpld').innerHTML =localStorage['mpld']  ;
		document.getElementById('ctc').innerHTML =localStorage['ctc']  ;
		document.getElementById('hsd').innerHTML =localStorage['hsd']  ;
		document.getElementById('sdd').innerHTML =localStorage['sdd']  ;
		document.getElementById('ppc').innerHTML =localStorage['ppc']  ;
		document.getElementById('ncc').innerHTML =localStorage['ncc'] ;
		document.getElementById('nww').innerHTML =localStorage['nww']  ;
		document.getElementById('dtk').innerHTML =localStorage['dtk']  ;
		document.getElementById('kdic').innerHTML =localStorage['kdic']  ;
		document.getElementById('dispi').innerHTML =localStorage['dispi']  ;
		document.getElementById('kcc').innerHTML =localStorage['kcc']  ;
		document.getElementById('ctcc').innerHTML =localStorage['ctcc']  ;
		document.getElementById('ledg').innerHTML =localStorage['ledg']  ; 
		document.getElementById('fisp').innerHTML =localStorage['fisp'] ;	
		
	}

	if (localStorage['highlight'] == 'true')
		document.optform.highlighttext.checked = true;
	else
		document.optform.highlighttext.checked = false;

	if (localStorage['textboxhl'] == 'true')
		document.optform.textboxhl.checked = true;
	else
		document.optform.textboxhl.checked = false;
	
	if (localStorage['onlyreading'] == 'true')
		document.optform.onlyreading.checked = true;
	else
		document.optform.onlyreading.checked = false;
	
	if (localStorage['minihelp'] == 'true')
		document.optform.minihelp.checked = true;
	else
		document.optform.minihelp.checked = false;

	document.optform.popupDelay.value = localStorage["popupDelay"];

	if (localStorage['disablekeys'] == 'true')
		document.optform.disablekeys.checked = true;
	else
		document.optform.disablekeys.checked = false;

	if (localStorage['kanjicomponents'] == 'true')
		document.optform.kanjicomponents.checked = true;
	else
		document.optform.kanjicomponents.checked = false;

	numList = chrome.extension.getBackgroundPage().rcxDict.prototype.numList;

	for (i = 0; i*2 < numList.length; i++) {
		document.getElementById(numList[i*2]).checked = localStorage[numList[i*2]] == 'true' ? true : false;
	}

	store = localStorage['lineEnding'];
	for(var i=0; i < document.optform.lineEnding.length; ++i) {
		if(document.optform.lineEnding[i].value == store) {
			document.optform.lineEnding[i].selected = true;
			break;
		}
	}

	store = localStorage['copySeparator'];
	for(var i=0; i < document.optform.copySeparator.length; ++i) {
		if(document.optform.copySeparator[i].value == store) {
			document.optform.copySeparator[i].selected = true;
			break;
		}
	}

	document.optform.maxClipCopyEntries.value = parseInt(localStorage['maxClipCopyEntries']);

	store = localStorage['showOnKey'];
	for(var i = 0; i < document.optform.showOnKey.length; ++i) {
		if (document.optform.showOnKey[i].value === store) {
			document.optform.showOnKey[i].checked = true;
			break;
		}
	}

}

function getVals() {
	localStorage['popupcolor'] = document.optform.popupcolor.value;
	localStorage['highlight'] = document.optform.highlighttext.checked;
	localStorage['textboxhl'] = document.optform.textboxhl.checked;
	localStorage['onlyreading'] = document.optform.onlyreading.checked;
	localStorage['minihelp'] = document.optform.minihelp.checked;
	localStorage['disablekeys'] = document.optform.disablekeys.checked;
	localStorage['kanjicomponents'] = document.optform.kanjicomponents.checked;
	localStorage['language'] = document.optform.language.value;
	localStorage['ling'] = document.getElementById('ling').innerHTML;
	localStorage['general'] = document.getElementById('general').innerHTML;
	localStorage['popuclr'] = document.getElementById('popupclr').innerHTML;
	localStorage['dpl'] = document.getElementById('dpl').innerHTML;
	localStorage['rlt'] = document.getElementById('rlt').innerHTML;
	localStorage['rtb'] = document.getElementById('rtb').innerHTML;
	localStorage['eds'] = document.getElementById('eds').innerHTML;
	localStorage['smh'] = document.getElementById('smh').innerHTML;
	localStorage['spwd'] = document.getElementById('spwd').innerHTML;
	localStorage['milis'] = document.getElementById('milis').innerHTML;
	localStorage['keybor'] = document.getElementById('keybor').innerHTML;
	localStorage['mpo'] = document.getElementById('mpo').innerHTML;
	localStorage['nu'] = document.getElementById('nu').innerHTML;
	localStorage['kwp'] = document.getElementById('kwp').innerHTML;
	localStorage['apl'] = document.getElementById('apl').innerHTML;
	localStorage['mpld'] = document.getElementById('mpld').innerHTML;
	localStorage['ctc'] = document.getElementById('ctc').innerHTML;
	localStorage['hsd'] = document.getElementById('hsd').innerHTML;
	localStorage['sdd'] = document.getElementById('sdd').innerHTML;
	localStorage['ppc'] = document.getElementById('ppc').innerHTML;
	localStorage['ncc'] = document.getElementById('ncc').innerHTML;
	localStorage['nww'] = document.getElementById('nww').innerHTML;
	localStorage['dtk'] = document.getElementById('dtk').innerHTML;
	localStorage['kdic'] = document.getElementById('kdic').innerHTML;
	localStorage['dispi'] = document.getElementById('dispi').innerHTML;
	localStorage['kcc'] = document.getElementById('kcc').innerHTML;
	localStorage['ctcc'] = document.getElementById('ctcc').innerHTML;
	localStorage['ledg'] = document.getElementById('ledg').innerHTML;
	localStorage['fisp'] = document.getElementById('fisp').innerHTML;
	localStorage['defi'] = '1';


	var kanjiinfoarray = new Array(chrome.extension.getBackgroundPage().rcxDict.prototype.numList.length/2);
	numList = chrome.extension.getBackgroundPage().rcxDict.prototype.numList;
	for (i = 0; i*2 < numList.length; i++) {
		localStorage[numList[i*2]] = document.getElementById(numList[i*2]).checked;
		kanjiinfoarray[i] = localStorage[numList[i*2]];
	}

	localStorage['lineEnding'] = document.optform.lineEnding.value;
	localStorage['copySeparator'] = document.optform.copySeparator.value;
	localStorage['maxClipCopyEntries'] = document.optform.maxClipCopyEntries.value;

	var popupDelay;
	try {
		popupDelay = parseInt(document.optform.popupDelay.value);
		if (!isFinite(popupDelay)) {
			throw Error('infinite');
		}
		localStorage['popupDelay'] = document.optform.popupDelay.value;
	} catch (err) {
		popupDelay = 150;
		localStorage['popupDelay'] = "150";
	}
	localStorage['showOnKey'] = document.optform.showOnKey.value;
	localStorage['popupLocation'] = document.optform.popupLocation.value;

	chrome.extension.getBackgroundPage().rcxMain.config.css = localStorage["popupcolor"];
	chrome.extension.getBackgroundPage().rcxMain.config.highlight = localStorage["highlight"];
	chrome.extension.getBackgroundPage().rcxMain.config.textboxhl = localStorage["textboxhl"];
	chrome.extension.getBackgroundPage().rcxMain.config.onlyreading = localStorage["onlyreading"];
	chrome.extension.getBackgroundPage().rcxMain.config.minihelp = localStorage["minihelp"];
	chrome.extension.getBackgroundPage().rcxMain.config.popupDelay = popupDelay;
	chrome.extension.getBackgroundPage().rcxMain.config.disablekeys = localStorage["disablekeys"];
	chrome.extension.getBackgroundPage().rcxMain.config.showOnKey = localStorage["showOnKey"];
	chrome.extension.getBackgroundPage().rcxMain.config.kanjicomponents = localStorage["kanjicomponents"];
	chrome.extension.getBackgroundPage().rcxMain.config.kanjiinfo = kanjiinfoarray;
	chrome.extension.getBackgroundPage().rcxMain.config.lineEnding = localStorage["lineEnding"];
	chrome.extension.getBackgroundPage().rcxMain.config.copySeparator = localStorage["copySeparator"];
	chrome.extension.getBackgroundPage().rcxMain.config.maxClipCopyEntries = localStorage["maxClipCopyEntries"];
	chrome.extension.getBackgroundPage().rcxMain.config.popupLocation = localStorage["popupLocation"];
	chrome.extension.getBackgroundPage().rcxDict.prototype.language = localStorage["language"];

}
window.onload = fillVals;

/*function clicktab(tab) {
	selectedtab = document.getElementById(tab);
	// change format of all tabs to deselected
	// change format of selected tab to selected
	// hide all tab contents
	// show selected tab contents
}*/


document.querySelector('#submit').addEventListener('click', getVals);

