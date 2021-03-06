import { Constants } from 'expo';
import { Platform } from 'react-native';

// 5 levels of blue colours from lightest to darkest
// Reference: http://paletton.com/#uid=13F0u0kvJEBjEKwpjGCE2tqFFmS
export const redColor = '#b9110f';
export const yellowColor = '#ffaf00';
export const blueColor = '#0091cf';
export const darkBlueColor = '#01395e';
export const darkGreyColor = '#343239';
export const greyColor = '#666564';
export const lightGreyColor = '#e3e1e3';

export const mainFont = 'RobotoRegular';
export const mainFontSerif = 'RobotoSlab';

export const bigIconSize = 49;
export const mediumIconSize = 30;
export const smallIconSize = 22;

export const bigFontSize = 22;
export const mediumFontSize = 18;
export const smallFontSize = 13;

export const debugBorder = {
  borderColor: 'blue',
  borderWidth: 1
}

export const modal = Platform.select({
  android: {
    // The modal goes up until the status bar on Android devices
    marginTop: -Constants.statusBarHeight
  }
});