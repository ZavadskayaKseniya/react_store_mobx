import {Button, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from 'react';
import {Card} from "react-bootstrap";
import {useForm, Controller, SubmitHandler, useFormState} from "react-hook-form";
import {inject} from "mobx-react";
import {StoresNames} from "@/store/StoresNames";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

interface  IAuth {
  password: string;
  login: string;
}
function AuthForm(props:any) {
  const dataApp:IAuth = props.AppStore.user;
  const { handleSubmit, control} = useForm<IAuth>();
  const onSubmit:SubmitHandler<IAuth>= (data) => {
    console.log("data  ", data);
    const dd= toJS(dataApp);
    console.log("data AppStore  ", dd);


  };

  const {errors} = useFormState({
    control
  })
  return (
    <div className="auth-form d-flex  mt-5">
      <Card style={{width: 600}} className="p-5 d-flex justify-content-center align-items-center">
        <Typography component="div">
          Войдите
        </Typography>
        <Typography variant="subtitle1" color="info"  component="div">
          Чтобы получит доступ
        </Typography>
        <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="login"
            rules={{required:"Обязательно для заполнения"}}
            render={({field}) => (
              <TextField
                label="login"
                size="small"
                margin="normal"
                className="auth-form__input"
                fullWidth={true}
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={errors.login?.message}
                helperText={errors.login?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{required:"Обязательно для заполнения"}}
            render={({field}) => (
              <TextField
                label="password"
                size="small"
                type="password"
                margin="normal"
                className="auth-form__input"
                fullWidth={true}
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={errors.password?.message}
                helperText={errors.password?.message}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            disableElevation={true}
            fullWidth={true}
            sx={{
              marginTop:2
            }}
          >Войти</Button>
        </form>
      </Card>
    </div>
  );
}

export default inject(StoresNames.AppStore)(observer(AuthForm));