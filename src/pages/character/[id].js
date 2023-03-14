import { getCharacterById, getEpisodesByIds } from "../../api";

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const character = await getCharacterById(id);
  const episodesIds = character?.episode
    .slice(0, 4)
    .map((episodeUrl) => episodeUrl.split("/").pop());

  const episodes = await getEpisodesByIds(episodesIds);

  return {
    props: {
      ...character,
      episodes: episodes?.length > 1 ? episodes : [episodes],
    },
  };
};

export { default } from "./Character";
