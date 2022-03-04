import { Stack, useMediaQuery } from "@chakra-ui/react";
import { Body } from "./CallToActionText";
import { ImageBody } from "./Image";

export const CallToActionBody = () => {

    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    return (
        <Stack
            w={'100%'}
            direction={isSmallScreen ? 'column' : 'row'}
            paddingTop={isSmallScreen ? '6' : '20'}
        >
            {
                isSmallScreen
                    ?
                    (
                        <Stack>
                            <ImageBody />
                            <Body />
                        </Stack>
                    )
                    :
                    (
                        <Stack
                            direction={'row'}
                            justifyContent={'center'}
                        >
                            <Body />
                            <ImageBody />
                        </Stack>
                    )
            }
        </Stack>
    )
}