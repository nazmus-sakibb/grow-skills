import React from "react";
import './CourseSidebar.css'

const Sidebar = () => {
  return (
    <div className="course-sidebar d-flex flex-column justify-content-between col-md-3 py-1 px-1 fw-bold text-white ms-5">
      <div>
        <h4>Courses</h4>
        <h2>Intro to Blockchain</h2>
      </div>
      <div className="mt-5">
        <h3>Week-1</h3>
        <div className="sidebar-item">
          <ul>
            <li>Introduction</li>
            <li>Introduction</li>
            <li>Introduction</li>
          </ul>
        </div>
        <div className="mt-5">
          <h3>Week-2</h3>
          <ul>
            <li>Introduction</li>
            <li>Introduction</li>
            <li>Introduction</li>
          </ul>
        </div>
        <div className="mt-5">
          <h3>Week-3</h3>
          <ul>
            <li>Introduction</li>
            <li>Introduction</li>
            <li>Introduction</li>
          </ul>
        </div>
        <div className="mt-5">
          <h3>Week-4</h3>
          <ul>
            <li>Introduction</li>
            <li>Introduction</li>
            <li>Introduction</li>
          </ul>
        </div>
        <div className="mt-5">
          <h3>Week-5</h3>
          <ul>
            <li>Introduction</li>
            <li>Introduction</li>
            <li>Introduction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
