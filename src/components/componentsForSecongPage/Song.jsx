import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		display: 'flex',
		alignItems: 'center',
	}
}

function Song (props) {
		const { classes } = props;
		return (

			<div className={ classes.root  } >
				<div>
					<span>{ props.author } - </span>
					<span> { props.name } </span>
				</div>
			</div>
		)
	}


export default withStyles(styles)(Song);