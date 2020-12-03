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
import configData from "../../config.json";

const progressDimension = 280;
const halfProgressDimension = progressDimension / 2;
const progessStrokeDimension = 30;
const halfProgessStrokeDimension = progessStrokeDimension / 2;

const styles = StyleSheet.create({
  visualisation: {
    alignSelf: "center",
  },

  keyInformation: {
    position: "absolute",
    alignSelf: "center",
  },
  maxSpeed: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 80,
    top: halfProgressDimension - 60,
    alignSelf: "center",
  },
  curSpeed: {
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#FFFFFF",
    fontSize: 25,
    top: halfProgressDimension + 40,
    alignSelf: "center",
  },
  speedUnits: {
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#6E6E6E",
    fontSize: 15,
    top: halfProgressDimension + 25,
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
const topSpeed = configData.TOP_SPEED;

export class SpeedWidget extends Component {
  maxSpeedVisualization = 0;
  state = {
    curSpeedVisualization: 0,
    maxSpeedVisualization: 0,
    curSpeedNumber: 0,
    maxSpeedNumber: 0,
  };

  componentDidMount() {
    this.calculateValues();
    console.log(this.maxSpeedNumber);
    console.log(this.props.curSpeed);
  }
  componentDidUpdate() {
    this.calculateValues();
  }

  calculateValues() {
    this.curSpeedVisualization = this.props.curSpeed / topSpeed;
    this.maxSpeedVisualization = this.props.maxSpeed / topSpeed;
    this.curSpeedNumber = this.props.curSpeed;
    this.maxSpeedNumber = this.props.maxSpeed;
  }

  render() {
    return (
      <View style={styles.visualisation}>
        <Svg width={progressDimension} height={progressDimension}>
          <ProgressCircle
            strokeWidth={progessStrokeDimension}
            style={{ height: progressDimension }}
            progress={
              this.curSpeedVisualization ? this.curSpeedVisualization : 0
            }
            backgroundColor="#333333"
            progressColor="url(#gradient)"
          >
            <Gradient />
          </ProgressCircle>

          <Circle
            cx={halfProgressDimension}
            cy={halfProgressDimension}
            r={halfProgressDimension - halfProgessStrokeDimension}
            fill="none"
            stroke="#000000"
            strokeWidth={progessStrokeDimension}
            strokeDasharray="4,1"
          />
          <ProgressCircle
            strokeWidth={halfProgessStrokeDimension}
            style={{ height: progressDimension }}
            backgroundColor="none"
            progress={
              this.maxSpeedVisualization ? this.maxSpeedVisualization : 0
            }
            progressColor="url(#gradient)"
          >
            <Gradient />
          </ProgressCircle>
        </Svg>
        <View style={styles.keyInformation}>
          <Text style={styles.maxSpeed}>
            {this.maxSpeedNumber ? this.maxSpeedNumber : 0}
          </Text>
          <Text style={styles.curSpeed}>
            {this.curSpeedNumber ? this.curSpeedNumber : 0}
          </Text>
          <Text style={styles.speedUnits}>KM/H</Text>
        </View>
      </View>
    );
  }
}
