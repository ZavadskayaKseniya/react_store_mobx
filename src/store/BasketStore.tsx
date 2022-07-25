import {action, makeAutoObservable, makeObservable, observable} from "mobx";

import InterfacePill from "../models/interfacePill";



class BasketStore {



  @observable pillsInCart:InterfacePill[];

  constructor() {
    this.pillsInCart = [];
    makeAutoObservable(this);
  }

  @action 
    setPillsInCart=(pill:InterfacePill) => 
    {
      this.pillsInCart.push(pill);
    };
  
  @action
    deletePillsFromCart=(cardId:number) =>
    {
      this.pillsInCart= this.pillsInCart.filter(pill => pill.id !== cardId);
    };

}

export default BasketStore;
