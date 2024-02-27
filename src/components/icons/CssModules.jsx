import React from 'react';
import PropTypes from 'prop-types';

export function CssModules({ className, size }) {
  const [width, height] = [size];

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
    >
      <g
        className={`${className} !stroke-none`}
        transform="translate(3.7129 -62.36)"
      >
        <g transform="matrix(1.8595,0,0,1.8595,-30.174,333.87)">
          <path d="m105.49 108.89q12.261 0 19.028 6.46 6.7676 6.46 7.5146 14.678h-8.5254q-1.4502-6.2402-5.8008-9.8877-4.3066-3.6475-12.129-3.6475-9.5361 0-15.425 6.7236-5.8447 6.6797-5.8447 20.522 0 11.338 5.2734 18.413 5.3174 7.0312 15.82 7.0312 9.668 0 14.722-7.4268 2.6807-3.9111 3.999-10.283h8.5254q-1.1426 10.195-7.5586 17.095-7.6904 8.3057-20.742 8.3057-11.25 0-18.896-6.8115-10.063-9.0088-10.063-27.817 0-14.282 7.5586-23.423 8.1738-9.9316 22.544-9.9316zm-1.7578 0z" />
          <path d="m149.04 154.37q0.30761 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1524-4.043-6.1524-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1192 4.8779 7.1192 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5478 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z" />
          <path d="m208.98 154.37q0.30762 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1523-4.043-6.1523-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1191 4.8779 7.1191 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5479 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z" />
          <path d="m78.063 223.14h12.524l18.545 54.58 18.413-54.58h12.393v64.556h-8.3057v-38.101q0-1.9775 0.0879-6.5478t0.0879-9.7998l-18.413 54.448h-8.6572l-18.545-54.448v1.9775q0 2.373 0.08789 7.251 0.13184 4.834 0.13184 7.1191v38.101h-8.3496v-64.556z" />
          <path d="m181.2 221.39q17.095 0 25.312 10.986 6.416 8.5693 6.416 21.929 0 14.458-7.3389 24.038-8.6133 11.25-24.565 11.25-14.897 0-23.423-9.8438-7.6025-9.4922-7.6025-23.994 0-13.096 6.5039-22.412 8.3496-11.953 24.697-11.953zm0.87891 60.381q11.558 0 16.699-8.2617 5.1856-8.3057 5.1856-19.072 0-11.382-5.9766-18.325-5.9326-6.9434-16.26-6.9434-10.02 0-16.348 6.8994-6.3281 6.8555-6.3281 20.259 0 10.723 5.4053 18.105 5.4492 7.3389 17.622 7.3389zm-0.61523-60.381z" />
          <path d="m248.09 280.23q4.4385 0 7.2949-0.92285 5.0977-1.7139 8.3496-6.5918 2.5928-3.9111 3.7354-10.02 0.65918-3.6475 0.65918-6.7676 0-11.997-4.79-18.633-4.75-6.63-15.34-6.63h-15.513v49.57h15.601zm-24.39-57.085h26.147q13.315 0 20.654 9.4482 6.5478 8.5254 6.5478 21.841 0 10.283-3.8672 18.589-6.8115 14.678-23.423 14.678h-26.06v-64.556z" />
          <path d="m297.83 223.14v39.902q0 7.0312 2.6367 11.689 3.9111 7.0312 13.184 7.0312 11.118 0 15.117-7.6025 2.1533-4.1309 2.1533-11.118v-39.902h8.877v36.255q0 11.909-3.208 18.325-5.8887 11.689-22.236 11.689-16.348 0-22.192-11.689-3.208-6.416-3.208-18.325v-36.255h8.877zm16.567 0z" />
          <path d="m353.21 223.14h8.7451v56.865h32.695v7.6904h-41.44v-64.556z" />
          <path d="m404.14 223.14h47.065v7.9102h-38.54v19.6h35.64v7.4707h-35.64v21.885h39.199v7.6904h-47.725v-64.556zm23.862 0z" />
          <path d="m469.13 266.87q0.30762 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1523-4.043-6.1523-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1191 4.8779 7.1191 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5479 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z" />
        </g>
        <rect
          className={`${className} !fill-none`}
          height="695.02"
          width="695.02"
          stroke="#171717"
          y="214.85"
          x="72.492"
          strokeWidth="5"
        />
      </g>
    </svg>
  );
}

CssModules.defaultProps = {
  className: '',
  size: 64,
};

CssModules.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CssModules;
