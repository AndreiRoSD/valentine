import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
    const images = [
  "IMG_2445.jpeg",
  "IMG_2428.jpeg",
  "IMG_2444.jpeg",
  "IMG_2430.jpeg",
  "IMG_2447.jpeg",
  "IMG_2450.jpeg",
  "IMG_2449.jpeg",
  "IMG_2446.jpeg",
  "IMG_2460.jpeg",
  "IMG_2455.jpeg",
  "IMG_2457.jpeg",
  "IMG_2461.jpeg",
  "IMG_2462.jpeg",
  // Adaugă aici restul pozelor tale între ghilimele și cu virgulă
];
  const getNoButtonText = () => {
    const phrases = [
      "Nu",
      "Esti sigură?",
      "Chiar ești sigură?",
      "Mai gândeștete!",
      "Ultima șansă!",
      "Sigur nu?",
      "Poate vei regreta!",
      "Mai oferăi încă un gând!",
      "Ești absolut sigură?",
      "Ar putea fi o greșală!",
      "Aiii inimaaa!",
      "Nu fii assaa reecee!",
      "Tot nu?",
      "Poți sa iei in considerare??",
      "Asta este raspunsul tau final??",
      "Imi distrugii inimaa ;(",
      "Asta este raspunsul tau final??",
      "Imi frangi inimaaa ;(",
      "Teee rooooggg <3",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="IMG_2429.jpeg" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Yeeeeeyyyyy muuultumessccc❤️‍🔥❤️‍🔥
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img className="h-[230px] rounded-lg shadow-lg"
            src={images[Math.min(noCount, images.length - 1)]} />

          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Vrei sa fii al meu Valentine?🫶🏽❤️‍🔥
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Daa
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
