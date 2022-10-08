import styled from 'styled-components'

export const PromptContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;

    animation: fadeInAnimation ease-in-out 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export const PromptText = styled.span`
    font-family: 'Inter Tight', sans-serif;
    font-size: 40px;
    color: #444444;
`

const CHAR_WIDTH = 1;
const CHAR_GAP = 0.5 * CHAR_WIDTH;
const getInnerWidth = (chars) => { return chars *(CHAR_WIDTH + CHAR_GAP) }

export const TextInput = styled.input`
    display: block;
	border: none;
	padding: 0;
	width: ${props => getInnerWidth(props.chars)}ch;
	background: repeating-linear-gradient(90deg, 
		dimgrey 0, dimgrey ${CHAR_WIDTH}ch, 
		transparent 0, transparent ${CHAR_WIDTH + CHAR_GAP}ch) 
		0 100%/ ${props => getInnerWidth(props.chars) - CHAR_GAP}ch 2px no-repeat;
    font: 40px 'Roboto Mono', monospace;
	letter-spacing: ${CHAR_GAP}ch;
    margin-left: 20px;
    font-weight: 600;
	
	&:focus {
		outline: none;
		color: #444444;
	}
`

export const EnterPromptContainer = styled.span`
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