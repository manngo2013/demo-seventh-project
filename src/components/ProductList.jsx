import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class ProductList extends Component {
  render() {
    if (this.props.loading === true) {
      return <div>Loading data....</div>;
    }
    return (
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
          {this.props.products?.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.content}</td>
                <td>{product.categoryName}</td>
                <td>{product.status}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
