```js
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type IForm = {
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  password1: string,
  extraError?: string,
};

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm <
  IForm >
  {
    defaultValues: {
      email: "@naver.com",
      firstName: "Frank",
      lastName: "Kim",
    },
  };
  //   const onValid: SubmitHandler<IForm> = (data) => {
  const onValid = (data: IForm) => {
    if (data.password !== data.password1)
      setError(
        "password1",
        {
          message: "password not matching",
        },
        { shouldFocus: true }
      );
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
              message: "Only xxxx@naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "first name is required",
            validate: {
              noSwearing: (value) => {
                const conditions = ["fuck", "shit", "damn"];

                return conditions.includes(value)
                  ? "no swearing allowed"
                  : true;
              },

              noFrank: (value) =>
                value.includes("noFrank") ? "no noFrank allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", { required: "write here", minLength: 10 })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default ToDoList;
```
