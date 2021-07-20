import styled from 'styled-components';

export const BoardContainer = styled.div`
    padding: 10px;
    width: 40vh;
    height: 40vh;
    background-color: FireBrick;
    margin-left: auto;
    margin-right: auto;
    display:grid;
    grid-gap:10px;
    grid-template-columns: repeat(3,1fr);
`;

export const BoardCellConatiner = styled.div`
    background-color:${(props) => props.color};
    border-radius:10px;
    transition: ease 0.1;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
        background-color:MediumSeaGreen;
    }
    span{
        font-size:2.5rem;
    }
`

