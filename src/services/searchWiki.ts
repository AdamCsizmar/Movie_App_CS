import network from "./network";

const fetchWiki = async (title: string, date: string) => {
    const wikiData = await fetch(network.wiki_search_URL + title /* + `_(${date}_film)` */)
      .then((res) => res.json())
      .then((data) => {
        console.log(network.wiki_search_URL + title  + `_(${date}_film)`);
        const id = data.query.pageids[0];
        const description = data.query.pages[id].extract;
        
        return {id, description};
      })
      .catch((err) => {
        console.error(err);
      });
    return wikiData;
  };
export default fetchWiki;