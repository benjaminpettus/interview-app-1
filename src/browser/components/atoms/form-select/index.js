import React, {Component} from 'react'

export default class FormSelect extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const options = this.props.options.map((option, index) => {
      return (<option key={index} value={option}>{option}</option>)
    })

    const isOptionRequired = () => {
      if(this.props.isOptionRequired) {
        return (<option value="">Please Select</option>)
      }
      return null
    }

    return (
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-select">{this.props.prompt}</label>
        <div className="uk-form-controls">
          <select id={this.props.passId} className="uk-select form-horizontal-select" onChange={this.props.onChange}>
            {isOptionRequired}
            {options}
          </select>
        </div>
      </div>
    )
  }
}
