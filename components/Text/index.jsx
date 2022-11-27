import styled from "@mui/material/styles/styled";
import { Typography } from "@mui/material";
import { textAnimate } from "../../styles/globalCSS";

const Content = styled(Typography)((props) => ({
  textAlign: props.textAlign,
  lineHeight: props.lineHeight,
  letterSpacing: props.letterSpacing,
  fontWeight: props.fontWeightBold ? "Bold" : undefined,
  fontSize: `${props.fontSize}`,
  animation: `${textAnimate(props)} ${props.duration} linear ${props.delay}`,
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
    fontWeightBold,
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
      fontWeightBold={fontWeightBold}
      letterSpacing={letterSpacing || "0.1em"}
      lineHeight={lineHeight || "40px"}
    >
      {content}
    </Content>
  );
};

export default Text;
