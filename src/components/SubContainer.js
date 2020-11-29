import React, {Component, Fragment} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleDown,
  faCreditCard,
  faBusinessTime,
  faShoppingCart,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import SecondBlock from "../second";
import ThirdBlock from "../third";
import IsMobileContext from "../contexts/isMobileContext";
const angle = <FontAwesomeIcon icon={faAngleDown} className="cards" />;
const cards = <FontAwesomeIcon icon={faCreditCard} className="cards" />;
const bussines = <FontAwesomeIcon icon={faBusinessTime} className="bussines" />;
const shoping = <FontAwesomeIcon icon={faShoppingCart} className="bussines" />;
const money = <FontAwesomeIcon icon={faMoneyBillWave} className="bussines" />;


export default class SubContainer extends Component {
    static contextType = IsMobileContext

    state = {
        isOpened: false
    }

    toggleOpen = () => {
        if (this.context.isMobile) {
            this.setState({isOpened: !this.state.isOpened})
        }
    }

    render() {
        const {children, trigger} = this.props
        const {Icon, text} = this.props

        return <li className={"item " + this.state.isOpened}>
            <a href="#" className="link" onClick={this.toggleOpen}>
                {trigger} {angle}
            </a>
            <div className="subContainer">
                {this.props.children}
            </div>
        </li>

    }
}