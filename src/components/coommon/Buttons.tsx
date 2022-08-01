import {Button} from "@mui/material";
import React from 'react';






function Buttons(props:any) {
  return (
    <div className="button" >

      <Button variant="contained" sx={{position:"absolute",right:20, top:10}} color="error"  onClick={props.onClick}>В корзину</Button>

    </div>
  );
}

export default Buttons;