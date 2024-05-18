import { DEFAULT_LOCATION, getKeyExtractor } from '../../shared/utils';

it('The function "getKeyExtractor()" should extract the key correctly from a item given', () => {
    expect(
        getKeyExtractor({
            description: 'My description',
            place_id: 'new-place-id',
        }),
    ).toBe('new-place-id');
});

it('The constant DEFAULT_LOCATION should have the latitude and longitude default values.', () => {
    expect(DEFAULT_LOCATION.latitude).not.toBe(null);
    expect(DEFAULT_LOCATION.longitude).not.toBe(null);
});
