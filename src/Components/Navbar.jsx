
function Navbar() {
  return (
  <>
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Mag's resident</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">rooms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">contact us</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar