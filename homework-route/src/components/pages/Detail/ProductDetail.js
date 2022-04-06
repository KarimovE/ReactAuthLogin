import CommonPageContainer from "../../CommonPageContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { productsService } from "../../Apis/services/Products";
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardGroup,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from "reactstrap";



const ProductDetail=(id)=>{

    const [state, setState] = React.useState();

    React.useEffect(() => {
        productsService.getProductsById(id).then(({data})=>{
        setState(data);
        
      });
    }, [id]);


    return(
        <CommonPageContainer>
            <Row>
            {({state})=>{
              <Col xs={12} lg={3} className="mt-3">

                <CardGroup>
                    <Card lg={3} >

                      <CardBody>

                        <CardTitle tag="h5">{state.title}</CardTitle>
                      
                        <CardSubtitle className="text-danger">Price: ${state.price}</CardSubtitle>
                    
                      </CardBody>
                      
                    </Card> 
                </CardGroup>
          </Col>
}}
          
        </Row>
      </CommonPageContainer>

    )
}

export default ProductDetail