import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../../public/logo.jpg";
import MobileMenu from "../Mobile Menu/MobileMenu";
import Hamburger from "hamburger-react";

const Header = () => {
  const location = useLocation();

  const [isOpen, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Our Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>

          <div className={styles.hamburgerIcon}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={25}/>
          </div>
        </div>

        <div className={styles.headerBottom}>
          <ul>
            {menuItems.map((item) => {
              return (
                <li
                  key={item.name}
                  className={
                    location.pathname === item.path ? styles.active : ""
                  }
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.mobileMenu}>{isOpen && <MobileMenu />}</div>
      </div>
    </>
  );
};

export default Header;
