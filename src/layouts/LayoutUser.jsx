import styled from "styled-components"
import { Outlet } from "react-router-dom"
export default function Component() {
    return (<Container>
        <h1>Header</h1>
        <Outlet />
        <h2>Footer</h2>
    </Container>);
}

const Container = styled.div`

`