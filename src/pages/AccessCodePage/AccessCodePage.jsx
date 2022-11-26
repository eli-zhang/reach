import { useState } from 'react'
import { PromptText, PromptContainer, TextInput, EnterSymbol, EnterPromptContainer, EnterPrompt } from './styled'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const AccessCodePage = () => {
    let navigate = useNavigate();

    const [accessCode, setAccessCode] = useState("")

    const handleChange = (event) => {
        setAccessCode(event.target.value);
    }

    const handleKeyDown = (event) => {
        const cookies = new Cookies();
        cookies.set('accessCode', accessCode.substring(accessCode.length - 7), { path: '/' });

        if (event.key === 'Enter') {
            navigate('/home')
        }
    }

    return (
        <PromptContainer>
            <PromptText>
                Enter your access code:
            </PromptText>
            <TextInput chars={7} maxlength='7' value={accessCode} 
                onKeyDown={handleKeyDown} onChange={handleChange} spellCheck={false}/>
            <EnterPromptContainer opacity={accessCode.length === 7 ? 1 : 0}>
                <EnterPrompt>press <b>Enter</b></EnterPrompt><EnterSymbol>↵</EnterSymbol>
            </EnterPromptContainer>
        </PromptContainer>
    );
}

export default AccessCodePage;