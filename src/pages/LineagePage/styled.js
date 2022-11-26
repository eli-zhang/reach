import styled from 'styled-components'

export const ROWS = 3;
export const COLS = 10;
export const ROW_SPACING = 20;
export const COL_SPACING = 20;

export const PASTEL_COLORS = [
    "#ABDEE6",
    "#CBAACB",
    "#FFCCB6",
    "#F3B0C3",
    "#C6DBDA",
    "#FEE1E8",
    "#FED7C3",
    "#F6EAC2",
    "#ECD5E3",
    "#FF968A",
    "#FFAEA5",
    "#FFC5BF",
    "#FFD8BE",
    "#FFC8A2",
    "#D4F0F0",
    "#8FCACA",
    "#CCE2CB",
    "#B6CFB6",
    "#97C1A9",
    "#FCB9AA",
    "#FFDBCC",
    "#A2E1DB",
    "#55CBCD"
]

const generateRandomPastel = () => {
    return PASTEL_COLORS[Math.floor(Math.random()*PASTEL_COLORS.length)];
}

export const UserGridContainer = styled.div`
    height: 100%;
    margin-left: 8vh;
    margin-top: 16vh;
    margin-bottom: 22vh;
    width: 6vh;
`

export const UserGridVertical = styled.div`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: repeat(8, 6vh);
    grid-gap: 2vh;
`

export const UserGridItem = styled.div`
    background: ${props => props.grayOut ? "#EEEEEE" : generateRandomPastel()};
    text-align: center;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.7vw;

    transition: all .1s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
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

export const VerticalCenterContainer = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%) translateY(-50%);
    align-content: center;
    text-align: center;
`

export const CenterItemsContainer = styled.div`
    display: block;
    align-content: center;
    
`

export const LargeCenterText = styled.span`
    font-family: 'Abril Fatface', sans-serif;
    color: #F3B0C3;
    font-size: 80px;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
`

export const FixedText = styled.span`
    font-size: 15px;
    font-weight: 400;
    font-family: 'Roboto Mono', sans-serif;
    color: #555555;
`

export const SubtitleContainer = styled.div`
    position: absolute;
    bottom: 6.5vh;
    width: 100%;
    align-items: center;
    text-align: center;
`

export const SubtitleText = styled.span`
    position: relative;
    display: block;
    font-family: 'Lora', serif;
    font-weight: 400;
    font-size: 18px;
    margin-top: 90px;
    color: #666666;
`

export const EnterPromptContainer = styled.span`
    margin-top: 15px;
    display: block;
    position: absolute;
    right: 0;
    opacity: ${props => props.opacity};
    transition: opacity 0.5s;
`

export const EnterPrompt = styled.span`
    margin-left: 5px;
    margin-top: 30px;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Inter Tight', sans-serif;
    color: #AAAAAA;
`

export const EnterSymbol = styled.span`
    margin-left: 5px;
    margin-top: 25px;
    font-size: 15px;
    font-weight: 400;
    font-family: 'Roboto Mono', sans-serif;
    color: #AAAAAA;
`