import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function Details() {
    const { cep } = useParams();
    const [endereco, setEndereco] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataCep();
    }, []);

    async function getDataCep() {
        try {
            const { data } = await api.get(`/${cep}/json`);
            setEndereco(data);
        }
        catch (error) {
            alert("Erro ao buscar CEP " + error);
        }
        setLoading(false);
    }

    if(loading) {
        return <h1>Carregando...</h1>;
    }

    if(!endereco.localidade && !loading) {
        return <h1>CEP inválido</h1>;
    }
    
    return (
        <>
            <h1>Tela de Details - {cep}</h1>
            <h2>Logradouro: {endereco.logradouro ? endereco.logradouro : "Não informado"}</h2>
            <h3>Bairro: {endereco.bairro ? endereco.bairro : "Não informado"}</h3>
            <h3>Município: {endereco.localidade} {endereco.uf}</h3>
        </>
    );
}
