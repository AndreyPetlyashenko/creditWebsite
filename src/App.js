import "./App.scss";
import "./styles/second.scss";
import "./styles/header.scss";
import "./styles/third.scss";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleDown,
  faCreditCard,
  faBusinessTime,
  faShoppingCart,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import SecondBlock from "./second";
import ThirdBlock from "./third";
const angle = <FontAwesomeIcon icon={faAngleDown} className="cards" />;
const cards = <FontAwesomeIcon icon={faCreditCard} className="cards" />;
const bussines = <FontAwesomeIcon icon={faBusinessTime} className="bussines" />;
const shoping = <FontAwesomeIcon icon={faShoppingCart} className="bussines" />;
const money = <FontAwesomeIcon icon={faMoneyBillWave} className="bussines" />;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false,
      lock: false,
    };
  }
  showMobileMenu = async () => {
    await this.setState({
      isMenuActive: !this.state.isMenuActive,
      lock: !this.state.lock,
      isSubMenuActive: false,
    });

    if (this.state.lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };
  subMenuToggle = () => {
    if (this.state.isMenuActive) {
      this.setState({
        isSubMenuActive: !this.state.isSubMenuActive,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <div className={"logoContainer" + this.state.isMenuActive}>
            <a href="#">Tarjetos de credito.com.yu</a>
          </div>
          <nav className={"headerMenu " + this.state.isMenuActive}>
            <ul className="listItem">
              <li className="item">
                <a href="#" className="link">
                  Tipo de tarjeta <span>{angle}</span>
                </a>
              </li>
              <li className={"item " + this.state.isSubMenuActive}>
                <a href="#" className="link" onClick={this.subMenuToggle}>
                  Categorias <span>{angle}</span>
                </a>
                <div className="subContainer">
                  <div class="subListContainer">
                    <ul className="subList">
                      <li className="subitem">
                        <a href="#"> {cards} Best Credit Cards</a>
                        <i class="fab fa-cc-stripe"></i>
                      </li>
                      <li className="subitem">
                        <a href="#">{bussines} Rewards</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{shoping} Sign-up Bonuses</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{money} Cash Back</a>
                      </li>
                    </ul>
                  </div>
                  <div class="subListContainer">
                    <ul className="subList">
                      <li className="subitem">
                        <a href="#">{cards} Balance Transfer</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{bussines} 0% APR</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{shoping} No Annual Fee</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{money} Low Interest</a>
                      </li>
                    </ul>
                  </div>
                  <div class="subListContainer">
                    {" "}
                    <ul className="subList">
                      <li className="subitem">
                        <a href="#">{cards} Travel</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{bussines} Airline</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{shoping} Hotel</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{money} No Foreign Transaction Fee</a>
                      </li>
                    </ul>
                  </div>
                  <div className="subListContainer">
                    <ul className="subList">
                      <li className="subitem">
                        <a href="#">{cards} Bussiness</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{bussines} Student</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{shoping} Gas</a>
                      </li>
                      <li className="subitem">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li
                className={"item " + this.state.isSubMenuActive}
                onClick={this.subMenuToggle}
              >
                <a href="#" className="link" onClick={this.subMenuToggle}>
                  Bancos y emosires <span>{angle}</span>
                </a>
                <div className="subContainer">
                  <div class="subListContainer">
                    <ul className="subList">
                      <li className="subitem">
                        <a href="#"> {cards} Best Credit Cards</a>
                        <i class="fab fa-cc-stripe"></i>
                      </li>
                      <li className="subitem">
                        <a href="#">{bussines} Rewards</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{shoping} Sign-up Bonuses</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{money} Cash Back</a>
                      </li>
                    </ul>
                  </div>
                  <div class="subListContainer">
                    <ul className="subList">
                      <li className="subitem">
                        <a href="#">{cards} Balance Transfer</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{bussines} 0% APR</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{shoping} No Annual Fee</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{money} Low Interest</a>
                      </li>
                    </ul>
                  </div>
                  <div class="subListContainer">
                    {" "}
                    <ul className="subList">
                      <li className="subitem">
                        <a href="#">{cards} Travel</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{bussines} Airline</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{shoping} Hotel</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{money} No Foreign Transaction Fee</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Ayuda <span>{angle}</span>
                </a>
                <div className="subContainer lastLink">
                  <div class="subListContainer">
                    <ul className="subList">
                      <li className="subitem">
                        <a href="#"> {cards} Best Credit Cards</a>
                        <i class="fab fa-cc-stripe"></i>
                      </li>
                      <li className="subitem">
                        <a href="#">{bussines} Rewards</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{shoping} Sign-up Bonuses</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{money} Cash Back</a>
                      </li>
                    </ul>
                  </div>
                  <div class="subListContainer">
                    <ul className="subList">
                      <li className="subitem">
                        <a href="#">{cards} Balance Transfer</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{bussines} 0% APR</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{shoping} No Annual Fee</a>
                      </li>
                      <li className="subitem">
                        <a href="#">{money} Low Interest</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <div class="containerMail">
              <a href="#" className="link">
                Recibir ofertas
              </a>
            </div>
          </nav>
          <div
            onClick={this.showMobileMenu}
            className={"headerBurger " + this.state.isMenuActive}
          >
            <span></span>
          </div>
        </header>
        <SecondBlock />
        <ThirdBlock />
      </div>
    );
  }
}
