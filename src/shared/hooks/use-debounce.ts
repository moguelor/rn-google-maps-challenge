import { useCallback, useEffect } from 'react';

interface DebounceProps {
    effect: Function;
    dependencies?: string[];
    delay?: number;
}

/** Hook to activate a debounce function in a determined time. */
const useDebounce = ({
    effect,
    dependencies = [],
    delay = 500,
}: DebounceProps) => {
    /**
     * Is not necessary to add the dependency "effect", because is causing a
     * infinite loop
     */
    // eslint-disable-next-line
    const callback = useCallback(effect, dependencies);

    useEffect(() => {
        const timeout = setTimeout(callback, delay);
        return () => clearTimeout(timeout);
    }, [callback, delay]);
};

export default useDebounce;
