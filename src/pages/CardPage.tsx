import "../styles/CardPage.modules.scss";
import { Typography } from '@mui/material';

import React from 'react';
import {observer} from "mobx-react-lite";
import InterfacePill from "../models/interfacePill";
import CardStore from "../store/CardStore";
import CardItem from "../components/CardItem";

const CardPage = observer(({pills}:{pills:InterfacePill}) => {



  return (
    <div className="card-page">

      <Typography align="left" variant="h3" color="primary">
        card
      </Typography>
      <CardItem key={pills.id} pills={pills}/>
    </div>
  );
});

export default CardPage;