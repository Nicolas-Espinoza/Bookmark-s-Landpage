import { useMediaQuery, VStack, HStack } from '@chakra-ui/react';
import { Header } from './components/Header/HeaderBody';
import { CallToActionBody } from './components/CallToAction/CallToActionBody';
import { FeaturesBody } from './components/Features/FeaturesBody';
import { DownloadBody } from './components/DownloadExtension/DownloadBody';
import { FrecuentlyQuestion } from './components/FrecuentlyQuestions/FrecuentlyQuestionBody';
import { FooterBody } from './components/Footer/FooterBody';
import './App.css';

function App() {

  const [isSmallScreen] = useMediaQuery('(max-width:600px)')

  return (
    <VStack>
      <VStack
        paddingRight={isSmallScreen ? '6' : '10'}
        paddingLeft={isSmallScreen ? '6' : '36'}
      >
        <Header />
        <CallToActionBody />
        <FeaturesBody />
        <DownloadBody />
        <FrecuentlyQuestion />
      </VStack>
      <FooterBody />
    </VStack>
  );
}

export default App;
