import '../styles/HomePage.modules.scss';

import {inject, observer} from "mobx-react";
import React, {useEffect, useState} from 'react';

import CardItem from "../components/CardItem";
import Pagination from "../components/Pagination";
import InterfacePill from "../models/interfacePill";
import {ServicesNames} from "../services/ServicesNames";
import {StoresNames} from "../store/StoresNames";




const  HomePage = (props:any) => {

  const [isFetch, setIsFetch] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);





  useEffect(() => {
    props.CardService.getPills().finally(() => {
      setIsFetch(false);
    });

  },[isFetch]);

  const pills = props.CardStore.pills;

  const lastCardIndex = currentPage*cardsPerPage;
  const firstCardIndex = lastCardIndex- cardsPerPage;
  const currentCard:InterfacePill[]= pills.slice(firstCardIndex,lastCardIndex);




  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev => prev+1));
  const prevPage = () => setCurrentPage((prev => prev-1));




  const handlerClick = (e: React.ChangeEvent<unknown>) => {
    e.stopPropagation();
    props.BasketStore.setPillsInCart(pills);
    console.log(props.BasketStore.pillsInCart);
  };





  return (
    <div className="home-page">

      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={pills.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      <div className="home-page_cards">
        {
          currentCard.map((pill:InterfacePill) => <CardItem onClick={() => {
            props.BasketStore.setPillsInCart(pill);
            console.log(props.BasketStore.pillsInCart);
          }
          }  key={pill.id} pills={pill}/>)
        }
      </div>
    </div>
  );
}
;

export default inject(StoresNames.CardStore,StoresNames.BasketStore, ServicesNames.CardService)(observer(HomePage));