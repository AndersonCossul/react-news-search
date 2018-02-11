import React, { Component } from 'react'
import AutoComplete from 'react-autocomplete'

class AutoCompleteInput extends Component {
  state = {
    value: ''
  }

  handleChange = (value) => {
    this.setState({value: value}, () => {
      this.props.onSelect(value)
    })
  }

  render () {
    const menuStyle = {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '50%',
      zIndex: '100',
      width: this.props.width_limit,
    }

    const inputProps = {
      placeholder: this.props.placeholder
    }

    return (
      <AutoComplete
        items={this.props.items}
        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.name}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{backgroundColor: (highlighted ? '#eee' : '#fff')}}>
            {item.name}
          </div>
        }
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
        onSelect={value => this.handleChange(value)}
        style={{width: this.props.width_limit}}
        menuStyle={menuStyle}
        inputProps={inputProps}/>
    )
  }
}

export default AutoCompleteInput
