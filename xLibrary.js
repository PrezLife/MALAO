
//Build the standard window template.  Declare common divs that all pages in the app will have and potentially use.  Formatting is done by other functions
function buildWindowTemplate(windowId) {
	var txt = "";
	txt += "<div id='header'></div>";
	txt += "<div id='main'></div>";
	txt += "<div id='footer'></div>";
	document.getElementById(windowId).innerHTML = txt;
	
};

//Build the window header
function buildHeader(headerID, headerContents) {
	var txt = "";
	//Build the header container:  a w3-row split into thirds
	txt += "<div class='w3-row w3-card w3-teal'>";
	txt += "<div class='w3-third'><h3></h3></div>";
	txt += "<div class='w3-third'><h3 class='w3-center'>" + headerContents + "</h3></div>";
	txt += "</div>";
	document.getElementById(headerID).innerHTML = txt;
};

//Build a container with a side nav
function buildContainerWithSideNav(eleId, containerObj) {	
	//Define the element ID's and save them to the DOM
	var containerId = eleId + "Container";
	var headerId = eleId + "Header";
	var bodyId = eleId + "Body";
	var sideNavId = eleId + "SideNav";
	var openNavId = eleId + "OpenNav";
	var txt = ""
	txt += "<div id='" + sideNavId + "'></div>";
	txt += "<div id='" + containerId + "'>";
		txt += "<div id='" + headerId + "'></div>";
		txt += "<div id='" + bodyId + "'></div>";
	txt += "</div>";
	document.getElementById(eleId).innerHTML = txt;
	
	//Build the container header and save it to the DOM:  a w3-row split into thirds
	var txt = "";
	txt += "<div class='w3-row w3-card'>";
	txt += "<div class='w3-third'><button id='" + openNavId + "' class='w3-button w3-xlarge' onclick='openSideNav(\"" + eleId + "\")'>&#9776;</button></div>";
	txt += "<div class='w3-third'><h4 class='w3-center'>" + containerObj.header + "</h4></div>";
	txt += "</div>";
	document.getElementById(headerId).innerHTML = txt;
	
	//Build the container body and save it to the DOM
	var txt = "";
	txt += "<h4 class='w3-center'>This is the container body</h4>";
	document.getElementById(bodyId).innerHTML = txt;
	
	//Build the side Nav and save it to the DOM
	var txt = "";
	txt += "<div class='w3-sidebar w3-bar-block w3-card w3-light-gray' style='display:block'>";
	txt += "<button class='w3-bar-item w3-large' onclick='closeSideNav(\"" + eleId + "\")'>Close &times;</button>";
	var txtList = "";
	containerObj.navMenu.forEach(function(ele) {
		txtList += "<button class='w3-bar-item w3-button' onClick='" + ele.function + "'>" + ele.title + "</button>";
	});
	txt += txtList;
	txt += "</div>";
	document.getElementById(sideNavId).innerHTML = txt;

};

//Open a side nav
function openSideNav(eleId) {
	document.getElementById(eleId + "Container").style.marginLeft = "20%";
	document.getElementById(eleId + "SideNav").style.width = "20%";
	document.getElementById(eleId + "SideNav").style.display = "block";
	document.getElementById(eleId + "OpenNav").style.visibility = 'hidden';
};

//Close a side nav
function closeSideNav(eleId) {
	document.getElementById(eleId + "Container").style.marginLeft = "0%";
	document.getElementById(eleId + "SideNav").style.display = "none";
	document.getElementById(eleId + "OpenNav").style.visibility = "visible";
};
