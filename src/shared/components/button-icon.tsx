import { TouchableOpacity } from 'react-native';
import Animated, { FadeInLeft, FadeOutLeft } from 'react-native-reanimated';
import { AnimationDuration } from '../types';

const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

interface ButtonIconProps {
    children: React.ReactElement;
    onPress: () => void;
}

const ButtonIcon = ({ children, onPress }: ButtonIconProps) => {
    return (
        <AnimatedTouchableOpacity
            onPress={onPress}
            entering={FadeInLeft.duration(AnimationDuration.normal)}
            exiting={FadeOutLeft.duration(AnimationDuration.normal)}>
            {children}
        </AnimatedTouchableOpacity>
    );
};

export default ButtonIcon;
