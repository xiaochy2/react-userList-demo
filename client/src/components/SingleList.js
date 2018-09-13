import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

class SingleList extends React.Component {

    del = () => {
        this.props.del(this.props.id);
    }
    editing = () => {
        this.props.editing({
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            sex: this.props.sex,
            age: this.props.age,
            id: this.props.id
        });
    }
    render() {
        return (<tr>
            <td width="10%">
                <Link to={"/edit/" + this.props.id}><Button bsStyle="warning" onClick={() => this.editing()}>Edit</Button></Link>
            </td>
            <td width="10%">
                <Button onClick={() => this.del()} bsStyle="danger">Delete</Button>
            </td>
            <td width="20%">
                {this.props.firstname}
            </td>
            <td width="20%">
                {this.props.lastname}
            </td>
            <td width="20%">
                {this.props.sex}
            </td>
            <td width="20%">
                {this.props.age}
            </td>
        </tr>)
    }
}
export default SingleList;