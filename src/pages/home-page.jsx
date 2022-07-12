import '../styles/home-page.modules.scss';

import React from 'react';
import uuid from 'react-uuid';

import CardItem from "../components/card-item";


const PILLS = [
  {
    id: uuid(),
    name: "Уголь акт.",
    description: "адсорбирующее средство. 250 мг: 10, 20, 30, 50 или 5000 шт.",
    image:"https://f.stolichki.ru/s/drugs/large/14/14587.jpg"
  },
  {
    id: uuid(),
    name: "Анальгин",
    description: "адсорбирующее средство. 250 мг: 10, 20, 30, 50 или 5000 шт.",
    image:"https://aptekaeconom.com/upload/iblock/be4/4jfq6180rkuoozc3qpd25j5cmg1mjwf7.jpg"
  },
  {
    id: uuid(),
    name: "тантумверде",
    description: "адсорбирующее средство. 250 мг: 10, 20, 30, 50 или 5000 шт.",
    image:"https://1sa.com.ua/media/catalog/product/cache/2/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/t/a/tantum-solution.jpg"
  },
  {
    id: uuid(),
    name: "парацетамол",
    description: "адсорбирующее средство. 250 мг: 10, 20, 30, 50 или 5000 шт.",
    image:"https://1sa.com.ua/media/catalog/product/cache/2/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/t/m/tmp_20152_2.jpg"
  },
  {
    id: uuid(),
    name: "аспирин",
    description: "адсорбирующее средство. 250 мг: 10, 20, 30, 50 или 5000 шт.",
    image:"https://www.gdp3podolsk.ru/blog/wp-content/uploads/2022/03/tabletki-shipuchie-aspirin-s-c01b-1.jpg"
  },
  {
    id: uuid(),
    name: "ринофлуимуцил",
    description: "адсорбирующее средство. 250 мг: 10, 20, 30, 50 или 5000 шт.",
    image:"https://static5.asna.ru/imgprx/Fe2luYaC0GoowAhOOdf2ryAdPNUKwxZPup4rV3x1kp8/rs:fit:1166:1503:1/g:no/aHR0cHM6Ly9pbWdzLmFzbmEucnUvaWJsb2NrL2IzNy9iMzdhYzM3N2NkZmU2NzI5NGJjODJlOTMyMDExOTg0Zi9kOWJiMGM0OThhMjBlODliODIzOTk5MmIzMWNlOTQwNC5qcGc.jpg"
  },


];

function HomePage() {
  return (
    <div className="home-page">
      { PILLS.map(pill => <CardItem pill={pill} key={pill.id} />)}
    </div>
  );
}

export default HomePage;