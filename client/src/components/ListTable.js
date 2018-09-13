import React from "react";
import SingleList from './SingleList';
import Page from './Page';
import { Table, Col, Button } from "react-bootstrap";


class ListTable extends React.Component {

    prev = () => {
        // console.log("prev page");
        this.props.prev();
    }

    next = () => {
        // console.log("next page");
        this.props.next();
    }
    editing = (singleData) => {
        // console.log("listTable");
        this.props.editing(singleData);
    }
    del = (id) => {
        this.props.del(id);
    }
    sort = (tag) => {
        this.props.sort(tag);
    }
    render() {
        let count = 0;
        let min = (this.props.page_num - 1) * 5;
        let max = this.props.page_num * 5;
        return (<Col><Table striped condensed hover>
            <thead>
                <tr>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                    <th className="text-center"><Button bsStyle="default" onClick={() => this.sort("firstname")}>First Name</Button></th>
                    <th className="text-center"><Button bsStyle="default" onClick={() => this.sort("lastname")}>Last Name</Button></th>
                    <th className="text-center"><Button bsStyle="default" onClick={() => this.sort("sex")}>Sex</Button></th>
                    <th className="text-center"><Button bsStyle="default" onClick={() => this.sort("age")}>Age</Button></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.dataList.map((item) => {
                        count++;
                        if (count > min && count <= max) {
                            return <SingleList del={this.del} editing={this.editing} firstname={item.firstname} lastname={item.lastname} sex={item.sex} id={item._id} age={item.age} />
                        }
                    })
                }
            </tbody>
        </Table>
            <Page length={this.props.dataList.length} prev={this.prev} next={this.next} page_num={this.props.page_num} />

        </Col>);
    }
}
export default ListTable;