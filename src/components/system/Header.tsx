import '../../styles/header.modules.scss';

import {AppBar, Toolbar, Typography} from "@mui/material";
import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between", backgroundColor:"rgba(38,38,38,0.95)" }}>
          <Link to="/" style={{textDecoration:'none',color: "white"}}>
            <Typography sx={{"&:hover": {

              color: "rgba(150,150,150,0.85)",
              cursor: "pointer"
            }}}>Lekař</Typography>
          </Link>
          <Link to="/basket">
            <MdAddShoppingCart size={25} className="icon"/>
          </Link>
        </Toolbar>

      </AppBar>
    </div>
  );
}

export default Header;