import React, { Component } from 'react'
import Aux from '../../hoc/ReactAux'
import Spacecraft from './../../components/Spacecraft/Spacecraft'
import BuildControls from '../../components/Spacecraft/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import LaunchSummary from '../../components/Spacecraft/LaunchSummary/LaunchSummary'
import { CircularProgress } from '../../components/CircularProgress/CircuralProgress'

const PARTS_PRICES = {
  top: 500000,
  middle: 1000000,
  ailerons: 2000000,
}

class ScpacecraftBuilder extends Component {
  state = {
    parts: {
      top: 1,
      middle: 1,
      ailerons: 1,
    },
    totalPrice: 3500000,
    readyToStart: true,
    launch: false,
  }

  addPartHandler = (type) => {
    const oldCount = this.state.parts[type]
    const updateCount = oldCount + 1
    const updatesParts = {
      ...this.state.parts,
    }
    updatesParts[type] = updateCount
    const priceAddition = PARTS_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({ totalPrice: newPrice, parts: updatesParts })
    this.updateReadyToStart(updatesParts)
  }

  removePartHandler = (type) => {
    const oldCount = this.state.parts[type]
    if (oldCount !== 0) {
      const updateCount = oldCount - 1
      const updatesParts = {
        ...this.state.parts,
      }
      updatesParts[type] = updateCount
      const priceAddition = PARTS_PRICES[type]
      const oldPrice = this.state.totalPrice
      const newPrice = oldPrice - priceAddition
      this.setState({ totalPrice: newPrice, parts: updatesParts })
      this.updateReadyToStart(updatesParts)
    }
  }

  updateReadyToStart(parts) {
    const sum = Object.keys(parts)
      .map((partsKey) => {
        return parts[partsKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    this.setState({ readyToStart: sum > 0 })
  }

  launchHandler = () => {
    this.setState({ launch: true })
  }

  cancelModal = () => {
    this.setState({ launch: false })
  }

  pleaseContinueHandler = () => {
    alert('You can continue')
  }

  render() {
    const disabledInfo = {
      ...this.state.parts,
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.launch} modalClosed={this.cancelModal}>
          <LaunchSummary
            price={this.state.totalPrice}
            parts={this.state.parts}
            launchCancelled={this.cancelModal}
            launchContinue={this.pleaseContinueHandler}
          />
        </Modal>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              Speed:<br/>
              <CircularProgress strokeWidth="20" sqSize="150" percentage={25} color="red"/>
              Aerodynamic:<br/>
              <CircularProgress strokeWidth="20" sqSize="150" percentage={47} color="blue"/>
              Weight:<br/>
              <CircularProgress strokeWidth="20" sqSize="150" percentage={80} color="green"/>

            </div>
            <div className="col-sm">
              <div>
                <Spacecraft parts={this.state.parts} />
              </div>
            </div>
            <div className="col-sm">
              <div style={{ position: 'absolute' }}>
                <BuildControls
                  partAdded={this.addPartHandler}
                  partRemoved={this.removePartHandler}
                  disabled={disabledInfo}
                  launch={this.launchHandler}
                  currentPrice={this.state.totalPrice}
                  readyToStart={this.state.readyToStart}
                />
              </div>
            </div>
          </div>
        </div>
      </Aux>
    )
  }
}

export default ScpacecraftBuilder
