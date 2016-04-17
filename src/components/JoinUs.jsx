var React = require('react');
var SelectCountry = require('./SelectCountry.jsx');
var CheckBox = require('./CheckBox.jsx');
var selectData =  [
  {id: 1, value: "India"},
  {id: 2, value: "Tibet"},
  {id: 3, value: "United States of America"},
  {id: 4, value: "United Kingdom"},
  {id: 5, value: "Finland"}
];

var checkBoxData =  [
  {id: 1, value: "Certified Plumber"},
  {id: 2, value: "Carpentry Experience"},
  {id: 3, value: "Certified Electrician"},
  {id: 4, value: "Bartending Experience"},
  {id: 5, value: "Food Hygiene Certifate"},
  {id: 6, value: "First Aid Course"},
  {id: 7, value: "Forklift Drive Certifate"},
  {id: 8, value: "Driver's Licence(Type B)"}
];

var JoinUs = React.createClass({
	getInitialState:function(){
		return {skills:[]};
	},
	handleSubmit: function(e){
			e.preventDefault();
			
			if(!this.state.hasOwnProperty("first_name"))
				alert("enter first name please");
			else if(!this.state.hasOwnProperty("last_name"))
				alert("enter last name please");
			else if(!this.state.hasOwnProperty("street"))
				alert("enter street name please");
			else if(!this.state.hasOwnProperty("city"))
				alert("enter city name please");
			else if(!this.state.hasOwnProperty("zip"))
				alert("enter zip code please");
			else if(!this.state.hasOwnProperty("email"))
				alert("enter email please");
			else if(!this.state.hasOwnProperty("tel"))
				alert("enter telephone no please");
			else if(!this.state.hasOwnProperty("gender"))
				alert("select gender please");
			else if(!this.state.hasOwnProperty("country"))
				alert("select country please");
			else{
				alert("Your Json is ready: "+JSON.stringify(this.state));
			}

	},
	handleCheckBoxClick:function(e){
		if(e.target.checked){
			var temp = this.state.skills;
			temp.push(e.target.value);
			this.setState({skills:temp});
		}
		else{
			var temp = this.state.skills;
			if(temp.indexOf(e.target.value)>0)
			    temp.splice(temp.indexOf(e.target.value),1);
			this.setState({skills:temp});
		}
	},
	handleOnSelect:function(e){
		this.setState({country:e.target.value});
	},
	handleOnChange: function(e){
		if(e.target.getAttribute("type") == 'text'){
				if(e.target.placeholder == "First Name"){

					this.setState({first_name:e.target.value});
				}
				else if(e.target.placeholder == "Last Name"){
					this.setState({last_name:e.target.value});
				}
				else if(e.target.placeholder == "Street"){
					this.setState({street:e.target.value});
				}
				else if(e.target.placeholder == "City"){
					this.setState({city:e.target.value});
				}
				else if(e.target.placeholder == "Zip"){
					this.setState({zip:e.target.value});
				}
				else if(e.target.placeholder == "Email"){
					this.setState({email:e.target.value});
				}
				else if(e.target.placeholder == "Telephone No."){
					this.setState({tel:e.target.value});
				}
			}
			else if(e.target.getAttribute("type") == 'radio'){
				this.setState({gender:e.target.value});
			}
			else if(e.target.getAttribute("id") == 'comments'){
				this.setState({comments:e.target.value});
			}
			
	},
	render: function() {
		var that=this;
		var checkBoxStyle = {
			marginTop:'20px'
		};
		var telephoneStyle={
			marginTop:'8em'	
		};
		var formStyle = {
			color:'white',
			backgroudColor:'white'
		};
		var styleCheckBox={
		'margin':'4px' 
		};
		var that = this;
		var selectOptions = selectData.map(function(options){
			return (
					<option value={options.value} key={options.id} >{options.value}</option>
				);
		});
		var checkBox = checkBoxData.map(function(checkBoxD){
			return(

				<div style={styleCheckBox} key={checkBoxD.id}>	
	              	<input type="checkbox" value={checkBoxD.value} onClick={that.handleCheckBoxClick}/> {checkBoxD.value}
                </div>
				);
		})
		return (
			<div className="row">
				
				<div className="col-md-4" id="formBackground">
				<form onSubmit={this.handleSubmit} style={formStyle}>

				<div className="row">
					<div className="col-md-4">
						<div className="form-group label-floating">
						  <input className="form-control" id="focusedInput1" type="text" onChange={this.handleOnChange} placeholder="First Name"/>
						</div>
						<label className="control-label" >Address</label>
					    <select id="select111" className="form-control" onChange={that.handleOnSelect}>
							{selectOptions}
				        </select>
					    <input className="form-control" type="text" placeholder="Street" onChange={this.handleOnChange}/>
					    <div className="col-md-8">
						    <input className="form-control" type="text" placeholder="City" onChange={this.handleOnChange}/>
						 </div>
						 <div className="col-md-2"></div>
						 <div className="col-md-4">
						    <input className="form-control" type="text" placeholder="Zip" onChange={this.handleOnChange}/>
						  </div>
					    <input className="form-control" type="text" placeholder="Email" onChange={this.handleOnChange}/>
					    <div style={checkBoxStyle}>
						    <div>
								{checkBox}
							</div>
					    </div>
			         </div>
			         <div className="col-md-2"></div>
			         <div className="col-md-4">
			         	<div className="form-group label-floating">
						  <input className="form-control" id="focusedInput1" type="text" placeholder="Last Name" onChange={this.handleOnChange}/>
						</div>
						
							<h4>Gender</h4>
						<div className="col-md-5">
							<input type="radio" name="gender" value="Male" onChange={this.handleOnChange}/>Male
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-5">
							<input type="radio" name="gender" value="Female" onChange={this.handleOnChange}/>Female
						</div>
						<input className="form-control" type="text" style={telephoneStyle} placeholder="Telephone No." onChange={this.handleOnChange}/>
						<label className="control-label" >Comments and other relevent experiences</label>
						<textarea className="form-control" rows="6" onChange={this.handleOnChange} id="comments"></textarea>
			         </div>
			         </div>
			         <div className="row">
			         <div className="col-md-offset-5">
			         <button type="submit" value="Join Us" className="btn btn-primary btn-lg" id="joinUsButton">Join Us</button>
			         </div>
			         </div>
			       </form>
				</div>
			</div>
		);
	}

});

module.exports = JoinUs;