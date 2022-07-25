import "../styles/BasketPage.modules.scss";

import {Button} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {inject, observer} from "mobx-react";
import React from 'react';

import interfacePill from "../models/interfacePill";
import {StoresNames} from "../store/StoresNames";

function BasketPage(props:any) {
  const {pillsInCart} = props.BasketStore;

  return (
    <div className="basket-page">
      {
        pillsInCart.map((pill: interfacePill) =>
          <div className="card-item" >
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

            </Card>
          </div>
        )
      }
      {
        pillsInCart>0 ?
          <div>
            <Button color="secondary">Оформить</Button>
          </div>
          :
          <div>Корзина пуста</div>

      }
    </div>
  );
}

export default inject(StoresNames.CardStore,StoresNames.BasketStore)(observer(BasketPage));