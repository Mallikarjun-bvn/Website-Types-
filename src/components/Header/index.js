import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">MK</p>
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
