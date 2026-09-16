import { Button } from './style'

function ButtonDefault({ children, theme, ...props }) {
    return (
        <Button {...props}> {children} </Button>
    )
}

export default ButtonDefault