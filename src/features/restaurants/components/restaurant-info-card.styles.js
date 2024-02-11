import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space.md};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space.md};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space.md};
    gap: ${(props) => props.theme.space.sm};
`;

export const Rating = styled.View`
    flex-direction: row;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Icon = styled.Image`
    width: 15px;
    height: 15px;
`;
