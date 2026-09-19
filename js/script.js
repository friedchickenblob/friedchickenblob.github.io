const LANGUAGE_FACTS = {
  thai: {
    name: "Thai",
    facts: [
      "Thai is a tonal language with five tones, and using the wrong tone can completely change a word's meaning.",
      "The Thai script has 44 consonants and no spaces between words within a sentence.",
    ],
  },
  vietnamese: {
    name: "Vietnamese",
    facts: [
      "Vietnamese is a tonal language with six tones, each changing the meaning of a word even when the letters stay the same.",
      "The modern Vietnamese alphabet, Chữ Quốc Ngữ, is based on the Latin script and was developed by a 17th-century Portuguese-French missionary.",
    ],
  },
  japanese: {
    name: "Japanese",
    facts: [
      "Japanese uses three writing systems together: hiragana, katakana, and kanji, often mixed within a single sentence.",
      'Japanese has no grammatical plural form for most nouns, so "本" (hon) can mean "book" or "books" depending on context.',
    ],
  },
  cantonese: {
    name: "Cantonese",
    facts: [
      "Cantonese has six to nine tones depending on how they're counted, making it one of the most tonal Chinese varieties.",
      "Cantonese preserves many features of Middle Chinese that Mandarin has lost, including final consonants like -p, -t, and -k.",
    ],
  },
  taiwanese: {
    name: "Taiwanese",
    facts: [
      "Taiwanese Hokkien is spoken natively by a majority of Taiwan's population and has its own set of romanization systems, including Tâi-lô and Pe̍h-ōe-jī.",
      "Taiwanese preserves eight tones from Middle Chinese, more than Mandarin's four, and features extensive tone sandhi where a word's tone shifts based on what follows it.",
    ],
  },
  singaporean: {
    name: "Singaporean",
    facts: [
      "Singapore has four official languages. They are English, Mandarin, Malay, and Tamil, making it one of the most linguistically diverse countries in the world.",
      'Many Singaporeans speak Singlish, an English-based creole that blends vocabulary and grammar from Hokkien, Malay, Tamil, and Cantonese.',
    ],
  },
  mandarin: {
    name: "Mandarin",
    facts: [
      "Mandarin has four main tones plus a neutral tone, and it's the most widely spoken language in the world by native speakers.",
      "Mandarin is written with the same characters used across China, even though pronunciation varies significantly by region.",
    ],
  },
  hokkien: {
    name: "Hokkien",
    facts: [
      "Hokkien originated in southern Fujian province and, thanks to centuries of emigration, is widely spoken across Taiwan, Singapore, Malaysia, and the Philippines.",
      "Hokkien retains many pronunciations from Old Chinese that have disappeared from Mandarin, which is why some Hokkien words sound closer to how Chinese was spoken over a thousand years ago.",
    ],
  },
  teochew: {
    name: "Teochew",
    facts: [
      "Teochew comes from the Chaoshan region of eastern Guangdong and is closely related to Hokkien, though the two aren't fully mutually intelligible.",
      "Teochew has a large diaspora presence in Southeast Asia, particularly in Thailand, Cambodia, and Singapore, where it shaped local Chinese communities' cuisine and customs.",
    ],
  },
  fuzhounese: {
    name: "Fuzhounese",
    facts: [
      "Fuzhounese, also called Eastern Min, is native to the Fuzhou region of Fujian province and is largely unintelligible with Hokkien despite both being Min languages.",
      "Large Fuzhounese-speaking communities exist in New York City, where the dialect is sometimes called \"Foochownese\" in local Chinatown communities.",
    ],
  },
  putian: {
    name: "Putian",
    facts: [
      "Putian, also known as Pu-Xian Min, is spoken around Putian and Xianyou in Fujian and forms its own distinct branch of the Min language family.",
      "Despite being geographically sandwiched between Hokkien and Fuzhounese speaking areas, Putian is not mutually intelligible with either.",
    ],
  },
  hainanese: {
    name: "Hainanese",
    facts: [
      "Hainanese is spoken on Hainan Island and, while classified as a Min language, has diverged enough that it's largely unintelligible with Hokkien.",
      "Hainanese chicken rice, a dish beloved across Southeast Asia, traces its name back to Hainanese immigrant communities in Singapore and Malaysia.",
    ],
  },
  hakka: {
    name: "Hakka",
    facts: [
      "Hakka means \"guest families,\" reflecting the community's history of migration across southern China over many centuries.",
      "Unlike many other Chinese varieties named after a single region, Hakka speakers are spread across Guangdong, Fujian, Jiangxi, Taiwan, and diaspora communities worldwide.",
    ],
  },
  taishanese: {
    name: "Taishanese",
    facts: [
      "Taishanese comes from Taishan in Guangdong province and was historically the dominant Chinese dialect among early Chinese immigrants to the United States.",
      "Because of 19th and early 20th century emigration patterns, Taishanese was once heard more often than Cantonese or Mandarin in American Chinatowns.",
    ],
  },
  shanghainese: {
    name: "Shanghainese",
    facts: [
      "Shanghainese is a Wu Chinese variety and, unlike Mandarin or Cantonese, has a set of voiced consonants that give it a noticeably different sound.",
      "Shanghainese tone sandhi is so extensive that the tone of an entire multi-syllable phrase can be determined largely by its first syllable.",
    ],
  },
  indonesian: {
    name: "Indonesian",
    facts: [
      "Indonesian (Bahasa Indonesia) is based on Malay and was adopted as a unifying national language despite hundreds of local languages spoken across the archipelago.",
      "Indonesian has no verb conjugation for tense, gender, or number, relying instead on context and time words.",
    ],
  },
  "south-korean": {
    name: "South Korean",
    facts: [
      "The Korean alphabet, Hangul, was created in 1443 under King Sejong the Great and is prized for how logically it represents sounds.",
      "Korean uses different speech levels and honorifics that change verb endings depending on who you're speaking to.",
    ],
  },
  "north-korean": {
    name: "North Korean",
    facts: [
      "North Korea uses the same Hangul alphabet as South Korea, but has developed distinct vocabulary and pronunciation since the peninsula's division.",
      'North Korean Korean, called Munhwaŏ ("cultured language"), purged many Chinese-derived and foreign loanwords in favor of native Korean coinages.',
    ],
  },
  tagalog: {
    name: "Tagalog",
    facts: [
      "Tagalog is the basis for Filipino, the national language of the Philippines, and has absorbed loanwords from Spanish, English, Malay, and Chinese.",
      "Tagalog verbs conjugate by focus rather than just tense, meaning the verb form changes based on whether the subject is the actor, object, or location.",
    ],
  },
  mongolian: {
    name: "Mongolian",
    facts: [
      "Traditional Mongolian script is written vertically, top to bottom, in columns read left to right.",
      "Mongolian is a vowel-harmony language, meaning vowels within a word must belong to the same harmonic group.",
    ],
  },
  lao: {
    name: "Lao",
    facts: [
      "Lao is a tonal language, most commonly described as having six tones depending on the region.",
      "The Lao script is an abugida derived from the Khmer script and largely omits spaces between words, using them mainly to separate phrases.",
    ],
  },
  burmese: {
    name: "Burmese",
    facts: [
      "Burmese is written in a distinctive circular script, where letters are formed with loops originally shaped by writing on palm leaves.",
      'Burmese is tonal, with three main tones plus a "checked" syllable type, each changing a word\'s meaning entirely.',
    ],
  },
  khmer: {
    name: "Khmer",
    facts: [
      "Khmer has one of the longest alphabets of any language, with 74 letters including consonants, vowels, and diacritics.",
      "Unlike many neighboring languages, Khmer is not tonal, relying instead on vowel length and quality to distinguish words.",
    ],
  },
  malay: {
    name: "Malay",
    facts: [
      "Malay and Indonesian are close enough to be mutually intelligible, sharing a common root as standardized varieties of the same language family.",
      "Malay was traditionally written in the Jawi script, an Arabic-based alphabet, before the Latin-based Rumi script became standard.",
    ],
  },
  jordan: {
    name: "Jordanian Arabic",
    facts: [
      "Jordanian Arabic is a Levantine dialect, close enough to Palestinian and Syrian Arabic that speakers can generally understand each other with ease.",
      "Like other spoken Arabic dialects, it differs from Modern Standard Arabic in everyday vocabulary, pronunciation, and grammar, even though both use the same script.",
    ],
  },
  uae: {
    name: "Emirati Arabic",
    facts: [
      "Emirati Arabic is a Gulf dialect shared with neighboring countries, shaped historically by trade routes across the Arabian Peninsula and Indian Ocean.",
      "Because expatriates make up most of the UAE's population, Emirati Arabic speakers are often a linguistic minority in their own cities, alongside widely spoken English, Hindi, and Urdu.",
    ],
  },
  arabic: {
    name: "Modern Standard Arabic",
    facts: [
      "Modern Standard Arabic is used formally across the Arab world in media, education, and government, while everyday speech varies by dialect from country to country.",
      "Arabic is written right to left, and most letters change shape depending on their position within a word.",
    ],
  },
  hindi: {
    name: "Hindi",
    facts: [
      "Hindi is written in the Devanagari script, where a horizontal line connects most letters along the top of each word.",
      "Hindi nouns and adjectives carry grammatical gender, and verbs change form to agree with the gender of the subject.",
    ],
  },
  bengali: {
    name: "Bengali",
    facts: [
      "Bengali is the most widely spoken language in Bangladesh and the second most spoken in India, with over 230 million native speakers.",
      "Bengali's script is also an abugida, related to Devanagari, and is known for its distinctive looping letterforms.",
    ],
  },
  urdu: {
    name: "Urdu",
    facts: [
      "Urdu and Hindi are nearly identical when spoken but are written in entirely different scripts: Urdu uses a Perso-Arabic script, Hindi uses Devanagari.",
      "Urdu developed centuries ago as a blend of local Indian languages with Persian, Arabic, and Turkic vocabulary.",
    ],
  },
  punjabi: {
    name: "Punjabi",
    facts: [
      "Punjabi is a tonal language, unusual among Indo-Aryan languages, with tone arising historically from lost consonant sounds.",
      "Punjabi is written in the Gurmukhi script in India and the Shahmukhi (Perso-Arabic) script in Pakistan.",
    ],
  },
  telugu: {
    name: "Telugu",
    facts: [
      'Telugu has one of the largest numbers of native speakers in India and is known for its smooth, vowel-ending words, earning it the nickname "Italian of the East."',
      "Telugu script is an abugida with rounded letterforms, believed to have evolved that shape from writing on palm leaves.",
    ],
  },
  marathi: {
    name: "Marathi",
    facts: [
      "Marathi is one of the oldest languages of the Indo-Aryan family, with a literary tradition dating back over a thousand years.",
      "Marathi is written in the Devanagari script and is the official language of the Indian state of Maharashtra, home to Mumbai.",
    ],
  },
  tamil: {
    name: "Tamil",
    facts: [
      "Tamil is one of the longest continuously used classical languages in the world, with written records dating back more than 2,000 years.",
      "Tamil script has no capital letters and includes unique characters for sounds not found in other Indian languages.",
    ],
  },
  farsi: {
    name: "Farsi",
    facts: [
      "Farsi (Persian) is written in a Perso-Arabic script but, unlike Arabic, is not a Semitic language; it belongs to the Indo-European family.",
      "Farsi grammar is comparatively simple, with no grammatical gender and mostly regular verb conjugation patterns.",
    ],
  },
  uzbek: {
    name: "Uzbek",
    facts: [
      "Uzbek has been written in Arabic, Latin, and Cyrillic scripts at different points in its history, and is currently transitioning back to a Latin-based alphabet.",
      "Uzbek is a Turkic language and, like other Turkic languages, relies heavily on vowel harmony and suffixes rather than prepositions.",
    ],
  },
};

const MUSIC = {
  seasons: {
    name: "Seasons",
    tracks: [
      { title: "Yuki no Hana", subtitle: "Winter", type: "spotify", id: "6Zyizxfz4NXdCgVLwhuBNw" },
      { title: "Lilac", subtitle: "Spring", type: "spotify", id: "5xrtzzzikpG3BLbo4q1Yul" },
      { title: "Lady Sunshine", subtitle: "Summer", type: "spotify", id: "1x33hYJerbtoNgUSd5PEzN" },
      { title: "Happy Are Those in Love", subtitle: "Fall", type: "spotify", id: "606wvF2jK9MrZrwoWVSVnx" },
    ],
  },
  albums: {
    name: "Albums",
    tracks: [
      { title: "Future Nostalgia", subtitle: "Dua Lipa", type: "spotify", id: "6zrJLhslleCHby0wbUnvVy" },
      { title: "Don't Start Now", subtitle: "Dua Lipa", type: "spotify", id: "3PfIrDoz19wz7qK7tYeu62" },
      { title: "Cool", subtitle: "Dua Lipa", type: "spotify", id: "2nMOodYNHBAQ3Kc1QNimZU" },
      { title: "Physical", subtitle: "Dua Lipa", type: "spotify", id: "3AzjcOeAmA57TIOr9zF1ZW" },
      { title: "Levitating", subtitle: "Dua Lipa", type: "spotify", id: "39LLxExYz6ewLAcYrzQQyP" },
      { title: "Pretty Please", subtitle: "Dua Lipa", type: "spotify", id: "6DXZiYUbrYgrVIhfX3U9Z2" },
      { title: "Hallucinate", subtitle: "Dua Lipa", type: "spotify", id: "1nYeVF5vIBxMxfPoL0SIWg" },
      { title: "Love Again", subtitle: "Dua Lipa", type: "spotify", id: "4rPkN1FMzQyFNP9cLUGIIB" },
      { title: "Break My Heart", subtitle: "Dua Lipa", type: "spotify", id: "017PF4Q3l4DBUiWoXk4OWT" },
      { title: "Good in Bed", subtitle: "Dua Lipa", type: "spotify", id: "6uAFJ75WDAoAPyCWJAtvks" },
      { title: "Boys Will Be Boys", subtitle: "Dua Lipa", type: "spotify", id: "0vQcyuMEfRBd21ojZ62N2L" },
    ],
  },
  ep: {
    name: "EP: Get Up",
    tracks: [
      { title: "New Jeans", subtitle: "NewJeans", type: "youtube", id: "kcelgrGY1h8" },
      { title: "Super Shy", subtitle: "NewJeans", type: "youtube", id: "ArmDp-zijuc" },
      { title: "ETA", subtitle: "NewJeans", type: "youtube", id: "jOTfBlKSQYY" },
      { title: "Cool With You", subtitle: "NewJeans", type: "youtube", id: "kKsivrgoyDw" },
      { title: "Get Up", subtitle: "NewJeans", type: "youtube", id: "eU4CBhTQm6s" },
      { title: "ASAP", subtitle: "NewJeans", type: "youtube", id: "dJdqn5v4Dkw" },
    ],
  },
  singles: {
    name: "Singles",
    tracks: [
      { title: "Nếu lúc đó", subtitle: "tlinh ft. 2pillz", type: "youtube", id: "fyMgBQioTLo" },
      { title: "Introvert", subtitle: "Little Simz", type: "youtube", id: "hxfGQ2AJHGk" },
      { title: "No Tears Left to Cry", subtitle: "Ariana Grande", type: "youtube", id: "ffxKSjUwKdU" },
    ],
  },
  luvsic: {
    name: "Luv(sic) Hexalogy",
    tracks: [
      { title: "Luv(sic) Hexalogy", subtitle: "Nujabes ft. Shing02", type: "spotify", spotifyType: "album", id: "1cN1GECqXrHlPhLX7LGg3e" },
    ],
  },
};

const PROJECTS = {
  calobro: {
    name: "CaloBro 📸",
    blurb: "An app where you snap a picture of your meal and it automatically logs the calories, with streaks to keep you consistent.",
    images: [
      "assets/calobro/98.png",
      "assets/calobro/99.png",
      "assets/calobro/100.png",
      "assets/calobro/101.png",
      "assets/calobro/102.png",
    ],
  },
  "hire-power": {
    name: "Hire Power 😇",
    blurb: "A job application app my team, ALTLab Angels, built together. The name's a pun on \"higher power,\" fitting for something meant to help land your next job.",
    images: [
      "assets/hire-power/001.png",
      "assets/hire-power/002.png",
      "assets/hire-power/003.png",
      "assets/hire-power/0035.png",
      "assets/hire-power/004.png",
      "assets/hire-power/005.png",
      "assets/hire-power/006.png",
      "assets/hire-power/007.png",
    ],
  },
  snowsocial: {
    name: "SnowSocial ❄️",
    blurb: "A REST API federation project. Think five different Twitter-like networks, all talking to each other.",
    video: "FQRC_RTTsF0",
  },
};

const GAMES = {
  "plants-vs-zombies": {
    name: "Plants vs. Zombies",
    emoji: "🌻",
    blurb: "A tower-defense classic where you line up sunflowers, peashooters, and oddball plants to stop a goofy zombie invasion from reaching your house.",
    image: "assets/games/plants-vs-zombies.jpg",
  },
  minecraft: {
    name: "Minecraft",
    emoji: "⛏️",
    blurb: "A blocky sandbox where you mine, craft, build, and survive in a procedurally generated world that's basically unlimited digital Legos.",
    image: "assets/games/minecraft.webp",
  },
  roblox: {
    name: "Roblox",
    emoji: "🎮",
    blurb: "A platform of millions of user-made games, from obbies to tycoons to full RPGs, all built by its own massive community.",
    image: "assets/games/roblox.jpg",
  },
  "rollercoaster-tycoon": {
    name: "RollerCoaster Tycoon",
    emoji: "🎢",
    blurb: "A park-building sim where you design coasters, manage guests, and try not to build a loop so intense it makes everyone throw up.",
    image: "assets/games/rollercoaster-tycoon.jpg",
  },
  "cities-skylines": {
    name: "Cities: Skylines",
    emoji: "🏙️",
    blurb: "A city-builder about zoning, traffic, and budgets, where the real challenge is untangling gridlock at 2 a.m.",
    image: "assets/games/cities-skylines.webp",
  },
  "sims-4": {
    name: "The Sims 4",
    emoji: "🏡",
    blurb: "A life simulator where you build houses, craft Sims, and guide their chaotic little lives, often straight into the pool with the ladder removed.",
    image: "assets/games/sims-4.png",
  },
  "stardew-valley": {
    name: "Stardew Valley",
    emoji: "🌾",
    blurb: "A cozy farming sim about planting crops, befriending townsfolk, and slowly turning a run-down farm into a thriving homestead.",
    image: "assets/games/stardew-valley.jpg",
  },
  celeste: {
    name: "Celeste",
    emoji: "🏔️",
    blurb: "A precision platformer about climbing a mountain, with tight controls and a story about anxiety and self-doubt wrapped into every jump.",
    image: "assets/games/celeste.png",
  },
  "chrono-trigger": {
    name: "Chrono Trigger",
    emoji: "⏳",
    blurb: "A beloved SNES-era RPG about time travel, with a battle system and story still held up as one of the genre's best.",
    image: "assets/games/chrono-trigger.jpg",
  },
  "final-fantasy-7": {
    name: "Final Fantasy 7",
    emoji: "⚔️",
    blurb: "A landmark RPG following Cloud and an eco-terrorist resistance against a monolithic energy conglomerate, later remade for modern platforms.",
    image: "assets/games/final-fantasy-7.jpg",
  },
};

const RECIPES = {
  "chicken-noodle-soup": {
    title: "Chicken Noodle Soup",
    image: "assets/chicken-noodle-soup.jpg",
    ingredients: [
      "1 tbsp olive oil",
      "1 onion, diced",
      "2 carrots, sliced",
      "2 celery stalks, sliced",
      "8 cups chicken broth",
      "2 boneless, skinless chicken breasts",
      "2 cups egg noodles",
      "Salt and pepper, to taste",
      "Fresh parsley, chopped",
    ],
    steps: [
      "Heat the olive oil in a large pot over medium heat and saute the onion, carrots, and celery until softened, about 5 minutes.",
      "Add the chicken broth and chicken breasts, then bring to a boil.",
      "Reduce heat and simmer until the chicken is cooked through, about 15 minutes.",
      "Remove the chicken, shred it with two forks, and return it to the pot.",
      "Add the egg noodles and cook until tender, about 6-8 minutes.",
      "Season with salt and pepper, top with fresh parsley, and serve hot.",
    ],
    author: 'Jordan "Chicken" Kwan',
  },
};

function createFireflies(container) {
  container.innerHTML = "";
  const count = 25;

  for (let i = 0; i < count; i++) {
    const fly = document.createElement("div");
    fly.className = "firefly";
    fly.style.left = `${Math.random() * 100}vw`;
    fly.style.top = `${Math.random() * 100}vh`;

    const randomOffset = () => `${(Math.random() * 160 - 80).toFixed(0)}px`;
    fly.style.setProperty("--tx1", randomOffset());
    fly.style.setProperty("--ty1", randomOffset());
    fly.style.setProperty("--tx2", randomOffset());
    fly.style.setProperty("--ty2", randomOffset());
    fly.style.setProperty("--tx3", randomOffset());
    fly.style.setProperty("--ty3", randomOffset());

    fly.style.animationDuration = `${(8 + Math.random() * 10).toFixed(1)}s`;
    fly.style.animationDelay = `${(Math.random() * 8).toFixed(1)}s`;

    container.appendChild(fly);
  }
}

function createFloralLayer() {
  const svgNS = "http://www.w3.org/2000/svg";
  const wrapper = document.createElement("div");
  wrapper.className = "floral-layer";

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");

  const defs = document.createElementNS(svgNS, "defs");
  const pattern = document.createElementNS(svgNS, "pattern");
  pattern.setAttribute("id", "floral-tile");
  pattern.setAttribute("width", "200");
  pattern.setAttribute("height", "200");
  pattern.setAttribute("patternUnits", "userSpaceOnUse");
  pattern.innerHTML = `
    <g class="floral-sway">
      <g fill="#f6c9dc" fill-opacity="0.55">
        <circle cx="40" cy="40" r="7" /><circle cx="33.09" cy="49.51" r="7" /><circle cx="21.91" cy="45.88" r="7" /><circle cx="21.91" cy="34.12" r="7" /><circle cx="33.09" cy="30.49" r="7" />
      </g>
      <circle cx="30" cy="40" r="4" fill="#ffe3ac" fill-opacity="0.6" />
      <g fill="#f6c9dc" fill-opacity="0.5">
        <circle cx="157" cy="20" r="4.9" /><circle cx="152.16" cy="26.66" r="4.9" /><circle cx="144.34" cy="24.12" r="4.9" /><circle cx="144.34" cy="15.88" r="4.9" /><circle cx="152.16" cy="13.34" r="4.9" />
      </g>
      <circle cx="150" cy="20" r="2.8" fill="#ffe3ac" fill-opacity="0.6" />
      <g fill="#f6c9dc" fill-opacity="0.55">
        <circle cx="102" cy="110" r="8.4" /><circle cx="93.71" cy="121.41" r="8.4" /><circle cx="80.29" cy="117.06" r="8.4" /><circle cx="80.29" cy="102.94" r="8.4" /><circle cx="93.71" cy="98.59" r="8.4" />
      </g>
      <circle cx="90" cy="110" r="4.8" fill="#ffe3ac" fill-opacity="0.6" />
      <g fill="#f6c9dc" fill-opacity="0.5">
        <circle cx="178" cy="150" r="5.6" /><circle cx="172.47" cy="157.61" r="5.6" /><circle cx="163.53" cy="154.7" r="5.6" /><circle cx="163.53" cy="145.3" r="5.6" /><circle cx="172.47" cy="142.39" r="5.6" />
      </g>
      <circle cx="170" cy="150" r="3.2" fill="#ffe3ac" fill-opacity="0.6" />
      <g fill="#f6c9dc" fill-opacity="0.55">
        <circle cx="49" cy="170" r="6.3" /><circle cx="42.78" cy="178.56" r="6.3" /><circle cx="32.72" cy="175.29" r="6.3" /><circle cx="32.72" cy="164.71" r="6.3" /><circle cx="42.78" cy="161.44" r="6.3" />
      </g>
      <circle cx="40" cy="170" r="3.6" fill="#ffe3ac" fill-opacity="0.6" />
      <g fill="#bcdbb4" fill-opacity="0.45">
        <ellipse cx="22" cy="52" rx="5" ry="2" transform="rotate(-30 22 52)" />
        <ellipse cx="100" cy="122" rx="6" ry="2.5" transform="rotate(20 100 122)" />
        <ellipse cx="160" cy="18" rx="4" ry="1.7" transform="rotate(-15 160 18)" />
      </g>
    </g>
  `;
  defs.appendChild(pattern);
  svg.appendChild(defs);

  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("width", "100%");
  rect.setAttribute("height", "100%");
  rect.setAttribute("fill", "url(#floral-tile)");
  svg.appendChild(rect);

  wrapper.appendChild(svg);
  return wrapper;
}

function scheduleFloralGust(swayGroup) {
  const delay = 10000 + Math.random() * 20000;
  setTimeout(() => {
    swayGroup.classList.add("gust");
    setTimeout(() => {
      swayGroup.classList.remove("gust");
    }, 3000);
    scheduleFloralGust(swayGroup);
  }, delay);
}

function setTheme(isDark) {
  document.documentElement.classList.toggle("dark-mode", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const toggleBtn = document.querySelector(".theme-toggle");
  if (toggleBtn) {
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
  }

  const floralLayer = document.querySelector(".floral-layer");
  if (floralLayer) {
    floralLayer.style.display = isDark ? "none" : "block";
  }

  let flyLayer = document.querySelector(".firefly-layer");
  if (isDark) {
    if (!flyLayer) {
      flyLayer = document.createElement("div");
      flyLayer.className = "firefly-layer";
      document.body.appendChild(flyLayer);
    }
    createFireflies(flyLayer);
  } else if (flyLayer) {
    flyLayer.remove();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const floralLayer = createFloralLayer();
  document.body.insertBefore(floralLayer, document.body.firstChild);
  const swayGroup = floralLayer.querySelector(".floral-sway");
  if (swayGroup) {
    const swayDuration = 7;
    const phaseOffset = (Date.now() / 1000) % swayDuration;
    swayGroup.style.animationDelay = `-${phaseOffset}s`;
    scheduleFloralGust(swayGroup);
  }

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  const themeToggle = document.createElement("button");
  themeToggle.type = "button";
  themeToggle.className = "theme-toggle";
  themeToggle.setAttribute("aria-label", "Toggle dark mode");
  document.body.appendChild(themeToggle);

  setTheme(document.documentElement.classList.contains("dark-mode"));

  themeToggle.addEventListener("click", () => {
    setTheme(!document.documentElement.classList.contains("dark-mode"));
  });

  const current = window.location.pathname.split("/").pop() || "index.html";
  const subpageParents = {
    "facts.html": "fun.html",
    "recipe.html": "fun.html",
    "game.html": "fun.html",
    "music.html": "fun.html",
    "project.html": "projects.html",
  };
  const activeHref = subpageParents[current] || current;
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === activeHref) {
      link.classList.add("active");
    }
  });

  const langTitle = document.getElementById("lang-title");
  const factList = document.getElementById("fact-list");
  if (langTitle && factList) {
    const langKey = new URLSearchParams(window.location.search).get("lang");
    const lang = LANGUAGE_FACTS[langKey];

    if (lang) {
      langTitle.textContent = `${lang.name} Facts`;
      factList.innerHTML = lang.facts
        .map((fact) => `<li><p>${fact}</p></li>`)
        .join("");
    } else {
      langTitle.textContent = "Language not found";
    }
  }

  const recipeTitle = document.getElementById("recipe-title");
  const recipeImage = document.getElementById("recipe-image");
  const recipeIngredients = document.getElementById("recipe-ingredients");
  const recipeSteps = document.getElementById("recipe-steps");
  const recipeAuthor = document.getElementById("recipe-author");
  if (recipeTitle && recipeImage && recipeIngredients && recipeSteps) {
    const dishKey = new URLSearchParams(window.location.search).get("dish");
    const recipe = RECIPES[dishKey];

    if (recipe) {
      recipeTitle.textContent = recipe.title;
      recipeImage.src = recipe.image;
      recipeImage.alt = recipe.title;
      recipeIngredients.innerHTML = recipe.ingredients
        .map((item) => `<li><p>${item}</p></li>`)
        .join("");
      recipeSteps.innerHTML = recipe.steps
        .map((step) => `<li>${step}</li>`)
        .join("");
      recipeAuthor.textContent = `Recipe by ${recipe.author}`;
    } else {
      recipeTitle.textContent = "Recipe not found";
      recipeImage.remove();
    }
  }

  const gameTitle = document.getElementById("game-title");
  const gameEmoji = document.getElementById("game-emoji");
  const gameBlurb = document.getElementById("game-blurb");
  const gameImage = document.getElementById("game-image");
  if (gameTitle && gameEmoji && gameBlurb) {
    const gameKey = new URLSearchParams(window.location.search).get("game");
    const game = GAMES[gameKey];

    if (game) {
      gameTitle.textContent = game.name;
      gameEmoji.textContent = game.emoji;
      gameBlurb.textContent = game.blurb;
      if (game.image && gameImage) {
        gameImage.src = game.image;
        gameImage.alt = game.name;
      }
    } else {
      gameTitle.textContent = "Game not found";
    }
  }

  const projectTitle = document.getElementById("project-title");
  const projectBlurb = document.getElementById("project-blurb");
  const projectVideo = document.getElementById("project-video");
  const projectGallery = document.getElementById("project-gallery");
  if (projectTitle && projectBlurb) {
    const projectKey = new URLSearchParams(window.location.search).get("project");
    const project = PROJECTS[projectKey];

    if (project) {
      projectTitle.textContent = project.name;
      projectBlurb.textContent = project.blurb;

      if (project.video && projectVideo) {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${project.video}`;
        iframe.title = project.name;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        projectVideo.appendChild(iframe);
      }

      if (project.images && projectGallery) {
        project.images.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = `${project.name} screenshot`;
          img.loading = "lazy";
          projectGallery.appendChild(img);
        });
      }
    } else {
      projectTitle.textContent = "Project not found";
    }
  }

  const musicTitle = document.getElementById("music-title");
  const musicTracks = document.getElementById("music-tracks");
  if (musicTitle && musicTracks) {
    const categoryKey = new URLSearchParams(window.location.search).get("category");
    const category = MUSIC[categoryKey];

    if (category) {
      musicTitle.textContent = category.name;

      category.tracks.forEach((track) => {
        const trackEl = document.createElement("div");
        trackEl.className = "music-track";

        const heading = document.createElement("h2");
        heading.textContent = track.title;
        trackEl.appendChild(heading);

        if (track.subtitle) {
          const subtitle = document.createElement("p");
          subtitle.className = "music-track-subtitle";
          subtitle.textContent = track.subtitle;
          trackEl.appendChild(subtitle);
        }

        const embed = document.createElement("div");
        const iframe = document.createElement("iframe");
        iframe.title = track.title;

        if (track.type === "youtube") {
          embed.className = "video-embed";
          iframe.src = `https://www.youtube.com/embed/${track.id}`;
          iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;
        } else if (track.type === "spotify") {
          const spotifyType = track.spotifyType || "track";
          embed.className = spotifyType === "album" ? "spotify-embed spotify-embed-album" : "spotify-embed";
          iframe.src = `https://open.spotify.com/embed/${spotifyType}/${track.id}`;
          iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        }

        embed.appendChild(iframe);
        trackEl.appendChild(embed);
        musicTracks.appendChild(trackEl);
      });
    } else {
      musicTitle.textContent = "Not found";
    }
  }

  const tabButtons = document.querySelectorAll(".tab-buttons button");

  function activateTab(target) {
    tabButtons.forEach((btn) => {
      const isTarget = btn.getAttribute("data-tab") === target;
      btn.classList.toggle("active", isTarget);
      btn.setAttribute("aria-selected", isTarget ? "true" : "false");
    });
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === target);
    });
  }

  if (tabButtons.length) {
    const savedTab = localStorage.getItem("funActiveTab");
    if (savedTab && document.getElementById(savedTab)) {
      activateTab(savedTab);
    }
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");
      localStorage.setItem("funActiveTab", target);
      activateTab(target);
    });
  });
});
