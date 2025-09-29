import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { loginSchema } from "./LoginValidation";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginFOrmHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Login Form Using React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is Required" })}
          />
          {errors.email && (
            <p className="text-red-800">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", { required: "Passwprd is required" })}
          />
          {errors.password && (
            <p className="text-red-800">{errors.password.message}</p>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginFOrmHook;
