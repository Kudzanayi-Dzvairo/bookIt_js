import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Hero hero="defaultHero">
      <Banner
        title="luxurious rooms"
        subtitle="deluxe room starting at $499"
      ></Banner>
      <Link to="/rooms" className="btn-primary">
        Our Rooms
      </Link>
    </Hero>
  );
};

export default Home;
