import React from "react";
import { useForm } from "react-hook-form";
import { Form, StyledSignInLogos } from "../Form/Form.component";

type SignUpFormData = {
  login: string;
  password: string;
  email: string;
};

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpFormData>();

  // TODO: register base logic
  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Логин</span>
        <input type="text" placeholder={"Логин"} {...register("login")} />
      </label>

      <label>
        <span>Пароль</span>
        <input
          type="password"
          placeholder={"Пароль"}
          {...register("password")}
        />
      </label>

      <label>
        <span>Email</span>
        <input
          type="text"
          placeholder={"example@gmail.com"}
          {...register("email")}
        />
      </label>

      <StyledSignInLogos />

      <label>
        <input type="submit" value={"Зарегистрироваться"} />
      </label>
    </Form>
  );
};

export default SignUpForm;
