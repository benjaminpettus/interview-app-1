import React, {Component} from 'react'
import flex from 'react-uikit-flex'
import FormCheckbox from '../../atoms/form-checkbox'
import FormRadio from '../../atoms/form-radio/index'
import FormSelect from '../../atoms/form-select/index'
import FormInput from '../../atoms/form-input/index'

// TODO: Initial state needs to have false's and initial values etc.
// Package them into an object in the state, instead of loosely at the top of the state

export default class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      iterators: {
        iteratorRadio: 0,
        iteratorCheckbox: 0,
        iteratorInput: 0,
        iteratorSelect: 0
      }
    }
  }

  handleChange(args, event) {
    console.log('EVENT AT TOP:', event.target)
    let property = args.property
    let isCheckbox = args.isCheckbox
    new Promise( (resolve, reject) => {
      console.log('Event:', event)
      if(isCheckbox) {
        this.setState({[property]: event.target.checked}, () => {
          resolve()
        });
      } else {
        this.setState({[property]: event.target.value}, () => {
          resolve()
        });
      }
    })
    .then( () => {
      console.log('STATE OF FORM:', this.state)
    })
  }

  initTextInput(inputModule) {
    let domElement = (<FormInput 
      prompt={inputModule.prompt} 
      placeholder={inputModule.placeholder} 
      onChange={this.handleChange.bind(this)}/>
    )
    let currentState = this.state
    currentState.iterators.iteratorInput++
    this.setState( currentState )
    return domElement
  }

  initCheckbox(inputModule) {
    let domElement = (<FormCheckbox 
      prompt={inputModule.prompt} 
      options={inputModule.options} 
      onChange={this.handleChange.bind(this)}/>)
    let currentState = this.state
    currentState.iterators.iteratorCheckbox++
    this.setState( currentState )
    return domElement
  }

  initRadio(inputModule) {
    let domElement = (<FormRadio 
      prompt={inputModule.prompt} 
      options={inputModule.options} 
      onChange={this.handleChange.bind(this)}
      />)
    let currentState = this.state
    currentState.iterators.iteratorRadio++
    this.setState( currentState )
    return domElement
  }

  initSelect(inputModule) {
    let domElement = (
      <FormSelect 
      prompt={inputModule.prompt} 
      options={inputModule.options} 
      isOptionRequired={inputModule.isOptionRequired} 
      onChange={this.handleChange.bind(this) } 
      passId={inputModule.id}
      />)
    let currentState = this.state
    currentState.iterators.iteratorSelect++
    this.setState( currentState )
    return domElement
  }

  componentDidMount() {
    const form = this.props.inputModules.map( inputModule => {
      return {'Input': this.initTextInput.bind(this, inputModule),
        'Checkbox': this.initCheckbox.bind(this, inputModule),
        'Radio': this.initRadio.bind(this, inputModule),
        'Select': this.initSelect.bind(this, inputModule)
      }[inputModule.type]()
    })
    this.setState({form: form}, () => {
      console.log(this.state)
    })
  }

  render(){

    return(
      <form className="uk-form-horizontal uk-margin-large">
        {this.state.form}
      </form>
    )
  }
}
