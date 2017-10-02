import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

// COMPONENT
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {

  state = { showFormReview: false}

  renderContent() {

    if (this.state.showFormReview) {
      return <SurveyFormReview
        onCancelForm={() => this.setState({ showFormReview: false })}
       />
    }

    return <SurveyForm
        onFormSubmit={() => this.setState({ showFormReview: true })}
      />
  }

  render() {
    return(
      <div className="survey-new">
        <h3>New Survey</h3>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew)