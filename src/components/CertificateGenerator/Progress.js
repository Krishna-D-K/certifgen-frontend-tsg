import React from "react"
import PropTypes from "prop-types"
import './certif.css';

const Progress = ({ percentage, display }) => {
  if (percentage === 100) {
    setTimeout(() => {
      alert('Done!');
    }, 1000)
    return (
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{ width: `${percentage}%` }}
        >
          {percentage}%
        </div>
      </div>
    )
  }
  else if (display === true) {
    return (
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{ width: `${percentage}%` }}
        >
          {percentage}%
        </div>
      </div>
    );
  }
  else {
    return null;
  }
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
}

export default Progress
