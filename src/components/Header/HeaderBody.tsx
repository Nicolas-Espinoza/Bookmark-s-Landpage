
import React from 'react';
import { Flex, Stack, Spacer, useMediaQuery, HStack } from '@chakra-ui/react';
import { Hbuttons } from './HButtons';
import { Logo } from './Logo';
import { MenuHamburger } from './menuHamburger';


export const Header = () => {

    const [isSmallerScreen] = useMediaQuery('(max-width:600px)');
    console.log(isSmallerScreen);
    return (
        <HStack
            w={'100%'}
            justifyContent={'space-between'}
            marginTop={isSmallerScreen ? '5' : '10'}
        >

            <Logo />
            {isSmallerScreen ? <MenuHamburger /> : <Hbuttons />}
        </HStack>
    )
}