import { DownloadCard } from './DowloadCard';
import { data } from './data';
import { Heading, Text, useMediaQuery, Stack } from "@chakra-ui/react";

export const DownloadBody = () => {

    const [isSmallScreen] = useMediaQuery('(max-width:600px)');

    return (
        <Stack
            w={'100%'}
            alignItems={'center'}
            justifyItems={'center'}
        >
            <Heading
                size={isSmallScreen ? 'lg' : '2xl'}
                marginTop={isSmallScreen ? '16' : '20'}
            >
                Download the extension
            </Heading>
            <Stack
                textAlign={'center'}
                alignItems={'center'}
            >
                <Text
                    marginBottom={isSmallScreen ? '8' : '14'}
                    w={isSmallScreen ? '' : '50%'}
                    fontSize={isSmallScreen ? 'md' : 'xl'}
                >
                    We've got more browsers in the pipeline. Please do let us know if
                    you've got a favourite you'd like us to prioritize.
                </Text>
            </Stack>
            <Stack
                direction={isSmallScreen ? 'column' : 'row'}
                justifyContent={isSmallScreen ? 'center' : 'space-between'}
                w={isSmallScreen ? '100%' : '70%'}
            >
                {data.map((item, index) => {
                    return (
                        <Stack paddingTop={isSmallScreen ? '0px' : (index * 12)} key={index}>
                            <DownloadCard
                                image={item.image}
                                title={item.title}
                                subtitle={item.subtitle}
                                key={item.title}
                            />
                        </Stack>
                    )
                })}
            </Stack>
        </Stack>
    )
}