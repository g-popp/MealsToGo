import { Text } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";

import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space.md};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space.md};
    gap: ${(props) => props.theme.space.sm};
`;

const Row = styled.View`
    flex-direction: row;
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
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
        rating = 4.5,
        isClosedTemporarily = false,
        placeId = "1f4d3s2a",
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Row>
                    {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                    ))}
                </Row>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;
