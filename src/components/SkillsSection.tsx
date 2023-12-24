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
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Sprout</li>
              <li className="list-group-item">WebFlow</li>
              <li className="list-group-item">SEO</li>
            </ul>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <h3 className="card-header">
              <FaPenNib className="icon" /> Design
            </h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Canva</li>
              <li className="list-group-item">Photoshop</li>
              <li className="list-group-item">SOMETHING ELSE</li>
            </ul>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <h3 className="card-header">
              <FaStar className="icon" /> Other
            </h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Microsoft Office</li>
              <li className="list-group-item">Slack</li>
              <li className="list-group-item">Responsive Design</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
