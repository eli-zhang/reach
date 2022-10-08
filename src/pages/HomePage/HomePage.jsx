
import { UserGridContainer, UserGrid, UserGridItem, ROWS, COLS,
        LeftFixedTextContainer, RightFixedTextContainer, FixedText, LeftSymbol, RightSymbol } from './styled'
import { Link, useNavigate } from 'react-router-dom'

function HomePage() {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/lineage')
    }

    const TEST_DATA = ["hello", "hi", "yo"]

    return (
        <>
            <UserGridContainer>
                <UserGrid>
                {Array.from(Array(ROWS * COLS).keys()).map((val, index) =>{
                    return (
                        <UserGridItem key={index} grayOut={index > TEST_DATA.length}
                            onClick={() => {}}>
                        </UserGridItem>)
                })}
                </UserGrid>
            </UserGridContainer>
            <LeftFixedTextContainer>
                <Link style={{ textDecoration: 'none' }} to={'../map'}><LeftSymbol>←</LeftSymbol><FixedText>Reach map</FixedText></Link>
            </LeftFixedTextContainer>
            <RightFixedTextContainer>
                <Link style={{ textDecoration: 'none' }} to={'../lineage'}><FixedText>Your lineage</FixedText><RightSymbol>→</RightSymbol></Link>
            </RightFixedTextContainer>
        </>
    );
}

export default HomePage;