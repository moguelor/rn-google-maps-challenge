type Place = {
  address: string;
  shortAddress: string;
  placeId: string;
  location: { lat: number; lng: number };
};

enum AnimationDuration {
  fast = 100,
  normal = 200,
  slow = 300,
}

enum ApiKeys {
  googleMaps = "AIzaSyCOSoK5YzHP4xDwO6TbMuk8FfK4sVojh3Q",
}

export { Place, AnimationDuration, ApiKeys };
