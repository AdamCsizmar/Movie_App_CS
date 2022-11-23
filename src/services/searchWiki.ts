import network from "./network";

const fetchWiki = async (title: string) => {
  const wikiData = await fetch(network.wiki_search_URL + title)
    .then((res) => res.json())
    .then((data) => {
      const id = data.query.pageids[0];
      const description =
        data.query.pageids[0] === "-1"
          ? "Sorry, no description found"
          : (data.query.pages[id]?.extract).slice(0, 700);

      return { id, description };
    })
    .catch((err) => {
      console.error(err);
    });
  return wikiData;
};
export default fetchWiki;
