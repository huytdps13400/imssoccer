/* eslint-disable no-lone-blocks */
import {Dimensions, Platform} from 'react-native';
import Toast from 'react-native-simple-toast';
const {width} = Dimensions.get('screen');

export const CustomToast = string => {
  Toast.show(string);
};

export const getHtmlStyles = () => {
  let styles = '';
  {
    Platform.OS === 'android'
      ? (styles = `<style>
      * {
        font-size: 14 !important;
        text-align: justify;
      }
      img { 
        display: block; 
        max-width: ${width * 0.95}; 
        height: auto;
        padding: 0;
      } 
      figure {
        padding: 0;
        margin: 0;
      }
    </style>`)
      : (styles = `<style>
      * {
        font-size: 36 !important;
        text-align: justify;
      }
      img { 
        display: block; 
        max-width: ${width * 0.95}; 
        height: auto; 
        padding: 0;
      } 
      figure {
        padding: 0;
        margin: 0;
      }
      </style>`);
  }

  return styles;
};
