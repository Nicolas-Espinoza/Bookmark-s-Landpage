import { Heading, Stack, Text, useMediaQuery, VStack, HStack, Button, Center, Image, Box } from "@chakra-ui/react"
import { EmailInput } from "./EmailInput";

import logo from '../../assets/logos/logo-bookmark-white.svg';
import fblogo from '../../assets/icons/icon-facebook.svg';
import twlogo from '../../assets/icons/icon-twitter.svg';

export const FooterBody = () => {


    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    return (
        <Stack
            style={{
                width: '100%',
                margin: '0',
                backgroundColor: '#5266df'
            }}
            paddingTop={isSmallScreen ? '4' : '10'}
        >
            <Center>
                <VStack textAlign={'center'}
                    padding={isSmallScreen ? '2% 2% 2% 2%' : '0'}
                >
                    <Text>
                        35.000+ ALREADY JOINED
                    </Text>
                    <Heading>
                        stay up-to-date with what we're doing
                    </Heading>

                    <EmailInput />
                </VStack>
            </Center>

            <Stack
                w={isSmallScreen ? '100%' : '100%'}
                bg={'#242946'}
                h={isSmallScreen ? '72' : '28'}
                justifyContent={'center'}
            >
                <Stack
                    direction={isSmallScreen ? 'column' : 'row'}
                    justifyContent={'space-around'}
                >
                    <Stack
                        direction={isSmallScreen ? 'column' : 'row'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Image
                            src={logo}
                            w={isSmallScreen ? '50%' : '54'}
                            paddingRight={isSmallScreen ? '0' : '10'}
                            paddingBottom={isSmallScreen ? '0' : '1'}
                        />

                        <Button variant={'ButtonFooter'}>
                            <Text>
                                FEATURES
                            </Text>
                        </Button>

                        <Button variant={'ButtonFooter'}>
                            <Text>
                                PRICING
                            </Text>
                        </Button>

                        <Button variant={'ButtonFooter'}>
                            <Text>
                                CONTACT
                            </Text>
                        </Button>
                    </Stack>

                    <Stack
                        direction={'row'}
                        justifyContent={isSmallScreen ? 'center' : 'center'}
                    >
                        <Button variant={'ButtonFooter'}>
                            <Image src={fblogo} />
                        </Button>

                        <Button variant={'ButtonFooter'}>
                            <Image src={twlogo} />
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>

    )
}