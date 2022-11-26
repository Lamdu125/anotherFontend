import styled from "@mui/material/styles/styled";
import { Typography } from "@mui/material";
import { textAnimate } from "../../styles/globalCSS";

const Content = styled(Typography)((props) => ({
  animation: `${textAnimate(props)} ${props.duration} linear ${props.delay}`,
}));

const Text = (props) => {
  const { content, startX, endX, startY, endY, duration, delay } = props;

  return (
    <Content
      startX={startX}
      endX={endX}
      startY={startY}
      endY={endY}
      duration={duration}
      delay={delay}
    >
      {content}
    </Content>
  );
};

export default Text;
