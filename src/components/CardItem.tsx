import '@/styles/CardItem.modules.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

import InterfacePill from "@/models/interfacePill";
import CardPage from "@/pages/CardPage";

import Buttons from "./coommon/Buttons";





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
          <Buttons onClick={onClick} color="error">В корзину</Buttons>
        </CardActions>
      </Card>
    </div>
  );
};
export default CardItem;