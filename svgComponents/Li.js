import React from "react";
import { Svg, Defs, LinearGradient, Stop, G, Path } from "react-native-svg";

const SvgLi = (props) => (
  <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
    <Defs>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LI_svg__a">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#F0F0F0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LI_svg__b">
        <Stop stopColor="#0A3B97" offset="0%" />
        <Stop stopColor="#042E7D" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LI_svg__c">
        <Stop stopColor="#E6273E" offset="0%" />
        <Stop stopColor="#CC162C" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path fill="url(#LI_svg__a)" d="M0 0h21v15H0z" />
      <Path fill="url(#LI_svg__b)" d="M0 0h21v8H0z" />
      <Path fill="url(#LI_svg__c)" d="M0 8h21v7H0z" />
    </G>
  </Svg>
);

export default SvgLi;
