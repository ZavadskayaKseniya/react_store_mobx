import {makeAutoObservable, makeObservable, observable} from "mobx";

class BasketStore {

  constructor() {

    makeAutoObservable(this);
  }



}
const store = new BasketStore();
export default store;
