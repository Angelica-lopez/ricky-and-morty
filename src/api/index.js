const BASE_API_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (filters) => {
  const characterRes = await fetch(
    `${BASE_API_URL}/character${filters || ""} `
  );
  return characterRes.json();
};

export const getCharacterById = async (id) => {
  const characterRes = await fetch(`${BASE_API_URL}/character/${id}`);
  return characterRes.json();
};

export const getEpisodesByIds = async (episodesIds) => {
  const episodesRes = await fetch(
    `${BASE_API_URL}/episode/${episodesIds.join(",")}`
  );
  return episodesRes.json();
};
