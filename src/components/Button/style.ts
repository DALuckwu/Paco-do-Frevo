import styled from "styled-components";

export const Button = styled.button<{color: string, margin: string, width: string, height: string}>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color:  ${props => props.color};
    color: #fff;
    text-transform: uppercase;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    z-index: 3;
    margin: ${props => props.margin};

    &:hover {
        opacity: 0.7;
    }
`;