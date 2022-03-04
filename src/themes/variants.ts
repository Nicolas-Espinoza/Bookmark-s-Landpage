import { whiten } from '@chakra-ui/theme-tools';


export const ButtonStyles = {
    // style object for base or default style
    baseStyle: {},
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
        big: {
            width: '35%',
            height: '60%'
        }
    },
    // styles for different visual variants ("outline", "solid")
    variants: {
        ButtonLogin: {
            bg: 'button.primary',
            color: 'white',
            _hover: {
                bg: whiten('white', 0),
                border: '1px solid',
                borderColor: 'button.primary',
                color: 'button.primary'
            },
        },
        DefaultButton: {
            bg: 'white',
            color: 'black',
            _hover: {
                color: 'button.primary'
            }
        },
        ChromeButton: {
            bg: 'blue',
            color: 'white',
            _hover: {
                bg: 'white',
                color: 'blue',
                border: '1px solid',
                borderColor: 'blue'
            }
        },
        FirefoxButton: {
            bg: '#f7f7f7',
            color: 'black',
            _hover: {
                bg: 'white',
                color: 'black',
                border: '1px solid',
                borderColor: 'black'
            }
        },
        CallToActionButton: {
            bg: '#5267de',
            color: 'white',
            _hover: {
                bg: 'white',
                color: '#5267de',
                border: '1px solid',
                borderColor: '#5267de'
            }
        },
        ButtonFooter: {
            bg: 'transparent',
            color: 'white',
            _hover: {
                bg: 'transparent',
                color: 'button.primary'
            }
        }
    },
    // default values for `size` and `variant`
    defaultProps: {},
}