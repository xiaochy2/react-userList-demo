import React from "react";
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Edit from './Edit';
import * as action from '../actions';


class UserListApp extends React.Component {
    componentDidMount() {
        // console.log("GET");
        this.props.getInfo();
    }
    search = (text) => {
        // console.log("search:"+text);
        this.props.search(text);

    }

    add = (singleData) => {
        //   console.log("add:"+singalData);
        this.props.add(singleData);
    }

    update = (singleData) => {
        // console.log("update:"+singleData);
        this.props.update(singleData);
    }

    editing = (singleData) => {
        // console.log("editing: "+singleData);
        this.props.editing(singleData);
    }

    del = (id) => {
        // console.log("del:"+id);
        this.props.del(id);
    }

    sort = (tag) => {
        // console.log("sort:"+tag);
        this.props.sort(tag);
    }

    prev = () => {
        // console.log("prev page");
        this.props.prev();
    }

    next = () => {
        // console.log("next page");
        this.props.next();
    }

    render() {
        return (<div>
            <h1>UserList - React</h1>
            <BrowserRouter>
                <div>
                    <Route exact path="/" render={(props) => <Home prev={this.prev} next={this.next} page_num={this.props.page_num} editing={this.editing} dataList={this.props.dataList} search={this.search} del={this.del} sort={this.sort} />} />
                    <Route exact path="/create" render={(props) => <Create add={this.add} />} />
                    <Route exact path="/edit/:id" render={(props) => <Edit data={this.props.singleData} update={this.update} />} />
                </div>
            </BrowserRouter>
        </div>
        )
    }
}

const mapstateToProps = state => {
    return {
        dataList: state.dataList,
        // count: state.count,
        singleData: state.singleData,
        page_num: state.page_num
    }
}

function mapdispatchToProps(dispatch) {
    return ({
        add: (singleData) => dispatch(action.add(singleData)),
        update: (singleData) => dispatch(action.update(singleData)),
        editing: (singleData) => dispatch(action.editing(singleData)),
        search: (text) => dispatch(action.search(text)),
        del: (id) => dispatch(action.del(id)),
        sort: (tag) => dispatch(action.sort(tag)),
        getInfo: () => dispatch(action.getInfo()),
        prev: () => dispatch(action.prev()),
        next: () => dispatch(action.next())
    })
}

export default connect(mapstateToProps, mapdispatchToProps)(UserListApp);