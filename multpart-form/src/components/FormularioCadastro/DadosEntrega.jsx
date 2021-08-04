import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosEntrega({ aoEnviar }) {

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ cep, endereco, numero, estado, cidade });
            }}
        >
            <TextField
                id="cep"
                label="CEP"
                type="number"
                required
                variant="outlined"
                margin="normal"
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
            >
            </TextField>
            <TextField
                id="endereco"
                label="Endereço"
                type="text"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}
            >
            </TextField>
            <TextField
                id="numero"
                label="Número"
                type="number"
                required
                variant="outlined"
                margin="normal"
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
            >
            </TextField>
            <TextField
                id="estado"
                label="Estado"
                type="text"
                required
                variant="outlined"
                margin="normal"
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value);
                }}
            >
            </TextField>
            <TextField
                id="cidade"
                label="cidade"
                type="text"
                required
                variant="outlined"
                margin="normal"
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value);
                }}
            >
            </TextField>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >
                Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;