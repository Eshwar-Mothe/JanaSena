import styled from "styled-components";

export const Box = styled.div`
    padding: 2% 2%;
    background: white;
    box-shadow: 0 0px 3rem silver;
    // position: absolute;
    bottom: 0;
    width: 100%;
 
    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 950px;
    margin: 0 auto;
    
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 50px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 50px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 2fr)
        );
    }
`;

export const FooterLink = styled.a`
    color: #000;
    margin-bottom: 10px;
    font-size: 18px;
    text-decoration: none;
 
    &:hover {
        color: red;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 24px;
    color: #000;
    margin-bottom: 40px;
    font-weight: bold;
`;