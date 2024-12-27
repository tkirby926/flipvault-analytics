import React from "react"
import { HeaderComponent } from "./Components/HeaderComponent"

export class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user_selected: [],
            users_lookup: [],
            show_popup: false
        }
    }

    openPopup(e) {
        e.preventDefault()
        this.setState({show_popup: true})
    }

    closePopup(e) {
        e.preventDefault()
        this.setState({show_popup: false})
    }


    render() {
        return (
            <div class="page-container">
                <HeaderComponent></HeaderComponent>
                <div class="search-bar-container">
                    <input type="text" class="search-input" placeholder="Search..." />
                    <button class="search-btn">Search</button>
                </div>
                <div class="popup" id="chartPopup" style={{display: this.state.show_popup ? 'inherit' : 'none'}}>
                    <div class="popup-content">
                        <button class="close-btn" onClick={(event) => this.closePopup(event)}>×</button>
                        <h2>User2838493's Data:</h2>
                        <section class="analytics-overview">
                            <div class="card" onClick = {(event) => this.openPopup(event)}>
                                <h3>Total Live Transactions</h3>
                                <p>27</p>
                            </div>
                            <div class="card" onClick = {(event) => this.openPopup(event)}>
                                <h3>Total Trades</h3>
                                <p>49</p>
                            </div>
                        </section>
                        <h2>Recent Transactions</h2>
                        <table class="data-table">
                            <thead>
                                <tr>
                                <th>Timestamp</th>
                                <th>Items Given</th>
                                <th>Items Received</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>12/21/2024</td>
                                <td>0x1a3b5c7d9e</td>
                                <td>0x1a355g7d2e</td>
                                </tr>
                                <tr>
                                <td>12/19/2024</td>
                                <td>0x1a3b5c7d9e</td>
                                <td>0x1a355g7d2e</td>
                                </tr>
                                <tr>
                                <td>12/17/2024</td>
                                <td>0x1a3b5c7d9e</td>
                                <td>0x1a355g7d2e</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 style={{'cursor': 'pointer'}}>See All</h3>
                    </div> 
                </div>
                <div class="results-container">
                    <div class="result-bucket" onClick={(event) => this.openPopup(event)}>
                        <h3>Result Title</h3>
                        <p>Result description goes here. It provides an overview of the search result.</p>
                    </div>
                    <div class="result-bucket" onClick={(event) => this.openPopup(event)}>
                        <h3>Result Title</h3>
                        <p>Result description goes here. It provides an overview of the search result.</p>
                    </div>
                    <div class="result-bucket" onClick={(event) => this.openPopup(event)}>
                        <h3>Result Title</h3>
                        <p>Result description goes here. It provides an overview of the search result.</p>
                    </div>
                </div>
            </div>
        )
    }

}
