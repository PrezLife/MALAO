
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
			case "tabBar": buildTabBar(key, eleObj[key]); break;
			default: console.log("Ooops", key); break; 
		};
	};
};

function buildHeader(headerId, headerObj) {
	var txt = "";
	//Build the header container:  a w3-row split into thirds
	txt += "<div class='w3-row w3-card " + headerObj.class + "'>";
		txt += "<div class='w3-third'><h3></h3></div>";
		txt += "<div class='w3-third'><h3 class='w3-center' id=" + headerId + "Title" + ">" + headerObj.title + "</h3></div>";
	txt += "</div>";
	document.getElementById(headerId).innerHTML = txt;
};

function buildFooter(footerID, footerObj) {
};

function buildTabBar(tabBarId, tabBarObj) {
	var txt = ""
	txt += "<div class='w3-bar w3-light-gray' style='min-height:30px'>";
	
	var txtList = "";
	for (item in tabBarObj) {
		txtList += "<button id=" + item + " class='w3-bar-item w3-button w3-border tabBarItem' onClick='" + tabBarObj[item].function + "'>" + tabBarObj[item].title + "</button>";
	};
	txt += txtList;
	txt += "</div>";

	document.getElementById(tabBarId).innerHTML = txt;
};

function buildSideNavMenu(sideNavID, sideNavObj) {
	//Build the side Nav and save it to the DOM
	var txt = "";
	txt += "<div class='w3-sidebar w3-animate-left w3-bar-block w3-card w3-light-gray' style='display:block'>";
	txt += "<button class='w3-bar-item w3-large' onclick='closeSideNav(\"" + sideNavID + "\")'>Close &times;</button>";
	
	var txtList = "";
	for (item in sideNavObj) {
		txtList += "<button id=" + item + " class='w3-bar-item w3-button sideNavItem' onClick='" + sideNavObj[item].function + "'>" + sideNavObj[item].title + "</button>";	
	};
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
	txt += "<div class='w3-third'><h4 class='w3-center' id=" + eleId + "Title" + ">" + mainHeaderObj.title + "</h4></div>";
	txt += "</div>";
	document.getElementById(eleId).innerHTML = txt;
};


//Open a side nav
function openSideNav(eleId) {
	var divLevelNum = Number(eleId.substring(eleId.length-1, eleId.length));
	document.getElementById("main"+divLevelNum).style.marginLeft = "200px";
	document.getElementById("sideNavMenu" + divLevelNum).style.width = "200px";
	document.getElementById("sideNavMenu" + divLevelNum).style.display = "block";
	//console.log(eleId+"mainsideNavMainHeaderOpenNav");
	document.getElementById("openNav" + divLevelNum).style.visibility = 'hidden';
};

//Close a side nav
function closeSideNav(eleId) {
	var divLevelNum = Number(eleId.substring(eleId.length-1, eleId.length));
	document.getElementById("main"+divLevelNum).style.marginLeft = "0px";
	document.getElementById("sideNavMenu"+divLevelNum).style.display = "none";
	document.getElementById("openNav"+(divLevelNum)).style.visibility = "visible";
};

//Function to select a Side Nav Topic
//	itemId - Side Nav menu item element id
//	mainId - Window to display content in
//	functionName - Content display function to call
//	headerTitleId - Id for displaying header title
//	headerTitle - Header Title to display
function selectSideNavItem(itemId, mainId, functionName, headerTitleId, headerTitle) {
	//Highlight the topic that currently is selected, and unhighlight all the others
	var itemList = document.getElementsByClassName("sideNavItem");
	for (var i = 0; i < itemList.length; i++) {
		if (itemList[i].id == itemId) {
			itemList[i].className += " w3-hover-blue";
		} else {
		itemList[i].className = itemList[i].className.replace(" w3-hover-blue","");
		};
	};
	//Call the content display function
	var evalString = functionName + "(\"" + mainId + "\",\"" + headerTitleId + "\",\"" + headerTitle + "\")";
	eval(evalString);
};

//Function to select a tab bar topic
//	itemId - Tab item element id
//	mainId - Window to display content in
//	functionName - Content display function to call
//	headerTitleId - Id for displaying header title
//	headerTitle - Header Title to display
function selectTabBarItem(itemId, mainId, functionName, headerTitleId, headerTitle) {
	//Highlight the topic that currently is selected, and unhighlight all the others
	var itemList = document.getElementsByClassName("tabBarItem");
	for (var i = 0; i < itemList.length; i++) {
		if (itemList[i].id == itemId) {
			itemList[i].className += " w3-hover-blue";
			itemList[i].className += " w3-blue";
		} else {
		itemList[i].className = itemList[i].className.replace(" w3-hover-blue","");
		itemList[i].className = itemList[i].className.replace(" w3-blue","");
		};
	};
	//Call the content display function
	var evalString = functionName + "(\"" + mainId + "\",\"" + headerTitleId + "\",\"" + headerTitle + "\")";
	eval(evalString);
};
