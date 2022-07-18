import {makeAutoObservable, observable, reaction,runInAction} from "mobx";

import data from "../data";
import InterfacePill from "../models/interfacePill";
import Pills from "../models/Pills";

class CardStore {



  constructor() {
    makeAutoObservable(this);
  }

  
  @observable
    pills:InterfacePill[]=data.products;
  
}

const store = new CardStore();
export default store;



