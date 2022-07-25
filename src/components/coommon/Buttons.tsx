import {Button} from "@mui/material";
import React from 'react';
import theme from "../../styles/Theme";




function Buttons(props:any) {
  return (
    <div className="button">
      <Button variant="contained" color="error"   >В корзину</Button>
    </div>
  );
}

export default Buttons;