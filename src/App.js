import Avatar from "./components/Artist/Avatar";
import ArtistName from "./components/Artist/ArtistName";
import ArtistBirthDate from "./components/Artist/ArtistBirthDate";
import ArtistBio from "./components/Artist/ArtistBio";
import FacebookLink from "./components/Social/FacebookLink";
const App = () => {
  const bio = [
    { content: "Lorem ipsum dolor sit amet" },
    { content: "Coś jakby ukończył, ale nie wiadomo co." },
    { content: "Nic a nic tu nie ma" },
    { content: "W głowie pustka" },
  ];

  const rok = new Date(1980, 0, 15);

  return (
    <>
      <div className="bg-slate-800 text-slate-100">
        <h1>Artyści w moim mieście</h1>

        <div>
          <Avatar source="RoboHash.org" />
        </div>
        <div>
          <ArtistName firstname="Bill" lastname="Cosmita" />
        </div>
      </div>
      <div className="mt-2 mb-2">
        <ArtistBirthDate born={rok.getFullYear()} />
      </div>
      <div>
        <ArtistBio biografia={bio[1].content} />
      </div>
      <div className="flex justify-start items-center mt-2 mb-2">
        <h2 className="text-lg font-semibold">Social Links</h2>
        <div className="p-2">
          <FacebookLink />
        </div>
        <div className="p-2">Instagram</div>
        <div className="p-2">Behance</div>
        <div className="p-2">YouTube</div>
      </div>
    </>
  );
};

export default App;
