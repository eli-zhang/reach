
import { UserGridContainer, UserGrid, UserGridItem, ROWS, COLS } from './styled'

function PersonalReachPage() {

    const handleClick = () => {

    }

    const TEST_DATA = ["hello", "hi", "yo"]

    return (
        <UserGridContainer>
            <UserGrid>
            {Array.from(Array(ROWS * COLS).keys()).map((val, index) =>{
                return (
                    <UserGridItem grayOut={index > TEST_DATA.length}
                        onClick={() => handleClick()}>
                    </UserGridItem>)
            })}
            </UserGrid>
        </UserGridContainer>
    );
}

export default PersonalReachPage;