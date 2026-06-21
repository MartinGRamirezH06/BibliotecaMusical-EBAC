import styled from "styled-components";

const AlbumCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
`;
const AlbumCard__Img= styled.img`
    border-radius:2rem
`;

export {
    AlbumCard,
    AlbumCard__Img
}