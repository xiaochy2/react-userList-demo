import React from "react";
import Search from './Search'
import ListTable from './ListTable'
import { Link } from 'react-router-dom';
import { Grid, Col, Row, Button } from "react-bootstrap";

class Home extends React.Component {

    prev = () => {
        // console.log("prev page");
        this.props.prev();
    }

    next = () => {
        // console.log("next page");
        this.props.next();
    }

    editing = (singleData) => {
        this.props.editing(singleData);
    }
    search = (name) => {
        this.props.search(name);
    }

    del = (id) => {
        this.props.del(id);
    }
    render() {
        return (<Grid>
            <Row>
                <Col md={2}></Col>
                <Col md={6} mdOffset={1}>
                    <Search search={this.search} />
                </Col>
                <Col md={2}></Col>
            </Row>
            <Row>
                <Col md={2}></Col>
                <Col md={6} mdOffset={1}>
                    <ListTable prev={this.prev} next={this.next} page_num={this.props.page_num} editing={this.editing} del={this.del} dataList={this.props.dataList} sort={this.props.sort} />
                </Col>
                <Col md={2}></Col>
            </Row>
            <Link to="/create"><Button bsStyle="success">Create New User</Button></Link>
        </Grid>);
    }
}
export default Home;