import React from "react";
import {
  Svg,
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Ellipse,
} from "react-native-svg";

const SvgTc = (props) => (
  <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
    <Defs>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TC_svg__a">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#F0F0F0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TC_svg__b">
        <Stop stopColor="#07319C" offset="0%" />
        <Stop stopColor="#00247E" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TC_svg__c">
        <Stop stopColor="#FFD033" offset="0%" />
        <Stop stopColor="#FEC403" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TC_svg__d">
        <Stop stopColor="#DB1E36" offset="0%" />
        <Stop stopColor="#D51931" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path fill="url(#TC_svg__a)" d="M0 0h21v15H0z" />
      <Path fill="url(#TC_svg__b)" d="M0 0h21v15H0z" />
      <Path
        d="M13 7.5V5c0-.553.444-1 1-1h3c.552 0 1 .441 1 1v2.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5z"
        fill="url(#TC_svg__a)"
        fillRule="nonzero"
      />
      <Path
        d="M15.644 10.37c.263-.15.527-.334.772-.554C17.099 9.2 17.5 8.439 17.5 7.5V5c0-.28-.221-.5-.5-.5h-3c-.279 0-.5.222-.5.5v2.5c0 .939.401 1.701 1.084 2.316a4.398 4.398 0 0 0 .916.632c.043-.022.091-.048.144-.078z"
        fill="url(#TC_svg__c)"
        fillRule="nonzero"
      />
      <Ellipse fill="#BA5B1F" cx={16.5} cy={6} rx={1} ry={1} />
      <Ellipse
        fill="#FF9F3E"
        transform="rotate(-20 14.312 6.03)"
        cx={14.312}
        cy={6.03}
        rx={1}
        ry={1}
      />
      <Ellipse
        fill="#FF937F"
        transform="rotate(25 14.711 6.047)"
        cx={14.711}
        cy={6.047}
        rx={1}
        ry={1}
      />
      <Path fill="#01A827" d="M15 8l.5-1 .5 1v1h-1z" />
      <Path
        d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
        fill="url(#TC_svg__a)"
        fillRule="nonzero"
      />
      <Path
        d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        fill="url(#TC_svg__d)"
      />
      <Path
        d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5H0z"
        fill="url(#TC_svg__a)"
      />
      <Path fill="url(#TC_svg__d)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
    </G>
  </Svg>
);

export default SvgTc;
