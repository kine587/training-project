import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="training">Training</NavLink>
      </nav>
    </Header>
  );
}
