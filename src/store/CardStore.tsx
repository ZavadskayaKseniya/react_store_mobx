import {makeAutoObservable, observable,action, reaction,runInAction} from "mobx";

import data from "../data";
import InterfacePill from "../models/interfacePill";
import Pills from "../models/Pills";


class CardStore {

  @observable isCartOpen = false;

  @observable pills:Pills[] ;

  constructor() {
    this.pills=[];
    makeAutoObservable(this);
  }



  
  // @observable
  //   pills:InterfacePill[]=data.products;

  @action
    setItems = (products: InterfacePill[]) => {
      this.pills = products.map((product: InterfacePill) => new Pills(product));
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

const store = new CardStore();
export default store;



