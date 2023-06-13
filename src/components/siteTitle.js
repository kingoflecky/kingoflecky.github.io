import React from "react";
import { Link } from "react-router-dom";
import "../css/components/siteTitle.css";
import Navbar from "./navbar";

const SiteTitle = () => {
  return (
    <div className="header">
      <div className="title">
        <Link to="/">LEWIS QUINN</Link>
      </div>
      <Navbar />
    </div>
  );
};

export default SiteTitle;
