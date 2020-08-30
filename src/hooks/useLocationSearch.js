import { useQuery } from "react-query";

export function useLocationSearch(locationName) {
  return useQuery(
    ["location", locationName],
    async () => {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationName}.json?access_token=pk.eyJ1IjoicmNoaW5lcm1hbiIsImEiOiJja2VnZzRvdTUwZ3ptMnR0aHg4NW5qajdzIn0.lKEeUsUAFB2yHUz4ONI5eA`
      );
      const data = await response.json();
      return data?.features.filter((feature) =>
        feature.place_type.includes("place")
      );
    },
    { cacheTime: Infinity, staleTime: Infinity }
  );
}
