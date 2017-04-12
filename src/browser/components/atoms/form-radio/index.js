import React,{Component} from 'react'

export default class FormRadio extends Component {
  constructor(props) {
    super(props)
    FormRadio.increment()
  }

  static increment() {
    FormRadio.staticIterator++
  }

  static get iterator() {
    return FormRadio.staticIterator
  }

  render() {
    const checklist = this.props.choices.map( (choice, index) => {
      const choiceId = 'radio-'+choice.split(' ').join('-')
      const choiceLabel = ' '+choice
      const iteration = FormRadio.iterator
      return (
        <div key = {index} className="uk-form-controls uk-form-controls-text">
          <label>
            <input className="uk-radio" id={choiceId} type="radio" name={iteration}/>
            {choiceLabel}
          </label>
        </div>
      )
    })

    return (
      <div>
        {checklist}
      </div>
    )
  }
}

FormRadio.staticIterator = 0