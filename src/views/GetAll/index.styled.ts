import styled from 'styled-components'

export const GetAllStyled = styled.div`
    .loadingwheel {
        margin: 0 auto;
        padding-top: 42px;
    }
`

export const ListNodesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .SearchHighlights {
        height: 42/2;
        margin: 1rem 0rem 0rem 0rem;
        color: #333;
        width: 100%;
        .timeAgo {
            display: inline-flex;
        }
        .showMore {
            cursor: pointer;
        }
    }
    > {
        display: flex;
        flex-direction: column;
        width: 90%;
        @media only screen and (min-width: 600px) {
            width: 520px;
        }
    }
`
export const NoContent = styled.div`
    margin: 0 auto;
    text-align: center;
    height: 100%;
    font-size: 22px;
    padding: 0 17px;
    padding-top: 42px;
    max-width: 320px;
`
