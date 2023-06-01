import React from 'react';

const Words = ({ nextKey }) => {
  return (
    <div>
      <h2 style={{"textAlign":"center"}}>Write the shown letter</h2>
     <strong><h1 style={{"textAlign":"center"}}>{nextKey}</h1></strong>
    </div>
  );
};

export default Words;
