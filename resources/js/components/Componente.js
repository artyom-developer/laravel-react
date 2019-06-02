import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Componente extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="title m-b-md">Hola, Este es el componente.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('componente')) {
    ReactDOM.render(<Componente />, document.getElementById('componente'));
}
