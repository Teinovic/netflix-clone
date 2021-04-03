import React from 'react'
import { Inner, Item, Container } from './styles/jumbotron'


export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}
                <div>

                </div>
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer ({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}