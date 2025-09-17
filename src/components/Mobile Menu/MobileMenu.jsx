import styles from "./MobileMenu.module.css";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Our Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={styles.mobileMenuItems}>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.name} className={styles.menuItem}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
