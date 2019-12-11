
function buildWindow(eleId, eleObj) {
	//Create div's
	var txt = ""
	for (key in eleObj) {
		txt += "<div id=" + key + "></div>"
	};
	document.getElementById(eleId).innerHTML = txt;
	//Populate div's
	for (key in eleObj) {
		var keyType = key.substring(0, key.length-1);
		switch (keyType) {
			case "header": buildHeader(key, eleObj[key]); break;
			case "main": buildWindow(key, eleObj[key]); break;
			case "footer": buildFooter(key, eleObj[key]); break;
			case "sideNavMenu": buildSideNavMenu(key, eleObj[key]); break;
			case "sideNavMainHeader": buildSideNavMainHeader(key, eleObj[key]); break;
			default: console.log("Ooops", key); break; 
		};
	};
};

function buildHeader(headerID, headerObj) {
	var txt = "";
	//Build the header container:  a w3-row split into thirds
	txt += "<div class='w3-row w3-card w3-teal'>";
		txt += "<div class='w3-third'><h3></h3></div>";
		txt += "<div class='w3-third'><h3 class='w3-center'>" + headerObj.title + "</h3></div>";
	txt += "</div>";
	document.getElementById(headerID).innerHTML = txt;
};

function buildFooter(footerID, footerObj) {
	
};

function buildSideNavMenu(sideNavID, sideNavObj) {
	//Build the side Nav and save it to the DOM
	var txt = "";
	txt += "<div class='w3-sidebar w3-bar-block w3-card w3-light-gray' style='display:block'>";
	txt += "<button class='w3-bar-item w3-large' onclick='closeSideNav(\"" + sideNavID + "\")'>Close &times;</button>";
	var txtList = "";

	sideNavObj.forEach(function(ele) {
		txtList += "<button class='w3-bar-item w3-button' onClick='" + ele.function + "'>" + ele.title + "</button>";
	});
	txt += txtList;
	txt += "</div>";
	document.getElementById(sideNavID).innerHTML = txt;
};
function buildSideNavMainHeader(eleId, mainHeaderObj) {
	var divLevelNum = Number(eleId.substring(eleId.length-1, eleId.length));
	var openNavId = "openNav" + divLevelNum;
	//Build the container header and save it to the DOM:  a w3-row split into thirds
	var txt = "";
	txt += "<div class='w3-row w3-card'>";
	txt += "<div class='w3-third'><button id='" + openNavId + "' class='w3-button w3-xlarge' onclick='openSideNav(\"" + openNavId + "\")'>&#9776;</button></div>";
	txt += "<div class='w3-third'><h4 class='w3-center'>" + mainHeaderObj.title + "</h4></div>";
	txt += "</div>";
	document.getElementById(eleId).innerHTML = txt;
};


//Open a side nav
function openSideNav(eleId) {
	var divLevelNum = Number(eleId.substring(eleId.length-1, eleId.length));
	document.getElementById("main"+divLevelNum).style.marginLeft = "20%";
	document.getElementById("sideNavMenu" + divLevelNum).style.width = "20%";
	document.getElementById("sideNavMenu" + divLevelNum).style.display = "block";
	//console.log(eleId+"mainsideNavMainHeaderOpenNav");
	document.getElementById("openNav" + divLevelNum).style.visibility = 'hidden';
};

//Close a side nav
function closeSideNav(eleId) {
	var divLevelNum = Number(eleId.substring(eleId.length-1, eleId.length));
	document.getElementById("main"+divLevelNum).style.marginLeft = "0%";
	document.getElementById("sideNavMenu"+divLevelNum).style.display = "none";
	document.getElementById("openNav"+(divLevelNum)).style.visibility = "visible";
};
