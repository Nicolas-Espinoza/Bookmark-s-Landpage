import { Box, Button, useMediaQuery, Image, HStack } from "@chakra-ui/react";
import hamburger from '../../assets/icons/icon-hamburger.svg';

export const Hbuttons = () => {

    const [isSmallerScreen] = useMediaQuery('max-width:600px');

    return (
        <Box
            w={isSmallerScreen ? '' : '30%'}
        >
            {
                isSmallerScreen
                    ?
                    <Image src={hamburger} w={'20%'} />
                    :
                    <HStack>
                        <Button variant='DefaultButton'>
                            Features
                        </Button>

                        <Button variant="DefaultButton" >
                            Pricing
                        </Button>

                        <Button variant='DefaultButton' >
                            Contact
                        </Button>

                        <Button size={"lg"} variant="ButtonLogin" w='28%'>
                            Login
                        </Button>
                    </HStack>
            }
        </Box>
    )
}