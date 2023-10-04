import styled from 'styled-components'

export const VerticalCenterContainer = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%) translateY(-50%);
    align-content: center;
    text-align: center;
`

export const CenterItemsContainer = styled.div`
    display: block;
    align-content: center;
`

export const LargeCenterText = styled.span`
    font-family: 'Abril Fatface', sans-serif;
    color: #F3B0C3;
    font-size: 80px;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
`