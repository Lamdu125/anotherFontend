

import { Box } from "@mui/material";
import React, { memo, useCallback, useEffect, useState } from "react";
import Image from "../../../components/image";
import Text from "../../../components/Text";
import styled from "@mui/material/styles/styled";

const StyledBox = styled(Box)(() => ({
    transiton: "all 1s linear"
}));

const Header = (props) => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [positionXLeft, setPositionXLeft] = useState(45);
    const [positionYLeft, setPositionYLeft] = useState(50);
    const [positionXRight, setPositionXRight] = useState(51);
    const [positionYRight, setPositionYRight] = useState(37);
    useEffect(() => {
        setScreenWidth(screen.width);
        if (props.index > 0 && props.index < 1) {

            setPositionXLeft(45 - props.index * 100);
            setPositionYLeft(50 + props.index * 300);
            setPositionXRight(51 + props.index * 100);
            setPositionYRight(37 + props.index * 300);
        }
        if (props.index > 1 && props.index < 2) {
            setPositionYLeft(100);
            setPositionYRight(100);
        }
        if (props.index > 2) {
            console.log("ddaay laf x", positionXLeft);
            console.log("day la Y", positionYLeft)

            setPositionXLeft(positionXLeft => (positionXLeft + props.index * 1.5));
            setPositionYLeft(1500);

        }
    }, [props.index]);


    return (
        <Box className="header" sx={{ height: '100vh' }}>
            <Box pt={5} className="logo " sx={{ position: "relative" }}>
                <Box sx={{ position: 'absolute', left: `${positionXLeft}%`, top: `${positionYLeft}%` }}>
                    <Image
                        className={"logo_left"}
                        imagePath={"/images/an-logo.png"}
                        width={"86"}
                        height={"39"}
                    />
                </Box>
                <Box sx={{ position: 'absolute', left: `${positionXRight}%`, top: `${positionYRight}%` }}>
                    <Image
                        className={"logo_right"}
                        imagePath="/images/other-logo.png"
                        width={"55"}
                        height={"73"}
                    />
                </Box>
                <Box>
                    <Image
                        className={"logo_frame "}
                        imagePath="/images/frame-logo 1.png"
                        width={"135"}
                        height={"135"}
                    />
                </Box>
            </Box>
            <Box
                mt={10}
                className="brandName"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    padding: "0px 26%",
                    position: "relative",
                }}
            >
                <Text content={"Chúng tôi là"} fontSize={"40px"} lineHeight={"50px"} />
                <Image imagePath="/images/logo 2.png" width={"1000"} height={"250"} />
            </Box>
            <Box
                className="navMenu"
                mt={14}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    alignContent: "stretch",
                }}
            >
                <Text content={"About us"} fontSize={"32px"} />
                <Image imagePath="/images/Line 3.png" width={"25"} height={"100"} />
                {/* <Text rotate={'10deg'} fontStretch={'expanded'} content={"|"} fontSize={"20px"} /> */}
                <Text content={"Our work"} fontSize={"32px"} />
                <Image imagePath="/images/Line 3.png" width={"25"} height={"100"} />

                {/* <Text content={"|"} fontSize={"32px"} /> */}
                <Text content={"Contact"} fontSize={"32px"} />
            </Box>
        </Box>
    );
};

export default memo(Header);
