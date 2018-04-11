import React, { Component } from "react";

class TabelaCliente extends Component {

    render() {

        return (

            <div className="container">

                <h4 className="mb-4">Lista de clientes cadastrados</h4>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#Código</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lucas Rafael de Oliveira Barbosa</td>
                            <td>19</td>
                            <td><button className="btn btn-primary">Ir</button></td>
                        </tr>
                        
                        <tr>
                            <td>2</td>
                            <td>Manuella Alves de Oliveira</td>
                            <td>21</td>
                            <td><button className="btn btn-primary">Ir</button></td>
                        </tr>
                    </tbody>
                </table>

            </div>


        )
    }

}

export default TabelaCliente;