var React = require('react');

var CountryOption = React.createClass({

	render: function() {
		return (
			<option value={this.props.optionValue}>{this.props.optionChild}</option>
		);
	}

});

module.exports = CountryOption;