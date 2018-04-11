import React, { Component } from "react";

class Formularios extends Component {

    render() {

        return (

            <div>

                {/* MODAL PARA CADASTRAR DESPESAS */}

                <div class="modal fade" id="CadDespesa">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">Cadastrar despesas</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <form action="/" method="">
                                <div class="modal-body">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="" placeholder="Nome da empresa" required="" />
                                    </div>


                                    <div className="form-group">
                                        <input type="text" className="form-control" id="" placeholder="Data da compra" required="" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" id="" placeholder="Valor da compra R$" required="" />
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-success">Cadastrar</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                {/* FIM */}

                {/* MODAL PARA CADASTRAR RECEBIMENTOS */}

                <div class="modal fade" id="CadRecebimento">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">Cadastrar recebimento</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <form action="/" method="">
                                <div class="modal-body">
                                    <div className="form-group">
                                        <input type="text" name="" className="form-control" id="" placeholder="Nome da empresa" required="" />
                                    </div>


                                    <div className="form-group">
                                        <input type="text" name="" className="form-control" id="" placeholder="Data da venda" required="" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="" className="form-control" id="" placeholder="Valor da venda R$" required="" />
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-success">Cadastrar</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                {/* FIM */}

            </div>

        )

    }

}

export default Formularios;