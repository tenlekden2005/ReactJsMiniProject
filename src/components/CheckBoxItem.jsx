var React = require('react');

var CheckBoxItem = React.createClass({
	getInitialState:function(){
		return {skills:[], skill:''};
	},
	handleOnClick:function(e){
		if(e.target.getAttribute("type") == 'checkbox'){
			var currentSkills = this.state.skills;
			currentSkills.push(e.target.value);
			this.setState({skills:currentSkills, skill:''});
		}
		for(var i=0;i<this.state.skills.length;i++){
			alert(this.state.skills);
		}
	},
	render: function() {
		var divStyle={
		'margin':'4px' 
		}
		return (
				<div style={divStyle} >	
	              	<input type="checkbox" value={this.props.value} onClick={this.handleOnClick}/> {this.props.value}
                </div>
		);
	}

});

module.exports = CheckBoxItem;