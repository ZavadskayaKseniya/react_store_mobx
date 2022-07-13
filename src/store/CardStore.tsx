import {makeAutoObservable, observable, runInAction} from "mobx";
import {v4 as uuidv4} from "uuid";

import Pills from "../models/Pills";

const URL = "http://77.223.99.133:8080/api/docs/";

class CardStore {

  public pillsList: Pills[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public getPills(): void {
    fetch(`${URL}/products/{id}`).then(response => response.json())
      .then((res: Pills[]) => {
        runInAction(() => this.pillsList = res);
      });

  }



  // get all
  // async  () => {
  //   const limit = 6;
  //   const response = await fetch("");
  //
  //   if(!response.ok) {
  //     console.error("Запрос не удался");
  //     return;
  //   }
  //
  //   const data = await response.json();
  //   console.log(data);
  // }


}

const store = new CardStore();
export default store;



