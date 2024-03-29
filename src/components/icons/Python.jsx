import React from 'react';
import PropTypes from 'prop-types';

function Python({ className, size }) {
  const [width, height] = [size];

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
    
    <rect x="10" y="0" width="20" height="40" rx="10" ry="5" mask="url(#lines)"/>
	<rect x="0" y="10" width="40" height="20" rx="5" ry="10" mask="url(#lines)"/>
	<circle cx="14.5" cy="5" r="1.85" fill="white" />
	<circle cx="25.5" cy="35" r="1.85" fill="white" />
	<mask id="lines">
		<rect id="bg" x="0" y="0" width="100%" height="100%" fill="white"/>
		<line x1="10" y1="9.5" x2="20" y2="9.5" stroke="black" />
		<line x1="20" y1="30.5" x2="30" y2="30.5" stroke="black" />
		<path d="m 9.5,30 c 0,-10 2.5,-10 10,-10 8.5,0 11,0 11,-10" stroke="black" fill="none" />
	</mask>
    </svg>
  );
}

Python.defaultProps = {
  className: '',
  size: 64,
};

Python.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Python;
