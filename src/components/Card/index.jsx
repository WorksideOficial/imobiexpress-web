import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import {
  Container,
  Description,
  Img,
  Itens
} from "./styles";
import { urlApi } from "../../services/Api";

const Card = ({ thumb, tipo, endereco, valor, slug }) => {
  return (
    <Container>
      <Img>
        <img src={`${urlApi}/uploads/${thumb}`} alt="" />
      </Img>
      <Description>
        <h4>{tipo}</h4>
        <Itens>
          <span><FaMapMarkerAlt />{endereco}</span>
          <span>R$ {valor} / mês</span>
        </Itens>
        <Link to={`/imovel/${slug}`}>Detalhes <FaArrowRight /></Link>
      </Description>
    </Container>
  )
}

export default Card;