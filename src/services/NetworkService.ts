


export default class NetworkService {

  token: string;

  endpoint: string;

  private readonly address: string;

  constructor(endpoint: string, token:string) {
    this.endpoint = `${endpoint}api/`;
    this.address = endpoint;
    this.token = token;
  }

  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaWQiOjgsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNzI5MjAyOX0.smA9a5v47rs-oG2loD1jR5Zd5RlGqmb0XN0KWjniyKo';



  fetch  = ({
    alias, parameters }:{alias: string, parameters?: object}) => {
    const options : {method:string,headers:any, body: any} = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "token": this.token
      },
      body: parameters,

    };

    return (
      fetch(`${this.endpoint}${alias}`,options)
        .then(response => response.json())
    );
  };




}





  