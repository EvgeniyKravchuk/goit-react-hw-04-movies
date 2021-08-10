import {
  HeaderStyled,
  NavigationList,
  NavigationItem,
} from "./General.styled.jsx";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderStyled>
      <nav>
        <NavigationList>
          <NavigationItem>
            <NavLink to="/" exact className="link" activeClassName="active">
              Главная
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to="/movies" className="link" activeClassName="active">
              Поиск
            </NavLink>
          </NavigationItem>
        </NavigationList>
      </nav>
    </HeaderStyled>
  );
}
