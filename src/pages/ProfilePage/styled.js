import styled from 'styled-components'

export const ROWS = 2;
export const COLS = 10;

export const UserColorSquare = styled.div`
    display: inline-block;
    background: ${props => props.grayOut ? "#EEEEEE" : "#C6DBDA"};
    text-align: center;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.9vw;
    height: 15vh;
    width: 15vh;

    transition: all .1s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
`

export const BackgroundContainer = styled.div`
    position: absolute;
    background-color: #F9F9F9;
    height: 100%;
    width: 100%;
`

export const LeftContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 50%;
    background-color: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
`

export const Container = styled.div`
    margin: 10vh ;
`

export const StatisticsTable = styled.div`
    margin-top: 5vh;
    line-height: 25px;
    font-family: 'Roboto Mono', sans-serif;
    font-size: 18px;

`

export const LeftContent = styled.div`
    float: left;
    width: 60%;
    font-weight: 600;
    color: #555555;
`

export const RightContent = styled.div`
    float: right;
    width: 40%;
    font-family: 'Roboto Mono', sans-serif;
    text-align: right;

`

export const LeftFixedTextContainer = styled.div`
    position: fixed;
    left: 3vw;
    bottom: 3vw;
`

export const LeftSymbol = styled.span`
    margin-right: 0.5vw;
    font-weight: 400;
    font-family: 'Roboto Mono', sans-serif;
    color: #555555;
    font-size: 15px;
`

export const RightFixedTextContainer = styled.div`
    position: fixed;
    right: 3vw;
    bottom: 3vw;
`

export const RightSymbol = styled.span`
    margin-left: 0.5vw;
    font-weight: 400;
    font-family: 'Roboto Mono', sans-serif;
    color: #555555;
    font-size: 15px;
`

export const FixedText = styled.span`
    font-size: 15px;
    font-weight: 400;
    font-family: 'Roboto Mono', sans-serif;
    color: #555555;
`

export const UserGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 6.6vw);
    grid-template-rows: repeat(2, 6.6vw);
    grid-gap: 2vw;
`

export const UserGridContainer = styled.div`
    display: inline-block;
    margin-left: 1vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
`

export const UserGridVertical = styled.div`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: repeat(8, 6vh);
    grid-gap: 2vh;
`

export const UserGridItem = styled.div`
    background: "#EEEEEE";
    text-align: center;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.7vw;

    transition: all .1s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
`