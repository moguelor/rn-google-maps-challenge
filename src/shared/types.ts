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

export { Place, AnimationDuration };
