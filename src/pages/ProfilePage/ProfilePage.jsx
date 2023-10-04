
import { BackgroundContainer, LeftContainer, Container, UserColorSquare, LeftFixedTextContainer, RightFixedTextContainer, LeftSymbol, RightSymbol, FixedText,
        UserGridContainer, UserGrid, UserGridItem, StatisticsTable, LeftContent, RightContent, ROWS, COLS } from './styled'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

function ProfilePage() {
    return (
        <BackgroundContainer>
            <LeftContainer>
                <Container>
                    <UserColorSquare></UserColorSquare>
                    <UserGridContainer>
                        <UserGrid>
                        {Array.from(Array(ROWS * COLS).keys()).map((val, index) =>{
                            return (
                                <UserGridItem key={index}
                                    onClick={() => {}}>
                                </UserGridItem>)
                        })}
                        </UserGrid>
                    </UserGridContainer>

                    <StatisticsTable>
                        <LeftContent>Member #</LeftContent><RightContent>458</RightContent>
                        <LeftContent>Direct reach</LeftContent><RightContent>3</RightContent>
                        <LeftContent>Total reach</LeftContent><RightContent>115</RightContent>
                        <LeftContent>Reach ranking</LeftContent><RightContent>300</RightContent>
                        <LeftContent>Distance from top</LeftContent><RightContent>4</RightContent>
                        <LeftContent>Distance from bottom</LeftContent><RightContent>10</RightContent>
                        <LeftContent>hello</LeftContent><RightContent>hi</RightContent>

                    </StatisticsTable>
                </Container>
            </LeftContainer>
            

            <LeftFixedTextContainer>
                <Link style={{ textDecoration: 'none' }} to={'../home'}><LeftSymbol>←</LeftSymbol><FixedText>Home</FixedText></Link>
            </LeftFixedTextContainer>
            <RightFixedTextContainer>
                <Link style={{ textDecoration: 'none' }} to={'../lineage'}><FixedText>Log out</FixedText><RightSymbol>→</RightSymbol></Link>
            </RightFixedTextContainer>
        </BackgroundContainer>
    );
    
}

export default ProfilePage;