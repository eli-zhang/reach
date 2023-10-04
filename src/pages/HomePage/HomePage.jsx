
import { UserGridContainer, UserGrid, UserGridItem, ROWS, COLS,
        LeftFixedTextContainer, RightFixedTextContainer, FixedText, LeftSymbol, RightSymbol } from './styled'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function HomePage() {
    const [mapUsers, setMapUsers] = useState([]);

    useEffect(() => {
        fetch("https://7kdqq3ypxl.execute-api.us-east-1.amazonaws.com/default/userMap")
            .then(response => response.json())
            .then(data => setMapUsers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <>
            <UserGridContainer>
                <UserGrid>
                {Array.from(Array(ROWS * COLS).keys()).map((val, index) =>{
                    return (
                        <UserGridItem key={index} grayOut={index >= mapUsers.length}
                            onClick={() => {}}>
                        </UserGridItem>)
                })}
                </UserGrid>
            </UserGridContainer>
            <RightFixedTextContainer>
                <Link style={{ textDecoration: 'none' }} to={'../lineage'}><FixedText>Get started</FixedText><RightSymbol>→</RightSymbol></Link>
            </RightFixedTextContainer>
        </>
    );
}

export default HomePage;