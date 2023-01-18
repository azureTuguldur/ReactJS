import "./Navbar.css";
function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-1">
        <h1>My-Portfolio</h1>
      </div>
      <div className="nav-2">
        <a className="Home">Home</a>
        <a className="Skill">Skill</a>
        <a className="Project">Project</a>
        <a className="About">About</a>
        <a className="Contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
