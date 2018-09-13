import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl } from "react-bootstrap";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    search = (value) => {

        this.props.search(value);

    }
    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        // console.log(event.target.value);
        this.search(event.target.value);
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Col md={2} >
                        <ControlLabel>Search</ControlLabel>
                    </Col>
                    <Col md={4}>
                        <FormControl type="text" value={this.state.value} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
            </Form>
        );
    }

}

export default Search;