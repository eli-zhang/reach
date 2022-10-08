
import { UserGridContainer, UserGridVertical, UserGridItem, ROWS, COLS,
        LeftFixedTextContainer, RightFixedTextContainer, FixedText, LeftSymbol, RightSymbol, CenterItemsContainer, LargeCenterText,
        EnterPromptContainer, EnterPrompt, EnterSymbol } from './styled'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const FINAL_PROMPT_TEXT = "Join your lineage.";

function LineagePage() {
    const [promptTextEndIndex, setPromptTextEndIndex] = useState(0);

    const useEventListener = (eventName, handler, element = window) => {
        const savedHandler = useRef();
        
        useEffect(() => {
            savedHandler.current = handler;
        }, [handler]);
        
        useEffect(() => {
            const eventListener = (event) => savedHandler.current(event);
            element.addEventListener(eventName, eventListener);
            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        }, [eventName, element]);
      };
    
    const handler = ({ key }) => { 
        if (key === 'Enter') {
            window.location = "https://buy.stripe.com/6oE6r80G73ic15C288";
        }
    };
    
    // useEffect(() => {
    //     const typingEffect = () => {
    //         if (promptTextEndIndex < FINAL_PROMPT_TEXT.length) {
    //             setPromptTextEndIndex(promptTextEndIndex + 1);
    //             setTimeout(typingEffect, 20);
    //         }
    //     }
    //     typingEffect();
    // }, [])

    useEventListener("keydown", handler);

    const TEST_DATA = ["hello", "hi", "yo"]

    return (
        <>
            <UserGridContainer>
                <UserGridVertical>
                {Array.from(Array(8).keys()).map((val, index) =>{
                    return (
                        <UserGridItem key={index} grayOut={index > TEST_DATA.length}
                            onClick={() => {}}>
                        </UserGridItem>)
                })}
                </UserGridVertical>
            </UserGridContainer>
            <CenterItemsContainer>
                <a href="https://buy.stripe.com/6oE6r80G73ic15C288" style={{ textDecoration: 'none' }}>
                    <LargeCenterText>{FINAL_PROMPT_TEXT /*.substring(0, promptTextEndIndex) */}</LargeCenterText>
                </a>
                <EnterPromptContainer>
                    <EnterPrompt>press <b>Enter</b></EnterPrompt><EnterSymbol>↵</EnterSymbol><EnterPrompt>to activate your account.</EnterPrompt>
                </EnterPromptContainer>
            </CenterItemsContainer>
            <LeftFixedTextContainer>
                <Link style={{ textDecoration: 'none' }} to={"../home"}><LeftSymbol>←</LeftSymbol><FixedText>Home</FixedText></Link>
            </LeftFixedTextContainer>
            <RightFixedTextContainer>
                <Link style={{ textDecoration: 'none' }}><FixedText>Reach map</FixedText><RightSymbol>→</RightSymbol></Link>
            </RightFixedTextContainer>
        </>
    );
}

export default LineagePage;