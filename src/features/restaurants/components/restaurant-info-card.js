import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

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
        <Card style={styles.card} elevation={5}>
            <Card.Cover
                key={name}
                style={styles.cover}
                source={{ uri: photos[0] }}
            />
            <Text style={styles.title}>{name}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 20, backgroundColor: "white" },
    title: { padding: 16 },
});

export default RestaurantInfoCard;
