
import { UserGridContainer, UserGridVertical, UserGridItem, ROWS, COLS,
        LeftFixedTextContainer, RightFixedTextContainer, FixedText, VerticalCenterContainer, SubtitleContainer, SubtitleText, LeftSymbol, RightSymbol, CenterItemsContainer, LargeCenterText,
        EnterPromptContainer, EnterPrompt, EnterSymbol } from './styled'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Cookies from 'universal-cookie';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
require('./stripeStyle.css')

const FINAL_PROMPT_TEXT = "Ready to get started?";
const stripePromise = loadStripe("pk_test_51LoGViKv008lOcIWwZ9EwabpQbjh8gfLoncVeufR7fVtxYhFjTerQ3ZjY0kstPTri0hjiVJ7ncjx2w3uhRayZDPg00pPKf9lzT");
const cookies = new Cookies();

function LineagePage() {
    // const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState("");
    // const [showCheckout, setShowCheckout] = useState(false);
    const [promptTextEndIndex, setPromptTextEndIndex] = useState(0);

    useEffect(() => {
        let status;
        // Create PaymentIntent as soon as the page loads
        fetch("https://7kdqq3ypxl.execute-api.us-east-1.amazonaws.com/default/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: cookies.get('accessCode') }),
        })
        .then((res) => { 
            status = res.status; 
            return res.json()
        })
        .then((data) => {
            if (status === 200) {
                setClientSecret(data.clientSecret)
            }
        });
      }, []);

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
            // setShowCheckout(true);
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

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    useEventListener("keydown", handler);

    const TEST_DATA = ["hello", "hi", "yo"]

    // useEffect(() => {
    // if (!stripe) {
    //   return;
    // }
    
    //     const clientSecret = new URLSearchParams(window.location.search).get(
    //       "payment_intent_client_secret"
    //     );
    
    //     if (!clientSecret) {
    //       return;
    //     }
    
    //     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
    //       switch (paymentIntent.status) {
    //         case "succeeded":
    //           setMessage("Payment succeeded!");
    //           break;
    //         case "processing":
    //           setMessage("Your payment is processing.");
    //           break;
    //         case "requires_payment_method":
    //           setMessage("Your payment was not successful, please try again.");
    //           break;
    //         default:
    //           setMessage("Something went wrong.");
    //           break;
    //       }
    //     });
    // }, [stripe]);

    return (
        <>
            {/* <UserGridContainer>
                <UserGridVertical>
                {Array.from(Array(8).keys()).map((val, index) =>{
                    return (
                        <UserGridItem key={index} grayOut={index > TEST_DATA.length}
                            onClick={() => {}}>
                        </UserGridItem>)
                })}
                </UserGridVertical>
            </UserGridContainer> */}
            <VerticalCenterContainer>
                <CenterItemsContainer>
                    {<a href="https://buy.stripe.com/6oE6r80G73ic15C288" style={{ textDecoration: 'none', position: 'relative' } }>
                        <LargeCenterText>{FINAL_PROMPT_TEXT /*.substring(0, promptTextEndIndex) */}</LargeCenterText>
                        <EnterPromptContainer>
                            <EnterPrompt>press <b>Enter</b></EnterPrompt><EnterSymbol>↵</EnterSymbol><EnterPrompt>to activate your account.</EnterPrompt>
                        </EnterPromptContainer>
                    </a>}

                    {/* {showCheckout && (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    )} */}
                </CenterItemsContainer>
                
            </VerticalCenterContainer>
            {/* <SubtitleContainer>
                <SubtitleText>
                    Measure your social impact as an individual.
                </SubtitleText>
            </SubtitleContainer> */}
            
            <LeftFixedTextContainer>
                <Link style={{ textDecoration: 'none' }} to={"../home"}><LeftSymbol>←</LeftSymbol><FixedText>Home</FixedText></Link>
            </LeftFixedTextContainer>
            <RightFixedTextContainer>
                <Link style={{ textDecoration: 'none' }} to={"../logout"}><FixedText>Log out</FixedText><RightSymbol>→</RightSymbol></Link>
            </RightFixedTextContainer>
        </>
    );
}

export default LineagePage;