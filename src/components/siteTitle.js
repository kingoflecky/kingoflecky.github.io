import React from "react";
import { Link } from "react-router-dom";
import "../css/components/siteTitle.css";

const SiteTitle = () => {
  return (
      <div className="title">
        <Link to="/">LEWIS QUINN</Link>
      </div>
  );
};

export default SiteTitle;
