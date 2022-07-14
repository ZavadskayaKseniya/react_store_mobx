import '../styles/HomePage.modules.scss';

import {inject, observer} from "mobx-react";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import CardItem from "../components/CardItem";
import Pills from "../models/Pills";
import CardStore from "../store/CardStore";



const  HomePage = inject('CardStore')(observer((props:any) => {
  const pills:Pills[]=CardStore.pills;
  return (
    <div className="home-page">
      {
        // eslint-disable-next-line max-len
        pills.map((pill:Pills) => <CardItem key={pill.id} description={pill.description} name={pill.name} image={pill.image} id={pill.id}/>)
      }

    </div>
  );
}
));

export default HomePage;