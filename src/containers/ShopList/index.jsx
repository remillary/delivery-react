import React from 'react'
import Shop from '../Shop'
import './style.css'
import { get } from '../../service/api'

export default class ShopList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            shops: []
        }
    }

    async componentDidMount() {
        let response = await get('/shop/page?page=0')
        if (response.hasOwnProperty('data')) {
            this.setState({shops: response.data.shops})
        }
    }

    render() {
        return (
            <main className="shop-list">
                {this.state.shops.map(shop => (
                    <Shop key={shop.id} info={shop}/>
                ))}
            </main>
        )
    }

}