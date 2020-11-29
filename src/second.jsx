import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {RegularIcon} from "@fortawesome/fontawesome-svg-core"

import { faArrowRight, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import ImgBloomberg from "./Data/imgNewsPappers/bloomberg.png";
import ImgEnt from "./Data/imgNewsPappers/ent.png";
import ImgFox from "./Data/imgNewsPappers/fox.png";
import ImgNew from "./Data/imgNewsPappers/new.png";
import ImgRep from "./Data/imgNewsPappers/rep.png";
import ImgWall from "./Data/imgNewsPappers/wall.png";

const arrow = <FontAwesomeIcon icon={faArrowRight} className="cards" />;
const thumbUp = <FontAwesomeIcon icon={faThumbsUp} className="cards" />;

export default class SecondBlock extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="content">
          <div class="titleContainer">
            <h1>Las Merjores tarjetas de credito en Uruguay</h1>
            <p>
              Compara, informate y elegi la terjeta de credito o debito ideal
              para vas
            </p>
          </div>
          <div class="buttonsContainer">
            <a href="#">
              Que sea gratis <span>{arrow}</span>
            </a>
            <a href="#">
              Que sea gratis <span>{arrow}</span>
            </a>
            <a href="#">
              Que sea gratis <span>{arrow}</span>
            </a>
            <a href="#">
              Que sea gratis <span>{arrow}</span>
            </a>
            <a href="#">
              Que sea gratis <span>{arrow}</span>
            </a>
            <a href="#">
              Que sea gratis <span>{arrow}</span>
            </a>
            <a href="#">
              Sian cambiar de banco <span>{arrow}</span>
            </a>
            <a href="#">
              Sian cambiar de banco <span>{arrow}</span>
            </a>
            <a href="#">
              Sian cambiar de banco <span>{arrow}</span>
            </a>
            <a href="#">
              Sian cambiar de banco <span>{arrow}</span>
            </a>
            <a href="#">
              Sian cambiar de banco <span>{arrow}</span>
            </a>
            <a href="#">
              Sian cambiar de banco <span>{arrow}</span>
            </a>
            <a href="#">
              Las mejores tarjetas de credito <span>{arrow}</span>
            </a>
            <a href="#">
              Las mejores tarjetas de credito <span>{arrow}</span>
            </a>
            <a href="#">
              Las mejores tarjetas de credito <span>{arrow}</span>
            </a>
            <a href="#">
              Que sea gratis <span>{arrow}</span>
            </a>
            <a href="#">
              Que sea gratis <span>{arrow}</span>
            </a>
            <a href="#">
              Que sea gratis <span>{arrow}</span>
            </a>
          </div>
          <div class="newspaperContainer">
            <p>As seen on: </p>
            <img src={ImgBloomberg} alt="bloomberIMG" />
            <img src={ImgEnt} alt="bloomberIMG" />
            <img src={ImgFox} alt="bloomberIMG" />
            <img src={ImgNew} alt="bloomberIMG" />
            <img src={ImgRep} alt="bloomberIMG" />
            <img src={ImgWall} alt="bloomberIMG" />
          </div>
          <div class="likeShareContainer">
            <a href="#">{thumbUp} like</a>
            <a href="#">Share</a>
            <p>4.7 mill. people like this. Be the first of your friends.</p>
          </div>
        </div>
      </div>
    );
  }
}
