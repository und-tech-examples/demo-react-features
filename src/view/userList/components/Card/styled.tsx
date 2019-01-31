import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% { left: -100px; }
    100% { left: 100%; } 
`;
export const PlaceholderShimmer = styled.div`
    width: 270px;
    height: 300px;
    background:#E9E9E9;
    overflow:hidden;
    position: relative;
    &:before{
        content: '';
        width:300px;
        animation: ${animation} 0.8s linear infinite;
        position:absolute;
        background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 30%, rgba(0,0,0,0.02) 60%, transparent 100%);
        left:0;
        top:0;
        bottom:0;
    };
`;

export const Wrapper = styled.div`
    width: 270px;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    padding: 30px 0 17px;
    text-align: center;
    position: relative;
    margin: 10px;
`;

export const Line = styled.div`
    position: absolute;
    width: 270px;
    height: 0px;
    border: .5px solid #C6C6C6;
    top: 90px;
    z-index: 1;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 128px;
    height: 128px;
    position: relative;
    z-index: 2;
`

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #000000;
    font-weight: normal;
    height: 29px;
    margin: 0;
`;

export const Subtitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: #4B4B4B;
    height: 17px;
    margin: 0;
`;

export const FotterButton = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    padding: 0 22px;
`;

export const ButtonIcon = styled.button`
    font-size: 18px;
    border: none;
    cursor: pointer;
`;

export const ButtonFollow = styled.button`
    position: absolute;
    height: 25px;
    right: 10px;
    top: 11px;
    border: none;
    background: #4CAB72;
    ${(props) => props.following && `
        background: #AF69C1;
    `}
    border-radius: 3px;
    color: white;
    cursor: pointer;
`;