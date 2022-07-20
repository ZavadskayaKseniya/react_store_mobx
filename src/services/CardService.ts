import CardStore from "../store/CardStore";
import NetworkService from "./NetworkService";


async function CardService() {


  const data = await NetworkService();
  CardStore.setItems(data.data.products);


};
export default CardService;