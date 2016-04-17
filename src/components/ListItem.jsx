var React = require('react');

var ListItem = React.createClass({
	redirect: function(e){
		if(e.target.innerHTML == 'CONTACT'){
			window.location.assign('myDetails.html');
		}
	},
	render: function() {
		return (
			<li className="mainMenu">
				<a className="mainMenu" href="#" onClick={this.redirect}>{this.props.linkContent}</a>
			</li>
		);
	}

});

module.exports = ListItem;