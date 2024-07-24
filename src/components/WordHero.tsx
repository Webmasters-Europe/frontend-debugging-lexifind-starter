import React, { useRef } from 'react';
import { Phonetic } from '../lib/datatypes';

interface WordHeroProps {
  data: {
    word: string;
    phonetics: Phonetic[];
  };
}

const WordHero: React.FC<WordHeroProps> = ({ data }) => {
  const { word, phonetics } = data;

  const americanEnglishPhonetic = phonetics.find((phonetic) =>
    phonetic.audio?.includes('-us')
  );
  const finalPhonetic = americanEnglishPhonetic || phonetics[0];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="wordhero-wrapper">
      <div className="wordhero-word-container">
        <h1 className="wordhero-word">{word}</h1>
        {finalPhonetic?.text && (
          <p className="wordhero-word-phonetic">{finalPhonetic.text}</p>
        )}
      </div>

      {finalPhonetic?.audio && (
        <div>
          <button onClick={playAudio} className="wordhero-play-btn">
            <PlayIcon className="wordhero-play-icon" aria-hidden="true" />
          </button>
          <audio ref={audioRef} src={finalPhonetic.audio}></audio>
        </div>
      )}
    </div>
  );
};

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
    </svg>
  );
}

export default WordHero;
