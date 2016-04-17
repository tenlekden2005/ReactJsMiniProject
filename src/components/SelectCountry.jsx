var React = require('react');
var CountryOption = require('./CountryOption.jsx');

var SelectCountry = React.createClass({
	handleOnSelect:function(e){
		alert(e.target.value);
		var that1 = this.props.ref;
	},
	render: function() {
		var that = this;
		var selectOptions = this.props.countryList.map(function(options){
			return (
					<option value={options.value} key={options.id} >{options.value}</option>
				);
		});
		return (
			
				<select id="select111" className="form-control" onChange={that.handleOnSelect}>
					{selectOptions}
		        </select>
			
		);
	}

});

module.exports = SelectCountry;