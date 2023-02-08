import React from "react";

class Expense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      category: this.props.category,
      date: this.props.date,
    };
  }

  render() {
    return (
      <div className="expense">
        <h6>Title: {this.state.title}</h6>
        <h6>Description: {this.state.description}</h6>
        <h6>Category: {this.state.category}</h6>
        <h6>Date: {this.state.date}</h6>
      </div>
    );
  }
}

export default Expense;