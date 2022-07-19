import {makeAutoObservable, observable,action, reaction,runInAction} from "mobx";

import data from "../data";
import InterfacePill from "../models/interfacePill";


class CardStore {

  @observable isCartOpen = false;

  @observable orders = [];

  constructor() {
    makeAutoObservable(this);
  }



  
  @observable
    pills:InterfacePill[]=data.products;


  @action
  openCard() {
    this.isCartOpen=!this.isCartOpen;
  }

  @action
  getPillById(id:number) {
    return this.pills[id];
  }



}

const store = new CardStore();
export default store;



