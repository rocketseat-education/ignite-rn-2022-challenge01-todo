import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar 
        translucent 
        backgroundColor="transparent" 
        style="light" 
      />
      <Home />
    </>
  )
}