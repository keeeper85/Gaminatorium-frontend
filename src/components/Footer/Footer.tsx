import './style.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-left">
              © 2024 gaminatorium.eu
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-right">
              FOLLOW US
              <a href="#" className="social-icon facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

