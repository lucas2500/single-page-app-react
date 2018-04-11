import React, { Component } from "react";

class Modals extends Component {

    render() {

        return (

            <div>
                <div class="modal fade" id="ContasPagar">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">Contas a pagar</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div class="modal-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Estabelecimento</th>
                                            <th>Data da compra</th>
                                            <th>Valor da compra</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="modal fade" id="ContasReceber">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">Contas a receber</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div class="modal-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Estabelecimento</th>
                                            <th>Data da venda</th>
                                            <th>Valor da venda</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )


    }

}

export default Modals;