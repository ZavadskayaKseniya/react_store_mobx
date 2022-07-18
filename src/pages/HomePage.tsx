import '../styles/HomePage.modules.scss';

import {inject, observer} from "mobx-react";
import React from 'react';

import CardItem from "../components/CardItem";
import InterfacePill from "../models/interfacePill";
import Pills from "../models/Pills";
import CardStore from "../store/CardStore";



const  HomePage = inject('CardStore')(observer((props:any) => {
  const pills:InterfacePill[]=CardStore.pills;
  return (
    <div className="home-page">
      {

        pills.map((pill:InterfacePill) => <CardItem key={pill.id} pills={pill}/>)
      }

    </div>
  );
}
));

export default HomePage;