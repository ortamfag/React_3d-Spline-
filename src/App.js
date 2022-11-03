import Spline from "@splinetool/react-spline"
import styled from "styled-components";

import Logo from "./img/logo.svg"
import IconLaptop from "./img/icon-laptop.svg"
import IconTwitter from "./img/icon-twitter.svg"
import IconYoutube from "./img/icon-youtube.svg"
// https://prod.spline.design/kawiEuZSwu47-mT7/scene.splinecode
function App() {
  return (
    <>
      <Wrapper>
        <Spline className="spline" scene="https://prod.spline.design/1fSZT984SpBsEtCF/scene.splinecode" />
        <Content>
          <Menu>
            <li><img src={Logo} alt="logo"/></li>
            <li><p>Home</p></li>
            <li><p>Download</p></li>
            <li><p>App</p></li>
            <li><p>Login</p></li>
            <li><button>Get Started</button></li>
          </Menu>
          <h1>Collaborate with people</h1>
          <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p> 
          <button> 
            <img src = {IconLaptop} alt="Download" /> Download for Mac
          </button>
        </Content>
        <Social>
          <div/>
          <img src={IconTwitter} alt="Twitter"/>
          <img src={IconYoutube} alt="Youtube"/>
        </Social>
      </Wrapper>
      
    </>
  );
}

export default App;

const Wrapper = styled.div`
  max-height: 100vh;
  font-family: 'Spline Sans', sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }

    @media (max-width: 800px) {
      transform: scale(0.7) translate(600px);
    }

    @media (max-width: 600px) {
      transform: scale(0.5) translate(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    
    @media (max-width: 375px) {
      transform: scale(0.45) translate(-50px)
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: 'Spline Sans Mono', monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 300px;
    }

    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }

    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);
    cursor: pointer;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    
    transition: 0.4s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
}

  }

  h1, p, button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    p {
      padding: 8px 20px;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;
      cursor: pointer;

      :hover {
        border: 1px solid rgba(255,255,255, 0.2)
      }
    }
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(180deg, #08B6F9 0%, #6C56EF 33.57%, #1306DD 65.86%, #AA0EB2 100%);
  }   
`;