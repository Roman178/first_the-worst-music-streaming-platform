import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

const styles = {
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.setFirstPageRef = this.setFirstPageRef.bind(this);
  }

  setFirstPageRef(node) {
    this.firstPageRef = node;
  }

  componentDidMount() {
    console.log(this.firstPageRef);
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.root}>
        <FirstPage ref={this.setFirstPageRef} />
        <SecondPage />
        <ThirdPage />
      </main>
    );
  }
}

export default withStyles(styles)(App);
