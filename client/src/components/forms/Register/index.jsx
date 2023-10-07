

import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react"
import Registration from "../validations/Registration";
import { yupResolver } from "@hookform/resolvers/yup";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';


const Register = (props) => {

  const [typeMail, setTypeMailValue] = useState()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Registration),
  });

  const onSubmit = async (data) => {
    console.log('data :', data)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: data })
    };
    await fetch('/register', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('data :', data)
        if (data.success) {
          NotificationManager.success(data.message, 'Title here');
          reset()
        }
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nom de l'entreprise" {...register("nomEntreprise")} />
        <p>{errors.nomEntreprise?.message}</p>
        <input type="text" placeholder="Siret" {...register("siret")} />
        <p>{errors.siret?.message}</p>
        <input type="text" placeholder="Adresse" {...register("adresse")} />
        <p>{errors.adresse?.message}</p>
        <input type="text" placeholder="Code Postal" {...register("codePostal")} />
        <p>{errors.codePostal?.message}</p>
        <input type="text" placeholder="Ville" {...register("ville")} />
        <p>{errors.ville?.message}</p>
        <input type="text" placeholder="Email..." {...register("email")} />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit" />
      </form>
      <NotificationContainer />
    </>
  )
}
export default Register