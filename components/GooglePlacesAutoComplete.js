import {React,useState} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));
const GooglePlacesInput = () => {
  
    const [text,setText]=useState('')
    console.log("text",text)
    const placeText=(enteredText)=>{
        console.log("enteredText",enteredText)
        setText(enteredText)
    }
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
    
      query={{
        key: 'AIzaSyDZZg23mJb-dighACwNHkZMwZsWfg3ESNg',
        language: 'en',
        types: 'geocode'
      }}
      fetchDetails={true}
      textInputProps={{onChangeText:(text)=>{placeText(text)}}}
      currentLocation={true}
      currentLocationLabel='Current location'
    />
  );
};

export default GooglePlacesInput;