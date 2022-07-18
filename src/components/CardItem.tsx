import '../styles/CardItem.modules.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import React from 'react';

import Buttons from "./coommon/Buttons";
import InterfacePill from "../models/interfacePill";




function CardItem({pills}:{pills:InterfacePill}) {

  return (
    <div className="card-item" >
      <Card sx={{ maxWidth: 250 }}>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pills.substance.name}
          </Typography>
          <br/>
          <Typography variant="body2" color="text.secondary">
            {pills.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end"}}>
          <Buttons >В корзину</Buttons>
        </CardActions>
      </Card>
    </div>
  );
}
export default CardItem;