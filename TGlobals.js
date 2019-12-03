var container1Obj = {
	header: "Main Container Header",
	navMenu: [
		{title: "Introduction", function: "dispIntroduction()"},
		{title: "Dashboard", function: "dispDashboard()"},
	],
};

var container2Obj = {
	header: "Inner Container Header",
	navMenu: [
		{title: "Container 1", function: "dispIntroduction()"},
		{title: "Container 2", function: "dispDashboard()"},
	],
};

var cardBookObj = {
	card01: [
		{type: "title", value: "First Card"},
		{type: "text", value: "This is text"},
		//{type: "img", value: "images/LO_ChestnutOak01_300.jpg"},
		//{type: "mov", value: "https://malao.s3.amazonaws.com/medium_mov.mp4"},
		//{type: "iframe", value: "https://drive.google.com/file/d/1b7_ysW9IjKiEoWCzQNxpTWQ4aM-J1Hss/view"},
		{type: "mov", value: "https://prezlife.github.io/MALAO/images/medium_mov.mp4"},
		{type: "quiz", answerOptions: [
			{text: "Bluebird", value: false},
			{text: "Carolina Chickadee", value: false},
			{text: "Dark-eyed Junco", value: true},
			{text: "Nuthatch", value: false},
			],},
	],
	card02: [
		{type: "title", value: "Second Card"},
		{type: "text", value: "This is text paragraph 1"},
		{type: "text", value: "This is text paragraph 2"},
	],
}; 

var cardList = Object.keys(cardBookObj);

var currentCard = cardList[0];
