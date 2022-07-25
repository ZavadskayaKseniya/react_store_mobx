import "../styles/CardPage.modules.scss";

import { Typography } from '@mui/material';
import {observer} from "mobx-react-lite";
import React from 'react';

import {inject} from "mobx-react";
import {useParams} from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Buttons from "../components/coommon/Buttons";


const CardPage = inject((observer((props:any) => {
  const cardStore = props.CardStore;
  const {id} = useParams();

  const pill = cardStore.getPillById(Number(id));



  return (
    <div className="card-page">

      <Card sx={{ width: 280 , height:190, minHeight: 190}}>

        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {pill.substance.name}
          </Typography>
          <br/>
          <Typography variant="body2" color="text.secondary">
            {pill.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end"}}>
          <Buttons>В корзину</Buttons>
        </CardActions>
      </Card>

    </div>
  );
})));

export default CardPage;