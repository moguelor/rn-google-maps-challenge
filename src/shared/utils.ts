import { Place } from "./types";

const getKeyExtractor = (item: Place) => item.placeId;

export { getKeyExtractor };
