import React from 'react';
import { Button } from 'react-bootstrap';


export class Home extends React.Component {
    render() {
        console.log(this.props.name);
        return (


            <div className="container-fluid">
                <div className="row">

                    <button class="btn btn-primary">Button</button>
                </div>
                <h1>Home Component </h1></div>
        );
    }
}

