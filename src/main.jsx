var React = require('react');
var ReactDOM = require('react-dom');
var NavigationBar = require("./components/NavigationBar.jsx");
var JoinUs = require("./components/JoinUs.jsx");
// var Slides = require("./components/slides.jsx");

var data = [
  {id: 1, text: "HOME"},
  {id: 2, text: "MD#6"},
  {id: 3, text: "ABOUT MANUEL"},
  {id: 4, text: "HISTORY"},
  {id: 5, text: "CONTACT"}
];

var slideData = [
  {id: 1, divId: "slide-1", divClass:"slide", divCaption:"caption"},
  {id: 2, divId: "slide-2", divClass:"slide", divCaption:"caption"},
  {id: 3, divId: "slide-3", divClass:"slide", divCaption:"caption"},
  {id: 4, divId: "slide-4", divClass:"slide", divCaption:"caption"}
];


var Main = React.createClass({

	render: function() {
		// var slidesIdClass=slideData.map(function(idClass){
		// 	return(
		// 	<Slides key={idClass.id}slideId={idClass.divId} slideClass={idClass.divClass} caption={idClass.divCaption} />
		// 	);
		// });
		return (
			<div>
				<NavigationBar linkData={data} />
			</div>
		);
	}

});

ReactDOM.render(
	<Main />,
	 document.getElementById('navigationBar')
);

ReactDOM.render(
	<JoinUs />,
	 document.getElementById('joinUs')
);


