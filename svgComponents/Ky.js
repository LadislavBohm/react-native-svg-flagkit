import React from "react";
import {
  Svg,
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Ellipse,
  Mask,
  Use,
} from "react-native-svg";

const SvgKy = (props) => (
  <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
    <Defs>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KY_svg__a">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#F0F0F0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KY_svg__b">
        <Stop stopColor="#07319C" offset="0%" />
        <Stop stopColor="#00247E" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KY_svg__c">
        <Stop stopColor="#DB1E36" offset="0%" />
        <Stop stopColor="#D51931" offset="100%" />
      </LinearGradient>
      <Path d="M0 3.5V0h5v3.5C5 6 2.5 7 2.5 7S0 6 0 3.5z" id="KY_svg__d" />
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KY_svg__f">
        <Stop stopColor="#125FBA" offset="0%" />
        <Stop stopColor="#0C50A1" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path fill="url(#KY_svg__a)" d="M0 0h21v15H0z" />
      <Path fill="url(#KY_svg__b)" d="M0 0h21v15H0z" />
      <Path
        d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
        fill="url(#KY_svg__a)"
        fillRule="nonzero"
      />
      <Path
        d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        fill="url(#KY_svg__c)"
      />
      <Path
        d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5H0z"
        fill="url(#KY_svg__a)"
      />
      <Path fill="url(#KY_svg__c)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
      <Ellipse fill="#FAD051" cx={15.5} cy={4} rx={1.5} ry={1} />
      <G transform="translate(13 4)">
        <Mask id="KY_svg__e" fill="#fff">
          <Use xlinkHref="#KY_svg__d" />
        </Mask>
        <Use fill="url(#KY_svg__a)" xlinkHref="#KY_svg__d" />
        <Path fill="#CF142C" mask="url(#KY_svg__e)" d="M0 0h5v1H0z" />
        <Path
          d="M0 6h5v1H0V6zm0-2h5v1H0V4zm0-2h5v1H0V2z"
          fill="url(#KY_svg__f)"
          mask="url(#KY_svg__e)"
        />
      </G>
    </G>
  </Svg>
);

export default SvgKy;
