import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 12px 0;
  img{
    max-width: 200px;
    height: auto;
  }
  .nav-links{
    display: flex;
    a{
      text-decoration: none;
      color: #000;
      font-family: 'Roboto' , sans-serif;
      font-size: 14px;
      margin: 12px;
      transition: 0.6s;
      &:hover{
        color: #676666;
      }
    }
  }
` 