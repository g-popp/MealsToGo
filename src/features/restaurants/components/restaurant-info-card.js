import { SvgXml } from "react-native-svg";

import Text from "../../../components/typography/Text";

import {
    Address,
    Icon,
    Info,
    Rating,
    RestaurantCard,
    RestaurantCardCover,
    Row,
} from "./restaurant-info-card.styles";

import open from "../../../../assets/open";
import star from "../../../../assets/star";

const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://media.istockphoto.com/id/1365312463/de/foto/modernes-cafe-restaurant-interieur-mit-gelbem-stuhl-gegen-fenster-mit-stadtblick.jpg?s=1024x1024&w=is&k=20&c=CW3l992sf0SxmlFroFhpqTp9csUDCFZOyTdhTF2xX5A=",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4.5,
        isClosedTemporarily = true,
        placeId = "1f4d3s2a",
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Row>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <>
                        {isClosedTemporarily && (
                            <Text variant="error">CLOSED TEMPORARILY</Text>
                        )}
                    </>
                    {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                    <>
                        <Icon source={{ uri: icon }} />
                    </>
                </Row>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;
