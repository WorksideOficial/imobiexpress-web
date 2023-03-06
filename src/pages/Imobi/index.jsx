import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import TopBanner from "../../components/TopBanner";
import Api, { urlApi } from "../../services/Api";
import {
  Container,
  Description,
  Left,
  Profile,
  ProfileContact,
  ProfileDescriptin,
  ProfileFormContact,
  ProfileImg,
  Right,
  Thumb
} from "./styles";
import { toast } from "react-toastify";

const Imobi = () => {
  const { slug } = useParams();
  const [dataimobi, setDataImobi] = useState([]);

  useEffect(() => {
    Api.get(`/listimobi/${slug}`)
      .then((response) => {
        setDataImobi(response.data)
      })
      .catch(() => {
        console.log("Erro: Erro ao listar imóvel")
      })
  }, [])

  const {
    tipo,
    cidade,
    endereco,
    descricao,
    thumb,
    name,
    email,
    telefone,
    userId
  } = dataimobi;

  const [client_name, setClinteName] = useState('');
  const [client_email, setClinteEmail] = useState('');
  const [client_mensagem, setClinteMensagem] = useState('');

  const dataMessage = {
    client_name,
    client_email,
    client_mensagem,
    userId
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post('/createmessage', dataMessage)
      .then((response) => {
        if (!response.data.error === true) {
          toast(response.data.message);
        } else {
          toast(response.data.message);
        }
      })
      .catch(() => {
        console.log('Erro: Erro no sistema')
      })
  }
  return (
    <Fragment>
      <TopBanner
        tipo={tipo}
        descricao={descricao}
        thumb={thumb}
      />
      <Container>
        <Left>
          <Thumb>
            <img src={`${urlApi}/uploads/${thumb}`} alt="" />
          </Thumb>
          <Description>
            <h2>{tipo}</h2>
            <h5>Cidade: {cidade}</h5>
            <h5>Endereço: {endereco}</h5>
            <p>{descricao}</p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
            </ProfileImg>
            <ProfileDescriptin>
              <h3>{name}</h3>
              <p>Descrição do usuário</p>
            </ProfileDescriptin>
          </Profile>
          <ProfileContact>
            <h3>Informações para contato:</h3>
            <p>{telefone}</p>
            <p>{email}</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Input
                type="hidden"
                name="userId"
                value={userId}
              />
              <Input
                type="text"
                placeholder="Nome:"
                name="client_name"
                onChange={(e) => setClinteName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="E-mail:"
                name="client_email"
                onChange={(e) => setClinteEmail(e.target.value)}
              />
              <TextArea
                placeholder="Mensagem:"
                name="client_mensagem"
                onChange={(e) => setClinteMensagem(e.target.value)}
              ></TextArea>
              <Button>Enviar mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  )
}

export default Imobi;
