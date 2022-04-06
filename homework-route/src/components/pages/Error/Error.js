import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from "reactstrap"
import "./Error.scss";

function Error() {
  return (

    <Row>
        <Col xs={12}>
            <h3 className="text-success mt-3">
                Error
            </h3>
        </Col>
    </Row>

  )
}

export default Error