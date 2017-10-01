import React, { Component } from 'react'

// COMPONENT
import SurveyForm from './SurveyForm'

class SurveyNew extends Component {
  render() {
    return(
      <div className="survey-new">
        <h3>New Survey</h3>
        <SurveyForm />
      </div>
    )
  }
}

export default SurveyNew
