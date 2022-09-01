import "./header.scss";
import logo from "../../assets/icons/logo.svg";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link className="header-container__left" to="/contacts">
        <img className="header-container__left__logo" src={logo} alt="logo" />
        <h1 className="header-container__left__title">Contacts</h1>
      </Link>
      <div className="header-container__right">
        <Link to="/contacts/new">
          <button>
            <PlusOutlined /> Add new contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
