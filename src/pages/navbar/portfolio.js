import React from "react";
import "../../css/pages/portfolio.css"

function Portfolio() {
    return (
        <div className="portfolioGridContainer">
            <div className="portfolioMenu">

                <a href="#landscape" className="portfolioMenuItem" id="landscapeItm"><h2>Photography: Landscape and Travel</h2></a>
                <a href="#people" className="portfolioMenuItem" id="peopleItm"><h2>Photography: People and Lifestyle</h2></a>
                <a href="#commercial" className="portfolioMenuItem" id="commercialItm"><h2>Photography: Commercial</h2></a>
                <a href="#video" className="portfolioMenuItem" id="videographyItm"><h2>Videography</h2></a>
            </div>
        </div>
    )
}

export default Portfolio;
