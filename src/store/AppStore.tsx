import {action, makeAutoObservable, makeObservable, observable} from "mobx";

class AppStore {

 @observable isAuth:boolean;

 @observable user: object;

 @observable token:string;


 constructor() {
   this.isAuth = false;
   this.user = {};
   makeAutoObservable(this);
 }

 @action
 setIsAuth(bool:boolean) {
   this.isAuth = bool;
 }

 @action
 setUser(user:object) {
   this.user = user;
 }

 @action
 getIsAuth() {
   return this.isAuth;
 }

 @action
 getUser() {
   return this.user;
 }

 @action
 authToken(key:string) {
   this.token=key;
   console.log(key);
 }



}

export default AppStore;
