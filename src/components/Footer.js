import React from "react";
import { Button, ButtonDelete } from "./button";

class Footer extends React.Component {

    isActive = (text) => {
        let filter = this.props.filter === text ? "active" : "";
        return `footer__button ${filter}`
    }

    render() {
        return (
            <footer className="footer">
                <div className="btnfooter">
                    <h3 className="todo-count">{this.props.countTodo}</h3>
                    <ul className="filters">
                        <li><Button className={this.isActive} text="All" setActiveFilter={this.props.setActiveFilter} /></li>
                        <li><Button className={this.isActive} text="Active" setActiveFilter={this.props.setActiveFilter} /></li>
                        <li><Button className={this.isActive} text="Completed" setActiveFilter={this.props.setActiveFilter} /></li>
                    </ul>
                    <ButtonDelete className={"footer__button"} deleteCompleted={this.props.deleteCompleted} text="Clear completed" />
                </div>
            </footer>
        )
    }
}

export default Footer
