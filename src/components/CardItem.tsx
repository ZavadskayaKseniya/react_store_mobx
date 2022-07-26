import '@/styles/CardItem.modules.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import {useNavigate} from "react-router-dom";

import InterfacePill from "@/models/interfacePill";


import Buttons from "./coommon/Buttons";





function CardItem({pills, onClick,props}:{pills:InterfacePill, onClick:any, props:any}) {

  const navigate = useNavigate();

  const handlerClick = (e: React.ChangeEvent<unknown>) => {
    navigate(`/card/${pills.id}`);
  };
  return (
    <div className="card-item" onClick={handlerClick} >
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
}
export default CardItem;