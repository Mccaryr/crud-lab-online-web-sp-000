import React, { Component } from 'react';

class RestaurantInput extends Component {
 
    state = {
      text: ''
    }


  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({ text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.text} />
        <input type="submit" value="submit"/>
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
