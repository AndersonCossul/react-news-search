import React from 'react'
import Autocomplete from 'react-google-autocomplete';

const autoCompleteInput = () => (
  <Autocomplete
    style={{ width: '90%' }}
    onPlaceSelected={(place) => {
      console.log(place);
    }}
    types={['(regions)']}
    componentRestrictions={{ country: "ru" }}
  />
)

export default autoCompleteInput