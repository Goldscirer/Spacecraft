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
      top: 0,
      middle: 0,
      ailerons: 0,
    },
    totalPrice: 0,
    readyToStart: true,
    launch: false,
    speed: 0,
    weight: 0,
    aerodynamic: 0,
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
    this.countSpeed(updatesParts)
    this.countAerodynamic(updatesParts)
    this.countWeight(updatesParts)
    this.updateReadyToStart(updatesParts)
  }

  countSpeed(parts) {
    let speed = 0
    if (parts.ailerons === 1) {
      speed += 25
      if (parts.top === 1) {
        speed += 25
      }
    } else {
      if (parts.top === 1) {
        speed += 25
      }
    }
    if (parts.middle > 0 && parts.top === 1 && parts.ailerons === 1){
      speed = speed + parts.middle * 20
    }
    if (speed > 100){
      speed = 100
    }
    this.setState({ speed: speed })
  }

  countAerodynamic(parts) {
    let aerodynamic = 0
    if (parts.ailerons === 1) {
      aerodynamic += 50
      if (parts.top === 1) {
        aerodynamic += 50
      }
    } else {
      if (parts.top === 1) {
        aerodynamic += 25
      }
    }
    this.setState({ aerodynamic: aerodynamic })
  }

  countWeight(parts) {
    let weight = 0
    weight = weight + parts.middle * 13 + weight + parts.top * 14 + weight + parts.ailerons * 21
    if(parts.top ===1 && parts.ailerons === 1 && parts.middle >= 4) {
      this.setState({ speed: this.state.speed -10 })
    }
    if (weight > 100){
      weight = 100
    }
    this.setState({ weight: weight })
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
      this.countSpeed(updatesParts)
      this.countAerodynamic(updatesParts)
      this.countWeight(updatesParts)
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
              Speed:
              <br />
              <CircularProgress strokeWidth="20" sqSize="150" percentage={this.state.speed} color="red" />
              Aerodynamic:
              <br />
              <CircularProgress strokeWidth="20" sqSize="150" percentage={this.state.aerodynamic} color="blue" />
              <br />
              Weight:
              <br />
              <CircularProgress strokeWidth="20" sqSize="150" percentage={this.state.weight} color="green" />
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
