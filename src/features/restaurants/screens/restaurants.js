import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utils/SafeArea";
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
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <RestaurantList
                data={[
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                    { name: 5 },
                ]}
                renderItem={() => <RestaurantInfoCard />}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};

export default RestaurantsScreen;
