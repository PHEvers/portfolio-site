import "../styles/navbar.css";

export function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-container">

        <h2 className="logo">
          Pedro Evers
        </h2>

        <ul className="menu">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#experiencias">Experiências</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contato">Contato</a></li>
        </ul>

      </nav>
    </header>
  );
}