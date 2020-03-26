import React from "react";
import { connect } from "react-redux";
import { addToDoItem, deleteItem } from "../actions";
import "./toDoTextBox.scss";

class ToDoTextBox extends React.Component {
  state = { userInput: "" };
  render() {
    console.log("props", this.props);
    return (
      <div>
        <div className="toDoTextBoxDiv">
          <input
            className="textBoxInput"
            type="text"
            placeholder="Enter your To-DO items here"
            onChange={event => {
              this.setState({ userInput: event.target.value });
            }}
            value={this.state.userInput}
          ></input>
          <button
            className="submitButton"
            onClick={() => {
              this.props.addToDoItem(this.state.userInput);
              this.setState({ userInput: "" });
            }}
          >
            Submit
          </button>
        </div>
        <div>
          <ol>
            {this.props.toDoItems.map(toDo => {
              return (
                <li key={toDo.key}>
                  <div>
                    <span>{toDo.item}</span>
                    <input
                      type="checkbox"
                      key={toDo.key}
                      onClick={() => {
                        this.props.deleteItem(toDo.key);
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("states in mapstatetoprops", state);
  return state;
};

export default connect(mapStateToProps, {
  addToDoItem: addToDoItem,
  deleteItem: deleteItem
})(ToDoTextBox);
