import './style.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="copyright">
              &copy; 2024 gaminatorium.eu
            </p>
          </div>
          <div className="col-md-6">
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/gaminatorium" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/gaminatorium/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <p className="follow-us">FOLLOW US</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;