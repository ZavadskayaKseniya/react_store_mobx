import '../styles/CardItem.modules.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

import Pills from "../models/Pills";
import Buttons from "./coommons/buttons";

function CardItem(pill:Pills) {
  return (
    <div className="card-item" >
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          sx={{ backgroundSize: "cover",backgroundPosition:"center", backgroundRepeat:"no-repeat" }}
          component="img"
          alt="pill img"
          height="140"
          image={pill.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pill.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pill.description}
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