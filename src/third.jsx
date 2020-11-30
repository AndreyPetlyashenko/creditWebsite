import React from "react";
import StarsBar from "./components/stars";
import Stars from "./components/stars";

import Card1 from "./Data/cardsImg/card1.jfif";
import Card2 from "./Data/cardsImg/card2.jfif";
import Card3 from "./Data/cardsImg/card3.jfif";

export default class ThirdBlock extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="features">
          <div class="featureContainer">
            <div class="imgContainer">
              <img src={Card1} alt="card1" />
            </div>
            <div class="dataContainer">
              <h2>American Express Gold Card</h2>
              <div class="evaluationContainer">
                <p>iExcelente!</p>
                <StarsBar />
                <p> 19 oponioniones</p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                labore molestias, voluptatibus perferendis rem provident, fuga
                deserunt ab accusamus praesentium quos dolore ratione excepturi
                commodi enim non maiores magni odit consectetur voluptas velit
                laboriosam!
              </p>
              <a href="#">Show more</a>
            </div>
            <div class="buttonContainer">
              <a href="#">Pedir ahora</a>
              <a href="#" className="detailsButton">
                Mas detalles
              </a>
            </div>
          </div>
          <div class="featureContainer">
            <div class="imgContainer">
              <img src={Card2} alt="card1" />
            </div>
            <div class="dataContainer">
              <h2>American Express Gold Card</h2>
              <div class="evaluationContainer">
                <p>iExcelente!</p>
                <StarsBar />
                <p> 19 oponioniones</p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                labore molestias, voluptatibus perferendis rem provident, fuga
                deserunt ab accusamus praesentium quos dolore ratione excepturi
                commodi enim non maiores magni odit consectetur voluptas velit
                laboriosam!
              </p>
              <a href="#">Show more</a>
            </div>
            <div class="buttonContainer">
              <a href="#">Pedir ahora</a>
              <a href="#" className="detailsButton">
                Mas detalles
              </a>
            </div>
          </div>
          <div class="featureContainer">
            <div class="imgContainer">
              <img src={Card3} alt="card1" />
            </div>
            <div class="dataContainer">
              <h2>American Express Gold Card</h2>
              <div class="evaluationContainer">
                <p>iExcelente!</p>
                <StarsBar />
                <p> 19 oponioniones</p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                labore molestias, voluptatibus perferendis rem provident, fuga
                deserunt ab accusamus praesentium quos dolore ratione excepturi
                commodi enim non maiores magni odit consectetur voluptas velit
                laboriosam!
              </p>
              <a href="#">Show more</a>
            </div>
            <div class="buttonContainer">
              <a href="#">Pedir ahora</a>
              <a href="#" className="detailsButton">
                Mas detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
