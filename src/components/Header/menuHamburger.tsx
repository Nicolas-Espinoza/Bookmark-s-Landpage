import { Image, Menu, MenuButton, MenuList, HStack, Img, VStack, Stack, Button } from "@chakra-ui/react";
import hamburger from '../../assets/icons/icon-hamburger.svg';
import close from '../../assets/icons/icon-close.svg';
import logoWhite from '../../assets/logos/logo-bookmark-white.svg';
import logo from '../../assets/logos/logo-bookmark.svg';
import { Separador } from './Separador';

import fblogo from '../../assets/icons/icon-facebook.svg';
import twlogo from '../../assets/icons/icon-twitter.svg';

export const MenuHamburger = () => {


    return (
        <Menu>
            {
                ({ isOpen }) => (
                    <HStack
                        w={'100%'}
                        justifyContent={'space-between'}
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            padding: '10px 10px 10px 10px',
                        }}
                        h={'14'}
                        bg={isOpen ? 'rgba(47,53,79,0.95)' : 'white'}
                    >
                        <Img src={isOpen ? logoWhite : logo} w={'48'} />
                        <MenuButton
                            aria-label='Options'
                            bg={'white'}
                        >
                            {isOpen ?
                                (<Image src={close} bg={'rgba(47,53,79,0.95)'} />)
                                :
                                (<Image src={hamburger} />)
                            }
                        </MenuButton>
                        <MenuList
                            bg={'rgba(47,53,79,0.95)'}
                            w={'100vw'}
                            color={'white'}
                            style={{
                                border: 'none',
                                borderRadius: '0px',
                                paddingTop: '20px',
                                marginTop: '12.4px',
                            }}
                        >

                            <Stack style={{
                                height: '100vh',
                                width: '100%',
                            }}>
                                <VStack
                                    style={{
                                        width: '100%',
                                        height: '50%',
                                        justifyContent: 'center',
                                        paddingTop: '40px'
                                    }}
                                >
                                    <Separador />
                                    <Stack style={{
                                        height: '25%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    >
                                        <Button variant={'unstyled'}>
                                            FEATURES
                                        </Button>
                                    </Stack>

                                    <Separador />

                                    <Stack style={{
                                        height: '25%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    >
                                        <Button variant={'unstyled'}>
                                            PRICING
                                        </Button>
                                    </Stack>

                                    <Separador />

                                    <Stack style={{
                                        height: '25%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    >
                                        <Button variant={'unstyled'}>
                                            CONTACT
                                        </Button>
                                    </Stack>


                                    <Separador />

                                    <Stack style={{
                                        height: '25%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '80%',
                                    }}
                                    >
                                        <Button variant={'unstyled'}
                                            style={{
                                                width: '100%',
                                                border: '2px solid white'
                                            }}
                                        >
                                            LOGIN
                                        </Button>
                                    </Stack>
                                </VStack>
                                <HStack style={{
                                    marginTop: '40%',
                                    justifyContent: 'center'
                                }}>
                                    <Button variant={'ButtonFooter'}>
                                        <Image src={fblogo} />
                                    </Button>

                                    <Button variant={'ButtonFooter'}>
                                        <Image src={twlogo} />
                                    </Button>
                                </HStack>
                            </Stack>
                        </MenuList>
                    </HStack>
                )
            }
        </Menu>
    )
}