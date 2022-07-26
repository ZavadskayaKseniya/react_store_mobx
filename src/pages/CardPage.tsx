import "@/styles/CardPage.modules.scss";

import InterfacePill from "@models/interfacePill";
import { Typography } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {inject} from "mobx-react";
import {observer} from "mobx-react-lite";
import React from 'react';

import CardItem from "@/components/CardItem";
import {StoresNames} from "@/store/StoresNames";





function CardPage(props:any) {
 
  

  const pillsCards = props.CardStore.pills.map((pill:InterfacePill) =>
    <CardItem key={pill.id} pills={pill} onClick={() => console.log("doijc")}/>
  );





  return (
    <div className="card-page">

      <Card sx={{ width: 280 , height:190, minHeight: 190}}>

        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {pillsCards.substance.name}
          </Typography>
          <br/>
          <Typography variant="body2" color="text.secondary">
            {pillsCards.name}
          </Typography>
        </CardContent>

      </Card>

    </div>
  );
}

export default inject(StoresNames.CardStore)(observer(CardPage));