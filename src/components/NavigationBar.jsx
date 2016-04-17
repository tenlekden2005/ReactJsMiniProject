var React = require('react');
var List = require('./List.jsx');

var NavigationBar = React.createClass({

		getInitialState: function(){
			return {items:[], newItemText:''};
		},
		handleSubmit: function(e){
			e.preventDefault();

			var currentItems = this.state.items;
			currentItems.push(this.state.newItemText);

			this.setState({items:currentItems, newItemText:''});
		},
		onChange: function(e){
			this.setState({newItemText: e.target.value});
		},
		render: function() {

			var divStyle = {
				'marginLeft':'25%'
			}
			return (
					<nav className="navbar navbar-default navbar-fixed-top" id="navbar">
					  <div style={divStyle} className="container-fluid">
							<div className="navbar-header">
						      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						      </button>
						      <a className="navbar-brand" href="#">Cognition Point</a>
						    </div>	

						    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<List items ={this.props.linkData} />
							</div>
						</div>
					</nav>
						
				);
		}
		
});

module.exports = NavigationBar;