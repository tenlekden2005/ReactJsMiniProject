var React = require('react');
var CheckBoxItem = require('./CheckBoxItem.jsx')

var CheckBox = React.createClass({

	getInitialState:function(){
		return ({checkedList:[]});
	},
	handleCheckBoxClick:function(e){
		if(e.target.checked){
			var temp = this.state.checkedList;
			temp.push(e.target.value);
			this.setState({checkedList:temp});
		}
		else{
			var temp = this.state.checkedList;
			if(temp.indexOf(e.target.value)>0)
			    temp.splice(temp.indexOf(e.target.value),1);
			this.setState({checkedList:temp});
		}
		alert(this.state.checkedList);

		
	},
	render: function() {
		var that=this;
		var styleCheckBox={
		'margin':'4px' 
		};
		var checkBox = this.props.checkBoxData.map(function(checkBoxD){
			return(

				<div style={styleCheckBox} key={checkBoxD.id}>	
	              	<input type="checkbox" value={checkBoxD.value} onClick={that.handleCheckBoxClick}/> {checkBoxD.value}
                </div>
				);
		})
		return (
			<div>
				{checkBox}
			</div>
		);
	}

});

module.exports = CheckBox;