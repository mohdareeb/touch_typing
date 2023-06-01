import React, { useState } from 'react';

const Typing = ({ currentKey, handleKeyPress }) => {

  const [typed_key,setType_key]=useState('');
  let damy_key="";
  const handleChange = (e) => {
    handleKeyPress(e.target.value);
    // damy_key=typed_key+e;

  };
  // setType_key(damy_key);
  // handleKeyPress(typed_key);

  return (

    <div style={{"textAlign":'center'}}>
      <input type="text" style={{"textAlign":'center'}} autoFocus value={currentKey} onChange={handleChange} />
    </div>
  );
};

export default Typing;

