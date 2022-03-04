import { Heading, VStack, Text, Image, Spacer, Button, Stack, useMediaQuery } from "@chakra-ui/react";


interface Props {
    image?: any,
    title: string,
    textBody: string,
    buttonTitle?: string
}

export const TabsContent = ({
    image, title, textBody, buttonTitle = 'More Info'
}: Props) => {

    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    return (
        <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            p={isSmallScreen ? '0px' : '3% 3% 0 0'}
        >
            <Stack
                w={isSmallScreen ? '100%' : '45%'}
                p={isSmallScreen ? '0px' : '0 8% 0 0'}
            >
                <Image
                    src={image}
                />
            </Stack>
            <Stack
                textAlign={isSmallScreen ? 'center' : 'start'}
                paddingTop={isSmallScreen ? '5' : '0px'}
                justifyContent={'center'}
                w={isSmallScreen ? '100%' : '50%'}
            >
                <Heading
                    as='h1'
                    fontSize={isSmallScreen ? '2xl' : 'xxx-large'}
                    marginTop={isSmallScreen ? '2' : ''}
                >
                    {title}
                </Heading>
                <Text
                    as='p'
                    fontSize={isSmallScreen ? 'md' : 'xl'}
                >
                    {textBody}
                </Text>
                {
                    !isSmallScreen &&
                    <Stack paddingTop={3}>
                        <Button
                            size={'lg'}
                            w={'30%'}
                            variant={'CallToActionButton'}
                        >
                            {buttonTitle}
                        </Button>
                    </Stack>
                }
            </Stack>
        </Stack >
    )
}