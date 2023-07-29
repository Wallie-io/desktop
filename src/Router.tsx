import { Outlet, createBrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import GetAll from './views/GetAll'
import TopBar from '@components/TopBar'

export const AppWrapper = styled.div`
    height: 100%;
    padding: 0rem 0rem 1.5rem 0rem;
    @media only screen and (min-width: 600px) {
    }
`

function Wrapper() {
    return (
        <AppWrapper>
            <TopBar />
            <Outlet />
        </AppWrapper>
    )
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Wrapper />,
        children: [
            {
                path: '/',
                element: <GetAll />,
            },
        ],
    },
])
