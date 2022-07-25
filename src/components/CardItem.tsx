import '../styles/CardItem.modules.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {inject, observer} from "mobx-react";
import React from 'react';

import InterfacePill from "../models/interfacePill";
import {StoresNames} from "../store/StoresNames";
import Buttons from "./coommon/Buttons";
import BasketStore from "../store/BasketStore";




const CardItem = ({pills, onClick}:{pills:InterfacePill, onClick:any}) => {


  return (
    <div className="card-item" >
      <Card sx={{ width: 280 , height:190, minHeight: 190}}>

        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {pills.substance.name}
          </Typography>
          <br/>
          <Typography variant="body2" color="text.secondary">
            {pills.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end"}}>
          <Buttons onClick={onClick} >В корзину</Buttons>
        </CardActions>
      </Card>
    </div>
  );
};
export default CardItem;