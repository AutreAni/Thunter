
import React from 'react';
import Network from './Network'
// import './network.css'

const NetworkIndex = () => {

  return (
    <div className="network">
      <span className="network__title"> People you may reach </span>
      <div className="network__wrapper">
        <Network />
        <Network />
        <Network />
        <Network />
      </div>
    </div>
  );
}

export default NetworkIndex;