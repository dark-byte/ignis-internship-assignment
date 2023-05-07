import { Link } from "react-router-dom";

const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1DB3pm3iFuy2WAY4FPwAU0iDkipslRheMgUgZhwj5qQI8jAeu3-dyh6XVsgpkEHb9A&usqp=CAU"
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={img} alt="Logo" />
        <input type="text" placeholder="Search" />
      </div>
      <ul className="links">
        <li><a href="#">Global</a></li>
        <li><a href="#">Local</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
