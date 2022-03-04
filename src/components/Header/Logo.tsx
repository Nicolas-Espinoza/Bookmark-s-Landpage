import React from "react";
import { Box, Flex, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import logo from './../../assets/logos/logo-bookmark.svg';


export const Logo = () => {
    const [isSmallerScreen] = useMediaQuery('(max-width:600px)');
    return (
        <Stack>
            <Image src={logo} w={isSmallerScreen ? 'max' : 'sm'} />
        </Stack>
    )
}