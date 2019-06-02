import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = "http://localhost/tutofox/react/proyecto-react/public/";

export default class Producto extends Component {

    constructor(props){
      super(props);
      this.state = {
        producto:[]
      }
    }

    componentDidMount(){

      axios.get(baseUrl+'api/producto/list').then(response=>{

          this.setState({producto:response.data})

       }).catch(error=>{
         alert("Error "+error)
       })
    }

    render() {
        return (
          <div class="container">

            <h3>Laravel y React APIRest</h3>
            <hr/>
            <table class="table table-bordered order-table ">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Descripcion</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                  {this.listData()}
              </tbody>
            </table>

          </div>
        );
    }

    listData(){

      return this.state.producto.map((data)=>{

        return(
          <tr>
            <td>{data.titulo}</td>
            <td>{data.descripcion}</td>
            <td>{data.precio}</td>
          </tr>
        )

      })

    }
}

if (document.getElementById('producto')) {
    ReactDOM.render(<Producto />, document.getElementById('producto'));
}
