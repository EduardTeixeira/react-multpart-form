import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCPF }) {

  return (
    <>
      <DadosPessoais
        aoEnviar={aoEnviar}
        validarCPF={validarCPF}>
      </DadosPessoais>
      <DadosUsuario></DadosUsuario>
      <DadosEntrega></DadosEntrega>
    </>
  );
}

export default FormularioCadastro;
