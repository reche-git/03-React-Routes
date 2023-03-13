import { useEffect, useState } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../pages/Error404";
import SongPage from "../pages/SongPage";
import { Loader } from "./Loader";
import { SongDetails } from "./SongDetails";
import { SongForm } from "./SongForm";
import SongTable from "./SongTable";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://private-anon-f353344c1f-lyricsovh.apiary-mock.com/v1/${artist}/${song}`;

      // console.log(artistUrl);
      // console.log(songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      // console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  const handleSaveSong = () => {
    alert("Saving song in favuorites");
    let currentSong = {
      search,
      lyric,
      bio,
    };
    let songs = [...mySongs, currentSong];

    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };

  const handleDeleteSong = (id) => {
    // alert(`Delete song with id: ${id}?`);
    let isDelete = window.confirm(`delete song with id: ${id}?`);

    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };

  return (
    <div>
      <HashRouter basename="songs">
        <header>
          <h2>Song Search</h2>
          <Link to="/">Home</Link>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Switch>
            <Route exact path="/">
              <SongForm
                handleSearch={handleSearch}
                handleSaveSong={handleSaveSong}
              />
              <SongTable
                mySongs={mySongs}
                handleDeleteSong={handleDeleteSong}
              />
              {search && !loading && (
                <SongDetails search={search} lyric={lyric} bio={bio} />
              )}
            </Route>
            <Route
              exact
              path="/:id"
              children={<SongPage mySongs={mySongs} />}
            />
            <Route path="*" children={Error404} />
          </Switch>
        </article>
      </HashRouter>
    </div>
  );
};
