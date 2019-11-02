import React, { Component } from "react";
import NavBar from "../../Component/NavBar/NavBar";
import SideDrawer from "../../Component/SideDrawer/SideDrawer";
import BackDrop from "../../Component/BackDrop/BackDrop";
import { withRouter } from "react-router-dom";

class Layout extends Component {
  state = {
    open: false
  };
  openSideDrawer = () => {
    this.setState({ open: true });
  };
  closeSideDrawer = () => {
    this.setState({ open: false });
  };
  openPage = link => {
    this.props.history.push(link);
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <NavBar openSideDrawer={this.openSideDrawer} />
        <SideDrawer open={this.state.open} openPage={this.openPage} />
        <BackDrop open={this.state.open} close={this.closeSideDrawer} />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Layout);
