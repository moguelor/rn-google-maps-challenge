import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Geocoder from 'react-native-geocoding';
import { GooglePlaceItem, MarkerItem } from '../types';

const PlaceItem = ({
    description,
    onPressItem,
}: GooglePlaceItem & {
    onPressItem: (customMarker: MarkerItem, description: string) => void;
}) => {
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
                Geocoder.from(description).then((response) => {
                    onPressItem(
                        {
                            latitude: response.results[0].geometry.location.lat,
                            longitude:
                                response.results[0].geometry.location.lng,
                        },
                        description,
                    );
                });
            }}>
            <View style={styles.icon}>
                <Ionicons name={'location-sharp'} size={20} />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text numberOfLines={1} style={styles.subTitle}>
                        {description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
    },
    icon: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
    },
    contentContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    content: {
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    title: { flex: 1, fontSize: 16, lineHeight: 24 },
    subTitle: { flex: 1, fontSize: 14, color: 'gray', lineHeight: 20 },
});

export default PlaceItem;
