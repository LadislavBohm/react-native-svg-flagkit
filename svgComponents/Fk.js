import React from "react";
import {
  Svg,
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Mask,
  Use,
} from "react-native-svg";

const SvgFk = (props) => (
  <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
    <Defs>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FK_svg__a">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#F0F0F0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FK_svg__b">
        <Stop stopColor="#07319C" offset="0%" />
        <Stop stopColor="#00247E" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FK_svg__d">
        <Stop stopColor="#1F8BDE" offset="0%" />
        <Stop stopColor="#1075C2" offset="100%" />
      </LinearGradient>
      <Path
        d="M0 3.5V.51C0 .228.215 0 .498 0h4.004C4.777 0 5 .227 5 .51V3.5C5 6 2.5 7 2.5 7S0 6 0 3.5z"
        id="FK_svg__c"
      />
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FK_svg__e">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#F0F0F0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FK_svg__g">
        <Stop stopColor="#187536" offset="0%" />
        <Stop stopColor="#0E5023" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FK_svg__h">
        <Stop stopColor="#DB1E36" offset="0%" />
        <Stop stopColor="#D51931" offset="100%" />
      </LinearGradient>
      <Path
        d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        id="FK_svg__i"
      />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path fill="url(#FK_svg__a)" d="M0 0h21v15H0z" />
      <Path fill="url(#FK_svg__b)" d="M0 0h21v15H0z" />
      <G transform="translate(13 4)">
        <Mask id="FK_svg__f" fill="#fff">
          <Use xlinkHref="#FK_svg__c" />
        </Mask>
        <Use fill="url(#FK_svg__d)" xlinkHref="#FK_svg__c" />
        <Path
          d="M0 3.5V.51C0 .228.215 0 .498 0h4.004C4.777 0 5 .227 5 .51V3.5C5 6 2.5 7 2.5 7S0 6 0 3.5zm2.644 2.87c.263-.15.527-.334.772-.554C4.099 5.2 4.5 4.439 4.5 3.5V.51C4.5.5.499.5.499.5l.001 3c0 .939.401 1.701 1.084 2.316a4.398 4.398 0 0 0 .916.632c.043-.022.091-.048.144-.078z"
          fill="url(#FK_svg__e)"
          fillRule="nonzero"
          mask="url(#FK_svg__f)"
        />
        <Path
          d="M1.158 3.475C1.071 3.212 1.216 3 1.495 3h2.01c.273 0 .425.209.337.475l-.184.55c-.087.263-.295.306-.524.133 0 0 .088-.158-.634-.158s-.634.158-.634.158c-.202.189-.436.133-.524-.133l-.184-.55z"
          fill="url(#FK_svg__g)"
          mask="url(#FK_svg__f)"
        />
        <Path
          d="M1.5 3c.27.054.59-.5 1-.5.437 0 .726.567 1 .5.246-.06.5-.739.5-1 0-.552-.672-1-1.5-1S1 1.448 1 2c0 .28.223.945.5 1z"
          fill="url(#FK_svg__a)"
          mask="url(#FK_svg__f)"
        />
        <Path
          d="M-.323 6.177l.35-.35.3-.3a.244.244 0 0 1 .346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 0 1 .346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 0 1 .346 0l.3.3.177.177.354-.354-.177-.177-.3-.3a.744.744 0 0 0-1.054 0l-.3.3a.244.244 0 0 1-.346 0l-.3-.3a.744.744 0 0 0-1.054 0l-.3.3a.244.244 0 0 1-.346 0l-.3-.3a.744.744 0 0 0-1.054 0l-.3.3-.35.35L-.854 6l.354.354.177-.177zM-.323 4.677l.35-.35.3-.3a.244.244 0 0 1 .346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 0 1 .346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 0 1 .346 0l.3.3.177.177.354-.354-.177-.177-.3-.3a.744.744 0 0 0-1.054 0l-.3.3a.244.244 0 0 1-.346 0l-.3-.3a.744.744 0 0 0-1.054 0l-.3.3a.244.244 0 0 1-.346 0l-.3-.3a.744.744 0 0 0-1.054 0l-.3.3-.35.35-.177.177.354.354.177-.177zM-.323 7.677l.35-.35.3-.3a.244.244 0 0 1 .346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 0 1 .346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 0 1 .346 0l.3.3.177.177.354-.354-.177-.177-.3-.3a.744.744 0 0 0-1.054 0l-.3.3a.244.244 0 0 1-.346 0l-.3-.3a.744.744 0 0 0-1.054 0l-.3.3a.244.244 0 0 1-.346 0l-.3-.3a.744.744 0 0 0-1.054 0l-.3.3-.35.35-.177.177.354.354.177-.177z"
          fill="url(#FK_svg__a)"
          fillRule="nonzero"
          mask="url(#FK_svg__f)"
        />
      </G>
      <Use fill="url(#FK_svg__h)" xlinkHref="#FK_svg__i" />
      <Path
        stroke="#FFF"
        strokeWidth={0.5}
        d="M3.25 3.115L-.676-.25H.5l.145.047L4.08 2.25h.848L9.25-.451V.25c0 .222-.128.47-.313.602L5.75 3.13v.756l3.225 2.764c.282.242.138.601-.225.601-.193 0-.442-.08-.604-.195L4.92 4.75h-.848L-.25 7.451v-1.08l3.5-2.5v-.756z"
      />
      <Path
        d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5H0z"
        fill="url(#FK_svg__a)"
      />
      <Path fill="url(#FK_svg__h)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
    </G>
  </Svg>
);

export default SvgFk;
