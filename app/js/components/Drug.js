import React from "react"
import { Component } from "react"
import IconButton from "material-ui/IconButton"
import Dialog from "material-ui/Dialog"
import TextField from "material-ui/TextField"
import FlatButton from "material-ui/FlatButton"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table"
// import drugs from '../resources';

class Drug extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      openDelete: false,
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleSubmitDelete = this.handleSubmitDelete.bind(this)
    this.handleCloseDelete = this.handleCloseDelete.bind(this)
  }

  componentWillMount() {
    const drugs = [
  { id: 1, name: "paracetamol", tipo: "pastilla", base_price: 1 },
  { id: 2, name: "lorem", tipo: "jarabe", base_price: 2 },
  { id: 3, name: "ipsum", tipo: "doe", base_price: 3 },
    ]
    for (const d in drugs) {
      this.props.addDrug(parseInt(drugs[d].id), drugs[d].name, "TEMPORAL", drugs[d].tipo, parseFloat(drugs[d].base_price))
    }
  }

  handleEdit(evt) {
    const id = evt.target.getAttribute("data-key")
    const drug = this.props.drugs.filter(d => parseInt(d.id) === parseInt(id))[0]
    console.info("XXXXXXXXXXXXXXx", drug)

    if (drug) {
      this.props.selectDrug(drug.id, drug.name, drug.description, drug.types, drug.price)
      this.setState({ modalOpen: true })
    } else {
      console.error("DRUG NOT FOUND IN DATABASE")
    }
  }

  handleDelete(evt) {
    const id = evt.target.getAttribute("data-key")
    const drug = this.props.drugs.filter(d => parseInt(d.id) === parseInt(id))[0]
    console.info("A ELIMINAR: ", drug)
    if (drug) {
      this.props.selectDrug(drug.id, drug.name, drug.description, drug.types, drug.price)
      this.setState({ openDelete: true })
    } else {
      console.error("DRUG NOT FOUND IN DATABASE")
    }
  }

  handleModalClose(evt) {
    this.setState({ modalOpen: false })
    this.props.selectDrug(null, null, null, null, null)
  }

  handleCloseDelete(evt) {
    this.setState({ openDelete: false })
    this.props.selectDrug(null, null, null, null, null)
  }

  handleSubmitDelete(evt) {
    const id = this.props.drugSelected.id
      // console.info("HERE WE DELETE THE DRUG")
    this.props.deleteDrug(this.props.drugs, id)
    this.props.selectDrug(null, null, null, null, null)
    this.setState({ openDelete: false })
  }
  render() {
    // console.log(this.props)
    const drugs = this.props.drugs
    const tbDrugs = this.props.drugs.map(obj => (
      <TableRow key={obj.id}>
        <TableRowColumn>
          {obj.name}
        </TableRowColumn>
        <TableRowColumn>
          {obj.description}
        </TableRowColumn>
        <TableRowColumn>
          {obj.types}
        </TableRowColumn>
        <TableRowColumn>
          {obj.price}
        </TableRowColumn>
        <TableRowColumn>
          {obj.price}
        </TableRowColumn>
        <TableRowColumn>
          <IconButton
            iconClassName="material-icons"
            tooltip="Editar"
            data-key={obj.id}
            onTouchTap={this.handleEdit}
          >
      build
    </IconButton>
        </TableRowColumn>
        <TableRowColumn>
          <IconButton
            iconClassName="material-icons"
            tooltip="Eliminar"
            data-key={obj.id}
            onTouchTap={this.handleDelete}
          >
     delete
    </IconButton>
        </TableRowColumn>

      </TableRow>

  ))
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleModalClose}
      />,
      <FlatButton
        label="Submit"
        primary
        onTouchTap={this.handleSubmitAdd}
      />,
    ]

    const alertActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleCloseDelete}
      />,
      <FlatButton
        label="Eliminar"
        secondary
        onTouchTap={this.handleSubmitDelete}
      />,
    ]
    return (
      <div>
        <Table selectable={false} >
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow selectable={false}>
              <TableHeaderColumn>Nombre</TableHeaderColumn>
              <TableHeaderColumn>Descripci&oacute;n</TableHeaderColumn>
              <TableHeaderColumn>Tipo</TableHeaderColumn>
              <TableHeaderColumn>Precio</TableHeaderColumn>
              <TableHeaderColumn />
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {tbDrugs}
          </TableBody>
        </Table>
        <Dialog
          title="Edición de Medicamento"
          actions={actions}
          modal
          open={this.state.modalOpen}
        >
          <TextField
            value={this.props.drugSelected.name}
            floatingLabelText="Nombre"
            disabled
          /><br />
          <TextField
            value={this.props.drugSelected.description}
            floatingLabelText="Descripcion"
            disabled
          />
          <TextField
            value={this.props.drugSelected.types}
            floatingLabelText="Tipo"
          /><br />
          <TextField
            value={this.props.drugSelected.price}
            floatingLabelText="Precio"
          /><br />
        </Dialog>
        <Dialog
          actions={alertActions}
          modal={false}
          open={this.state.openDelete}
          onRequestClose={this.handleClose}
        >
            Eliminar medicamento {this.props.drugSelected.name}?
        </Dialog>
      </div>
    )
  }
}

export default Drug
