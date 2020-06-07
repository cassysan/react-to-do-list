import React, { Component } from 'react';
import MoveItem from './MoveItem';
import PropTypes from 'prop-types';


class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      backgroundColor: 'f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
      }
  };

  markComplete = (e) => {
    this.completed = true
  }


  render () {
    const {id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <button style={moveItemBtn} onClick={this.props.moveUp.bind(this, id)}>&#8593;</button>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
        {' '}
        {this.props.todo.title}
        {' '}
        {' '}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
        <button style={moveItemBtn} onClick={this.props.moveDown.bind(this, id)}>&#8595;</button>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired

};

//button styling css
const btnStyle = {
  color: '#fff',
  background: '#ff0000',
  padding: '5px 8px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

const moveItemBtn = {
  color: '#ccc',
  background: '#f4f4f4',
  padding: '3px 50px',
}
export default TodoItem;
// this.props.moveUp.bind(this, id)

