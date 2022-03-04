import { Stack, Image, Menu, MenuButton, MenuItem, MenuList, IconButton, MenuDivider, Center, Box } from "@chakra-ui/react";
import { useState } from "react";
import hamburger from '../../assets/icons/icon-hamburger.svg';
import logo from '../../assets/logos/logo-bookmark-white.svg';
import close from '../../assets/icons/icon-close.svg';

export const MenuHamburger = () => {

    return (
        <Box>
            <Menu>
                {
                    ({ isOpen }) => (
                        <Stack>
                            <MenuButton
                                aria-label='Options'
                                bg={'white'}
                            >
                                {isOpen ?
                                    (<Image src={close} />)
                                    :
                                    (<Image src={hamburger} />)}
                            </MenuButton>
                            <MenuList
                                bg={'#2f354f'}
                                color={'white'}
                                w={'100vw'}
                                top={'0.5'}
                            >
                                <Image src={logo} padding={'6% 5% 6% 5%'} />
                                <MenuDivider />

                                <MenuItem>
                                    FEATURES
                                </MenuItem>

                                <MenuDivider />

                                <MenuItem >
                                    PRICING
                                </MenuItem>

                                <MenuDivider />

                                <MenuItem >
                                    CONTACT
                                </MenuItem>

                                <MenuDivider />

                                <MenuItem >
                                    LOGIN
                                </MenuItem>

                            </MenuList>
                        </Stack>
                    )
                }
            </Menu>
        </Box >
    )
}