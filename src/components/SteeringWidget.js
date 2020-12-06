import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
} from "react-native";
import Svg, { Circle, G, Line, Rect, Mask, text } from "react-native-svg";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import { ProgressCircle } from "react-native-svg-charts";

const progressDimension = 130;
const halfProgressDimension = progressDimension / 2;
const progessStrokeDimension = 3;
const halfProgessStrokeDimension = progessStrokeDimension / 2;

const styles = StyleSheet.create({
  visualisation: {
    alignSelf: "center",
  },
  steering: {
    alignSelf: "center",
  },

  keyInformation: {
    position: "absolute",
    alignSelf: "center",
  },
  steeringAngle: {
    fontWeight: "100",
    fontFamily: "roboto-300-light",
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    top: halfProgressDimension - 45,
    alignSelf: "center",
  },
});
const Gradient = () => (
  <Defs key={"gradient"}>
    <LinearGradient id={"gradient"} x1={"0"} y={"0%"} x2={"100%"} y2={"0%"}>
      <Stop offset={"0%"} stopColor={"rgb(134, 65, 244)"} />
      <Stop offset={"100%"} stopColor={"rgb(66, 194, 244)"} />
    </LinearGradient>
  </Defs>
);

export class SteeringWidget extends Component {
  state = {
    steeringAngle: 0,
  };

  componentDidMount() {
    this.calculateValues();
  }
  componentDidUpdate() {
    this.calculateValues();
  }

  calculateValues() {
    this.state.steeringAngle = this.props.steeringAngle;
    console.log(this.props.steeringAngle);
  }

  render() {
    //const transform = [{ rotate: this.state.steeringAngle + "deg" }];
    const transform = {
      transform: [{ rotate: this.state.steeringAngle + "deg" }],
    };
    console.log(transform);
    return (
      <View style={styles.visualisation}>
        <View style={[styles.steering, transform]}>
          <Svg width={progressDimension} height={progressDimension}>
            <ProgressCircle
              strokeWidth={progessStrokeDimension}
              style={{ height: progressDimension }}
              progress={0.2}
              startAngle="-0.5"
              backgroundColor="#333333"
              progressColor="url(#gradient)"
            >
              <Gradient />
            </ProgressCircle>
          </Svg>
        </View>
        <View style={styles.keyInformation}>
          <Text style={styles.steeringAngle}>{this.state.steeringAngle}</Text>
        </View>
      </View>
    );
  }
}
