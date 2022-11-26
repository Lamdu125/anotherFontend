import React from 'react';
import { styled } from '@mui/material/styles';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)((props) => ({
    width: props.width,
    height: props.height,
    minWidth: 0,
    borderRadius: props.borderRadius,
    color: props.textColor,
    backgroundColor: props.backgroundColor,
    '&:hover': {
        backgroundColor: props.hoverBackground,
        color: props.hoverTextColor,

    },
    fontSize: props.fontSize || '14px',
    border: props.border,
}));


const Button = (props) => {
    return <StyledButton
        backgroundColor={props.backgroundColor}
        hoverBackground={props.hoverBackground}
        fontSize={props.fontSize}
        width={props.width}
        height={props.height}
        onClick={props.onClick}
        disabled={props.disabled}
        borderRadius={props.borderRadius}
        border={props.border}
        textColor={props.textColor}
        hoverTextColor={props.hoverTextColor}
    >

        <p>{props.title}</p>
        {props.Icon}

    </StyledButton>
}

export default Button