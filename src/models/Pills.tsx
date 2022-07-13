import { v4 as uuidv4 } from 'uuid';


export default class Pills {
  id: string;

  name: string;

  description: string;

  image: string;


  constructor(name:string, image:string, description:string){
    this.id=uuidv4();
    this.name=name;
    this.image=image;
    this.description=description;
  }
}