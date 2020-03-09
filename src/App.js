import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import futures from "./img/futures.png";
import cashbids from "./img/cashbids.png";
import usage from "./img/grains-connect-app-usage-bg.jpg";
import intro from "./img/grains-connect-app-intro-bg.jpg";

import AppStore from "./components/AppStore";
import "../node_modules/animate.css/animate.min.css";

const StyledDiv = styled("div")`
  background-image: url(${props => props.image});
  background-attachment: fixed;
  overflow: scroll;
`;

const Intro = styled("div")`
  background: no-repeat bottom center url(${props => props.image});
  height: 100vh;
  padding: 100px;
  color: #fff;
  font-size: 70px;
  box-sizing: border-box;
`;

const Block1 = styled("div")`
  padding: 100px;
  margin: 25px;
  height: 100vh;
`;

const TitleBlockLeft = styled("div")`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-style: normal;
  background: rgb(255, 255, 255)
    linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(191, 213, 64, 1) 90%);
  border-radius: 10px;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  font-size: 1.8em;
  height: 40px;
  width: 110%;

  padding: 1em 1em 1em 8em;
  position: absolute;
  top: ${props => (props.top ? props.top : null)};
  left: ${props => (props.left ? props.left : null)};
  color: #00467f;
`;
const TitleBlockRight = styled("div")`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-style: normal;
  background: rgb(255, 255, 255)
    linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, rgba(191, 213, 64, 1) 90%);
  border-radius: 10px;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  margin-left: -10em;
  font-size: 1.8em;
  height: 40px;
  width: 88%;
  text-align: right;
  padding: 1em 6em 1em 1em;
  position: absolute;
  top: ${props => (props.top ? props.top : null)};
  left: ${props => (props.left ? props.left : null)};
  color: #00467f;
`;

const BorderDecoration = styled("div")`
  position: absolute;
  background: none;
  border-radius: 10px;
  border-color: #6ecaca;
  border-width: 2px;
  border-style: solid;
  font-size: 1.8em;
  height: 1.7em;
  width: ${props => (props.width ? props.width : null)};

  left: ${props => (props.left ? props.left : null)};
  color: #6ecaca;

  top: ${props => (props.top ? props.top : null)};
`;

const TextBlock = styled("div")`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.8em;
  text-align: ${props => props.align};
  max-width: 40em;
  padding: 1em 1em 1em 17.9em;
  margin-top: 1.7em;
`;

const Futures = styled("img")`
  position: absolute;
  top: 300px;
`;

const StyledImg = styled("img")`
  position: absolute;
  z-index: -10;
  top: ${props => (props.top ? `${props.top}` : null)};
  left: ${props => (props.left ? `${props.left}` : null)};
`;

function App() {
  return (
    <StyledDiv image={usage} className="App">
      <Intro image={intro}>
        <AppStore brand="apple"></AppStore>
        <AppStore brand="google"></AppStore>
        The Grains Connect App{" "}
      </Intro>
      <Block1 bgcolor="grey" image={usage}>
        <ScrollAnimation animateIn="slideInRight" animateOnce duration={0.8}>
          <TitleBlockLeft>
            WHAT IS THE GRAINSCONNECT APP?
            <ScrollAnimation animateIn="slideInRight" duration={0.8}>
              <BorderDecoration top="-.9em" left="-0.8em" width="62%" />
            </ScrollAnimation>
          </TitleBlockLeft>
          <TextBlock align="left" top="100" left="-50">
            An app from GrainCorp and GrainsConnect Canada. Connect via your mobile device (or
            desktop) for information on pricing and bids, contracts, scale tickets, prepaids,
            commodity balances and market information.
          </TextBlock>
        </ScrollAnimation>

        <ScrollAnimation animateIn="slideInLeft" animateOnce duration={1.2}>
          <StyledImg alt="futures" height="400px" top={"-52px"} src={futures} />
        </ScrollAnimation>

        {/*  */}
        <ScrollAnimation animateIn="slideInLeft" animateOnce duration={2}>
          <TitleBlockRight top={"18em"}>
            WHY IS IT USEFUL?
            <ScrollAnimation animateIn="slideInRight" duration={0.8}>
              <BorderDecoration top="-.9em" left="60%" width="20em" />
            </ScrollAnimation>
          </TitleBlockRight>
          <TextBlock align="right" top="600" left="-50">
            Improve the management of your farm with easily accessible information and tools that
            will improve business and operations performance.
          </TextBlock>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight" animateOnce duration={2}>
          <StyledImg alt="Cash Bids" height="400px" top={"380px"} left={"80%"} src={cashbids} />
        </ScrollAnimation>
      </Block1>

      {/* <Block1 bgcolor="grey" image={usage}>
        <ScrollAnimation
          animateIn="slideInRight"
          // animateOnce
          duration={2}
        >
          <TitleBlock>
            WHAT IS THE GRAINSCONNECT APP?
            <ScrollAnimation animateIn="slideInRight" duration={2}>
              <BorderDecoration top="-.9em" />
            </ScrollAnimation>
          </TitleBlock>
          <TextBlock align="left" top="100" left="-50">
            An app from GrainCorp and GrainsConnect Canada. Connect via your mobile device (or
            desktop) for information on pricing and bids, contracts, scale tickets, prepaids,
            commodity balances and market information.
          </TextBlock>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="slideInLeft"
          // animateOnce
          duration={1}
        >
          <StyledImg alt="futures" height="400px" top={-52} src={futures} />
        </ScrollAnimation>
      </Block1> */}
      {/* <Block1 bgcolor="yellow">
        <ScrollAnimation animateIn="slideInLeft" animateOnce duration={1}>
          <img alt="futures" height="400px" src={futures} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight" animateOnce duration={2}>
          <TitleBlock>WHY IS IT USEFUL?</TitleBlock>
          <TextBlock align="right">
            Improve the management of your farm with easily accessible information and tools that
            will improve business and operations performance.
          </TextBlock>
        </ScrollAnimation>
      </Block1>
      <Block1 bgcolor="yellow">
        <ScrollAnimation animateIn="slideInLeft" animateOnce duration={1}>
          <img alt="futures" height="400px" src={futures} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight" animateOnce duration={2}>
          <TitleBlock>WHERE DO I GET IT?</TitleBlock>
          <TextBlock align="left">
            Visit the App Store (Apple) or Google Play (Android) and search for GrainsConnect to
            download. Or contact your merchant at GrainCorp and they will assist.
          </TextBlock>
        </ScrollAnimation>
      </Block1>{" "}
      <Block1 bgcolor="yellow">
        <ScrollAnimation animateIn="slideInLeft" animateOnce duration={1}>
          <img alt="futures" height="400px" src={futures} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight" animateOnce duration={2}>
          <TitleBlock>HOW DO I USE IT?</TitleBlock>
          <TextBlock align="right">
            Your GrainCorp merchant can stop by and walk you through a tutorial and the various
            features of the app.
          </TextBlock>
        </ScrollAnimation>
      </Block1> */}
    </StyledDiv>
  );
}

export default App;
