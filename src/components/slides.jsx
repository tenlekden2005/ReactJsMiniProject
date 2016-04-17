var React = require('react');

var slides = React.createClass({

	render: function() {
		return (
			<div id={this.props.slideId} className={this.props.slideClass}>
				<div className={this.props.caption}>
					<h1>Image 1 Title</h1>
					<p>Image description goes here </p>
				</div>
			</div>
		);
	}

});

module.exports = slides