import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef } from 'react';
import { LayoutChangeEvent, StyleSheet, TextInput, View } from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useDerivedValue,
    withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimationDuration } from '../types';
import ButtonIcon from './button-icon';

interface HeaderProps {
    onInputFocus: () => void;
    onPressBack: () => void;
    onPressClear: () => void;
    setHeaderHeight: (value: number) => void;
    onInputChange: (value: string) => void;
    query: string;
    isOpenOverlay: boolean;
}

const Header = ({
    onInputFocus,
    onPressBack,
    onPressClear,
    onInputChange,
    setHeaderHeight,
    isOpenOverlay,
    query,
}: HeaderProps) => {
    const { top } = useSafeAreaInsets();
    const inputRef = useRef<TextInput>(null);

    const handleBackButton = () => {
        onPressBack();
        inputRef.current?.blur();
    };

    const handleClearButton = () => {
        onPressClear();
    };

    const animationProgress = useDerivedValue(() =>
        withTiming(isOpenOverlay ? 1 : 0, {
            duration: AnimationDuration.normal,
        }),
    );

    const headerStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            animationProgress.value,
            [0, 1],
            ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
        ),
    }));

    return (
        <Animated.View
            onLayout={(e: LayoutChangeEvent) => {
                setHeaderHeight(e.nativeEvent.layout.height);
            }}
            style={[
                styles.header,
                headerStyle,
                {
                    paddingTop: top + 10,
                },
            ]}>
            <View style={styles.inputWrapper}>
                {isOpenOverlay && (
                    <ButtonIcon onPress={handleBackButton}>
                        <Ionicons name="chevron-back" size={30} color="#000" />
                    </ButtonIcon>
                )}

                <TextInput
                    ref={inputRef}
                    value={query}
                    onChangeText={onInputChange}
                    onFocus={() => {
                        onInputFocus();
                    }}
                    style={styles.input}
                    placeholder={'Type to search a place...'}
                />

                {query && (
                    <ButtonIcon onPress={handleClearButton}>
                        <Ionicons name="close-sharp" size={30} color="#000" />
                    </ButtonIcon>
                )}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        backgroundColor: '#FFF',
        zIndex: 10,
        top: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        paddingBottom: 10,
    },
    inputWrapper: {
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderColor: 'lightgray',
        borderWidth: 1,
        overflow: 'hidden',
        paddingHorizontal: 10,
    },
    input: {
        paddingVertical: 10,
        fontSize: 18,
        marginLeft: 10,
        flex: 1,
        fontWeight: '300',
        width: '100%',
    },
});

export default Header;
