import styled from "@mui/material/styles/styled";
import { Typography } from "@mui/material";
import { textAnimate } from "../../styles/globalCSS";

const Content = styled(Typography)((props) => ({
  fontFamily: props.bold ? 'AvertaBold' : 'Averta',
  textAlign: props.textAlign,
  lineHeight: props.lineHeight,
  letterSpacing: props.letterSpacing,
  fontSize: `${props.fontSize}`,
  animation: `${textAnimate(props)} ${props.duration || '1s'} linear ${props.delay || '0s'}`,
}));

const Text = (props) => {
  const {
    content,
    startX,
    endX,
    startY,
    endY,
    duration,
    delay,
    fontSize,
    bold,
    letterSpacing,
    textAlign,
    lineHeight,
  } = props;

  return (
    <Content
      startX={startX}
      endX={endX}
      startY={startY}
      endY={endY}
      duration={duration}
      delay={delay}
      fontSize={fontSize || "13px"}
      textAlign={textAlign || "justify"}
      bold={bold}
      letterSpacing={letterSpacing || "0.1em"}
      lineHeight={lineHeight || "40px"}
    >
      {content}
    </Content>
  );
};

export default Text;
