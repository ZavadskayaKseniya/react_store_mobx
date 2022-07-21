import {makeAutoObservable, observable,action, reaction,runInAction} from "mobx";


import InterfacePill from "../models/interfacePill";


class CardStore {

  @observable isCartOpen = false;

  @observable pills:InterfacePill[] ;

  constructor() {
    this.pills=[];
    makeAutoObservable(this);
  }


  @action
    setItems = (products: InterfacePill[]) => {
      this.pills = products;
    };

  @action
  toggleCard() {
    this.isCartOpen=!this.isCartOpen;
  }

  @action
  getPillById(id:number) {
    return this.pills[id];
  }



}


export default CardStore;



