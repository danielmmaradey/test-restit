//Dependencies
import React, { Component } from "react";

//Component
import Field from "../Field/Field";

class Form extends Component {
  state = {
    id: "",
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",

    type: 1
  };

  //GET new props and update data inputs
  componentWillReceiveProps(nextProps) {
    if (nextProps.edit) {
      this.setState({
        id: nextProps.edit.id,
        input1: nextProps.edit.type,
        input2: nextProps.edit.puestos,
        input3: nextProps.edit.ocupados,
        input4: nextProps.edit.id_pedido,
        input5: nextProps.edit.id_mesa
      });
    }
    if (nextProps.type !== this.state.type) {
      this.setState(
        {
          type: nextProps.type
        },
        () => {
          if (nextProps.type === 1) {
            this.setState({
              id: "",
              input1: "",
              input2: "",
              input3: "",
              input4: "",
              input5: ""
            });
          }
        }
      );
    }
  }

  onChangeField = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  //Get values to create new row
  actionGetValues = e => {
    const values = this.state;
    if (this.props.onClickedGet !== undefined) {
      e.preventDefault();
      this.props.onClickedGet(values);
    }
  };

  //Get values to update a row
  actionPutValues = e => {
    const values = this.state;
    if (this.props.onClickedPut !== undefined) {
      e.preventDefault();
      this.props.onClickedPut(values);
    }
  };

  //Function to view form create
  actionChangeType = e => {
    this.props.changetype();
  };

  componentButton = type => {
    if (type === 1) {
      return (
        <button
          className="btn"
          type="submit"
          onClick={e => this.actionGetValues(e)}
        >
          Crear
        </button>
      );
    } else {
      return (
        <button
          className="btn"
          type="submit"
          onClick={e => this.actionPutValues(e)}
        >
          Actualizar
        </button>
      );
    }
  };

  componentButtonChangeType = type => {
    if (type !== 1) {
      return (
        <button className="btn" onClick={e => this.actionChangeType(e)}>
          ir a crear mesa
        </button>
      );
    } else {
      return null;
    }
  };

  render() {
    const { type } = this.state;
    const button = this.componentButton(type);
    const buttonChange = this.componentButtonChangeType(type);
    return (
      <div id="Form">
        {buttonChange}
        <form className="container-form">
          <Field
            enable={false}
            NamePlaceHolder="ingrese algun valor"
            error=""
            data={this.state.input1}
            NameValue={"input1"}
            NameLabel="Tipo"
            PrincipalClass="prueba"
            onChangeField={e => this.onChangeField(e)}
          />
          <Field
            enable={false}
            NamePlaceHolder="ingrese algun valor"
            error=""
            data={this.state.input2}
            NameValue={"input2"}
            NameLabel="Puesto"
            PrincipalClass="prueba"
            onChangeField={e => this.onChangeField(e)}
          />
          <Field
            enable={false}
            NamePlaceHolder="ingrese algun valor"
            error=""
            data={this.state.input3}
            NameValue={"input3"}
            NameLabel="Disponible"
            PrincipalClass="prueba"
            onChangeField={e => this.onChangeField(e)}
          />
          <Field
            enable={false}
            NamePlaceHolder="ingrese algun valor"
            error=""
            data={this.state.input4}
            NameValue={"input4"}
            NameLabel="ID Mesa"
            PrincipalClass="prueba"
            onChangeField={e => this.onChangeField(e)}
          />
          <Field
            enable={false}
            NamePlaceHolder="ingrese algun valor"
            error=""
            data={this.state.input5}
            NameValue={"input5"}
            NameLabel="ID Pedido"
            PrincipalClass="prueba"
            onChangeField={e => this.onChangeField(e)}
          />
          {button}
        </form>
      </div>
    );
  }
}

export default Form;
