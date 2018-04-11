import React, { Component } from "react";

class MenuSuperior extends Component {

	render() {
		return (

			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a href="/" className="navbar-brand">Gestor de recursos</a>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mr-auto">
						<a className="nav-link" href="/" data-toggle="modal" data-target="#ContasPagar">Contas a pagar</a>
						<a className="nav-link" href="/" data-toggle="modal" data-target="#ContasReceber">Contas a receber</a>
						<a className="nav-link" href="/" data-toggle="modal" data-target="#CadDespesa">Cadastrar despesas</a>
						<a className="nav-link" href="/" data-toggle="modal" data-target="#CadRecebimento">Cadastrar pagamentos a receber</a>
					</ul>
				</div>

			</nav>

		)
	}
}

export default MenuSuperior;