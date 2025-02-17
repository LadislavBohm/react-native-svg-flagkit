import React from "react";
import { Svg, Defs, LinearGradient, Stop, G, Path } from "react-native-svg";

const SvgCx = (props) => (
  <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
    <Defs>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CX_svg__a">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#F0F0F0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CX_svg__b">
        <Stop stopColor="#0637C5" offset="0%" />
        <Stop stopColor="#002CAA" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CX_svg__c">
        <Stop stopColor="#3BA758" offset="0%" />
        <Stop stopColor="#2C8945" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CX_svg__d">
        <Stop stopColor="#FFCC5D" offset="0%" />
        <Stop stopColor="#FEC54A" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path fill="url(#CX_svg__a)" d="M0 0h21v15H0z" />
      <Path fill="url(#CX_svg__b)" d="M0 0h21v15H0z" />
      <Path
        fill="#FFF"
        d="M4 13l-.707.207.207-.707-.207-.707L4 12l.707-.207-.207.707.207.707zM4 5.5l-.707.207L3.5 5l-.207-.707L4 4.5l.707-.207L4.5 5l.207.707zM6 8.5l-.707.207L5.5 8l-.207-.707L6 7.5l.707-.207L6.5 8l.207.707zM2 9.5l-.707.207L1.5 9l-.207-.707L2 8.5l.707-.207L2.5 9l.207.707zM5.5 10.75l-.354.104.104-.354-.104-.354.354.104.354-.104-.104.354.104.354z"
      />
      <Path
        d="M0 15l8.92-6.372s1.983 1.025 2.74.484c.758-.54.348-2.689.348-2.689L21 0H0v15z"
        fill="url(#CX_svg__c)"
        transform="matrix(-1 0 0 1 21 0)"
      />
      <Path
        d="M14.46 7.5s2.415-.4 2.703-1.527c.288-1.127-2.298-1.934-2.4-2.34-.102-.405.95-.117 1.415 0 .451.115 1.333.696 1.333.696s-.01-.8-.131-1.17c-.202-.62-.836-1.802-.836-1.802s1.075.69 1.536 1.24c.265.315.364 1.738.69 2.226.584.872 1.948-.102 1.369.823-.58.924-1.911 1.05-2.976 1.455-.965.367-3.115.86-3.115.86l.413-.461zM10.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM9.258 7.5L9 8s.84-.19 1.123 0c.384.256.377 1 .377 1h.5s-.164-.73.093-1.243C11.35 7.244 12 7 12 7V6s-.681.727-1.5 1S9 7 9 7l.258.5z"
        fill="url(#CX_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgCx;
