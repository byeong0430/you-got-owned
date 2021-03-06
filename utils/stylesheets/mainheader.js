import * as vars from './vars';

// Header
export const headerContainer = {
  borderTopWidth: 0,
  borderBottomWidth: 5,
  borderColor: vars.yellowColor,
  marginTop: 0,
  paddingLeft: 3
};

export const headerItemContainer = {
  paddingTop: 5,
  paddingBottom: 5,
  borderBottomWidth: 0
};

// Reference
// https://react-native-training.github.io/react-native-elements/docs/0.19.1/lists.html#lefticon
export const headerIcon = {
  name: 'location-city',
  type: 'material',
  style: {
    fontSize: vars.bigIconSize,
    color: vars.blueColor,
    marginLeft: 9
  }
}

export const title = {
  fontFamily: vars.mainFontSerif,
  color: vars.darkGreyColor,
  fontSize: vars.mediumFontSize,
};

export const subTitle = {
  color: vars.greyColor,
  fontSize: vars.smallFontSize
};