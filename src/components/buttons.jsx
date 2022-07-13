import {Button} from "@mui/material";
import React from 'react';

function Buttons({ onClick, children}) {
  return (
    <div className="button">
      <Button variant="contained" onClick={onClick} />
    </div>
  );
}

export default Button;