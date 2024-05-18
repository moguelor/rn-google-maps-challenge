import { useState } from 'react';
import { ApiKeys, GooglePlaceItem } from '../types';
import useDebounce from './use-debounce';

interface Options {
    query: string;
    delay?: number;
    minCharsBeforeFire?: number;
}

const useResourcePlaces = ({
    query,
    delay = 500,
    minCharsBeforeFire = 3,
}: Options) => {
    const [places, setPlaces] = useState<GooglePlaceItem[]>([]);
    const [isFetching, setIsFeching] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const fetchPlaces = async (query: string) => {
        if (query.length < minCharsBeforeFire) {
            setPlaces([]);
            return;
        }

        try {
            setIsFeching(true);
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${ApiKeys.googleMaps}&input=${query}&libraries=places`,
            );
            const data = await response.json();
            setIsFeching(false);
            setPlaces(data.predictions);
        } catch (error) {
            setError(error);
        }
    };

    useDebounce({
        effect: () => {
            fetchPlaces(query);
        },
        dependencies: [query],
        delay,
    });

    return [places, isFetching, error] as const;
};

export default useResourcePlaces;
