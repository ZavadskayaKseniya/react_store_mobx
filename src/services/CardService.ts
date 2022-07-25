import CardStore from "../store/CardStore";
import NetworkService from "./NetworkService";



export default class CardService {

  networkService : NetworkService;

  cardStore : CardStore;

  constructor(networkService: NetworkService, cardStore: CardStore) {
    this.networkService = networkService;
    this.cardStore = cardStore;
  }

  async getPills() {
    const respond = await this.networkService.fetch({alias: 'products/part', parameters: {offset: 0, limit: 5}});
    this.cardStore.setItems(respond.data.products);
  }



};


