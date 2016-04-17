var React = require('react');
var ListItem = require('./ListItem.jsx');



var List = React.createClass({

	render: function() {

		var ulStyle = {
			margin:'auto'
		};
		var createLink = this.props.items.map(function(menu){
			return (
				<ListItem linkContent={menu.text} key={menu.id} />
				);
		});
		return (
				<ul style={ulStyle} className="nav navbar-nav">{createLink}</ul>
		);
	}

});

module.exports = List;