import {makeAutoObservable, makeObservable, observable} from "mobx";

class AppStore {

  constructor() {

    makeAutoObservable(this);
  }

  @observable
    arr:string[]=[];

}
const store = new AppStore();
export default store;
