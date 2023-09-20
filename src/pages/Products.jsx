import React, { Component } from "react";
import { FaBriefcase, FaHome } from "react-icons/fa";
import "./products.scss";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

class Products extends Component {
  /*state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const apiUrl = "http://localhost:4000/products";

    try {
      const res = await axios.get(apiUrl);
      const products = res && res.data ? res.data : [];
      this.setState({ products: products });
    } catch (error) {
      console.log("Error: ", error);
    }
  }*/

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <ul>
            <li>
              <a href="#home">
                <span className="icon">
                  <FaHome style={{ fontSize: "22px" }} />
                </span>
                <span className="menu-title">Admin</span>
              </a>
            </li>
            <li>
              <a href="#manage-products">
                <span className="icon">
                  <FaBriefcase style={{ fontSize: "22px" }} />
                </span>
                <span className="menu-title">Product</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <Row>
            <h1 className="title">Product Management</h1>
          </Row>
          <Row>
            <Col className="d-flex flex-row-reverse">
              <Link to="/create-product">
                <Button variant="info">Add New Product</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary">All</Button>{" "}
              <Button variant="success">New</Button>{" "}
              <Button variant="primary">Active</Button>{" "}
              <Button variant="secondary">InActive</Button>{" "}
            </Col>
            <Col>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <ProductList
              loading={this.props.loading}
              products={this.props.products}
            />
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.productReducer.loading,
    products: state.productReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
