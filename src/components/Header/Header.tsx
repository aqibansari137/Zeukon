import menuLinks from "@/data/navigation.json";
import "./headerStyles.scss";

interface MenuDataType {
  title: string;
  href: string;
  submenus?: {
    title: string;
    href: string;
  }[];
}

export const Header = () => {
  return (
    <header>
      <div className="header-content main-container">
        <a className="logo" href="/">
          Logo
        </a>
        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar">Menu</label>

        <nav className="navbar">
          <ul>
            {menuLinks.menusLinks.map((item: MenuDataType, i) => {
              return (
                <li key={i}>
                  <a href={item.href}>{item.title}</a>
                  {item.submenus && (
                    <ul>
                      {item.submenus.map((subItem, ind) => {
                        return (
                          <li key={ind}>
                            <a href={subItem.href}>{subItem.title}</a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
