import React from "react";
import "../../css/pages/portfolio.css"

function Portfolio() {
    return (
        <div className="portfolioGridContainer">
            <div className="portfolioMenu">

                <a className="portfolioMenuItem" id="landscapeItm"><h3>Photography: Landscape and Travel</h3></a>
                <a className="portfolioMenuItem" id="peopleItm"><h3>Photography: People and Lifestyle</h3></a>
                <a className="portfolioMenuItem" id="commercialItm"><h3>Photography: Commercial</h3></a>
                <a className="portfolioMenuItem" id="videographyItm"><h3>Videography</h3></a>
            </div>
        </div>
    )
}

export default Portfolio;
