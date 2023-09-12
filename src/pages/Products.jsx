import React, { Component } from "react";
import { FaBriefcase, FaHome } from "react-icons/fa";
import "./products.scss";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

class Products extends Component {
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
              <Button variant="info">Add New Product</Button>
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Content</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </div>
      </div>
    );
  }
}

export default Products;
