import '../styles/card-item.modules.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

import Buttons from "./buttons";

function CardItem({pill}) {
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
          <Buttons onClick={() => null}>В корзину</Buttons>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardItem;