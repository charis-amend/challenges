import "./styles.css";

// import avatar from "./img/avatar.jpg";
// import logo from "./img/logo.jpg";

import Header from "./components/Header.js"
import Navigation from "./components/Navigation.js";
import Links from "./components/Link.js";
import Logo from "./components/Logo.js";
import Avatar from "./components/Avatar.js";
// import Image from "./components/Image.js";

export default function App() {
  return (
    <>
      <Header>
        <Logo />

        <Navigation>
          <Links href="#Home">Home</Links>

          <Links href="#About">About</Links>
          <Links href="#Impressum">Impressum</Links>
        </Navigation>
        <Avatar />
      </Header>



      {/* 
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button> */}
      <main>content goes here…</main>
    </>
  );
}


