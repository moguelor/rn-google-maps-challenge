import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { AnimationDuration, GooglePlaceItem, MarkerItem } from '../types';
import { getKeyExtractor } from '../utils';
import PlaceItem from './place-item';

interface OverlayProps {
    isOpen: boolean;
    places: GooglePlaceItem[];
    onPressItem: (customMarker: MarkerItem) => void;
    headerHeight: number;
    error: unknown;
    isFetching: boolean;
}

const Overlay = ({
    isOpen,
    places,
    onPressItem,
    headerHeight,
    error,
    isFetching,
}: OverlayProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Animated.View
            style={[
                StyleSheet.absoluteFill,
                styles.list,
                { paddingTop: headerHeight + 10 },
            ]}>
            {isFetching ? (
                <ActivityIndicator size="large" />
            ) : error ? (
                <Text style={styles.error}> {error as string} </Text>
            ) : places.length === 0 ? (
                <Text style={styles.noRows}> Nothing to show... </Text>
            ) : (
                <Animated.FlatList<GooglePlaceItem>
                    entering={FadeIn.duration(AnimationDuration.slow)}
                    exiting={FadeOut.duration(AnimationDuration.slow)}
                    renderItem={({ item }) => {
                        return (
                            <PlaceItem {...item} onPressItem={onPressItem} />
                        );
                    }}
                    keyExtractor={getKeyExtractor}
                    data={places}
                />
            )}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        zIndex: 9,
    },
    noRows: {
        textAlign: 'center',
        fontSize: 18,
    },
    error: {
        color: 'red',
    },
});

export default Overlay;
