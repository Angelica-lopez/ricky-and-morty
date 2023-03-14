export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const baseApiUrl = "https://rickandmortyapi.com/api";
  const characterUrl = `${baseApiUrl}/character/${id}`;
  const characterRes = await fetch(characterUrl);
  const character = await characterRes.json();
  const episodesIds = character?.episode
    .slice(0, 4)
    .map((episodeUrl) => episodeUrl.split("/").pop());

  const episodesRes = await fetch(
    `${baseApiUrl}/episode/${episodesIds.join(",")}`
  );
  const episodes = await episodesRes.json();

  return {
    props: {
      ...character,
      episodes: episodes?.length > 1 ? episodes : [episodes],
    },
  };
};

export { default } from "./Character";
