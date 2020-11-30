import React, { Component, Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import IsMobileContext from "../contexts/isMobileContext";
const angle = <FontAwesomeIcon icon={faAngleDown} className="cards" />;

export default class SubContainer extends Component {
  static contextType = IsMobileContext;

  state = {
    isOpened: false,
  };

  toggleOpen = () => {
    if (this.context.isMobile) {
      this.setState({ isOpened: !this.state.isOpened });
    }
  };

  render() {
    const { children, trigger } = this.props;
    const { Icon, text } = this.props;

    return (
      <li className={"item " + this.state.isOpened}>
        <a href="#" className="link" onClick={this.toggleOpen}>
          {trigger} {angle}
        </a>
        <div className="subContainer">{this.props.children}</div>
      </li>
    );
  }
}
