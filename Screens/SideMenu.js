import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import HeaderLeftIcon from '../components/SideMenu/HeaderLeftIcon';
import SearchPlaceList from '../components/SideMenu/SearchPlaceList';
import { handleLoadPlaces } from '../redux/thunks';
import { connect } from 'react-redux';
import * as sidemenuStyle from '../utils/stylesheets/sidemenu';

class SideMenu extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text>Back</Text>),
      headerLeft: (<HeaderLeftIcon navigation={navigation} />)
    };
  };

  render() {
    const { gps } = this.props.locDetail;

    return (
      <View style={sidemenuStyle.sideMenuContainer}>
        <TextInput
          placeholder='Search for a city or address'
          placeholderTextColor={'white'}
          style={sidemenuStyle.sideMenuInput}
          onChangeText={searchTerm => this.props.handleLoadPlaces(searchTerm, gps)}
          value={this.props.sideMenu.query}
        />
        {
          !this.props.sideMenu.hits || !this.props.sideMenu.query
            ? (
              <Text style={sidemenuStyle.sideMenuIniVal}>
                Only Continental U.S.locations will be displayed..
              </Text>
            )
            : (
              <SearchPlaceList
                navigation={this.props.navigation}
              />
            )
        }
      </View >
    );
  }
}

const mapStateToProps = ({ locDetail, sideMenu }) => ({
  locDetail,
  sideMenu
});

const mapDispatchToProps = { handleLoadPlaces };

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);