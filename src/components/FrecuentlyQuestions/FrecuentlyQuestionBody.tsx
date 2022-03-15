import { Center, Heading, VStack, Text, Flex, Button, Stack, useMediaQuery } from "@chakra-ui/react";
import { AccordionMenu } from "./AccordionMenu";

export const FrecuentlyQuestion = () => {

    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    return (
        <Center
            paddingTop={isSmallScreen ? '8' : '20'}
        >
            <VStack>
                <Heading
                    as='h1'
                    textAlign={'center'}
                    marginBottom={'4'}
                >
                    Frequently Asked Questions
                </Heading>
                <Flex
                    w={isSmallScreen ? '100%' : '60%'}
                    textAlign={'center'}>
                    <Text
                        fontSize={isSmallScreen ? 'md' : 'xl'}
                        marginBottom={isSmallScreen ? '6' : '14'}
                    >
                        Here are some of our FAQs. If you have any other questions
                        you'd like answered please feel free to email us.
                    </Text>
                </Flex>

                <Stack
                    paddingBottom={isSmallScreen ? '6' : '14'}
                >
                    <AccordionMenu />
                </Stack>

                <Stack paddingBottom={isSmallScreen ? '12' : '40'}>
                    <Button
                        variant={'CallToActionButton'}
                        size={'lg'}
                    >
                        More Info
                    </Button>
                </Stack>
            </VStack>
        </Center>
    )
}