import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import logo from "../../assets/crown.jpg";
import "./navigation.styles.scss";
// import { ReactComponent as crwnlogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
      <Link className="logo-container" to={"/"}>
        {/* <crwnlogo className="logo" /> */}
        <img src={logo} alt="crwn_logo" />
      </Link>
        <div className="navigation-side">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          <Link className="nav-link" to={"/sign-in"}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
