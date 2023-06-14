import SiteTitle from "./siteTitle";
import Navbar from "./navbar";
import '../css/components/header.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <SiteTitle />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
