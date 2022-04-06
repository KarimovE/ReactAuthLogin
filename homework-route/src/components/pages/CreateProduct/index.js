import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { productsService } from "../../Apis/services/Products";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {
    Input,
    Col,
    Button,
    Label

  } from "reactstrap";

const product = {
  name: "",
  price: "",
};

function CreateProduct() {

    const [state, setState] = React.useState(product);
    const { push } = useHistory();

    const createNewProduct=React.useEffect(() => {
        productsService.postProduct(state).then(()=>{
                push({
          pathname: "/products",
          search: "",
          state: true,
        });
      });
    }, [state, push]);

  
    const getProductValues = (e) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    };

  return (
      <div>

    <h1>Create Product</h1>
      <Col xs={3} lg={3} className="mt-3">

        <div>
        <Input
        Id="title"
        bsSize="sm"
        valid
        onChange={getProductValues}
        />  
          <Label for="title">
                Product Name
          </Label>     
        </div>

        <div>
        <Input
            bsSize="sm"
            Id="price"
            type="number"
            valid
            onChange={getProductValues}
        />
          <Label for="price">
            Product Name
          </Label>   
        </div>

        <Button onClick={createNewProduct} className="mt-4">
          Create
        </Button>
      </Col>

      </div>

  )
}

export default CreateProduct