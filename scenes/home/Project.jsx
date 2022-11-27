import { Container, Box, styled, Grid, List, ListItem } from '@mui/material'
import Image from '../../components/image'
import Text from '../../components/Text'
import React, { useMemo, useCallback, useState } from 'react';
import Button from '../../components/Button'
import { MobileStepper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Stack } from '@mui/system';

const listKOLs = [
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 1",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    },
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 2",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    },
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 3",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    },
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 4",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    },
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 5",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    },
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 6",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    }];


const Project = () => {
    const [activeStep, setActiveStep] = useState(0);
    const LIST_KOLS = useMemo(() => {
        return listKOLs.map((item, index) => {
            if (activeStep !== index) {
                return null;
            }
            return <ListItem key={index}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5%',
                    width: "90vw",
                }}>
                    <Image
                        imagePath={item.image}
                        width={350}
                        height={350}
                        hoverEnabled={false}
                        isCircleAround={true}
                        startY={'10%'}
                        endY={'0%'}
                    />
                    <Box sx={{
                        marginTop: '2%',
                        marginLeft: '5%'
                    }}>
                        <Text
                            content={item.title}
                            fontSize={'32px'}
                            startY={'50%'}
                            endY={'0%'}
                            duration={'0.5s'}
                            bold
                        />
                        <br />
                        <Text
                            content={item.content}
                            fontSize={'20px'}
                            startY={'10%'}
                            endY={'0%'} />
                    </Box>
                </Box>
            </ListItem>
        })
    }, [activeStep])
    const handleNext = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, []);

    const handleBack = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }, []);
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                alignItems: "center",
            }}
        >
            <Box
            >
                <Box>
                    <Text
                        content={'KOLs'}
                        fontSize={'40px'} />
                </Box>
                <Box sx={{ width: "90vw", overflow: "hidden" }}>
                    <List direction={'row'} component={Stack}>
                        {LIST_KOLS}
                    </List>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '5%'
                }}>
                    <MobileStepper
                        variant="progress"
                        steps={listKOLs.length}
                        position="static"
                        activeStep={activeStep}
                        sx={{
                            maxWidth: '60%',
                            flexGrow: 1,
                            background: 'none',
                        }}
                        LinearProgressProps={{
                            color: 'inherit',
                            sx: {
                                height: '2px',
                                width: '80%'
                            }
                        }}
                        nextButton={
                            <Button
                                backgroundColor={'none'}
                                hoverBackground={'#FFFFFF'}
                                boder={'none'}
                                textColor={'#000000'}
                                borderRadius={'50%'}
                                onClick={handleNext}
                                disabled={activeStep === listKOLs.length - 1}
                                Icon={<KeyboardArrowRight />}>
                            </Button>
                        }
                        backButton={
                            <Button
                                backgroundColor={'none'}
                                hoverBackground={'#FFFFFF'}
                                border={'none'}
                                textColor={'#000000'}
                                borderRadius={'50%'}
                                onClick={handleBack}
                                disabled={activeStep === 0}
                                Icon={<KeyboardArrowLeft />}
                            >

                            </Button>
                        }
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Project