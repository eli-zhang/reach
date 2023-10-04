import { useEffect } from 'react';
import { 
    VerticalCenterContainer, 
    CenterItemsContainer, 
    LargeCenterText, 
} from './styled.js';


function LogoutPage({ onLogout }) {
    useEffect(() => {
        setTimeout(() => {
             onLogout()
        }, 1000)
    }, [])
    const FINAL_PROMPT_TEXT = "You're being logged out..."
    return (
        <VerticalCenterContainer>
        <CenterItemsContainer>
            <LargeCenterText>{FINAL_PROMPT_TEXT /*.substring(0, promptTextEndIndex) */}</LargeCenterText>
        </CenterItemsContainer>
        
    </VerticalCenterContainer>
    )
}

export default LogoutPage;