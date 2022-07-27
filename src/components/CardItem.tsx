import '@/styles/CardItem.modules.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import {useNavigate} from "react-router-dom";

import InterfacePill from "@/models/interfacePill";


import Buttons from "./coommon/Buttons";
import {release} from "os";





function CardItem({pills, onClick,props}:{pills:InterfacePill, onClick:any, props:any}) {

  const navigate = useNavigate();

  const handlerClick = (e: React.ChangeEvent<unknown>) => {
    navigate(`/card/${pills.id}`);
  };
  return (
    <div className="card-item"  >
      <Card sx={{ width: 280 , height:190, minHeight: 190, position:"relative"}} >

        <CardContent onClick={handlerClick} >
          <Typography gutterBottom sx={{height:"20px"}} variant="h5" component="div">
            {pills.substance.name}
          </Typography>
          <br/>
          <Typography variant="body2" sx={{height:"40px"}}color="text.secondary">
            {pills.name}
          </Typography>
        </CardContent>

        <CardActions sx={{position:"relative", height:"60px", top:0}}>
          <Buttons onClick={onClick} color="error" className="btn-add" >В корзину</Buttons>
        </CardActions>

      </Card>
    </div>
  );
}
export default CardItem;