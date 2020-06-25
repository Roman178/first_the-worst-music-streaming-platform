import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		display: 'flex',
		alignItems: 'center',
	}
}

class Song extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;
		return (
	
			<div className={ classes.root  } >
				<div>
					<span>{ this.props.author } - </span>
					<span> { this.props.name } </span>
				</div>
			</div>
		)
	}	
}

Song.propTypes = {
	author: PropTypes.string,
	author: PropTypes.string
}


export default withStyles(styles)(Song);