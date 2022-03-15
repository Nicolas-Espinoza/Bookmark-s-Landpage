import { VStack } from "@chakra-ui/react";
import { Header } from "./Header";
import { Tabs } from "./Tabs";

export const FeaturesBody = () => {

    return (
        <VStack
            w={'100%'}
        >
            <Header />
            <Tabs />
        </VStack>
    )
}