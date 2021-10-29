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

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Логин</span>
        <input
          type="text"
          placeholder={"pussydestroyer3000"}
          {...register("login")}
        />
      </label>

      <label>
        <span>Пароль</span>
        <input
          type="password"
          placeholder={"**************"}
          {...register("password")}
        />
      </label>

      <label>
        <span>Email</span>
        <input
          type="text"
          placeholder={"nagibator228@cringe.com"}
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
