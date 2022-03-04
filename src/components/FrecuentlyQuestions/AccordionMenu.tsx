import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Center, Flex, useMediaQuery, Stack } from '@chakra-ui/react';
import './Styles.css'


export const AccordionMenu = () => {

    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    return (
        <Accordion allowToggle>
            <AccordionItem

            >
                <h2>
                    <AccordionButton
                        w={isSmallScreen ? '100%' : '3xl'}
                        h={isSmallScreen ? '12' : '4rem'}
                        _expanded={{
                            color: 'button.primary',
                            border: '0px 0px 0px 0px'
                        }}
                    >
                        <Box
                            flex={1}
                            textAlign='left'
                        >
                            What is Bookmark?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel
                    pb={4}
                    w={isSmallScreen ? 'xs' : '3xl'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton
                        w={isSmallScreen ? '100%' : '3xl'}
                        h={isSmallScreen ? '12' : '4rem'}
                        _expanded={{
                            color: 'button.primary',
                            border: '0px 0px 0px 0px'
                        }}
                    >
                        <Box flex='1' textAlign='left'>
                            How can I request a new browser?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel
                    pb={4}
                    w={isSmallScreen ? 'xs' : '3xl'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton
                        w={isSmallScreen ? '100%' : '3xl'}
                        h={isSmallScreen ? '12' : '4rem'}
                        _expanded={{
                            color: 'button.primary',
                            border: '0px 0px 0px 0px'
                        }}
                    >
                        <Box flex='1' textAlign='left'>
                            Is there a mobile app?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel
                    pb={4}
                    w={isSmallScreen ? 'xs' : '3xl'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton
                        w={isSmallScreen ? '100%' : '3xl'}
                        h={isSmallScreen ? '12' : '4rem'}
                        _expanded={{
                            color: 'button.primary',
                        }}
                    >
                        <Box flex={1} textAlign='left'>
                            What about other Chromium browsers?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel
                    pb={4}
                    w={isSmallScreen ? 'xs' : '3xl'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}