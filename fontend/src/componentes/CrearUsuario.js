import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CrearUsuario extends Component {

    state = {
        usuario: [],
        username: '',
        genero: '',
        fecha: new Date(),
        editar:false,
        _id: ''
    }
    getUsuario = async () => {
        const res = await axios.get('http://localhost:4000/api/usuarios');
        this.setState({ usuario: res.data });
    }
    async componentDidMount() {
        this.getUsuario();
        if (this.props.match.params.id){
            const res = await axios.get('http://localhost:4000/api/usuarios/' + this.props.match.params.id );
            this.setState({
                username: res.data.username,
                genero: res.data.genero,
                fecha: new Date(res.data.fecha)
            })
            this.setState({editar:true, _id:this.props.match.params.id})
        }
    }

    inputChangeUser = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    inputChangeGe = (e) => {
        this.setState({
            genero: e.target.value
        })
    }
    guardarUsuario = async e => {
        const nuevoUsuario = {
            username: this.state.username,
            genero: this.state.genero,
            fecha: this.state.fecha
        }
        if (this.state.editar){
            await axios.put('http://localhost:4000/api/usuarios/' + this.state._id, nuevoUsuario);
            window.location.href='/';
        } else{
            await axios.post('http://localhost:4000/api/usuarios', nuevoUsuario);
        }
    }

    borrasUsuario = async (id) => {
        await axios.delete('http://localhost:4000/api/usuarios/' + id);
        this.getUsuario();
    }
    actualizarFecha = fecha => {
        this.setState({ fecha });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h4>Crear un nuevo usuario</h4>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Nombre" name="nombre" onChange={this.inputChangeUser} value={this.state.username} required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Genero" name="genero" onChange={this.inputChangeGe} value={this.state.genero} required />
                        </div>
                        <div className="form-group">
                            <DatePicker className="form-control" selected={this.state.fecha} onChange={this.actualizarFecha} />
                        </div>
                        <form onSubmit={this.guardarUsuario}>

                            <button type="submit" className="btn btn-primary">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.usuario.map(usuario => <li className="list-group-item list-group-item-action"
                                key={usuario._id} onDoubleClick={() => this.borrasUsuario(usuario._id)}>
                                {usuario.username}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
