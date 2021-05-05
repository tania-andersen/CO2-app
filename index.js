import React from 'react'

import Layout from '../components/layout'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const IndexPage = () => {

    function Co2eAmount(props) {
        const amount = props.co2e * props.quantity;
        return <p>CO2: {amount} g</p>
    }

    class FoodInput extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e) {
            this.props.onFoodChange(e.target.value);
        }

        render() {
            const co2e = this.props.co2e;
            return (
                <fieldset>
                    <legend>Co2e:</legend>
                    <input value={co2e}
                        onChange={this.handleChange} />
                </fieldset>
            );
        }
    }

    class QuantityInput extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e) {
            this.props.onQuantityChange(e.target.value);
        }

        render() {
            const quantity = this.props.quantity;
            return (
                <fieldset>
                    <legend>Kvantum:</legend>
                    <input value={quantity}
                        onChange={this.handleChange} />
                </fieldset>
            );
        }
    }

    class Calculator extends React.Component {
        constructor(props) {
            super(props);
            this.handleFoodChange = this.handleFoodChange.bind(this);
            this.handleQuantityChange = this.handleQuantityChange.bind(this);
            this.state = { co2e: '', quantity: '' };
        }

        handleFoodChange(co2eFactor) {
            this.setState({ co2e: co2eFactor });
        }

        handleQuantityChange(newQuantity) {
            this.setState({ quantity: newQuantity });
        }

        render() {
            const quantity = this.state.quantity;
            const co2e = this.state.co2e;

            return (
                <div>
                    <FoodInput
                        co2e={co2e}
                        onFoodChange={this.handleFoodChange} />
                    <QuantityInput
                        quantity={quantity}
                        onQuantityChange={this.handleQuantityChange} />
                    <Co2eAmount
                        co2e={co2e}
                        quantity={quantity} />
                </div>
            );
        }
    }

    return (
        <Layout>
            <Calculator />
        </Layout>
    )
}

export default IndexPage
