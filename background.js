/*

	Rikaisan-universal
	Copyright (C) 2018 eyeS Code
	http://code.google.com/p/rikaisan-universal

	---

	Originally based on Rikaikun
	by Erek Speed
	Copyright (C) 2010 Erek Speed
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

chrome.browserAction.onClicked.addListener(rcxMain.inlineToggle);
chrome.tabs.onSelectionChanged.addListener(rcxMain.onTabSelect);
chrome.runtime.onMessage.addListener(
	function(request, sender, response) {
		switch(request.type) {
			case 'enable?':
				console.log('enable?');
				rcxMain.onTabSelect(sender.tab.id);
				break;
			case 'xsearch':
				console.log('xsearch');
				var e = rcxMain.search(request.text, request.dictOption);
				response(e);
				break;
/*			case 'nextDict':
				console.log('nextDict');
				rcxMain.nextDict();
				break;*/
			case 'resetDict':
				console.log('resetDict');
				rcxMain.resetDict();
				break;
			case 'translate':
				console.log('translate');
				var e = rcxMain.dict.translate(request.title);
				response(e);
				break;
			case 'makehtml':
				console.log('makehtml');
				var html = rcxMain.dict.makeHtml(request.entry);
				response(html);
				break;
			case 'switchOnlyReading':
				console.log('switchOnlyReading');
				if(rcxMain.config.onlyreading == 'true')
					rcxMain.config.onlyreading = 'false';
				else
					rcxMain.config.onlyreading = 'true';
				localStorage['onlyreading'] = rcxMain.config.onlyreading;
				break;
			case 'copyToClip':
				console.log('copyToClip');
				rcxMain.copyToClip(sender.tab, request.entry);
				break;
			default:
				console.log(request);
		}
	});
	
if(initStorage("v0.8.92", true)) {
	// v0.7
	initStorage("popupcolor", "blue");
	initStorage("highlight", true);
	
	// v0.8
	// No changes to options
	
	// V0.8.5
	initStorage("textboxhl", false);

	// v0.8.6
	initStorage("onlyreading", false);
	// v0.8.8
	if (localStorage['highlight'] == "yes")
		localStorage['highlight'] = "true";
	if (localStorage['highlight'] == "no")
		localStorage['highlight'] = "false";
	if (localStorage['textboxhl'] == "yes")
		localStorage['textboxhl'] = "true";
	if (localStorage['textboxhl'] == "no")
		localStorage['textboxhl'] = "false";
	if (localStorage['onlyreading'] == "yes")
		localStorage['onlyreading'] = "true";
	if (localStorage['onlyreading'] == "no")
		localStorage['onlyreading'] = "false";
	initStorage("copySeparator", "tab");
	initStorage("maxClipCopyEntries", "7");
	initStorage("lineEnding", "n");
	initStorage("minihelp", "true");
	initStorage("disablekeys", "false");
	initStorage("kanjicomponents", "true");

	for (i = 0; i*2 < rcxDict.prototype.numList.length; i++) {
		initStorage(rcxDict.prototype.numList[i*2], "true")
	}

    // v0.8.92
	initStorage("popupDelay", "150");
	initStorage("showOnKey", "");
}

/** 
* Initializes the localStorage for the given key. 
* If the given key is already initialized, nothing happens. 
* 
* @author Teo (GD API Guru)
* @param key The key for which to initialize 
* @param initialValue Initial value of localStorage on the given key 
* @return true if a value is assigned or false if nothing happens 
*/ 
function initStorage(key, initialValue) {
  var currentValue = localStorage[key];
  if (!currentValue) {
	localStorage[key] = initialValue;
	return true;
  }
  return false;
}

rcxMain.config = {};
rcxDict.prototype.language = localStorage[`language`];
rcxMain.config.css = localStorage["popupcolor"];
rcxMain.config.highlight = localStorage["highlight"];
rcxMain.config.textboxhl = localStorage["textboxhl"];
rcxMain.config.onlyreading = localStorage["onlyreading"];
rcxMain.config.copySeparator = localStorage["copySeparator"];
rcxMain.config.maxClipCopyEntries = localStorage["maxClipCopyEntries"];
rcxMain.config.lineEnding = localStorage["lineEnding"];
rcxMain.config.minihelp = localStorage["minihelp"];
rcxMain.config.popupDelay = parseInt(localStorage["popupDelay"]);
rcxMain.config.disablekeys = localStorage["disablekeys"];
rcxMain.config.showOnKey = localStorage["showOnKey"];
rcxMain.config.kanjicomponents = localStorage["kanjicomponents"];
rcxMain.config.kanjiinfo = new Array(rcxDict.prototype.numList.length/2);
for (i = 0; i*2 < rcxDict.prototype.numList.length; i++) {
	rcxMain.config.kanjiinfo[i] = localStorage[rcxDict.prototype.numList[i*2]];
}

