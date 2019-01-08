import React, { Component } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import * as vars from '../../utils/stylesheets/vars';

export default class ProfileHeader extends Component {
  render() {
    const { firstlast, party } = this.props.attributes;
    let partyColor = '';
    if (party === 'R') {
      partyColor = vars.redColor;
    } else if (party === 'D') {
      partyColor = vars.themeColors[2];
    } else {
      partyColor = 'grey';
    }

    return (
      <ListItem
        hideChevron
        avatar={
          <Avatar
            small
            rounded
            title={party}
            overlayContainerStyle={{ backgroundColor: partyColor }}
          />
        }
        title={firstlast}
      />
    );
  }
}