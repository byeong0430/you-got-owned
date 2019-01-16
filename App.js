import { Constants, Location, Permissions, Font } from 'expo';
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/reducer';
import { updateGps, updateLocation } from './actions';
import { handleGetLocation } from './utils/functions/locFunctions';

// Navigation config
import { RootStack } from './utils/navigation/RootStack';

// Create a store
const store = createStore(appReducer);

// You can have an option to add a loading page
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      errorMessage: null
    };
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
      'RobotoSlab': require('./assets/fonts/RobotoSlab-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  componentWillMount = async () => {
    // Constants.isDevice === true if you're using an emulator
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'This will not work on Sketch in an Android emulator. Try it on your device!'
      })
    } else {
      const gps = await this.handleGetGps();

      // Parse longitude and latitude and get current address
      let { longitude, latitude } = gps.coords;

      // Debugging with initial location set to L.A.
      longitude = -118.2437;
      latitude = 34.0522;

      store.dispatch(updateGps(longitude, latitude));

      const location = await handleGetLocation(longitude, latitude);

      store.dispatch(updateLocation(location));
    }
  }

  handleGetGps = async () => {
    // Ask for location permission
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied!'
      })
    }

    // Get GPS info
    return await Location.getCurrentPositionAsync({});
  }

  render() {
    return (
      this.state.fontLoaded ?
        <Provider store={store}>
          <RootStack />
        </Provider> : null
    );
  }
}