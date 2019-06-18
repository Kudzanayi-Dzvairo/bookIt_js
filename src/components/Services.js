import React, { Component } from "react";
import {
  FaUtensils,
  FaHiking,
  FaShuttleVan,
  FaWineGlass
} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaUtensils />,
        title: "Free Breakfast",
        info:
          "Lorem ipsum dolor sit amet consectur adipisidcing elit. Magnie, corptis!'"
      },

      {
        icon: <FaHiking />,
        title: "Endless Hiking Trails",
        info:
          "Lorem ipsum dolor sit amet consectur adipisidcing elit. Magnie, corptis!'"
      },

      {
        icon: <FaShuttleVan />,
        title: "Sunrise Safaris",
        info:
          "Lorem ipsum dolor sit amet consectur adipisidcing elit. Magnie, corptis!'"
      },

      {
        icon: <FaWineGlass />,
        title: "Wine Tasting",
        info:
          "Lorem ipsum dolor sit amet consectur adipisidcing elit. Magnie, corptis!'"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
