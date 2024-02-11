import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants";
import { theme } from "./src/infrastructure/theme";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];

    return {
        tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
    };
};

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
                <LocationContextProvider>
                    <RestaurantsContextProvider>
                        <NavigationContainer>
                            <Tab.Navigator screenOptions={createScreenOptions}>
                                <Tab.Screen
                                    name="Restaurants"
                                    component={RestaurantsScreen}
                                />
                                <Tab.Screen
                                    name="Map"
                                    component={RestaurantsScreen}
                                />
                                <Tab.Screen
                                    name="Settings"
                                    component={RestaurantsScreen}
                                />
                            </Tab.Navigator>
                        </NavigationContainer>
                    </RestaurantsContextProvider>
                </LocationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}
