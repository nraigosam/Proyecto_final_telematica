import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom'

export default class ListaUsuarios extends Component {
    state = {
        usuario: []
    }

    getUsuario = async () => {
        const res = await axios.get('http://localhost:4000/api/usuarios');
        this.setState({ usuario: res.data });
    }

    async componentDidMount() {
        this.getUsuario();
    }
    borrasUsuario = async (id) => {
        await axios.delete('http://localhost:4000/api/usuarios/' + id);
        this.getUsuario();
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.usuario.map(usuario => (
                        <div className="col-md-4 p-2" key={usuario._id}>
                            <div className="card">
                                
                                <div className="card-header d-flex justify-content-between">
                                    <h5> {usuario.username} </h5>
                                </div>
                                <img src="https://lh3.googleusercontent.com/proxy/ZhceLr-cGzkBthtzMQZuFjmNVtKQV1XQYZNRe0DdAm9QMyqnTCfx4b_W4A7R_z1KOJuz6GJUNsbKPaoLy_pSogI3FtpIh-5xvhBRvKc"className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p> <strong>Informacion:</strong> </p>
                                    <p> {usuario.genero} </p>
                                    <p> {format(usuario.fecha)} </p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.borrasUsuario(usuario._id)}>
                                        Eliminar
                                    </button>
                                    <Link className="btn btn-primary" to={"/edit/" + usuario._id}>
                                        Editar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
