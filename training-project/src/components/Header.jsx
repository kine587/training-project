import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="training">Training</Link>
        <Link to="training-logg">Training Log</Link>
      </nav>
    </div>
  );
}
