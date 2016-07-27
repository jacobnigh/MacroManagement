'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/users/action_creators';
import { Actions } from 'react-native-router-flux';
import SettingsList from 'react-native-settings-list';
import Button from 'react-native-button';

class ProfileView extends React.Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    intolerances: PropTypes.object.isRequired,
    groceryLists: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.profileInfo }>
          <View style={ styles.profileColumn }>
            <View style={ styles.bubble1 }>
              <Text>{ this.props.users.email }</Text>
            </View>
            <View style={ styles.bubble2 }>
              <Text>5ft. 7in.</Text>
            </View>
          </View>
          <View style={ styles.profileColumn }>
            <View style={ styles.bubble3 }>
              <Text>21 years old</Text>
            </View>
            <View style={ styles.bubble4 }>
              <Text>125 lbs</Text>
            </View>
          </View>
        </View>
        <View style={ styles.settingsContainer }>
          <View style={ styles.listContainer }>
            <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
              <SettingsList.Item title='Change Food Intolerances' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={ () =>  Alert.alert('Change Food Intolerances pressed') } />
              <SettingsList.Item title='Saved Grocery Lists' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={ () =>  Alert.alert('Saved Grocery Lists pressed') } />
            </SettingsList>
          </View>
        </View>
        <Button containerStyle={ styles.logOutButtonContainer } style={ styles.logOutButtonText }
          onPress={ () => Alert.alert('Log Out pressed') }>
          Log Out
        </Button>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#26a65b',
    paddingLeft: 10,
    paddingRight: 10,
  },
  profileInfo: {
    marginTop: 80,
    marginBottom: 10,
    overflow: 'hidden',
    backgroundColor: '#e9e9e9',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#999',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  profileColumn: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 100,
    flex: 1,
  },
  bubble1: {
    paddingLeft: 13,
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
    borderRightWidth: 0.5,
    borderRightColor: '#999',
    borderStyle: 'solid',
  },
  bubble2: {
    paddingLeft: 13,
    flex: 1,
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#999',
    borderRightWidth: 0.5,
    borderRightColor: '#999',
    borderStyle: 'solid',
  },
  bubble3: {
    paddingLeft: 13,
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
    borderLeftWidth: 0.5,
    borderLeftColor: '#999',
    borderStyle: 'solid',
  },
  bubble4: {
    paddingLeft: 13,
    flex: 1,
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#999',
    borderLeftWidth: 0.5,
    borderLeftColor: '#999',
  },
  settingsContainer: {
    overflow: 'hidden',
    marginBottom: 10,
  },
  listContainer: {
    borderStyle: 'solid',
    borderRadius: 7,
    overflow: 'hidden',
    flex: 1,
  },
  logOutButtonContainer: {
    backgroundColor: '#c62733',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  logOutButtonText: {
    color: '#e9e9e9',
  },
});

function mapStateToProps(state) {
  return {
    users: state.users,
    intolerances: state.intolerances,
    groceryLists: state.groceryLists
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
