import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Welcome to Movix.com, your ultimate destination for all things movies
          and TV shows! Explore our vast library of cinematic delights,
          featuring a diverse collection of films spanning various genres and
          television series from around the globe. From thrilling action-packed
          blockbusters to captivating dramas, side-splitting comedies, and
          binge-worthy TV shows, Movix.com is your one-stop-shop for
          entertainment. Stay up-to-date with the latest releases, exclusive
          content, and behind-the-scenes insights. Whether you're a movie buff,
          TV aficionado, or simply looking for your next binge-watch, Movix.com
          has something for every taste and mood. Join our community of fellow
          cinephiles and TV enthusiasts today, and let's elevate your viewing
          experience together!
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
