import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    position: 'absolute',
    backgroundColor: 'aqua',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    width: '350px',
    height: '420px',
    '@media (max-width: 812px)': {
      width: '210px',
      height: '220px',
    },
    borderRadius: '8px'
  }
}


 class AntiButton extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();

    // this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  // setWrapperRef(node) {
  //   this.wrapperRef = node;
  // }

  handleClickOutside(event) {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
      this.props.onCloseMenu();
    }
  }

  render() {
    const { classes } = this.props;
    return <div ref={this.wrapperRef} className={ classes.root }> {this.props.children} </div>;
  }
}

AntiButton.propTypes = {
  children: PropTypes.element.isRequired,
  onCloseMenu: PropTypes.func.isRequired
};


export default withStyles(styles)(AntiButton);