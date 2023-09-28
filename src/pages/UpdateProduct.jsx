import React, { Component } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { withRouter } from "../components/HOC/withRouter";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchProduct, updateProduct } from "../actions/productActions";
import { Navigate } from "react-router-dom";

class UpdateProduct extends Component {
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

  componentDidMount() {
    const productId = this.props.params.productId;
    this.props.fetchProduct(productId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.product !== this.props.product) {
      this.setState({
        name: this.props.product?.name,
        price: this.props.product?.price,
        content: this.props.product?.content,
        categoryName: this.props.product?.categoryName,
        status: this.props.product?.status,
      });
    }
  }

  handleSaveProduct = (event) => {
    event.preventDefault();
    let isValid = this.checkValidate();
    if (isValid === false) {
      alert("Fields must required");
      return;
    }
    // fire action
    this.props.updateProduct({
      id: this.props.params.productId,
      name: this.state.name,
      price: this.state.price,
      content: this.state.content,
      categoryName: this.state.categoryName,
      status: this.state.status,
    });
  };

  checkValidate = () => {
    let isValid = true;
    if (
      !this.state.name ||
      !this.state.price ||
      !this.state.content ||
      !this.state.categoryName ||
      !this.state.status
    ) {
      isValid = false;
    }
    return isValid;
  };

  render() {
    if (this.props.loading === true) {
      return <div>Loading data...</div>;
    }
    return (
      <Container>
        <Row>
          <Col>
            <h1>Update product</h1>
          </Col>
        </Row>
        <br />
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formProductId">
            <Form.Label column sm={2}>
              ID
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                disabled
                defaultValue={this.props.params.productId}
              />
            </Col>
          </Form.Group>
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
          <Form.Group as={Row} className="mb-3" controlId="formProductStatus">
            <Form.Label column sm={2}>
              Status
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Enter product's status"
                value={this.state.status}
                onChange={(event) =>
                  this.setState({ status: event.target.value })
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
                Save Change
              </Button>
            </Col>
          </Form.Group>
        </Form>
        {this.props.updateSuccess === true && (
          <Navigate to="/manage-product" replace={true} />
        )}
        {this.props.updateSuccess === false && this.props.updateErrorMsg && (
          <Alert variant="danger">
            <div>Error: {this.props.updateErrorMsg}</div>
          </Alert>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.productReducer.loading,
    product: state.productReducer.product,
    updateSuccess: state.productReducer.updateSuccess,
    updateErrorMsg: state.productReducer.updateErrorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    updateProduct: (product) => dispatch(updateProduct(product)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(UpdateProduct);
