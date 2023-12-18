import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
    background-color: white;
`;

const Title = styled.Text`
    padding: 16px;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://media.istockphoto.com/id/1365312463/de/foto/modernes-cafe-restaurant-interieur-mit-gelbem-stuhl-gegen-fenster-mit-stadtblick.jpg?s=1024x1024&w=is&k=20&c=CW3l992sf0SxmlFroFhpqTp9csUDCFZOyTdhTF2xX5A=",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = "4.5",
        isClosedTemporarily = false,
        placeId = "1f4d3s2a",
    } = restaurant;

    return (
        <RestaurantCard>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;
