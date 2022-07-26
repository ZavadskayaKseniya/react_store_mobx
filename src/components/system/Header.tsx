import '@/styles/header.modules.scss';

import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {inject, observer} from "mobx-react";
import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import {Link} from "react-router-dom";

import {StoresNames} from "@/store/StoresNames";

import CartCircle from "./CartCircle";

function Header(props:any) {
  const pills = props.BasketStore.pillsInCart;
  return (
    
    <div className="header">
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between", backgroundColor:"rgba(38,38,38,0.95)" }}>
          <Link to="/catalog" style={{textDecoration:'none',color: "white"}}>
            <Typography sx={{"&:hover": {

              color: "rgba(150,150,150,0.85)",
              cursor: "pointer"
            }}}>Lekař</Typography>
          </Link>


          <Link to="/basket">
            <MdAddShoppingCart size={25} className="icon"/>
            <CartCircle quantity={pills.length}/>
            <CartCircle quantity={pills.length}/>
          </Link>

        </Toolbar>

      </AppBar>
    </div>
  );
}

export default inject(StoresNames.CardStore,StoresNames.BasketStore)(observer(Header));