import {StoresNames} from "@/store/StoresNames";
import {inject, observer} from "mobx-react";
import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import AuthForm from "@/components/AuthForm";


const Auth = () => {

  return (
    <div className="auth-page d-flex justify-content-center align-items-center">
      <AuthForm/>
    </div>
  );
};

export default inject(StoresNames.CardStore,StoresNames.BasketStore,StoresNames.AppStore)(observer(Auth));