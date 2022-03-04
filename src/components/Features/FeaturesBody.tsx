import React from "react";
import { Flex, useMediaQuery, VStack } from "@chakra-ui/react";
import { Header } from "./Header";
import { Tabs } from "./Tabs";

export const FeaturesBody = () => {

    const [isSmallScreen] = useMediaQuery('(max-width:600px)');
    return (
        <VStack
            w={'100%'}
        >
            <Header />
            <Tabs />
        </VStack>
    )
}