import Link from 'next/link'
import styled from 'styled-components'

export default () => (
    <Header>
        <h1>Home</h1>
        <ul>
            <li><Link href="/"><StyledLink>Index</StyledLink></Link></li>
            <li><Link href="/post"><StyledLink>Post</StyledLink></Link></li>
        </ul>
    </Header>
)

const Header = styled.header`
    margin: 0;
`

const StyledLink = styled.a`
    color: red;
    font-size: 12px;
`
