import {Button} from "@mui/material";
import React from 'react';



// @ts-ignore
function Buttons({ onClick, children}) {
  return (
    <div className="button">
      <Button variant="contained" onClick={onClick}>В корзину</Button>
    </div>
  );
}

export default Buttons;