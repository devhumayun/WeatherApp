const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Cumilla",
    latitude: 23.450001,
    longitude: 91.199997,
  },
  {
    location: "RangPur",
    latitude: 25.74486,
    longitude: 89.275589,
  },
  {
    location: "Chuadanga",
    latitude: 23.643999,
    longitude: 88.855637,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!Location) return null;

  const location_filtered = data.filter((item) => item.location === location);
  if (location_filtered.length > 0) {
    return location_filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };

    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
