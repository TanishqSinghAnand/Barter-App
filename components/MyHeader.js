import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View } from 'react-native';
import db from "../config";
import firebase from "firebase";
import { DrawerItems } from "react-navigation-drawer";

export default class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.email,
      value: "",
    };
  }

  getNumberOfUnreadNotifications() {
    db.collection("all_notifications")
      .where("notification_status", "==", "unread")
      .where("targeted_user_id", "==", this.state.userId)
      .onSnapshot((snapshot) => {
        var unreadNotifications = snapshot.docs.map((doc) => doc.data());
        this.setState({
          value: unreadNotifications.length,
        });
      });
  }

  componentDidMount() {
    this.getNumberOfUnreadNotifications();
  }

  bellIcon = (props) => {
    console.log(JSON.stringify(props));
    return (
      <View>
        <Icon
          name="bell"
          type="font-awesome"
          color="black"
          size={25}
          onPress={() => { this.props.navigation.navigate("Notifications") }}
        />
        <Badge number={this.state.number}
          containerStyle={{ position: "absolute", top: -5, right: -5, color: "lightblue" }} />
      </View>
    );
  };

  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="#696969"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        centerComponent={{
          text: this.props.title,
          // style: { color: "#90A5A9", fontSize: 20, fontWeight: "bold" },
        }}
        rightComponent={<this.bellIcon {...this.props} />}
        backgroundColor="#eaf8fe"
        navigation={this.props.navigation}
      />
    );
  }
}
