import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ email, senha });
                }
            }}>
            <TextField
                id="email"
                label="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            >
            </TextField>
            <TextField
                id="senha"
                label="senha"
                type="password"
                name="senha"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={senha}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
            >
            </TextField>
            <Button
                type="submit"
                variant="contained"
                color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;