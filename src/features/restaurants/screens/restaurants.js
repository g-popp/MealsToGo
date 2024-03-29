import { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utils/SafeArea";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import RestaurantInfoCard from "../components/restaurant-info-card";
import { Search } from "../components/search";

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    return (
        <SafeArea>
            <Search />
            {!isLoading ? (
                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) => (
                        <RestaurantInfoCard restaurant={item} />
                    )}
                    keyExtractor={(item) => item.name}
                />
            ) : (
                <LoadingContainer>
                    <Loading size="large" color="tomato" />
                </LoadingContainer>
            )}
        </SafeArea>
    );
};

export default RestaurantsScreen;
