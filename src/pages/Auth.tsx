import {StoresNames} from "@/store/StoresNames";
import {inject, observer} from "mobx-react";
import React, {useState} from 'react';
import {Card} from "react-bootstrap";


const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="auth-page d-flex justify-content-center align-items-center mt-5">
      <Card style={{width: 600}} className="p-5">

        Auth
      </Card>
    </div>
  );
};

export default inject(StoresNames.CardStore,StoresNames.BasketStore,StoresNames.AppStore)(observer(Auth));