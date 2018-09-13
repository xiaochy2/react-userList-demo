import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Button, Form, FormGroup, Col, ControlLabel, FormControl } from "react-bootstrap";

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            firstname: this.props.data.firstname,
            lastname: this.props.data.lastname,
            sex: "",
            age: this.props.data.age,
            password: "",
            password_re: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        this.props.update(this.state);

    }

    handleChange(event) {

        switch (event.target.id) {
            case "0": this.setState({ firstname: event.target.value }); break;
            case "1": this.setState({ lastname: event.target.value }); break;
            case "2": this.setState({ sex: event.target.value }); break;
            case "3": this.setState({ age: event.target.value }); break;
            case "4": this.setState({ password: event.target.value }); break;
            case "5": this.setState({ password_re: event.target.value }); break;
            default:
                break;
        }

    }
    isValid() {
        return (this.state.firstname.length > 0 || this.state.lastname.length > 0) && this.state.age > 0 && this.state.age < 100 && this.state.password === this.state.password_re && this.state.password.length > 0 && this.state.sex !== "";
    }
    render() {

        return (
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl id="0" type="text" value={this.state.firstname} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl id="1" type="text" value={this.state.lastname} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Sex</ControlLabel>
                            <FormControl id="2" componentClass="select" onChange={this.handleChange}>
                                <option value="">select</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Age</ControlLabel>
                            <FormControl id="3" type="number" min="1" max="100" value={this.state.age} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl id="4" type="password" value={this.state.password} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Repeat</ControlLabel>
                            <FormControl id="5" type="password" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            {
                                this.isValid() ? <Link to="/"><Button onClick={() => this.handleSubmit()} type="submit" bsStyle="success">edit</Button></Link> : <Button onClick={() => this.handleSubmit()} type="submit" bsStyle="warning" disabled>edit</Button>
                            }

                        </FormGroup>

                    </Form>
                </Col>
                <Col md={4}></Col>
            </Row>
        );
    }
}

export default Edit;