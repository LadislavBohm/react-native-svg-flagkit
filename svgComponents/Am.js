import React from "react";
import { Svg, Defs, LinearGradient, Stop, G, Path } from "react-native-svg";

const SvgAm = (props) => (
  <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
    <Defs>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AM_svg__a">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#F0F0F0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AM_svg__b">
        <Stop stopColor="#1047B9" offset="0%" />
        <Stop stopColor="#06379D" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AM_svg__c">
        <Stop stopColor="#F01C31" offset="0%" />
        <Stop stopColor="#D70A1F" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AM_svg__d">
        <Stop stopColor="#F5B23E" offset="0%" />
        <Stop stopColor="#F0A728" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path fill="url(#AM_svg__a)" d="M0 0h21v15H0z" />
      <Path fill="url(#AM_svg__b)" d="M0 5h21v5H0z" />
      <Path fill="url(#AM_svg__c)" d="M0 0h21v5H0z" />
      <Path fill="url(#AM_svg__d)" d="M0 10h21v5H0z" />
    </G>
  </Svg>
);

export default SvgAm;
