import React, { useState } from "react";
import cb from "../assets/cb.jpg";
import asake from "../assets/asake.jpg";
import kendrick from "../assets/kendrick.jpg";
import ruger from "../assets/ruger.jpg";
import drake from "../assets/drake.jpg";
import burna from "../assets/burna.jpg";
import davido from "../assets/dvd.jpg";
import rema from "../assets/rema.jpg";
import victony from "../assets/victony.jpg";
import billie from "../assets/billie.jpg";
import ayra from "../assets/ayra.jpg";
import gnx from "../assets/gnx.jpg";
import murayo from "../assets/murayo.jpg";
import soft from "../assets/soft.jpg";
import one from "../assets/one.jpg";
import ten from "../assets/ten.jpg";
import year from "../assets/year.jpg";

const Body = () => {
  const [showAllArtists, setShowAllArtists] = useState(false);

  const Albums = [
    {
      name: "GNX",
      image: gnx,
      artist: "Kendrick Lamar",
    },
    {
      name: "Murayo",
      image: murayo,
      artist: "Wizkid",
    },
    {
      name: "Hit Me Hard and Soft",
      image: soft,
      artist: "Billie Eilish",
    },
    {
      name: "10 Hours of Continuous",
      image: ten,
      artist: "White Noise",
    },
    {
      name: "One of Wun",
      image: one,
      artist: "Gunna",
    },
    {
      name: "A Year I Turned 21",
      image: year,
      artist: "Ayra Starr",
    },
  ];

  const artists = [
    {
      name: "Chris Brown",
      image: cb,
      role: "artist",
    },
    {
      name: "Asake",
      image: asake,
      role: "artist",
    },
    {
      name: "Kendrick Lamar",
      image: kendrick,
      role: "artist",
    },
    {
      name: "Ruger",
      image: ruger,
      role: "artist",
    },
    {
      name: "Drake",
      image: drake,
      role: "artist",
    },
    {
      name: "Burna Boy",
      image: burna,
      role: "artist",
    },
    {
      name: "Davido",
      image: davido,
      role: "artist",
    },
    {
      name: "Victony",
      image: victony,
      role: "artist",
    },
    {
      name: "Rema",
      image: rema,
      role: "artist",
    },
    {
      name: "Billie",
      image: billie,
      role: "artist",
    },
    {
      name: "Ayra",
      image: ayra,
      role: "artist",
    },
  ];

  return (
    <div className="bg-[#27272a] w-full h-[100vh] p-5 rounded-lg overflow-y-auto">
      {/* Sticky Header for Popular Artists */}
      <div className="sticky top-0 z-10 bg-[#27272a] p-5">
        <div className="flex flex-row gap-2 items-center justify-between">
          <h1 className="text-white text-4xl font-bold">
            {showAllArtists ? "All Artists" : "Popular Artists"}
          </h1>
          <h1
            onClick={() => setShowAllArtists(!showAllArtists)}
            className="text-gray-400 text-xl font-bold cursor-pointer hover:text-white transition"
          >
            {showAllArtists ? "Back" : "Show All"}
          </h1>
        </div>
      </div>

      {/* Artists List */}
      <div className="flex flex-row gap-4 items-center justify-start mt-5 overflow-x-auto scrollbar-hide">
        {artists.slice(0, showAllArtists ? artists.length : 6).map((artist, index) => (
          <div
            key={index}
            className="group relative flex-shrink-0 flex flex-col items-center rounded-lg overflow-hidden transition-all"
          >
            {/* Background Hover Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#1e1e20] to-[#2d2d31] opacity-0 group-hover:opacity-100 transition-opacity z-0 rounded-lg"></div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Artist Image */}
              <div className="relative w-40 h-40">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform rounded-lg sm:rounded-full"
                />
                <div className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <img src="/play.svg" alt="Play Icon" className="w-6 h-6" />
                </div>
              </div>

              {/* Artist Name and Role */}
              <div className="mt-3 text-center flex flex-col items-start">
                <h1 className="text-white text-2xl font-semibold">{artist.name}</h1>
                <p className="text-gray-400 text-lg font-medium">{artist.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Albums and Singles Section */}
      {!showAllArtists && (
        <>
          <div className="flex flex-row gap-2 items-center justify-between mt-10">
            <h1 className="text-white text-4xl font-bold">
              Popular Albums And Singles
            </h1>
          </div>

          <div className="flex flex-row gap-10 items-center justify-start mt-5 overflow-x-auto scrollbar-hide">
            {Albums.map((album, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 flex flex-col items-center rounded-lg overflow-hidden transition-all"
              >
                <div className="relative w-52 h-52">
                  <img
                    src={album.image}
                    alt={album.name}
                    className="w-full h-full rounded-lg object-cover transition-transform"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h1 className="text-white text-xl font-semibold">
                    {album.name}
                  </h1>
                  <p className="text-gray-400 text-lg font-medium">
                    {album.artist}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
