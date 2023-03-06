import React from "react";
import { Container } from "./styles";

const Button = ({ props, children }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

export default Button;