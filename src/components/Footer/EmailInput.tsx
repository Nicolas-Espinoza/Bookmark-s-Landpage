import React, { useState } from 'react';

import validator from 'validator';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Center,
    VStack,
    HStack,
    useMediaQuery,
    Stack,
    Text,
    Box
} from '@chakra-ui/react'

export const EmailInput = () => {

    const [input, setInput] = useState<string>('');
    const [isError, setError] = useState<boolean>(false);
    const [firstTime, setFirsTime] = useState<boolean>(true);
    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    const handleInputChange = (e: any) => {
        setInput(e.target.value);
    }

    const handleError = () => {
        setError(validator.isEmail(input));
        setFirsTime(false);
    }

    return (
        <Stack style={{ margin: '10px 10px 10px 10px' }}
            direction={isSmallScreen ? 'row' : 'column'}
        >
            <Stack direction={isSmallScreen ? 'column' : 'row'}>
                <VStack
                >
                    <FormControl
                        isInvalid={!isError}
                    >
                        <Input
                            id='email'
                            type='email'
                            value={input}
                            onChange={handleInputChange}
                            placeholder='Enter your email address'
                            bg={'white'}
                            color={'black'}
                            w={'100%'}
                            paddingLeft={isSmallScreen ? '5' : '5'}
                        />
                        <Stack textAlign={'center'}>
                            {
                                (!isError && !firstTime) && (
                                    <FormHelperText bgColor={'button.primary'} color={'white'} style={{
                                        margin: '0',
                                        padding: '0',
                                    }}>
                                        Whoops, make sure it's an email!
                                    </FormHelperText>
                                )
                            }
                        </Stack>
                    </FormControl>
                </VStack>

                <Box
                    w={isSmallScreen ? '100%' : '1'}
                >
                    <Button
                        variant={'ButtonLogin'}
                        onClick={handleError}
                        w={isSmallScreen ? '100%' : ''}

                    >
                        Contact Us
                    </Button>
                </Box>

            </Stack>

        </Stack>
    )
}