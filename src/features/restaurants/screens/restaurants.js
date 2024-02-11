import { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utils/SafeArea";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import RestaurantInfoCard from "../components/restaurant-info-card";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space.md};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => (
                    <RestaurantInfoCard restaurant={item} />
                )}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};

export default RestaurantsScreen;
