import React, { Component } from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
import { cryptoService } from '../services/cryptoService'

export class Charts extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        this.getTradeVolume()
    }

    async getTradeVolume() {
        const data = await cryptoService.getTradeVolume()
        this.setState({ data })
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <h1>Charts</h1>
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="values.x" stroke="#8884d8" />
                    <Line type="monotone" dataKey="values.y" stroke="#82ca9d" />
                </LineChart>
            </div>
        )
    }
}
