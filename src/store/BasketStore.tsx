import {action, makeAutoObservable, makeObservable, observable} from "mobx";


class BasketStore {

  @observable addedCard:string[];

  constructor() {

    makeAutoObservable(this);
  }

  @action 
  clear() {
    this.addedCard=[];
  }

}
const store = new BasketStore();
export default store;
