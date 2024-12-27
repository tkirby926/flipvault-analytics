import React from "react"
import '../global.css'
import {
    Chart,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    LineController,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { HeaderComponent } from "./Components/HeaderComponent";

export class HomeComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user_count: 0,
            new_user_count: 0,
            show_popup: false,
            chart_instance: null
        }
    }
    closePopup(event) {
        event.preventDefault()
        this.setState({show_popup: false})
    }

    openPopup(event) {
        event.preventDefault()
        this.setState({show_popup: true})
        const ctx = document.getElementById('lineChart').getContext('2d');
        if (this.state.chart_instance) {
            this.state.chart_instance.destroy()
            this.setState({chart_instance: null})
        }
        Chart.register(
            CategoryScale,
            LinearScale,
            LineElement,
            PointElement,
            LineController,
            Title,
            Tooltip,
            Legend
          );
        const lineChart = new Chart(ctx, {
            type: 'line', // Specify the chart type
            data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
            datasets: [
                {
                label: 'Website Users',
                data: [30, 50, 70, 40, 80, 100],
                borderColor: 'rgba(88, 166, 255, 1)',
                backgroundColor: 'rgba(88, 166, 255, 0.2)',
                borderWidth: 2,
                tension: 0.4,
                },
            ],
            },
            options: {
            responsive: true,
            plugins: {
                legend: {
                display: true,
                },
                tooltip: {
                enabled: true,
                },
            },
            scales: {
                x: {
                title: {
                    display: true,
                    text: 'Months',
                },
                },
                y: {
                title: {
                    display: true,
                    text: 'Number of Users',
                },
                beginAtZero: true,
                },
            },
            },
        });
        this.setState({chart_instance: lineChart})
    }

    render() {
        return (
  <div class="page-container">
    <HeaderComponent></HeaderComponent>
    <div class="popup" id="chartPopup" style={{display: this.state.show_popup ? 'inherit' : 'none'}}>
        <div class="popup-content">
            <button class="close-btn" onClick={(event) => this.closePopup(event)}>×</button>
            <h2>Chart Details</h2>
            <div class="chart-area">
                <canvas id="lineChart" width="400" height="200"></canvas>
            </div>
        </div>
    </div>
    <section class="analytics-overview">
      <div class="card" onClick = {(event) => this.openPopup(event)}>
        <h3>Total Live Transactions</h3>
        <p>1,540</p>
      </div>
      <div class="card" onClick = {(event) => this.openPopup(event)}>
        <h3>Active Users</h3>
        <p>12,345</p>
      </div>
      <div class="card" onClick = {(event) => this.openPopup(event)}>
        <h3>Total Trades</h3>
        <p>3,428</p>
      </div>
    </section>
    <section class="charts-section">
      <div class="chart-container">
        <h2>Total Profit</h2>
        <h3>$4,200,409.54</h3>
      </div>
      <div class="chart-container">
        <h2>User Growth (Month)</h2>
        <h3>329</h3>
      </div>
    </section>
    <table class="data-table">
      <thead>
        <tr>
          <th>Asset</th>
          <th>Price</th>
          <th>24h Change</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bitcoin (BTC)</td>
          <td>$29,123</td>
          <td>+2.34%</td>
          <td>$1,234,567</td>
        </tr>
        <tr>
          <td>Ethereum (ETH)</td>
          <td>$1,950</td>
          <td>+1.56%</td>
          <td>$678,910</td>
        </tr>
        <tr>
          <td>Ripple (XRP)</td>
          <td>$0.85</td>
          <td>-0.45%</td>
          <td>$345,678</td>
        </tr>
      </tbody>
    </table>
    <footer class="footer">
      <p>&copy; 2024 CryptoAnalytics. All rights reserved. <a href="#">Privacy Policy</a></p>
    </footer>
  </div>

        )
    }
}
