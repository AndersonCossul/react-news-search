import React, { Component } from 'react'
import classes from './AutoCompleteInput.css'
import Autocomplete from 'react-google-autocomplete';

class AutoCompleteInput extends Component {
  handleSelect = (place) => {
    if (place && place.address_components) {
      const country = place.address_components[place.address_components.length - 1]
      const formattedCountry = {
        name: country.long_name,
        code: country.short_name
      }
      this.props.onSelect(formattedCountry)
    } else {
      alert('Click on an item in the list!')
    }
  }

  render() {
    return (
      <Autocomplete
        className={classes.Form}
        style={{ width: '200px' }}
        onPlaceSelected={(place) => this.handleSelect(place)}
        types={['(regions)']}
      />
    )
  }
}

export default AutoCompleteInput