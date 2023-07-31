import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeadLink = styled(Link)`
    font-style: italic;
    color: #333;
    margin-left: 0px;
    padding-bottom: 8px;
`

export const Title = styled.h4`
    margin: 4px 0px;
    font-weight: 800;
`

export const ViewNodeStyled = styled.div`
    margin-top: 15px;
    padding: 1em 1em 1em 1em;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #e7e7e799,
        7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001,
        inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001,
        inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001;
    transition: box-shadow 0.6s cubic-bezier(0.79, 0.21, 0.06, 0.81);
    background-color: white;

    img {
        width: 100%;
    }
    .user {
        margin-top: 5px;
        text-decoration: none;
        font-weight: 600;
    }
    .message {
        margin-top: 1em;
    }
    .menu {
        flex: 1;
        display: flex;
        .simpleIcon {
            color: red;
            margin-left: 5px;
        }
        .timeAgo {
            padding-left: 7px;
            padding-top: 5px;
            font-style: italic;
        }
        .viewCount {
            padding-left: 7px;
            padding-top: 5px;
        }
        .ogLink {
            padding-left: 7px;
            padding-top: 4px;
        }
        .nodeLink {
            padding-left: 7px;
            padding-top: 4px;
        }
    }
`
