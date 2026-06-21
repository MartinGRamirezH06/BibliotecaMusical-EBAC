import styled from "styled-components";

const SongCard = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: auto;
  width: 100%;
  box-sizing: border-box;
  justify-items: flex-start;
  align-items: center;

  h4{
    grid-column: 2;
    grid-row: 1;
    text-align: center;
  }

  p{
    grid-row: 2;
    text-align: center;
  }


  p:nth-child(3){
    grid-column: 2;
    grid-row: 1;
    text-align: center;
  }
`;
const SongDetailsCard = styled.article `
  width: 50%;
  background-color: #6a6a6a;
  display: flex;
  position: fixed;
  right: 40rem;
  top: 8rem;
  padding: 1rem 0rem;
  justify-content: space-around;
  align-items: center;
  margin: 0;
`;

export {
    SongCard,
    SongDetailsCard
}