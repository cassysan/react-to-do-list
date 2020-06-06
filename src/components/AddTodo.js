import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
  state = {
        title: ''
      };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''})
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  render () {
    return (
    <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
      <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
          style={{flex: '10', padding: '5px'}}  />
      <input
        type="submit"
        value="Submit"
        style={{flex: '1'}}
        className='btn'/>
    </form>
      )
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;

