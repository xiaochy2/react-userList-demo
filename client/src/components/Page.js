import React from "react";
import { Button, Form, FormGroup, ControlLabel } from "react-bootstrap";

class Page extends React.Component {
    prev = () => {
        // console.log("prev page");
        this.props.prev();
    }

    next = () => {
        // console.log("next page");
        this.props.next();
    }
    render() {
        return (<Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup>
                {
                    this.props.page_num === 1 ? <Button onClick={() => this.prev()} bsStyle="info" disabled>Prev Page</Button> : <Button onClick={() => this.prev()} bsStyle="info">Prev Page</Button>
                }
                <ControlLabel>{this.props.page_num}/{parseInt((this.props.length - 1) / 5 + 1)}</ControlLabel>
                {
                    this.props.page_num * 5 < this.props.length ? <Button onClick={() => this.next()} bsStyle="info">Next Page</Button> : <Button onClick={() => this.next()} bsStyle="info" disabled>Next Page</Button>
                }

            </FormGroup>
        </Form>

        )
    }
}

export default Page;