import { Center, Heading, Stack, Text, useMediaQuery, VStack } from "@chakra-ui/react";

export const Header = () => {

    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    return (
        <Center>
            <VStack
                w={isSmallScreen ? '90vw' : '2xl'}
                textAlign={'center'}
            >
                <Stack>
                    <Heading
                        as='h1'
                        size={isSmallScreen ? 'lg' : '2xl'}
                    >
                        Features
                    </Heading>
                </Stack>
                <Stack
                    w={'100%'}
                    paddingBottom={isSmallScreen ? '8' : '20'}
                    paddingTop={isSmallScreen ? '2' : '10'}
                >
                    <Text
                        as='p'
                        fontSize={isSmallScreen ? 'md' : 'xl'}
                        textAlign={'center'}>
                        Our aim is to make it quick and easy for you to access your
                        favourites websites. Your bookmarks sync between your devices
                        so you can access them on the go.
                    </Text>
                </Stack>
            </VStack>
        </Center>
    )
}