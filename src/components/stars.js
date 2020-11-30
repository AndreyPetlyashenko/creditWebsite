// import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faStar } from "@fortawesome/free-solid-svg-icons";

// const star = <FontAwesomeIcon icon={faStar} className="cards" />;

// const Stars = ({ stars, starsHandler }) => {
//   return (
//     <div className="starContainer">
//       <span className="star1" onClick={starsHandler} name="star1" id="star1">
//         {star}
//       </span>
//       <span className="star2" onClick={starsHandler}>
//         {star}
//       </span>
//       <span className="star3" onClick={starsHandler}>
//         {star}
//       </span>
//       <span className="star4" onClick={starsHandler}>
//         {star}
//       </span>
//       <span className="star5" onClick={starsHandler}>
//         {star}
//       </span>
//     </div>
//   );
// };
// export default Stars;

import React from "react";

import StarRatings from "react-star-ratings";

export default class StarsBar extends React.Component {
  state = {
    rating: 2,
  };
  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating,
    });
  };

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="yellow"
        changeRating={this.changeRating}
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="2px"
      />
    );
  }
}
