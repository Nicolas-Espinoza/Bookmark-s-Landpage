import { Button, Heading, Stack, Text, useMediaQuery } from "@chakra-ui/react";


export const Body = () => {
    const [isSmallScreen] = useMediaQuery('(max-width:600px)');
    return (
        <Stack
            w={isSmallScreen ? '100%' : '50%'}
            height={isSmallScreen ? 'xs' : '100%'}
            justifyContent={'center'}
        >

            <Stack
                paddingBottom={isSmallScreen ? '0px' : '10'}
            >
                <Heading
                    as='h1'
                    size={isSmallScreen ? 'lg' : '2xl'}
                    textAlign={isSmallScreen ? 'center' : 'start'}
                >
                    A Simple Bookmark Manager
                </Heading>
            </Stack>

            <Stack
                w={isSmallScreen ? '100%' : '50%'}
                paddingBottom={isSmallScreen ? '5' : '10'}
            >
                <Text
                    as='p'
                    fontSize={isSmallScreen ? 'md' : 'xl'}
                    textAlign={isSmallScreen ? 'center' : 'start'}
                >
                    A clean and simple interface to organize your favourite
                    websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                </Text>
            </Stack>

            <Stack
                w={'100%'}
                direction={'row'}
                justifyContent={isSmallScreen ? 'space-evenly' : ''}
                h={isSmallScreen ? '12' : '14'}
                marginTop={isSmallScreen ? '5' : '0px'}
            >
                <Button
                    variant="ChromeButton"
                    w={isSmallScreen ? '50%' : '23%'}
                    h={'100%'}
                >
                    Get it on Chrome
                </Button>
                <Button
                    variant="FirefoxButton"
                    w={isSmallScreen ? '50%' : '23%'}
                    h={'100%'}
                >
                    Get it on Firefox
                </Button>
            </Stack>
        </Stack>
    )
}