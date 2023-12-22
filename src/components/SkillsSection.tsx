// SkillsSection.tsx
import React from 'react';
import { FaPenNib, FaChartBar, FaStar } from 'react-icons/fa'; 
import './styles/SkillsSection.css'; 

const SkillsSection: React.FC = () => {
  return (
    <section className="container mt-4 skills-section">
      <h2 className="display-3 font-weight-bold skills-heading">Skills</h2>
      <hr className="skills-divider" />
      <div className="row">

        <div className="col-sm-4">
          <div className="card">
            <h3 className="card-header">
              <FaChartBar className="icon" /> Marketing
            </h3>
            <ul className="card-body">
              <li>Sprout</li>
              <div className="card-divider"></div>
              <li>WebFlow</li>
              <div className="card-divider"></div>
              <li>SEO</li>
            </ul>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <h3 className="card-header">
              <FaPenNib className="icon" /> Design
            </h3>
            <ul className="card-body">
              <li>Canva</li>
              <div className="card-divider"></div>
              <li>Photoshop</li>
              <div className="card-divider"></div>
              <li>SOMETHING ELSE</li>
            </ul>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <h3 className="card-header">
              <FaStar className="icon" /> Other
            </h3>
            <ul className="card-body">
              <li>Microsoft Office</li>
              <div className="card-divider"></div>
              <li>Slack</li>
              <div className="card-divider"></div>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
