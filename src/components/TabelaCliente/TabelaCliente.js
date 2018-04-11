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
                </table>

            </div>


        )
    }

}

export default TabelaCliente;