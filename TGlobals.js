
//Element types:  header, main, footer, sideNavMenu, sideNavMainHeader
//Type main and can have nested sub-elements, but the other types just have attributes that define the elements
var uiWindowObj2 = {
	header1: {title: "This is the uiWindowObj Header",},
	main1: {
		sideNavMenu2: [
			{title: "Introduction", function: "dispIntroduction()"},
			{title: "Dashboard", function: "dispDashboard()"},
		],
		main2: {
			sideNavMainHeader2: {title:"This is the inner header",},
			main3: {
				
				sideNavMenu4: [
					{title: "Container 1", function: "dispIntroduction()"},
					{title: "Container 2", function: "dispDashboard()"},
				],
				main4: {
					sideNavMainHeader4: {title:"This is the inner-inner header",},
					main5: {},
				},
			
			},
		},
	},
	footer1: {title: "This is the Footer",},
};




var container1Obj = {
	header: "Main Container Header",
	navMenu: [
		{title: "Introduction", function: "dispIntroduction()"},
		{title: "Dashboard", function: "dispDashboard()"},
	],
};
//console.log(container1Obj);

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
		{type: "mov", value: "images/medium_mov.mp4"},
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