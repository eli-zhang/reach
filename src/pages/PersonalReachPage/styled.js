import styled from 'styled-components'

export const ROWS = 4;
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
    margin: 8vw;
`

export const UserGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 6.6vw);
    grid-template-rows: repeat(5, 6.6vw);
    grid-gap: 2vw;
`

export const UserGridItem = styled.div`
    background: ${props => props.grayOut ? "#EEEEEE" : generateRandomPastel()};
    text-align: center;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.9vw;

    transition: all .1s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
`