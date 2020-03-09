import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import StoreIcons from "../img/storeIcons.png";

const Container = styled("div")`
  background-image: url(${StoreIcons});
  background-size: cover;
  background-position: ${props => {
    if (props.brand === "apple") {
      return "top";
    }
    if (props.brand === "google") {
      return "bottom";
    }
  }};
  height: 63px;
  width: 200px;
  overflow: hidden;
`;

const links = {
  apple: "https://apps.apple.com/us/app/grainsconnect/id1484727580",
  google: "https://play.google.com/store/apps/details?id=ag.bushel.scaletickets.grainsconnect"
};

const handleOnClick = event => {
  event.preventDefault();
  const brand = event.currentTarget.dataset.brand;
  window.open(links[brand], "_blank");
};

function AppStore(props) {
  return (
    <div>
      <Container brand={props.brand} data-brand={props.brand} onClick={handleOnClick}></Container>
    </div>
  );
}

AppStore.propTypes = { brand: PropTypes.string.isRequired };

export default AppStore;
