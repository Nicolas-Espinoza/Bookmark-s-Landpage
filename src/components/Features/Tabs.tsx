import { Stack, Tab, TabList, Tabs as ContainerTabs, TabPanel, TabPanels, useMediaQuery } from "@chakra-ui/react";
import { TabsContent } from "./TabsContent";
import { text2, title2, text1, title1, text3, title3 } from './TextAndTitles';

import imagen1 from '../../assets/illustrations/tab1.svg';
import imagen2 from '../../assets/illustrations/tab2.svg';
import imagen3 from '../../assets/illustrations/tab3.svg';

export const Tabs = () => {

    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    return (
        <Stack
            w={'100%'}
        >
            <ContainerTabs>
                <TabList
                    flexDirection={isSmallScreen ? 'column' : 'row'}
                    justifyContent={'center'}
                >
                    <Tab
                        _selected={{
                            borderBottom: '1px solid',
                            borderColor: 'button.primary'
                        }}
                        w={isSmallScreen ? '' : '60'}
                        fontSize={isSmallScreen ? '' : 'lg'}
                    >
                        Simple Bookmarking
                    </Tab>

                    <Tab
                        _selected={{
                            borderBottom: '1px solid',
                            borderColor: 'button.primary'
                        }}
                        w={isSmallScreen ? '' : '60'}
                        fontSize={isSmallScreen ? '' : 'lg'}
                    >
                        Speedy Searching
                    </Tab>

                    <Tab
                        _selected={{
                            borderBottom: '1px solid',
                            borderColor: 'button.primary'
                        }}
                        w={isSmallScreen ? '100%' : '60'}
                        fontSize={isSmallScreen ? '' : 'lg'}
                    >
                        Easy Sharing
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel
                        p={isSmallScreen ? '6% 0 0 0' : '0px 0xp 0px 0px'}
                    >
                        <TabsContent title={title1} textBody={text1} image={imagen1} />
                    </TabPanel>

                    <TabPanel
                        p={isSmallScreen ? '6% 0 0 0' : '0px 0xp 0px 0px'}
                    >
                        <TabsContent title={title2} textBody={text2} image={imagen2} />
                    </TabPanel>

                    <TabPanel
                        p={isSmallScreen ? '6% 0 0 0' : '0px 0xp 0px 0px'}
                    >
                        <TabsContent title={title3} textBody={text3} image={imagen3} />
                    </TabPanel>

                </TabPanels>
            </ContainerTabs>
        </Stack >
    )
}