import '../styles/CardItem.modules.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

import Pills from "../models/Pills";
import Buttons from "./coommon/buttons";



function CardItem(pills:Pills) {
  return (
    <div className="card-item" >
      <Card sx={{ maxWidth: 250 }}>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pills.substanceName}
          </Typography>
          <br/>
          <Typography variant="body2" color="text.secondary">
            {pills.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Buttons >В корзину</Buttons>
        </CardActions>
      </Card>
    </div>
  );
}
export default CardItem;