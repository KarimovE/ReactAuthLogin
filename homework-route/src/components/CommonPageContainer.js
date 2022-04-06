import { Container } from "reactstrap"
import { Header } from "./Header"
import 'bootstrap/dist/css/bootstrap.min.css';

const CommonPageContainer=({children})=>{
    return(
        <Container>
            <Header/>
            {children}
        </Container>
    )
}

export default CommonPageContainer