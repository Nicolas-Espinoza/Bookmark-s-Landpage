import React from "react";
import { Button, Heading, Image, Spacer, Stack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import separator from '../../assets/icons/bg-dots.svg';
import './Styles.css'

const buttonText = 'Add & Install Extension';

interface Props {
    image: any,
    title: string,
    subtitle: string
}

export const DownloadCard = ({ image, title, subtitle }: Props) => {

    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    return (
        <VStack className="card"
            paddingTop={isSmallScreen ? '8' : '12'}
            paddingBottom={isSmallScreen ? '8' : '10'}
            marginRight={isSmallScreen ? '0' : '6'}
        >
            <Image src={image} />
            <Heading
                as='h1'
                fontSize={isSmallScreen ? '2xl' : '2xl'}
                paddingTop={isSmallScreen ? '8' : '10'}
                paddingBottom={isSmallScreen ? '8' : '10'}
            >
                {title}
            </Heading>
            <Text
                fontSize={isSmallScreen ? 'md' : '2xl'}
            >
                {subtitle}
            </Text>
            <Image src={separator} h={'1'} />
            <Spacer />
            <Button variant={'ChromeButton'}>
                {buttonText}
            </Button>
        </VStack>
    )
}