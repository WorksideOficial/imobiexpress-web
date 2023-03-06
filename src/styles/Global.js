import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #f1f2f3;;
    --secondary: #15181C;
    --gray: #D9D9D9;
    --blue: #4766FF;
    --white: #FFF;
    --gray-light:#e5e1dc;
    --shade:#efefef;
  }

  body{
    background-color: var(--primary);
    color: var(--secondary);
    font-family: 'Dosis', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
  }
  ul, nav{list-style-type: none;}
  a{text-decoration: none;}
`