
//Add header, main, and footer sections to the main window
buildWindowTemplate('window');

//Populate the header
buildHeader('header','This is the Header');

//Build a main container with a side Nav
buildContainerWithSideNav('main', container1Obj);
openSideNav('main');

//buildContainerWithSideNav('mainBody', container2Obj);
//closeSideNav('mainBody');

//Display cards in mainBody
displayCard('mainBody', currentCard);


function dispIntroduction() {
	alert("Got Here");
};

function displayCard(eleId, cardName) {
	var txt = "";
	
	cardBookObj[cardName].forEach(function(ele) {
		switch (ele.type) {
			case "title": 
				txt += "<h3 class='w3-center'>" + ele.value + "</h3>";
				break;
			case "text": 
				txt += "<div class='w3-container w3-center'>";
				txt += "<p>" + ele.value + "</p>";
				txt += "</div>";
				break;
			case "img":
				txt += "<div class='w3-container w3-center'>";
				txt += "<img width='300' src=" + ele.value + ">";
				txt += "</div>";
				txt += "<br>";
				break;
			case "mov":
				txt += "<div class='w3-container w3-center'>";
				txt += "<video width=50% autoplay controls src=" + ele.value + ">";
				txt += "</video>";
				txt += "</div>";
				break;
			case "iframe":
				txt += "<div class='w3-container w3-center'>";
				txt += "<iframe src=" + ele.value + ">";
				txt += "</iframe>";
				txt += "</div>";
				break;
			case "quiz":
				txt += buildQuizHTML(ele.answerOptions);
				break;
		};
	});
	
	document.getElementById(eleId).innerHTML = txt;
};

function buildQuizHTML(answerOptions) {
	var txt = "";
	// Answers
	txt += "<table class='w3-table'>";
	txt += "<tr>";
	for (var i = 0; i < answerOptions.length; i++) {
		var ansId = "ans"+i;
		txt += "<td>";
		txt += "<input id="+ansId+ " class='w3-radio' type='radio' name='answer' " + "value='" + answerOptions[i].text + "' onclick='checkAns(\"" + ansId + "\",\"" + answerOptions[i].value +"\")'>";
		txt += "<label>     " + answerOptions[i].text + "</label>";
		txt += "</td>";
		if (i==1) {
			txt += "</tr><tr>";
		};
	};
	txt += "</tr>";
	txt += "</table>";
	return txt;
};

function checkAns(eleId, ansValue) {
	if (ansValue == "true") {
		document.getElementById(eleId).style.backgroundColor = "green";
		document.getElementById(eleId).style.border = "4px solid green";
		setTimeout(selectNextCard, 500);
	} else {
		document.getElementById(eleId).style.backgroundColor = "red";
		document.getElementById(eleId).style.border = "4px solid red";
	};
};

function selectNextCard() {
	currentCard = cardList[1];
	displayCard('mainBody', currentCard);
};

