// Footer.tsx
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons of your choice
import './styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-fluid footer">
      <div className="row">
        {/* Column 1: Copyright */}
        <div className="col-md-6">
          <p className="copyright">
            &copy; {currentYear} Hoffman. All rights reserved.
          </p>
        </div>

        {/* Column 2: Social Links */}
        <div className="col-md-6 text-right">
          <ul className="social-links">
            <li>
              <a href="https://www.instagram.com/heather.hoffman_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </li>
            
            <li>
              <a href="https://www.linkedin.com/in/heather-hoffman-1988bb193/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
