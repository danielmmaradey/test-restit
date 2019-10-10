//Dependencies
import React, { Component } from "react";

//Components
import Table from "../../components/Table/Table";
import Form from "../../components/Form/Form";

//Redux
import { connect } from "react-redux";
import { GetDataMesas } from "../../redux/actions/datamesasActons";
import { PostDataMesas } from "../../redux/actions/datamesasActons";
import { DeleteTablasConfig } from "../../redux/actions/datamesasActons";
import { PutDataMesas } from "../../redux/actions/datamesasActons";

class Interview extends Component {
  state = {
    mesas: [],
    editColum: {},
    typeform: 1
  };

  componentDidMount() {
    this.props.GetDataMesas();
  }

  //Get new values ​​from storeDataMesas
  componentWillReceiveProps(nextProps) {
    const { mesas } = nextProps.storeDataMesas;
    if (mesas) {
      if (this.state.mesas !== mesas.result) {
        this.setState({
          mesas: mesas.result
        });
      }
    }
    if (nextProps.storeDataMesas.Reload) {
      this.props.GetDataMesas();
    }
  }

  //Call component Table
  _componetTable = array => {
    const body = array;
    const head = [
      "Id",
      "Tipo",
      "Puesto",
      "Disponibles",
      "Id Mesa",
      "Id Pedido",
      "Editar",
      "Eliminar"
    ];
    const nameColums = [
      "id",
      "type",
      "puestos",
      "ocupados",
      "id_mesa",
      "id_pedido",
      "btnedit",
      "btndelete"
    ];
    return (
      <Table
        head={head}
        body={body}
        nameColums={nameColums}
        btnView={this._actionView}
        btnDelete={this._actionDelete}
        btnEdit={this._actionEdit}
      />
    );
  };

  //Actions to get row of table
  _actionView = colum => {
    console.log(colum);
  };

  _actionEdit = colum => {
    this.setState({
      editColum: colum,
      typeform: 0
    });
  };

  _actionDelete = colum => {
    const id = colum.id;
    this.props.DeleteTablasConfig(id);
  };

  _actionCreateValue = values => {
    const mesa = {
      type: values.input1,
      puestos: values.input2,
      ocupados: values.input3,
      id_mesa: values.input4,
      id_pedido: values.input5
    };
    this.props.PostDataMesas(mesa);
  };

  _actionUpdateValue = values => {
    const id = values.id;
    const mesa = {
      type: values.input1,
      puestos: values.input2,
      ocupados: values.input3,
      id_mesa: values.input4,
      id_pedido: values.input5
    };
    this.props.PutDataMesas(mesa, id);
  };

  _actionChangeType = () => {
    this.setState({
      typeform: 1
    });
  };

  render() {
    const { mesas, editColum, typeform } = this.state;
    const table = mesas ? this._componetTable(mesas) : null;
    return (
      <div id="interview">
        <div className="rows">
          <div className="row" style={{ width: "70%" }}>
            <div className="tile">{table}</div>
          </div>
          <div className="row" style={{ width: "30%" }}>
            <div className="tile">
              <Form
                onClickedGet={this._actionCreateValue}
                onClickedPut={this._actionUpdateValue}
                edit={editColum}
                type={typeform}
                changetype={this._actionChangeType}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  storeDataMesas: state.datamesas
});

const mapDispatchtoProps = {
  GetDataMesas,
  PostDataMesas,
  DeleteTablasConfig,
  PutDataMesas
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Interview);
