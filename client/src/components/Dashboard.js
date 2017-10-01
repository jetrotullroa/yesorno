import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return(
    <div>
      <h1>Dashboard</h1>
      <p>IMA DASHBOARD!</p>

      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large grey">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
