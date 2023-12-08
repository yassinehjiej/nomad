
import React, { useEffect, useState } from "react";
import RootNavigator from "./navigation/RootNavigator";
import FadeInView from "./components/Shared/FadeInView";
import SplashScreenComponent from "./screens/Splash";
import { loadFonts } from "./utils/fontLoader";
import { Provider, useDispatch } from "react-redux";
import { LogBox } from 'react-native';

import { store } from "./redux/store";
import { clearAll, retrieveData } from "./utils/storage";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import OnBoardingProcessScreen from "./screens/OnBoardingProcessScreen";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();
  const [appIsReady, setAppIsReady] = useState(false);
  const [rules, setRules] = useState(false);
  const [passedOnboarding, setPassedOnboarding] = useState(false);
  LogBox.ignoreAllLogs();

  clearAll();
  const onAppReady = async () => {
    loadFonts().then(() => {
      setAppIsReady(true);
    });
  };
  const handleOnboarding = () => {
    // retrieveData("user").then((res) => {
    //   setPassedOnboarding(res !== null);
    // });
    setPassedOnboarding(true);
  };

  useEffect(() => {
    if (!passedOnboarding)
      retrieveData("user").then((res) => {
        setPassedOnboarding(res !== null);
      });
  
  }, [passedOnboarding]);

 

  return (
    <Provider store={store}>
      <FadeInView style={{ flex: 1 }}>
        {!appIsReady && <SplashScreenComponent onAppReady={onAppReady} />}
        {!passedOnboarding && appIsReady && !rules && (
          <OnBoardingProcessScreen setRules={setRules} />
        )}
        {!passedOnboarding && appIsReady && rules && (
          <OnBoardingScreen handleOnboarding={handleOnboarding} />
        )}
        {appIsReady && passedOnboarding && (
          <QueryClientProvider client={queryClient}>
            <RootNavigator />
          </QueryClientProvider>
        )}
      </FadeInView>
    </Provider>
  );
}


