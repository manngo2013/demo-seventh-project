import React, { Component } from "react";
import { FaBriefcase, FaHome } from "react-icons/fa";
import "./products.scss";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
  fetchProductsBySearchText,
} from "../actions/productActions";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

class Products extends Component {
  state = {
    searchText: "",
  };
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

  handleShowAll() {
    this.props.fetchProducts();
  }

  handleShowNew() {
    let status = "new";
    this.props.fetchProducts(status);
  }

  handleShowActive() {
    let status = "active";
    this.props.fetchProducts(status);
  }

  handleShowInActive() {
    let status = "inActive";
    this.props.fetchProducts(status);
  }

  handleSearch() {
    //alert(`Search Text: ${this.state.searchText}`);
    //fire action
    this.props.fetchProductsBySearchText(this.state.searchText);
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
              <Button variant="primary" onClick={() => this.handleShowAll()}>
                All
              </Button>{" "}
              <Button variant="success" onClick={() => this.handleShowNew()}>
                New
              </Button>{" "}
              <Button variant="primary" onClick={() => this.handleShowActive()}>
                Active
              </Button>{" "}
              <Button
                variant="secondary"
                onClick={() => this.handleShowInActive()}
              >
                InActive
              </Button>{" "}
            </Col>
            <Col>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={this.state.searchText}
                  onChange={(event) =>
                    this.setState({ searchText: event.target.value })
                  }
                />
                <Button
                  variant="outline-success"
                  onClick={() => this.handleSearch()}
                >
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <ProductList
              loading={this.props.loading}
              products={this.props.products}
              deleteProduct={this.props.deleteProduct}
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
    fetchProducts: (status) => dispatch(fetchProducts(status)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    fetchProductsBySearchText: (searchText) =>
      dispatch(fetchProductsBySearchText(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
