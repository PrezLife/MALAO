
//Element types:  header, main, footer, sideNavMenu, sideNavMainHeader
//Type main and can have nested sub-elements, but the other types just have attributes that define the elements
var uiWindowObj2 = {
	header1: {title: "This is the uiWindowObj Header", class: "w3-teal"},
	main1: {
		/*tabBar2: {
			tB201: {title: "Introduction", function: "selectTabBarItem(\"tB201\", \"main2\", \"displayIntroduction\", \"header2Title\", \"Introduction\")"},
			tB202: {title: "Upland Birds", function: "selectTabBarItem(\"tB202\", \"main2\", \"displayLesson\", \"header2Title\", \"Upland Birds\")"},
		},*/
		sideNavMenu2: {
			item01: {title: "Introduction", function: "selectSideNavItem(\"item01\", \"main3\", \"displayIntroduction\", \"sideNavMainHeader2Title\", \"Introduction\")"},
			item02: {title: "Upland Birds", function: "selectSideNavItem(\"item02\", \"main3\", \"displayLesson\", \"sideNavMainHeader2Title\", \"Upland Birds\")"},
		},
		/*header2: {title: "This is the default inner header", class: ""},*/
		main2: {
			sideNavMainHeader2: {title: "This is the default inner header",},
			main3: {
				/*
				sideNavMenu4: [
					{title: "Container 1", function: "dispIntroduction()"},
					{title: "Container 2", function: "dispDashboard()"},
				],
				main4: {
					sideNavMainHeader4: {title:"This is the inner-inner header",},
					main5: {},
				},
				*/
			},
		},
	},
	footer1: {title: "This is the Footer",},
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