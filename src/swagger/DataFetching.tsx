import axios from 'axios';
import {useEffect, useState} from "react";

function DataFetching() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    axios
      .get('http://77.223.99.133:8080/api/products/part')
      .then(res => {
        console.log(res);
        setProd(res.data);
      })
      .catch(err => {
        console.log(err);
      });


  });

  return (
    <div>
      {prod.map(product => <li key={product.id}>{product.name}</li>)}
    </div>
  );
};

export default DataFetching;

  