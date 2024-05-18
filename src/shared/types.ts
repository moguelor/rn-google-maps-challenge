enum ApiKeys {
  googleMaps = "AIzaSyCOSoK5YzHP4xDwO6TbMuk8FfK4sVojh3Q",
}

enum AnimationDuration {
  fast = 100,
  normal = 200,
  slow = 300,
}

type MarkerItem = {
  latitude: number;
  longitude: number;
};

type GooglePlaceItem = {
  place_id: string;
  description: string;
};

export { ApiKeys, MarkerItem, AnimationDuration, GooglePlaceItem };
