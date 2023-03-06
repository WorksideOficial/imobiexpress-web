import React, { Fragment } from "react";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import { Header, Wrapper } from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import Api from "../../services/Api";

const Home = () => {
  const [imobi, setImobi] = useState([]);
  useEffect(() => {
    Api.get('/listimobi')
      .then((response) => {
        setImobi(response.data)
      })
      .catch(() => {
        console.log("Erro: Erro no sistema");
      })
  }, [])
  return (
    <Fragment>
      <Banner />
      <Header>
        <h2>Find the property of your dreams!</h2>
      </Header>
      <Wrapper>
        {imobi.map(items => (
          <Card
            key={items.id}
            thumb={items.thumb}
            tipo={items.tipo}
            endereco={items.endereco}
            valor={items.valor}
            slug={items.slug}
          />
        ))}
      </Wrapper>
    </Fragment>
  )
}

export default Home;