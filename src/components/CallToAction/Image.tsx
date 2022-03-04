import React from "react";
import { Box, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import imagenBody from '../../assets/illustrations/illustration-hero.svg';

export const ImageBody = () => {

    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    return (
        <Stack
            paddingTop={isSmallScreen ? '5' : '0px'}
            w={isSmallScreen ? '100%' : '45%'}
            justifyContent={'center'}
        >
            <Image
                src={imagenBody}
                w={isSmallScreen ? '100%' : '100%'}
                h={isSmallScreen ? '100%' : '90%'}
                paddingTop={isSmallScreen ? '0px' : '4'}
            />
        </Stack >
    )
}