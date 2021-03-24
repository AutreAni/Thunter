
import React from 'react';
import Network from './Network'

const NetworkIndex = () => {

  return ( 
    <div className="networkDiv">
    <h6 style={{textAlign:'center'}}> Audience you may know </h6>
    <div className="networkClass">
      <Network  />
      <Network  />
      <Network  /> 
      <Network  />
    </div>
    </div>
   );
}
 
export default NetworkIndex;