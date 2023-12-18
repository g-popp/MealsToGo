import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants";
import { theme } from "./src/infrastructure/theme";

export default function App() {
    const [oswaldLoaded] = useFonts({
        Oswald_400Regular,
    });

    const [latoLoaded] = useFonts({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantsScreen />
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}
