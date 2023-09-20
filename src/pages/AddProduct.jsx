import React, { Component } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { createProduct } from "../actions/productActions";
import { Navigate } from "react-router-dom";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      content: "",
      categoryName: "",
      status: "",
    };
  }

  handleSaveProduct = (event) => {
    event.preventDefault();
    let isValid = this.checkValidate();
    if (isValid === false) {
      alert("Fields must required");
      return;
    }
    // fire action
    this.props.createProduct({
      name: this.state.name,
      price: this.state.price,
      content: this.state.content,
      categoryName: this.state.categoryName,
      status: "new",
    });
  };

  checkValidate = () => {
    let isValid = true;
    if (
      !this.state.name ||
      !this.state.price ||
      !this.state.content ||
      !this.state.categoryName
    ) {
      isValid = false;
    }
    return isValid;
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Create new product</h1>
          </Col>
        </Row>
        <br />
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formProductName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Enter product's name"
                value={this.state.name}
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formProductPrice">
            <Form.Label column sm={2}>
              Price
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="Enter product's price"
                value={this.state.price}
                onChange={(event) =>
                  this.setState({ price: event.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formProductContent">
            <Form.Label column sm={2}>
              Content
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Enter product's content"
                value={this.state.content}
                onChange={(event) =>
                  this.setState({ content: event.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formProductCategory">
            <Form.Label column sm={2}>
              Category
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Enter product's category"
                value={this.state.categoryName}
                onChange={(event) =>
                  this.setState({ categoryName: event.target.value })
                }
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button
                type="submit"
                variant="info"
                onClick={(event) => this.handleSaveProduct(event)}
              >
                Save Product
              </Button>
            </Col>
          </Form.Group>
        </Form>
        {this.props.createSuccess === true && (
          <Navigate to="/manage-product" replace={true} />
        )}
        {this.props.createSuccess === false && this.props.createErrorMsg && (
          <Alert variant="danger">
            <div>Create Error: {this.props.createErrorMsg}</div>
          </Alert>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    createSuccess: state.productReducer.createSuccess,
    createErrorMsg: state.productReducer.createErrorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => dispatch(createProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
