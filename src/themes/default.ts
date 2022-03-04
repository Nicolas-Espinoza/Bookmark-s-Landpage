import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from './variants';

export default extendTheme({
    colors: {
        button: {
            primary: '#fb5859'
        }
    },
    components: {
        Button,
    },
    styles: {
        global: {
            '*': {
                padding: '0px 0px 0px 0px',
                margin: '0px 0px 0px 0px'
            },
        }
    }
});