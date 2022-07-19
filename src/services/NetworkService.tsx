import {useEffect, useState} from "react";

import InterfacePill from "../models/interfacePill";


function NetworkService() {
  const [prod, setProd] = useState<InterfacePill[]>([]);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaWQiOjgsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNzI5MjAyOX0.smA9a5v47rs-oG2loD1jR5Zd5RlGqmb0XN0KWjniyKo';

  const url = 'http://77.223.99.133:8080/api/products/part';

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'token': token
      },
      body: JSON.stringify({ offset:0, limit:6 })
    };
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => setProd(data));



    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  console.log(prod);
  return (
    <div>
      {prod.map(product => <li key={product.id}>{product.name}</li>)}
    </div>
  );
};

export default NetworkService;

  