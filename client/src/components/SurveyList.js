import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../actions'

class SurveyList extends Component {

  componentDidMount() {
    this.props.fetchSurveys()
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p><em>Sent last {new Date(survey.dateSent).toLocaleDateString()}</em></p>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        {this.renderSurveys()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return(
    { surveys: state.surveys }
  )
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
