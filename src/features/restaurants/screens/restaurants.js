import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card";

const RestaurantsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar placeholder="Search" />
            </View>
            <View style={styles.list}>
                <RestaurantInfoCard />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    search: {
        padding: 16,
    },
    list: {
        flex: 1,
        padding: 16,
    },
});

export default RestaurantsScreen;