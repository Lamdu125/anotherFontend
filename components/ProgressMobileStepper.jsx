import React, { useMemo, useCallback, useState } from 'react';
import Button from './Button'
import { MobileStepper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const listKOLs = ['fetish', 'yasuo', 'messi', 'pussy', 'ross', 'mate'];



const ProgressMobileStepper = (props) => {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, []);

    const handleBack = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }, []);

    return (
        <MobileStepper
            variant="progress"
            steps={listKOLs.length}
            position="static"
            activeStep={activeStep}
            sx={{
                maxWidth: '40%',
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
    );
}

export default ProgressMobileStepper;