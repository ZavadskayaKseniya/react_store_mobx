import {makeAutoObservable, makeObservable, observable} from "mobx";

class AppStore {




  constructor() {

    makeAutoObservable(this);
  }



}

export default AppStore;
