import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { TextField } from "../TextField";
import { FormContent } from "./FormContent/FormContent";
import { FormSection } from "./FormContent/FormSection";

export function InitialForm() {
  const [values, onChange] = useOutletContext();
  const [errorPassword, setErrorPassword] = useState(false);

  const handleConfirmPasswordChange = (ev) => {
    const confirmPassword = ev.target.value;
    console.log(confirmPassword);
    if (confirmPassword !== values.password) {
      console.log({ confirm: confirmPassword, password: values.password });
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  return (
    <FormContent>
      <FormSection>
        <TextField
          name="name"
          className="w-full  lg:w-5/12"
          describe="Nome Completo"
          value={values.name}
          onChange={onChange}
        />
        <TextField
          name="pronoun"
          className="w-full  lg:w-2/12"
          describe="Pronome"
          value={values.pronoun}
          onChange={onChange}
        />
        <TextField
          name="rg"
          className="w-full  lg:w-4/12"
          describe="RG"
          value={values.rg}
          onChange={onChange}
        />
        <TextField
          name="cpf"
          className="w-full  lg:w-4/12"
          describe="CPF"
          value={values.cpf}
          onChange={onChange}
        />
        <TextField
          name="birthDate"
          className="w-full  lg:w-3/12"
          describe="Data de Nascimento"
          value={values.birthDate}
          onChange={onChange}
          type="date"
        />
        <TextField
          name="contact"
          className="w-full  lg:w-4/12"
          describe="Contato"
          value={values.contact}
          onChange={onChange}
        />
      </FormSection>
      <FormSection>
        <TextField
          name="email"
          className="w-full  lg:w-5/12"
          describe="Email"
          value={values.email}
          onChange={onChange}
        />
        <TextField
          name="password"
          className="w-full  lg:w-3/12"
          describe="Senha"
          type="password"
          value={values.password}
          onChange={onChange}
        />
        <TextField
          error={errorPassword}
          ErrorMessage="Senhas divergentes"
          name="confirm-password"
          className="w-full  lg:w-3/12"
          type="password"
          describe="Confirmar Senha"
          onChange={handleConfirmPasswordChange}
        />
        <TextField
          name="country"
          className="w-full  lg:w-4/12"
          describe="País"
          value={values.country}
          onChange={onChange}
        />
        <TextField
          name="state"
          className="w-full lg:w-4/12"
          describe="Estado"
          value={values.state}
          onChange={onChange}
        />
        <TextField
          name="city"
          className="w-full lg:w-3/12"
          describe="Cidade"
          value={values.city}
          onChange={onChange}
        />
      </FormSection>
    </FormContent>
  );
}
