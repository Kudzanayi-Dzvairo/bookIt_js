import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Rooms = (children, hero) => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our Rooms"></Banner>
      <Link to="/" className="btn-primary">
        Home
      </Link>
    </Hero>
  );
};

export default Rooms;
