import React from "react"

export class HeaderComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header class="header">
                <img src="https://i.ibb.co/w6ytp8t/Filp-Vault-W.png" class="logo" style={{height: '10%', width:'10%', minWidth: '95px'}}></img>
                <nav class="nav">
                    <a href="/">Dashboard</a>
                    <a href="/users">User Data</a>
                    <a href="#">Advertising</a>
                    <a href="#">Settings</a>
                </nav>
            </header>
        )
    }
}