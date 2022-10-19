import React from "react";
import { Svg, Defs, LinearGradient, Stop, G, Path } from "react-native-svg";

const SvgGbWls = (props) => (
  <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
    <Defs>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GB-WLS_svg__a">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#F0F0F0" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GB-WLS_svg__b">
        <Stop stopColor="#3ACC55" offset="0%" />
        <Stop stopColor="#28A940" offset="100%" />
      </LinearGradient>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GB-WLS_svg__c">
        <Stop stopColor="#E91C44" offset="0%" />
        <Stop stopColor="#D20F35" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path fill="url(#GB-WLS_svg__a)" d="M0 0h21v15H0z" />
      <Path fill="url(#GB-WLS_svg__b)" d="M0 7h21v8H0z" />
      <Path fill="url(#GB-WLS_svg__a)" d="M0 0h21v7H0z" />
      <Path
        d="M8.066 11.396l1.236-.21-.957-.452.655-.367s1.104.932 1.104.633c0-.32 1.038-.18.996-.633-.057-.62-1.149-.046-1.344-.82-.109-.432-.454-.377-.454-.377l-1.1.377-.547.82-.272-.82s-.642.522-.855.82c-.228.318-.47 1.029-.47 1.029l1.122.469-1.636-.289-1.194.289-.732.203.322-.338-.657-.334L3.94 11l-.322-.266L5.036 11s.518-.052.714-.266c.247-.27.44-1.187.44-1.187l-.646-.377-.508.921s-.35-.871-.686-1.36c-.249-.364-1.067-1.197-1.067-1.197L2.23 8.09l.588-1.173s.466-.407.17-.825c-.296-.418-.545-1.353-.545-1.353s.618 1.071.841.988c.317-.117-.394-1.094 0-1.268.284-.126.335 1.12.335 1.12l.322-.611v.76s-.187.907.13 1.446c.318.54 1.26.916 1.26.916s-.244-.541 0-1.58c.167-.703.757-1.903 1.035-2.287.146-.204-1.172.745-1.172.745v-.745L3.94 4.093l-.322.365-.801-1.314.996.501h1.518l-.295-.362H3.813s.257-.53 1.518-.53l.596-.404s.815.023 1.274.04c.408.016 1.144-.502 1.144-.502l.207.502-.486.755.486.501-.207.31.357.503h-.636l.486.783-.486-.274.28.76-.28.782 1.236-.418s0-1.124.454-1.633c1.386-1.422 3.645-2.571 3.645-2.571s-.12 1.032.215 1.113c.485.118 2.605-.85 2.605-.85s-1.274 1.37-1.013 1.495c.14.067.374.31.374.31s-1.1.899-1.285 1.286c-.184.387.27.85.27.85s-.951 0-1.425.418c1.425 0 2.59.675 3.28.177.463-.334-1.655-.126-1.377-.96.103-.31.373-.668.99-.76.617-.09.835.275.835.275l.333-.503h-.982L18 3l.232 2.241-.602-.503-.27.84C18 7.534 15.045 7.95 15.045 7.95l1.825 1.22-.65.186-.185 1.83.835.679-1.098-.289-2.156.492.429-.672-.903.18.603-.576-.603-.266.77-.214.972.665s.48-.622.534-.952c.054-.341-.21-1.063-.21-1.063s-1.43-.03-1.935-.155c-.505-.125-.797-.522-.797-.522l-.573.677s1.997.748 1.498 1.063c-.116.073-.687-.142-.687-.142s-.984 1.15-1.614 1.305c-.286.07.803.469.803.469s-.93-.148-1.403-.289c-.495-.147-1.948.289-1.948.289l-.486-.47zm8.02-5.343a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5z"
        fill="url(#GB-WLS_svg__c)"
      />
    </G>
  </Svg>
);

export default SvgGbWls;
