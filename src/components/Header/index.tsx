import "./styles.scss";
import routes from "@/routes/routes";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link className="header-left" to={"/"}>
        <img alt="" src={require("@/assets/images/logo.png")} />
        <span>Bigyeong Moto</span>
      </Link>
      <div className="header-right">
        <Link to={`${routes.upload}`}>Upload</Link>
      </div>
    </header>
  );
};

export default Header;
