import { SafeAreaView } from "react-native";
import { targetStyles } from "../styles/Target";
import Header from "../components/Target/Header";
import Body from "../components/Target/Body";

export default function Target() {
  return (
    <SafeAreaView style={targetStyles.container}>
      <Header/>
      <Body/>
    </SafeAreaView>
  );
}
