import React from "react";
import Todo from "./Todo";

class Form extends React.Component {
    render() {
        return (
            <form className="form">
                <div className="main" >
                    <input type="text"
                        className="new-todo"
                        placeholder="Add todo"
                        onChange={this.props.handleChange}
                        value={this.props.todoValue} />
                    <button className="form__button" type="submit" onClick={this.props.handleClick}></button>
                </div>
                <Todo todos={this.props.todos} handleToggle={this.props.handleToggle}
                    handleDelete={this.props.handleDelete} />
            </form>
        )
    }
}

export default Form