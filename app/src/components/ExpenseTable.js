/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

import React from "react";

class ExpensesTable extends React.Component {
  render() {
    const { tableData } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.title}</td>
                <td>{data.category}</td>
                <td>{data.price}</td>
                <td>{data.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ExpensesTable;
