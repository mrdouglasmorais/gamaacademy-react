import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-family:'Roboto', sans-serif;
  background: #8c52e5;
  .wrapper{
    display: grid;
    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #faf2f2;
      border-radius: 22px;
      padding: 12px;
      margin: 22px 0;
      img{ 
        border-radius: 100%;
      }
      .content-information{
        margin-left: 15px;
        display: grid;
      }

    }
  }


`