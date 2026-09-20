const LANGUAGE_FACTS = {
  thai: {
    name: "Thai",
    facts: [
      "Thai is a tonal language with five tones, and using the wrong tone can completely change a word's meaning.",
      "The Thai script has 44 consonants and no spaces between words within a sentence.",
    ],
    basics: {
      writing: "Thai script is an abugida ~ explore the 44 consonants (by class), 28 vowels (by length), and tone marks below.",
      note: "A consonant's class (mid/high/low) combines with tone marks and syllable shape to determine the spoken tone ~ the full rules are beyond \"basics,\" but the classes are a starting point.",
      tabbed: true,
      tabs: [
        {
          key: "consonants",
          label: "Consonants",
          groups: [
            {
              label: "Mid Class",
              items: [
                { ch: "ก", t: "Kor Kai · k" }, { ch: "จ", t: "Chor Chan · ch" }, { ch: "ฎ", t: "Dor Chada · d" },
                { ch: "ฏ", t: "Tor Patak · t" }, { ch: "ด", t: "Dor Dek · d" }, { ch: "ต", t: "Tor Tao · t" },
                { ch: "บ", t: "Bor Baimai · b" }, { ch: "ป", t: "Por Pla · p" }, { ch: "อ", t: "Or Ang · glottal" },
              ],
            },
            {
              label: "High Class",
              items: [
                { ch: "ข", t: "Khor Khai · kh" }, { ch: "ฃ", t: "Khor Khuat · kh" }, { ch: "ฉ", t: "Chor Ching · ch" },
                { ch: "ฐ", t: "Thor Than · th" }, { ch: "ถ", t: "Thor Thung · th" }, { ch: "ผ", t: "Phor Phueng · ph" },
                { ch: "ฝ", t: "For Fa · f" }, { ch: "ศ", t: "Sor Sala · s" }, { ch: "ษ", t: "Sor Reusi · s" },
                { ch: "ส", t: "Sor Suea · s" }, { ch: "ห", t: "Hor Hip · h" },
              ],
            },
            {
              label: "Low Class",
              items: [
                { ch: "ค", t: "Khor Khwai · kh" }, { ch: "ฅ", t: "Khor Khon · kh" }, { ch: "ฆ", t: "Khor Rakhang · kh" },
                { ch: "ง", t: "Ngor Ngu · ng" }, { ch: "ช", t: "Chor Chang · ch" }, { ch: "ซ", t: "Sor So · s" },
                { ch: "ฌ", t: "Chor Choe · ch" }, { ch: "ญ", t: "Yor Ying · y" }, { ch: "ฑ", t: "Thor Montho · th" },
                { ch: "ฒ", t: "Thor Phuthao · th" }, { ch: "ณ", t: "Nor Nen · n" }, { ch: "ท", t: "Thor Thahan · th" },
                { ch: "ธ", t: "Thor Thong · th" }, { ch: "น", t: "Nor Nu · n" }, { ch: "พ", t: "Phor Phan · ph" },
                { ch: "ฟ", t: "For Fan · f" }, { ch: "ภ", t: "Phor Samphao · ph" }, { ch: "ม", t: "Mor Ma · m" },
                { ch: "ย", t: "Yor Yak · y" }, { ch: "ร", t: "Ror Ruea · r" }, { ch: "ล", t: "Lor Ling · l" },
                { ch: "ว", t: "Wor Waen · w" }, { ch: "ฬ", t: "Lor Chula · l" }, { ch: "ฮ", t: "Hor Nokhuk · h" },
              ],
            },
          ],
        },
        {
          key: "vowels",
          label: "Vowels",
          groups: [
            {
              label: "Short Vowels",
              items: [
                { ch: "อะ", t: "a" }, { ch: "◌ิ", t: "i" }, { ch: "◌ึ", t: "ɯ" }, { ch: "◌ุ", t: "u" },
                { ch: "เอะ", t: "e" }, { ch: "แอะ", t: "ɛ" }, { ch: "โอะ", t: "o" }, { ch: "เอาะ", t: "ɔ" },
                { ch: "เอียะ", t: "ia" }, { ch: "เอือะ", t: "ɯa" }, { ch: "อัวะ", t: "ua" },
              ],
            },
            {
              label: "Long Vowels",
              items: [
                { ch: "อา", t: "aː" }, { ch: "◌ี", t: "iː" }, { ch: "◌ือ", t: "ɯː" }, { ch: "◌ู", t: "uː" },
                { ch: "เอ", t: "eː" }, { ch: "แอ", t: "ɛː" }, { ch: "โอ", t: "oː" }, { ch: "ออ", t: "ɔː" },
                { ch: "เอีย", t: "iːa" }, { ch: "เอือ", t: "ɯːa" }, { ch: "อัว", t: "uːa" },
              ],
            },
            {
              label: "Special & Diphthongs",
              items: [
                { ch: "อำ", t: "am" }, { ch: "ไอ", t: "aj (mai malai)" }, { ch: "ใอ", t: "aj (mai muan)" },
                { ch: "เอา", t: "aw" }, { ch: "ฤ", t: "rɯ / ri / rɤː" }, { ch: "ฤๅ", t: "rɯː" },
              ],
            },
          ],
        },
        {
          key: "tones",
          label: "Tone Marks",
          cards: [
            { symbol: "◌่", name: "Mai Ek", effect: "Marks a low tone on mid-class consonants (and shifts the tone on high/low-class syllables per the standard tone rules).", example: "ไก่ (gài ~ chicken)" },
            { symbol: "◌้", name: "Mai Tho", effect: "Marks a falling tone on mid-class consonants (also used with high/low-class consonants under the tone rules).", example: "ม้า (máa ~ horse)" },
            { symbol: "◌๊", name: "Mai Tri", effect: "Marks a high tone. Only ever appears on mid-class consonants, mostly in loanwords.", example: "ก๊าซ (káat ~ gas)" },
            { symbol: "◌๋", name: "Mai Chattawa", effect: "Marks a rising tone. Only ever appears on mid-class consonants.", example: "ตั๋ว (tǔa ~ ticket)" },
            { symbol: "◌์", name: "Thanthakhat (Karan)", effect: "Silences the letter (and any letters after it in the cluster) that it sits above ~ usually left over from the word's original spelling in Sanskrit/Pali/English.", example: "จันทร์ (jan ~ moon; the ทร์ is silent)" },
            { symbol: "ๆ", name: "Mai Yamok", effect: "Repeats the preceding word, often to form a plural or add emphasis.", example: "เด็กๆ (dèk dèk ~ children)" },
            { symbol: "ฯ", name: "Paiyan Noi", effect: "Marks an abbreviated word or name.", example: "กรุงเทพฯ (short for the full ceremonial name of Bangkok)" },
          ],
        },
        {
          key: "practice",
          label: "Practice",
          practice: true,
        },
      ],
      vocab: [
        { w: "สวัสดี", t: "sawatdee", m: "hello" },
        { w: "ขอบคุณ", t: "khop khun", m: "thank you" },
        { w: "ใช่", t: "chai", m: "yes" },
        { w: "ไม่", t: "mai", m: "no" },
        { w: "ไก่", t: "gài", m: "chicken" },
        { w: "ไข่", t: "khài", m: "egg" },
      ],
    },
  },
  vietnamese: {
    name: "Vietnamese",
    facts: [
      "Vietnamese is a tonal language with six tones, each changing the meaning of a word even when the letters stay the same.",
      "The modern Vietnamese alphabet, Chữ Quốc Ngữ, is based on the Latin script and was developed by a 17th-century Portuguese-French missionary.",
    ],
    basics: {
      writing: "Vietnamese uses the Latin alphabet (29 letters), digraphs for sounds one letter can't cover, and 6 tones ~ Chữ Quốc Ngữ.",
      note: "IPA is for Northern (Hanoi) pronunciation; Southern Vietnamese differs for a few letters, noted as (S: ...) below.",
      tabbed: true,
      tabs: [
        {
          key: "alphabet",
          label: "Alphabet",
          groups: [
            {
              label: "Vowels",
              items: [
                { ch: "a", t: "aː" }, { ch: "ă", t: "a (short)" }, { ch: "â", t: "ɤ̆ (short)" },
                { ch: "e", t: "ɛ" }, { ch: "ê", t: "e" }, { ch: "i", t: "i" }, { ch: "y", t: "i" },
                { ch: "o", t: "ɔ" }, { ch: "ô", t: "o" }, { ch: "ơ", t: "ɤː" }, { ch: "u", t: "u" },
                { ch: "ư", t: "ɯ" },
              ],
            },
            {
              label: "Consonants",
              items: [
                { ch: "b", t: "ɓ" }, { ch: "c", t: "k" }, { ch: "d", t: "z (S: j)" }, { ch: "đ", t: "ɗ" },
                { ch: "g", t: "ɣ" }, { ch: "h", t: "h" }, { ch: "k", t: "k" }, { ch: "l", t: "l" },
                { ch: "m", t: "m" }, { ch: "n", t: "n" }, { ch: "p", t: "p" }, { ch: "q", t: "k (always \"qu\")" },
                { ch: "r", t: "z (S: r)" }, { ch: "s", t: "s (S: ʂ)" }, { ch: "t", t: "t" }, { ch: "v", t: "v" },
                { ch: "x", t: "s" },
              ],
            },
          ],
        },
        {
          key: "digraphs",
          label: "Digraphs",
          groups: [
            {
              label: "Consonant Digraphs",
              items: [
                { ch: "ch", t: "tɕ" }, { ch: "gh", t: "ɣ (before e/ê/i)" }, { ch: "gi", t: "z (S: j)" },
                { ch: "kh", t: "x" }, { ch: "ng", t: "ŋ" }, { ch: "ngh", t: "ŋ (before e/ê/i)" },
                { ch: "nh", t: "ɲ" }, { ch: "ph", t: "f" }, { ch: "qu", t: "kw" }, { ch: "th", t: "tʰ" },
                { ch: "tr", t: "tʂ (N merges with ch: tɕ)" },
              ],
            },
          ],
        },
        {
          key: "tones",
          label: "Tones",
          groups: [
            {
              label: "Tones (with ma)",
              items: [
                { ch: "ma", t: "level ~ ghost" },
                { ch: "mà", t: "low falling ~ but" },
                { ch: "má", t: "high rising ~ mother/cheek" },
                { ch: "mả", t: "dipping-rising ~ grave" },
                { ch: "mã", t: "creaky rising ~ code/horse" },
                { ch: "mạ", t: "low glottalized ~ rice seedling" },
              ],
            },
          ],
        },
      ],
      vocab: [
        { w: "xin chào", t: "sin chow", m: "hello" },
        { w: "cảm ơn", t: "gaam uhn", m: "thank you" },
        { w: "có", t: "gaw", m: "yes" },
        { w: "không", t: "khohng", m: "no" },
        { w: "gà", t: "gah", m: "chicken" },
        { w: "trứng", t: "chuhng", m: "egg" },
      ],
    },
  },
  japanese: {
    name: "Japanese",
    facts: [
      "Japanese uses three writing systems together: hiragana, katakana, and kanji, often mixed within a single sentence.",
      'Japanese has no grammatical plural form for most nouns, so "本" (hon) can mean "book" or "books" depending on context.',
    ],
    basics: {
      writing: "Japanese combines hiragana, katakana, and kanji ~ here are the vowel rows of each plus a few common kanji.",
      groups: [
        {
          label: "Hiragana (vowels)",
          items: [
            { ch: "あ", t: "a" }, { ch: "い", t: "i" }, { ch: "う", t: "u" }, { ch: "え", t: "e" }, { ch: "お", t: "o" },
          ],
        },
        {
          label: "Katakana (vowels)",
          items: [
            { ch: "ア", t: "a" }, { ch: "イ", t: "i" }, { ch: "ウ", t: "u" }, { ch: "エ", t: "e" }, { ch: "オ", t: "o" },
          ],
        },
        {
          label: "Basic Kanji",
          items: [
            { ch: "人", t: "hito ~ person" }, { ch: "火", t: "hi ~ fire" }, { ch: "水", t: "mizu ~ water" },
            { ch: "木", t: "ki ~ tree" }, { ch: "金", t: "kin ~ gold/money" }, { ch: "土", t: "tsuchi ~ earth" },
          ],
        },
      ],
      vocab: [
        { w: "こんにちは", t: "konnichiwa", m: "hello" },
        { w: "ありがとう", t: "arigatou", m: "thank you" },
        { w: "はい", t: "hai", m: "yes" },
        { w: "いいえ", t: "iie", m: "no" },
        { w: "鶏肉", t: "tori", m: "chicken" },
        { w: "卵", t: "tamago", m: "egg" },
      ],
    },
  },
  cantonese: {
    name: "Cantonese",
    facts: [
      "Cantonese has six to nine tones depending on how they're counted, making it one of the most tonal Chinese varieties.",
      "Cantonese preserves many features of Middle Chinese that Mandarin has lost, including final consonants like -p, -t, and -k.",
    ],
    basics: {
      writing: "Written with Chinese characters (Hanzi) ~ here are a few basics, romanized in Jyutping.",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "jat1 ~ one" }, { ch: "二", t: "ji6 ~ two" }, { ch: "三", t: "saam1 ~ three" },
            { ch: "人", t: "jan4 ~ person" }, { ch: "大", t: "daai6 ~ big" }, { ch: "小", t: "siu2 ~ small" },
            { ch: "山", t: "saan1 ~ mountain" }, { ch: "水", t: "seoi2 ~ water" }, { ch: "火", t: "fo2 ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "nei5 hou2", m: "hello" },
        { w: "唔該", t: "m4 goi1", m: "thank you" },
        { w: "係", t: "hai6", m: "yes" },
        { w: "唔係", t: "m4 hai6", m: "no" },
        { w: "雞", t: "gai1", m: "chicken" },
        { w: "蛋", t: "daan2", m: "egg" },
      ],
    },
  },
  taiwanese: {
    name: "Taiwanese",
    facts: [
      "Taiwanese Hokkien is spoken natively by a majority of Taiwan's population and has its own set of romanization systems, including Tâi-lô and Pe̍h-ōe-jī.",
      "Taiwanese preserves eight tones from Middle Chinese, more than Mandarin's four, and features extensive tone sandhi where a word's tone shifts based on what follows it.",
    ],
    basics: {
      writing: "Written with Chinese characters ~ here are a few basics, romanized in Tâi-lô.",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "tsi̍t ~ one" }, { ch: "二", t: "nn̄g ~ two" }, { ch: "三", t: "sann ~ three" },
            { ch: "人", t: "lâng ~ person" }, { ch: "大", t: "tuā ~ big" }, { ch: "小", t: "sió ~ small" },
            { ch: "山", t: "suann ~ mountain" }, { ch: "水", t: "tsuí ~ water" }, { ch: "火", t: "hué ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "lí-hó", m: "hello" },
        { w: "多謝", t: "to-siā", m: "thank you" },
        { w: "是", t: "sī", m: "yes" },
        { w: "毋是", t: "m̄-sī", m: "no" },
        { w: "雞", t: "ke", m: "chicken" },
        { w: "雞卵", t: "ke-nn̄g", m: "egg" },
      ],
    },
  },
  singaporean: {
    name: "Singaporean",
    facts: [
      "Singapore has four official languages. They are English, Mandarin, Malay, and Tamil, making it one of the most linguistically diverse countries in the world.",
      'Many Singaporeans speak Singlish, an English-based creole that blends vocabulary and grammar from Hokkien, Malay, Tamil, and Cantonese.',
    ],
    basics: {
      writing: "No single script ~ Singlish blends English with words and grammar from Hokkien, Malay, Tamil, and Cantonese.",
      groups: [
        {
          label: "Singlish & Loanwords",
          items: [
            { ch: "lah", t: "adds emphasis" }, { ch: "leh", t: "softens a suggestion" },
            { ch: "lor", t: "resigned, \"that's just how it is\"" }, { ch: "meh", t: "skeptical question" },
            { ch: "shiok", t: "very satisfying/delicious" }, { ch: "kiasu", t: "afraid of losing out" },
            { ch: "kai (雞)", t: "chicken ~ from Hokkien" }, { ch: "telur", t: "egg ~ from Malay" },
          ],
        },
      ],
    },
  },
  mandarin: {
    name: "Mandarin",
    facts: [
      "Mandarin has four main tones plus a neutral tone, and it's the most widely spoken language in the world by native speakers.",
      "Mandarin is written with the same characters used across China, even though pronunciation varies significantly by region.",
    ],
    basics: {
      writing: "Written with Chinese characters (Hanzi) ~ here are a few basics, romanized in Hanyu Pinyin.",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "yī ~ one" }, { ch: "二", t: "èr ~ two" }, { ch: "三", t: "sān ~ three" },
            { ch: "人", t: "rén ~ person" }, { ch: "大", t: "dà ~ big" }, { ch: "小", t: "xiǎo ~ small" },
            { ch: "山", t: "shān ~ mountain" }, { ch: "水", t: "shuǐ ~ water" }, { ch: "火", t: "huǒ ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "nǐ hǎo", m: "hello" },
        { w: "謝謝", t: "xièxiè", m: "thank you" },
        { w: "是", t: "shì", m: "yes" },
        { w: "不是", t: "bú shì", m: "no" },
        { w: "雞", t: "jī", m: "chicken" },
        { w: "蛋", t: "dàn", m: "egg" },
      ],
    },
  },
  hokkien: {
    name: "Hokkien",
    facts: [
      "Hokkien originated in southern Fujian province and, thanks to centuries of emigration, is widely spoken across Taiwan, Singapore, Malaysia, and the Philippines.",
      "Hokkien retains many pronunciations from Old Chinese that have disappeared from Mandarin, which is why some Hokkien words sound closer to how Chinese was spoken over a thousand years ago.",
    ],
    basics: {
      writing: "Written with Chinese characters ~ here are a few basics, romanized in Tâi-lô (same system used for Taiwanese Hokkien).",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "tsi̍t ~ one" }, { ch: "二", t: "nn̄g ~ two" }, { ch: "三", t: "sann ~ three" },
            { ch: "人", t: "lâng ~ person" }, { ch: "大", t: "tuā ~ big" }, { ch: "小", t: "sió ~ small" },
            { ch: "山", t: "suann ~ mountain" }, { ch: "水", t: "tsuí ~ water" }, { ch: "火", t: "hué ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "lí-hó", m: "hello" },
        { w: "多謝", t: "to-siā", m: "thank you" },
        { w: "是", t: "sī", m: "yes" },
        { w: "毋是", t: "m̄-sī", m: "no" },
        { w: "雞", t: "ke", m: "chicken" },
        { w: "雞卵", t: "ke-nn̄g", m: "egg" },
      ],
    },
  },
  teochew: {
    name: "Teochew",
    facts: [
      "Teochew comes from the Chaoshan region of eastern Guangdong and is closely related to Hokkien, though the two aren't fully mutually intelligible.",
      "Teochew has a large diaspora presence in Southeast Asia, particularly in Thailand, Cambodia, and Singapore, where it shaped local Chinese communities' cuisine and customs.",
    ],
    basics: {
      writing: "Written with Chinese characters, shared across varieties. Pronunciation shown here is Mandarin, as a reference.",
      note: "Not sure of Teochew's own romanization yet ~ Mandarin pinyin is shown as a starting reference.",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "yī ~ one" }, { ch: "二", t: "èr ~ two" }, { ch: "三", t: "sān ~ three" },
            { ch: "人", t: "rén ~ person" }, { ch: "大", t: "dà ~ big" }, { ch: "小", t: "xiǎo ~ small" },
            { ch: "山", t: "shān ~ mountain" }, { ch: "水", t: "shuǐ ~ water" }, { ch: "火", t: "huǒ ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "nǐ hǎo", m: "hello" },
        { w: "謝謝", t: "xièxiè", m: "thank you" },
        { w: "是", t: "shì", m: "yes" },
        { w: "不是", t: "bú shì", m: "no" },
        { w: "雞", t: "jī", m: "chicken" },
        { w: "蛋", t: "dàn", m: "egg" },
      ],
    },
  },
  fuzhounese: {
    name: "Fuzhounese",
    facts: [
      "Fuzhounese, also called Eastern Min, is native to the Fuzhou region of Fujian province and is largely unintelligible with Hokkien despite both being Min languages.",
      "Large Fuzhounese-speaking communities exist in New York City, where the dialect is sometimes called \"Foochownese\" in local Chinatown communities.",
    ],
    basics: {
      writing: "Written with Chinese characters, shared across varieties. Pronunciation shown here is Mandarin, as a reference.",
      note: "Not sure of Fuzhounese's own romanization yet ~ Mandarin pinyin is shown as a starting reference.",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "yī ~ one" }, { ch: "二", t: "èr ~ two" }, { ch: "三", t: "sān ~ three" },
            { ch: "人", t: "rén ~ person" }, { ch: "大", t: "dà ~ big" }, { ch: "小", t: "xiǎo ~ small" },
            { ch: "山", t: "shān ~ mountain" }, { ch: "水", t: "shuǐ ~ water" }, { ch: "火", t: "huǒ ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "nǐ hǎo", m: "hello" },
        { w: "謝謝", t: "xièxiè", m: "thank you" },
        { w: "是", t: "shì", m: "yes" },
        { w: "不是", t: "bú shì", m: "no" },
        { w: "雞", t: "jī", m: "chicken" },
        { w: "蛋", t: "dàn", m: "egg" },
      ],
    },
  },
  putian: {
    name: "Putian",
    facts: [
      "Putian, also known as Pu-Xian Min, is spoken around Putian and Xianyou in Fujian and forms its own distinct branch of the Min language family.",
      "Despite being geographically sandwiched between Hokkien and Fuzhounese speaking areas, Putian is not mutually intelligible with either.",
    ],
    basics: {
      writing: "Written with Chinese characters, shared across varieties. Pronunciation shown here is Mandarin, as a reference.",
      note: "Not sure of Putian's own romanization yet ~ Mandarin pinyin is shown as a starting reference.",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "yī ~ one" }, { ch: "二", t: "èr ~ two" }, { ch: "三", t: "sān ~ three" },
            { ch: "人", t: "rén ~ person" }, { ch: "大", t: "dà ~ big" }, { ch: "小", t: "xiǎo ~ small" },
            { ch: "山", t: "shān ~ mountain" }, { ch: "水", t: "shuǐ ~ water" }, { ch: "火", t: "huǒ ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "nǐ hǎo", m: "hello" },
        { w: "謝謝", t: "xièxiè", m: "thank you" },
        { w: "是", t: "shì", m: "yes" },
        { w: "不是", t: "bú shì", m: "no" },
        { w: "雞", t: "jī", m: "chicken" },
        { w: "蛋", t: "dàn", m: "egg" },
      ],
    },
  },
  hainanese: {
    name: "Hainanese",
    facts: [
      "Hainanese is spoken on Hainan Island and, while classified as a Min language, has diverged enough that it's largely unintelligible with Hokkien.",
      "Hainanese chicken rice, a dish beloved across Southeast Asia, traces its name back to Hainanese immigrant communities in Singapore and Malaysia.",
    ],
    basics: {
      writing: "Written with Chinese characters, shared across varieties. Pronunciation shown here is Mandarin, as a reference.",
      note: "Not sure of Hainanese's own romanization yet ~ Mandarin pinyin is shown as a starting reference.",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "yī ~ one" }, { ch: "二", t: "èr ~ two" }, { ch: "三", t: "sān ~ three" },
            { ch: "人", t: "rén ~ person" }, { ch: "大", t: "dà ~ big" }, { ch: "小", t: "xiǎo ~ small" },
            { ch: "山", t: "shān ~ mountain" }, { ch: "水", t: "shuǐ ~ water" }, { ch: "火", t: "huǒ ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "nǐ hǎo", m: "hello" },
        { w: "謝謝", t: "xièxiè", m: "thank you" },
        { w: "是", t: "shì", m: "yes" },
        { w: "不是", t: "bú shì", m: "no" },
        { w: "雞", t: "jī", m: "chicken" },
        { w: "蛋", t: "dàn", m: "egg" },
      ],
    },
  },
  hakka: {
    name: "Hakka",
    facts: [
      "Hakka means \"guest families,\" reflecting the community's history of migration across southern China over many centuries.",
      "Unlike many other Chinese varieties named after a single region, Hakka speakers are spread across Guangdong, Fujian, Jiangxi, Taiwan, and diaspora communities worldwide.",
    ],
    basics: {
      writing: "Written with Chinese characters, shared across varieties. Pronunciation shown here is Mandarin, as a reference.",
      note: "Not sure of Hakka's own romanization yet ~ Mandarin pinyin is shown as a starting reference.",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "yī ~ one" }, { ch: "二", t: "èr ~ two" }, { ch: "三", t: "sān ~ three" },
            { ch: "人", t: "rén ~ person" }, { ch: "大", t: "dà ~ big" }, { ch: "小", t: "xiǎo ~ small" },
            { ch: "山", t: "shān ~ mountain" }, { ch: "水", t: "shuǐ ~ water" }, { ch: "火", t: "huǒ ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "nǐ hǎo", m: "hello" },
        { w: "謝謝", t: "xièxiè", m: "thank you" },
        { w: "是", t: "shì", m: "yes" },
        { w: "不是", t: "bú shì", m: "no" },
        { w: "雞", t: "jī", m: "chicken" },
        { w: "蛋", t: "dàn", m: "egg" },
      ],
    },
  },
  taishanese: {
    name: "Taishanese",
    facts: [
      "Taishanese comes from Taishan in Guangdong province and was historically the dominant Chinese dialect among early Chinese immigrants to the United States.",
      "Because of 19th and early 20th century emigration patterns, Taishanese was once heard more often than Cantonese or Mandarin in American Chinatowns.",
    ],
    basics: {
      writing: "Written with Chinese characters, shared across varieties. Pronunciation shown here is Mandarin, as a reference.",
      note: "Not sure of Taishanese's own romanization yet ~ Mandarin pinyin is shown as a starting reference.",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "yī ~ one" }, { ch: "二", t: "èr ~ two" }, { ch: "三", t: "sān ~ three" },
            { ch: "人", t: "rén ~ person" }, { ch: "大", t: "dà ~ big" }, { ch: "小", t: "xiǎo ~ small" },
            { ch: "山", t: "shān ~ mountain" }, { ch: "水", t: "shuǐ ~ water" }, { ch: "火", t: "huǒ ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "nǐ hǎo", m: "hello" },
        { w: "謝謝", t: "xièxiè", m: "thank you" },
        { w: "是", t: "shì", m: "yes" },
        { w: "不是", t: "bú shì", m: "no" },
        { w: "雞", t: "jī", m: "chicken" },
        { w: "蛋", t: "dàn", m: "egg" },
      ],
    },
  },
  shanghainese: {
    name: "Shanghainese",
    facts: [
      "Shanghainese is a Wu Chinese variety and, unlike Mandarin or Cantonese, has a set of voiced consonants that give it a noticeably different sound.",
      "Shanghainese tone sandhi is so extensive that the tone of an entire multi-syllable phrase can be determined largely by its first syllable.",
    ],
    basics: {
      writing: "Written with Chinese characters, shared across varieties. Pronunciation shown here is Mandarin, as a reference.",
      note: "Not sure of Shanghainese's own romanization yet ~ Mandarin pinyin is shown as a starting reference.",
      groups: [
        {
          label: "Basic Characters",
          items: [
            { ch: "一", t: "yī ~ one" }, { ch: "二", t: "èr ~ two" }, { ch: "三", t: "sān ~ three" },
            { ch: "人", t: "rén ~ person" }, { ch: "大", t: "dà ~ big" }, { ch: "小", t: "xiǎo ~ small" },
            { ch: "山", t: "shān ~ mountain" }, { ch: "水", t: "shuǐ ~ water" }, { ch: "火", t: "huǒ ~ fire" },
          ],
        },
      ],
      vocab: [
        { w: "你好", t: "nǐ hǎo", m: "hello" },
        { w: "謝謝", t: "xièxiè", m: "thank you" },
        { w: "是", t: "shì", m: "yes" },
        { w: "不是", t: "bú shì", m: "no" },
        { w: "雞", t: "jī", m: "chicken" },
        { w: "蛋", t: "dàn", m: "egg" },
      ],
    },
  },
  indonesian: {
    name: "Indonesian",
    facts: [
      "Indonesian (Bahasa Indonesia) is based on Malay and was adopted as a unifying national language despite hundreds of local languages spoken across the archipelago.",
      "Indonesian has no verb conjugation for tense, gender, or number, relying instead on context and time words.",
    ],
    basics: {
      writing: "Uses the Latin alphabet ~ here are a few pronunciation quirks to get started.",
      groups: [
        {
          label: "Pronunciation Notes",
          items: [
            { ch: "c", t: "\"ch\" as in chat" }, { ch: "ng", t: "single nasal sound, like singer" },
            { ch: "ny", t: "\"ny\" as in canyon" }, { ch: "r", t: "rolled/trilled" },
          ],
        },
      ],
      vocab: [
        { w: "halo", t: "hah-lo", m: "hello" },
        { w: "terima kasih", t: "tuh-ree-mah kah-see", m: "thank you" },
        { w: "ya", t: "yah", m: "yes" },
        { w: "tidak", t: "tee-dahk", m: "no" },
        { w: "ayam", t: "ah-yahm", m: "chicken" },
        { w: "telur", t: "tuh-loor", m: "egg" },
      ],
    },
  },
  "south-korean": {
    name: "South Korean",
    facts: [
      "The Korean alphabet, Hangul, was created in 1443 under King Sejong the Great and is prized for how logically it represents sounds.",
      "Korean uses different speech levels and honorifics that change verb endings depending on who you're speaking to.",
    ],
    basics: {
      writing: "Hangul, the Korean alphabet, is featural ~ the shape of each letter hints at how it's pronounced.",
      groups: [
        {
          label: "Consonants",
          items: [
            { ch: "ㄱ", t: "g/k" }, { ch: "ㄴ", t: "n" }, { ch: "ㄷ", t: "d/t" }, { ch: "ㄹ", t: "r/l" },
            { ch: "ㅁ", t: "m" }, { ch: "ㅂ", t: "b/p" }, { ch: "ㅅ", t: "s" }, { ch: "ㅇ", t: "ng/silent" },
            { ch: "ㅈ", t: "j" }, { ch: "ㅊ", t: "ch" }, { ch: "ㅋ", t: "k" }, { ch: "ㅌ", t: "t" },
            { ch: "ㅍ", t: "p" }, { ch: "ㅎ", t: "h" },
          ],
        },
        {
          label: "Vowels",
          items: [
            { ch: "ㅏ", t: "a" }, { ch: "ㅑ", t: "ya" }, { ch: "ㅓ", t: "eo" }, { ch: "ㅕ", t: "yeo" },
            { ch: "ㅗ", t: "o" }, { ch: "ㅛ", t: "yo" }, { ch: "ㅜ", t: "u" }, { ch: "ㅠ", t: "yu" },
            { ch: "ㅡ", t: "eu" }, { ch: "ㅣ", t: "i" },
          ],
        },
      ],
      vocab: [
        { w: "안녕하세요", t: "annyeonghaseyo", m: "hello" },
        { w: "감사합니다", t: "gamsahamnida", m: "thank you" },
        { w: "네", t: "ne", m: "yes" },
        { w: "아니요", t: "aniyo", m: "no" },
        { w: "닭", t: "dak", m: "chicken" },
        { w: "계란", t: "gyeran", m: "egg" },
      ],
    },
  },
  "north-korean": {
    name: "North Korean",
    facts: [
      "North Korea uses the same Hangul alphabet as South Korea, but has developed distinct vocabulary and pronunciation since the peninsula's division.",
      'North Korean Korean, called Munhwaŏ ("cultured language"), purged many Chinese-derived and foreign loanwords in favor of native Korean coinages.',
    ],
    basics: {
      writing: "Uses the same Hangul alphabet as South Korea ~ see that page for the consonants and vowels.",
      note: "Vocabulary has drifted apart since division ~ egg is a good example below.",
      vocab: [
        { w: "반갑습니다", t: "bangapseumnida", m: "hello" },
        { w: "고맙습니다", t: "gomapseumnida", m: "thank you" },
        { w: "네", t: "ne", m: "yes" },
        { w: "아니요", t: "aniyo", m: "no" },
        { w: "닭", t: "tak", m: "chicken" },
        { w: "닭알", t: "tagal", m: "egg (lit. \"chicken-egg\", vs. South Korean 계란/gyeran)" },
      ],
    },
  },
  tagalog: {
    name: "Tagalog",
    facts: [
      "Tagalog is the basis for Filipino, the national language of the Philippines, and has absorbed loanwords from Spanish, English, Malay, and Chinese.",
      "Tagalog verbs conjugate by focus rather than just tense, meaning the verb form changes based on whether the subject is the actor, object, or location.",
    ],
    basics: {
      writing: "Uses the Latin-based Filipino alphabet, with two extra letters beyond the English one.",
      groups: [
        {
          label: "Extra Letters",
          items: [
            { ch: "Ñ ñ", t: "\"ny\" sound, as in Spanish" },
            { ch: "NG ng", t: "single nasal sound, like singer" },
          ],
        },
      ],
      vocab: [
        { w: "kumusta", t: "koo-moos-tah", m: "hello" },
        { w: "salamat", t: "sah-lah-maht", m: "thank you" },
        { w: "oo", t: "oh-oh", m: "yes" },
        { w: "hindi", t: "heen-dee", m: "no" },
        { w: "manok", t: "mah-nok", m: "chicken" },
        { w: "itlog", t: "it-log", m: "egg" },
      ],
    },
  },
  mongolian: {
    name: "Mongolian",
    facts: [
      "Traditional Mongolian script is written vertically, top to bottom, in columns read left to right.",
      "Mongolian is a vowel-harmony language, meaning vowels within a word must belong to the same harmonic group.",
    ],
    basics: {
      writing: "Modern Mongolian is usually written in Cyrillic (used here); the traditional vertical script is also still used, especially in Inner Mongolia.",
      groups: [
        {
          label: "Vowels",
          items: [
            { ch: "а", t: "a" }, { ch: "э", t: "e" }, { ch: "и", t: "i" }, { ch: "о", t: "o" },
            { ch: "ө", t: "ö (not in Russian)" }, { ch: "у", t: "u" }, { ch: "ү", t: "ü (not in Russian)" },
            { ch: "ы", t: "y" }, { ch: "ь", t: "soft sign" },
          ],
        },
      ],
      vocab: [
        { w: "сайн байна уу", t: "sain baina uu", m: "hello" },
        { w: "баярлалаа", t: "bayarlalaa", m: "thank you" },
        { w: "тийм", t: "tiim", m: "yes" },
        { w: "үгүй", t: "ügüi", m: "no" },
        { w: "тахиа", t: "takhia", m: "chicken" },
        { w: "өндөг", t: "öndög", m: "egg" },
      ],
    },
  },
  lao: {
    name: "Lao",
    facts: [
      "Lao is a tonal language, most commonly described as having six tones depending on the region.",
      "The Lao script is an abugida derived from the Khmer script and largely omits spaces between words, using them mainly to separate phrases.",
    ],
    basics: {
      writing: "Lao script is an abugida related to Thai and Khmer, and is also tonal.",
      note: "Lao's 6 tones follow complex, dialect-dependent rules, so they're not charted here ~ just the core letters.",
      groups: [
        {
          label: "Consonants",
          items: [
            { ch: "ກ", t: "k" }, { ch: "ຂ", t: "kh" }, { ch: "ງ", t: "ng" }, { ch: "ຈ", t: "ch" },
            { ch: "ສ", t: "s" }, { ch: "ດ", t: "d" }, { ch: "ຕ", t: "t" }, { ch: "ນ", t: "n" },
            { ch: "ບ", t: "b" }, { ch: "ປ", t: "p" }, { ch: "ມ", t: "m" }, { ch: "ລ", t: "l" },
          ],
        },
        {
          label: "Vowels",
          items: [
            { ch: "ະ", t: "a" }, { ch: "າ", t: "aa" }, { ch: "ິ", t: "i" }, { ch: "ີ", t: "ii" },
            { ch: "ຸ", t: "u" }, { ch: "ູ", t: "uu" },
          ],
        },
      ],
      vocab: [
        { w: "ສະບາຍດີ", t: "sabaidee", m: "hello" },
        { w: "ຂອບໃຈ", t: "khop chai", m: "thank you" },
        { w: "ແມ່ນ", t: "maen", m: "yes" },
        { w: "ບໍ່", t: "bor", m: "no" },
        { w: "ໄກ່", t: "gai", m: "chicken" },
        { w: "ໄຂ່", t: "khai", m: "egg" },
      ],
    },
  },
  burmese: {
    name: "Burmese",
    facts: [
      "Burmese is written in a distinctive circular script, where letters are formed with loops originally shaped by writing on palm leaves.",
      'Burmese is tonal, with three main tones plus a "checked" syllable type, each changing a word\'s meaning entirely.',
    ],
    basics: {
      writing: "Burmese uses a rounded, circular script, originally shaped by writing on palm leaves.",
      note: "Burmese has 4 tone/register types (low, high, creaky, checked), shown through spelling rather than separate letters.",
      groups: [
        {
          label: "Consonants",
          items: [
            { ch: "က", t: "k" }, { ch: "ခ", t: "kh" }, { ch: "ဂ", t: "g" }, { ch: "င", t: "ng" },
            { ch: "စ", t: "s" }, { ch: "တ", t: "t" }, { ch: "ထ", t: "ht" }, { ch: "ဒ", t: "d" },
            { ch: "န", t: "n" }, { ch: "ပ", t: "p" }, { ch: "မ", t: "m" }, { ch: "လ", t: "l" },
          ],
        },
      ],
      vocab: [
        { w: "မင်္ဂလာပါ", t: "mingalarbar", m: "hello" },
        { w: "ကျေးဇူးတင်ပါတယ်", t: "kyay zu tin ba deh", m: "thank you" },
        { w: "ဟုတ်ကဲ့", t: "houk kae", m: "yes" },
        { w: "မဟုတ်ဘူး", t: "ma houk buu", m: "no" },
        { w: "ကြက်", t: "kyet", m: "chicken" },
        { w: "ဥ", t: "u", m: "egg" },
      ],
    },
  },
  khmer: {
    name: "Khmer",
    facts: [
      "Khmer has one of the longest alphabets of any language, with 74 letters including consonants, vowels, and diacritics.",
      "Unlike many neighboring languages, Khmer is not tonal, relying instead on vowel length and quality to distinguish words.",
    ],
    basics: {
      writing: "Khmer script is an abugida with 74 characters in total, including vowels that change shape around consonants.",
      note: "Khmer's vowel signs change shape depending on which consonant they attach to, which is part of why the full alphabet totals 74 characters ~ just the core consonants are shown here.",
      groups: [
        {
          label: "Consonants",
          items: [
            { ch: "ក", t: "k" }, { ch: "ខ", t: "kh" }, { ch: "គ", t: "k" }, { ch: "ង", t: "ng" },
            { ch: "ច", t: "ch" }, { ch: "ជ", t: "ch" }, { ch: "ដ", t: "d" }, { ch: "ត", t: "t" },
            { ch: "ន", t: "n" }, { ch: "ប", t: "b" }, { ch: "ម", t: "m" }, { ch: "រ", t: "r" },
            { ch: "ល", t: "l" }, { ch: "ស", t: "s" }, { ch: "ហ", t: "h" }, { ch: "អ", t: "glottal" },
          ],
        },
      ],
      vocab: [
        { w: "ជំរាបសួរ", t: "chom reap suor", m: "hello" },
        { w: "អរគុណ", t: "arkoun", m: "thank you" },
        { w: "បាទ/ចាស", t: "baat (m) / chaa (f)", m: "yes" },
        { w: "ទេ", t: "te", m: "no" },
        { w: "មាន់", t: "moan", m: "chicken" },
        { w: "ពង", t: "poong", m: "egg" },
      ],
    },
  },
  malay: {
    name: "Malay",
    facts: [
      "Malay and Indonesian are close enough to be mutually intelligible, sharing a common root as standardized varieties of the same language family.",
      "Malay was traditionally written in the Jawi script, an Arabic-based alphabet, before the Latin-based Rumi script became standard.",
    ],
    basics: {
      writing: "Uses the Latin alphabet ~ here are a few pronunciation quirks to get started.",
      groups: [
        {
          label: "Pronunciation Notes",
          items: [
            { ch: "c", t: "\"ch\" as in chat" }, { ch: "ng", t: "single nasal sound, like singer" },
            { ch: "ny", t: "\"ny\" as in canyon" }, { ch: "r", t: "rolled/trilled" },
          ],
        },
      ],
      vocab: [
        { w: "helo", t: "heh-lo", m: "hello" },
        { w: "terima kasih", t: "tuh-ree-mah kah-see", m: "thank you" },
        { w: "ya", t: "yah", m: "yes" },
        { w: "tidak", t: "tee-dahk", m: "no" },
        { w: "ayam", t: "ah-yahm", m: "chicken" },
        { w: "telur", t: "tuh-loor", m: "egg" },
      ],
    },
  },
  jordan: {
    name: "Jordanian Arabic",
    facts: [
      "Jordanian Arabic is a Levantine dialect, close enough to Palestinian and Syrian Arabic that speakers can generally understand each other with ease.",
      "Like other spoken Arabic dialects, it differs from Modern Standard Arabic in everyday vocabulary, pronunciation, and grammar, even though both use the same script.",
    ],
    basics: {
      writing: "Written with the same Arabic script as Modern Standard Arabic ~ see that page for the full alphabet.",
      vocab: [
        { w: "مرحبا", t: "marhaba", m: "hello" },
        { w: "شكرا", t: "shukran", m: "thank you" },
        { w: "أيوه", t: "aiwa", m: "yes" },
        { w: "لأ", t: "la", m: "no" },
        { w: "فروج", t: "farrouj", m: "chicken" },
        { w: "بيضة", t: "beidha", m: "egg" },
      ],
    },
  },
  uae: {
    name: "Emirati Arabic",
    facts: [
      "Emirati Arabic is a Gulf dialect shared with neighboring countries, shaped historically by trade routes across the Arabian Peninsula and Indian Ocean.",
      "Because expatriates make up most of the UAE's population, Emirati Arabic speakers are often a linguistic minority in their own cities, alongside widely spoken English, Hindi, and Urdu.",
    ],
    basics: {
      writing: "Written with the same Arabic script as Modern Standard Arabic ~ see that page for the full alphabet.",
      vocab: [
        { w: "مرحبا", t: "marhaba", m: "hello" },
        { w: "مشكور", t: "mashkoor", m: "thank you" },
        { w: "ايوه", t: "aywa", m: "yes" },
        { w: "لا", t: "la", m: "no" },
        { w: "دجاج", t: "dajaj", m: "chicken" },
        { w: "بيض", t: "bayd", m: "egg" },
      ],
    },
  },
  arabic: {
    name: "Modern Standard Arabic",
    facts: [
      "Modern Standard Arabic is used formally across the Arab world in media, education, and government, while everyday speech varies by dialect from country to country.",
      "Arabic is written right to left, and most letters change shape depending on their position within a word.",
    ],
    basics: {
      writing: "Arabic is an abjad of 28 letters, written right to left, with most letters changing shape by position in a word.",
      groups: [
        {
          label: "Alphabet",
          items: [
            { ch: "ا", t: "a" }, { ch: "ب", t: "b" }, { ch: "ت", t: "t" }, { ch: "ث", t: "th" },
            { ch: "ج", t: "j" }, { ch: "ح", t: "ḥ" }, { ch: "خ", t: "kh" }, { ch: "د", t: "d" },
            { ch: "ذ", t: "dh" }, { ch: "ر", t: "r" }, { ch: "ز", t: "z" }, { ch: "س", t: "s" },
            { ch: "ش", t: "sh" }, { ch: "ص", t: "ṣ" }, { ch: "ض", t: "ḍ" }, { ch: "ط", t: "ṭ" },
            { ch: "ظ", t: "ẓ" }, { ch: "ع", t: "ʿ" }, { ch: "غ", t: "gh" }, { ch: "ف", t: "f" },
            { ch: "ق", t: "q" }, { ch: "ك", t: "k" }, { ch: "ل", t: "l" }, { ch: "م", t: "m" },
            { ch: "ن", t: "n" }, { ch: "ه", t: "h" }, { ch: "و", t: "w" }, { ch: "ي", t: "y" },
          ],
        },
      ],
      vocab: [
        { w: "مرحبا", t: "marhaban", m: "hello" },
        { w: "شكرا", t: "shukran", m: "thank you" },
        { w: "نعم", t: "na'am", m: "yes" },
        { w: "لا", t: "la", m: "no" },
        { w: "دجاجة", t: "dajaja", m: "chicken" },
        { w: "بيضة", t: "baydha", m: "egg" },
      ],
    },
  },
  hindi: {
    name: "Hindi",
    facts: [
      "Hindi is written in the Devanagari script, where a horizontal line connects most letters along the top of each word.",
      "Hindi nouns and adjectives carry grammatical gender, and verbs change form to agree with the gender of the subject.",
    ],
    basics: {
      writing: "Devanagari is an abugida where a horizontal line connects most letters along the top.",
      groups: [
        {
          label: "Vowels",
          items: [
            { ch: "अ", t: "a" }, { ch: "आ", t: "aa" }, { ch: "इ", t: "i" }, { ch: "ई", t: "ii" },
            { ch: "उ", t: "u" }, { ch: "ऊ", t: "uu" }, { ch: "ए", t: "e" }, { ch: "ओ", t: "o" },
          ],
        },
        {
          label: "Consonants",
          items: [
            { ch: "क", t: "ka" }, { ch: "ख", t: "kha" }, { ch: "ग", t: "ga" }, { ch: "घ", t: "gha" },
            { ch: "च", t: "cha" }, { ch: "ज", t: "ja" }, { ch: "त", t: "ta" }, { ch: "द", t: "da" },
            { ch: "न", t: "na" }, { ch: "प", t: "pa" }, { ch: "ब", t: "ba" }, { ch: "म", t: "ma" },
            { ch: "र", t: "ra" }, { ch: "ल", t: "la" }, { ch: "स", t: "sa" }, { ch: "ह", t: "ha" },
          ],
        },
      ],
      vocab: [
        { w: "नमस्ते", t: "namaste", m: "hello" },
        { w: "धन्यवाद", t: "dhanyavaad", m: "thank you" },
        { w: "हाँ", t: "haan", m: "yes" },
        { w: "नहीं", t: "nahin", m: "no" },
        { w: "मुर्गी", t: "murgi", m: "chicken" },
        { w: "अंडा", t: "anda", m: "egg" },
      ],
    },
  },
  bengali: {
    name: "Bengali",
    facts: [
      "Bengali is the most widely spoken language in Bangladesh and the second most spoken in India, with over 230 million native speakers.",
      "Bengali's script is also an abugida, related to Devanagari, and is known for its distinctive looping letterforms.",
    ],
    basics: {
      writing: "Bengali script is an abugida related to Devanagari, known for its looping letterforms.",
      groups: [
        {
          label: "Vowels",
          items: [
            { ch: "অ", t: "o" }, { ch: "আ", t: "a" }, { ch: "ই", t: "i" }, { ch: "ঈ", t: "ii" },
            { ch: "উ", t: "u" }, { ch: "এ", t: "e" }, { ch: "ও", t: "o" },
          ],
        },
        {
          label: "Consonants",
          items: [
            { ch: "ক", t: "k" }, { ch: "খ", t: "kh" }, { ch: "গ", t: "g" }, { ch: "চ", t: "ch" },
            { ch: "জ", t: "j" }, { ch: "ট", t: "t" }, { ch: "ড", t: "d" }, { ch: "ত", t: "t" },
            { ch: "দ", t: "d" }, { ch: "ন", t: "n" }, { ch: "প", t: "p" }, { ch: "ব", t: "b" },
            { ch: "ম", t: "m" }, { ch: "র", t: "r" }, { ch: "ল", t: "l" }, { ch: "স", t: "s" },
          ],
        },
      ],
      vocab: [
        { w: "নমস্কার", t: "nomoshkar", m: "hello" },
        { w: "ধন্যবাদ", t: "dhonnobad", m: "thank you" },
        { w: "হ্যাঁ", t: "hyā̃", m: "yes" },
        { w: "না", t: "na", m: "no" },
        { w: "মুরগি", t: "murgi", m: "chicken" },
        { w: "ডিম", t: "dim", m: "egg" },
      ],
    },
  },
  urdu: {
    name: "Urdu",
    facts: [
      "Urdu and Hindi are nearly identical when spoken but are written in entirely different scripts: Urdu uses a Perso-Arabic script, Hindi uses Devanagari.",
      "Urdu developed centuries ago as a blend of local Indian languages with Persian, Arabic, and Turkic vocabulary.",
    ],
    basics: {
      writing: "Urdu is written in a Perso-Arabic script, sharing most letters with Arabic plus a few extras below.",
      groups: [
        {
          label: "Extra Letters (beyond Arabic)",
          items: [
            { ch: "ٹ", t: "ṭ (retroflex t)" }, { ch: "ڈ", t: "ḍ (retroflex d)" }, { ch: "ڑ", t: "ṛ (retroflex r)" },
            { ch: "پ", t: "p" }, { ch: "چ", t: "ch" }, { ch: "گ", t: "g" }, { ch: "ں", t: "nasalization" },
          ],
        },
      ],
      vocab: [
        { w: "السلام علیکم", t: "assalamu alaikum", m: "hello" },
        { w: "شکریہ", t: "shukriya", m: "thank you" },
        { w: "جی ہاں", t: "ji haan", m: "yes" },
        { w: "نہیں", t: "nahi", m: "no" },
        { w: "مرغی", t: "murghi", m: "chicken" },
        { w: "انڈا", t: "anda", m: "egg" },
      ],
    },
  },
  punjabi: {
    name: "Punjabi",
    facts: [
      "Punjabi is a tonal language, unusual among Indo-Aryan languages, with tone arising historically from lost consonant sounds.",
      "Punjabi is written in the Gurmukhi script in India and the Shahmukhi (Perso-Arabic) script in Pakistan.",
    ],
    basics: {
      writing: "Punjabi in India is written in the Gurmukhi script, shown here.",
      groups: [
        {
          label: "Consonants",
          items: [
            { ch: "ਸ", t: "s" }, { ch: "ਹ", t: "h" }, { ch: "ਕ", t: "k" }, { ch: "ਖ", t: "kh" },
            { ch: "ਗ", t: "g" }, { ch: "ਘ", t: "gh" }, { ch: "ਚ", t: "ch" }, { ch: "ਜ", t: "j" },
            { ch: "ਤ", t: "t" }, { ch: "ਦ", t: "d" },
          ],
        },
        {
          label: "Vowel Signs",
          items: [
            { ch: "ਾ", t: "aa" }, { ch: "ਿ", t: "i" }, { ch: "ੀ", t: "ii" }, { ch: "ੁ", t: "u" },
            { ch: "ੂ", t: "uu" }, { ch: "ੇ", t: "e" },
          ],
        },
      ],
      vocab: [
        { w: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", t: "sat sri akal", m: "hello" },
        { w: "ਧੰਨਵਾਦ", t: "dhanvaad", m: "thank you" },
        { w: "ਹਾਂ", t: "haan", m: "yes" },
        { w: "ਨਹੀਂ", t: "nahi", m: "no" },
        { w: "ਕੁੱਕੜ", t: "kukkar", m: "chicken" },
        { w: "ਆਂਡਾ", t: "aanda", m: "egg" },
      ],
    },
  },
  telugu: {
    name: "Telugu",
    facts: [
      'Telugu has one of the largest numbers of native speakers in India and is known for its smooth, vowel-ending words, earning it the nickname "Italian of the East."',
      "Telugu script is an abugida with rounded letterforms, believed to have evolved that shape from writing on palm leaves.",
    ],
    basics: {
      writing: "Telugu script is an abugida with smooth, rounded letterforms.",
      groups: [
        {
          label: "Vowels",
          items: [
            { ch: "అ", t: "a" }, { ch: "ఆ", t: "aa" }, { ch: "ఇ", t: "i" }, { ch: "ఈ", t: "ii" },
            { ch: "ఉ", t: "u" }, { ch: "ఊ", t: "uu" }, { ch: "ఎ", t: "e" }, { ch: "ఒ", t: "o" },
          ],
        },
        {
          label: "Consonants",
          items: [
            { ch: "క", t: "ka" }, { ch: "ఖ", t: "kha" }, { ch: "గ", t: "ga" }, { ch: "చ", t: "cha" },
            { ch: "జ", t: "ja" }, { ch: "త", t: "ta" }, { ch: "ద", t: "da" }, { ch: "న", t: "na" },
            { ch: "ప", t: "pa" }, { ch: "బ", t: "ba" }, { ch: "మ", t: "ma" }, { ch: "వ", t: "va" },
          ],
        },
      ],
      vocab: [
        { w: "నమస్కారం", t: "namaskaram", m: "hello" },
        { w: "ధన్యవాదాలు", t: "dhanyavaadalu", m: "thank you" },
        { w: "అవును", t: "avunu", m: "yes" },
        { w: "కాదు", t: "kaadu", m: "no" },
        { w: "కోడి", t: "kodi", m: "chicken" },
        { w: "గుడ్డు", t: "guddu", m: "egg" },
      ],
    },
  },
  marathi: {
    name: "Marathi",
    facts: [
      "Marathi is one of the oldest languages of the Indo-Aryan family, with a literary tradition dating back over a thousand years.",
      "Marathi is written in the Devanagari script and is the official language of the Indian state of Maharashtra, home to Mumbai.",
    ],
    basics: {
      writing: "Uses the same Devanagari script as Hindi ~ see that page for the alphabet.",
      vocab: [
        { w: "नमस्कार", t: "namaskar", m: "hello" },
        { w: "धन्यवाद", t: "dhanyavaad", m: "thank you" },
        { w: "हो", t: "ho", m: "yes" },
        { w: "नाही", t: "nahi", m: "no" },
        { w: "कोंबडी", t: "kombadi", m: "chicken" },
        { w: "अंडे", t: "ande", m: "egg" },
      ],
    },
  },
  tamil: {
    name: "Tamil",
    facts: [
      "Tamil is one of the longest continuously used classical languages in the world, with written records dating back more than 2,000 years.",
      "Tamil script has no capital letters and includes unique characters for sounds not found in other Indian languages.",
    ],
    basics: {
      writing: "Tamil script has no capital letters and includes a few sounds unique to Tamil.",
      groups: [
        {
          label: "Vowels",
          items: [
            { ch: "அ", t: "a" }, { ch: "ஆ", t: "aa" }, { ch: "இ", t: "i" }, { ch: "ஈ", t: "ii" },
            { ch: "உ", t: "u" }, { ch: "ஊ", t: "uu" }, { ch: "எ", t: "e" }, { ch: "ஒ", t: "o" },
          ],
        },
        {
          label: "Consonants",
          items: [
            { ch: "க", t: "k" }, { ch: "ங", t: "ng" }, { ch: "ச", t: "ch" }, { ch: "ஞ", t: "ny" },
            { ch: "த", t: "t" }, { ch: "ந", t: "n" }, { ch: "ப", t: "p" }, { ch: "ம", t: "m" },
            { ch: "ய", t: "y" }, { ch: "ர", t: "r" }, { ch: "ல", t: "l" }, { ch: "வ", t: "v" },
            { ch: "ழ", t: "zh (unique to Tamil)" },
          ],
        },
      ],
      vocab: [
        { w: "வணக்கம்", t: "vanakkam", m: "hello" },
        { w: "நன்றி", t: "nandri", m: "thank you" },
        { w: "ஆம்", t: "aam", m: "yes" },
        { w: "இல்லை", t: "illai", m: "no" },
        { w: "கோழி", t: "kozhi", m: "chicken" },
        { w: "முட்டை", t: "muttai", m: "egg" },
      ],
    },
  },
  farsi: {
    name: "Farsi",
    facts: [
      "Farsi (Persian) is written in a Perso-Arabic script but, unlike Arabic, is not a Semitic language; it belongs to the Indo-European family.",
      "Farsi grammar is comparatively simple, with no grammatical gender and mostly regular verb conjugation patterns.",
    ],
    basics: {
      writing: "Farsi is written in a Perso-Arabic script, sharing most letters with Arabic plus a few extras below.",
      groups: [
        {
          label: "Extra Letters (beyond Arabic)",
          items: [
            { ch: "پ", t: "p" }, { ch: "چ", t: "ch" }, { ch: "ژ", t: "zh" }, { ch: "گ", t: "g" },
          ],
        },
      ],
      vocab: [
        { w: "سلام", t: "salaam", m: "hello" },
        { w: "متشکرم", t: "motashakkeram", m: "thank you" },
        { w: "بله", t: "bale", m: "yes" },
        { w: "نه", t: "na", m: "no" },
        { w: "مرغ", t: "morgh", m: "chicken" },
        { w: "تخم مرغ", t: "tokhm-e-morgh", m: "egg" },
      ],
    },
  },
  uzbek: {
    name: "Uzbek",
    facts: [
      "Uzbek has been written in Arabic, Latin, and Cyrillic scripts at different points in its history, and is currently transitioning back to a Latin-based alphabet.",
      "Uzbek is a Turkic language and, like other Turkic languages, relies heavily on vowel harmony and suffixes rather than prepositions.",
    ],
    basics: {
      writing: "Modern Uzbek uses a Latin alphabet with a few extra letters not found in English.",
      groups: [
        {
          label: "Special Letters",
          items: [
            { ch: "oʻ", t: "aw sound" }, { ch: "gʻ", t: "gh sound" }, { ch: "sh", t: "sh sound" },
            { ch: "ch", t: "ch sound" }, { ch: "ʼ", t: "tutuq belgisi ~ glottal stop" },
          ],
        },
      ],
      vocab: [
        { w: "salom", t: "sah-lom", m: "hello" },
        { w: "rahmat", t: "rah-mat", m: "thank you" },
        { w: "ha", t: "hah", m: "yes" },
        { w: "yoʻq", t: "yawk", m: "no" },
        { w: "tovuq", t: "toh-vook", m: "chicken" },
        { w: "tuxum", t: "too-hoom", m: "egg" },
      ],
    },
  },
};

const MUSIC = {
  seasons: {
    name: "Seasonz",
    tracks: [
      { title: "Yuki no Hana", subtitle: "Winter", type: "spotify", id: "6Zyizxfz4NXdCgVLwhuBNw" },
      { title: "Lilac", subtitle: "Spring", type: "spotify", id: "5xrtzzzikpG3BLbo4q1Yul" },
      { title: "Lady Sunshine", subtitle: "Summer", type: "spotify", id: "1x33hYJerbtoNgUSd5PEzN" },
      { title: "Happy Are Those in Love", subtitle: "Fall", type: "spotify", id: "606wvF2jK9MrZrwoWVSVnx" },
    ],
  },
  albums: {
    name: "Albumz",
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
    name: "Singlez",
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
      "/assets/calobro/98.png",
      "/assets/calobro/99.png",
      "/assets/calobro/100.png",
      "/assets/calobro/101.png",
      "/assets/calobro/102.png",
    ],
  },
  "hire-power": {
    name: "Hire Power 😇",
    blurb: "A job application app my team, ALTLab Angels, built together. The name's a pun on \"higher power,\" fitting for something meant to help land your next job.",
    images: [
      "/assets/hire-power/001.png",
      "/assets/hire-power/002.png",
      "/assets/hire-power/003.png",
      "/assets/hire-power/0035.png",
      "/assets/hire-power/004.png",
      "/assets/hire-power/005.png",
      "/assets/hire-power/006.png",
      "/assets/hire-power/007.png",
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
    image: "/assets/games/plants-vs-zombies.jpg",
  },
  minecraft: {
    name: "Minecraft",
    emoji: "⛏️",
    blurb: "A blocky sandbox where you mine, craft, build, and survive in a procedurally generated world that's basically unlimited digital Legos.",
    image: "/assets/games/minecraft.webp",
  },
  roblox: {
    name: "Roblox",
    emoji: "🎮",
    blurb: "A platform of millions of user-made games, from obbies to tycoons to full RPGs, all built by its own massive community.",
    image: "/assets/games/roblox.jpg",
  },
  "rollercoaster-tycoon": {
    name: "RollerCoaster Tycoon",
    emoji: "🎢",
    blurb: "A park-building sim where you design coasters, manage guests, and try not to build a loop so intense it makes everyone throw up.",
    image: "/assets/games/rollercoaster-tycoon.jpg",
  },
  "cities-skylines": {
    name: "Cities: Skylines",
    emoji: "🏙️",
    blurb: "A city-builder about zoning, traffic, and budgets, where the real challenge is untangling gridlock at 2 a.m.",
    image: "/assets/games/cities-skylines.webp",
  },
  "sims-4": {
    name: "The Sims 4",
    emoji: "🏡",
    blurb: "A life simulator where you build houses, craft Sims, and guide their chaotic little lives, often straight into the pool with the ladder removed.",
    image: "/assets/games/sims-4.png",
  },
  "stardew-valley": {
    name: "Stardew Valley",
    emoji: "🌾",
    blurb: "A cozy farming sim about planting crops, befriending townsfolk, and slowly turning a run-down farm into a thriving homestead.",
    image: "/assets/games/stardew-valley.jpg",
  },
  celeste: {
    name: "Celeste",
    emoji: "🏔️",
    blurb: "A precision platformer about climbing a mountain, with tight controls and a story about anxiety and self-doubt wrapped into every jump.",
    image: "/assets/games/celeste.png",
  },
  "chrono-trigger": {
    name: "Chrono Trigger",
    emoji: "⏳",
    blurb: "A beloved SNES-era RPG about time travel, with a battle system and story still held up as one of the genre's best.",
    image: "/assets/games/chrono-trigger.jpg",
  },
  "final-fantasy-7": {
    name: "Final Fantasy 7",
    emoji: "⚔️",
    blurb: "A landmark RPG following Cloud and an eco-terrorist resistance against a monolithic energy conglomerate, later remade for modern platforms.",
    image: "/assets/games/final-fantasy-7.jpg",
  },
};

const RECIPES = {
  "chicken-noodle-soup": {
    title: "Chicken Noodle Soup",
    image: "/assets/chicken-noodle-soup.jpg",
    ingredients: [
      "1 tbsp olive oil",
      "1 onion, diced",
      "2 carrots, sliced",
      "2 celery stalks, sliced",
      "8 cups chicken broth",
      "2 boneless, skinless chicken breasts",
      "2 cups egg noodles",
      "Salt-free potassium chloride (salt substitute) and pepper, to taste",
      "Fresh parsley, chopped",
      "Lao Gan Ma chili crisp, to taste (optional)",
    ],
    steps: [
      "Heat the olive oil in a large pot over medium heat and saute the onion, carrots, and celery until softened, about 5 minutes.",
      "Add the chicken broth and chicken breasts, then bring to a boil.",
      "Reduce heat and simmer until the chicken is cooked through, about 15 minutes.",
      "Remove the chicken, shred it with two forks, and return it to the pot.",
      "Add the egg noodles and cook until tender, about 6-8 minutes.",
      "Season with the potassium chloride salt substitute and pepper, top with fresh parsley, and serve hot.",
      "Stir in a spoonful of Lao Gan Ma if you want extra heat and savoriness (optional).",
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

  const SHORTCUTS = [
    { keys: ["'"], desc: "Previous nav item" },
    { keys: ["/"], desc: "Next nav item" },
    { keys: ["W", "A", "S", "D"], desc: "Move between items" },
    { keys: ["S"], desc: "Jump into a focused tab" },
    { keys: ["Space"], desc: "Activate focused link" },
    { keys: ["Enter"], desc: "Activate focused link/button" },
    { keys: ["Shift"], desc: "Go back" },
    { keys: ["Right Ctrl"], desc: "Go forward" },
    { keys: ["Esc"], desc: "Close this dialog" },
  ];

  const helpFab = document.createElement("button");
  helpFab.type = "button";
  helpFab.className = "help-fab";
  helpFab.setAttribute("aria-label", "Keyboard shortcuts");
  helpFab.textContent = "?";
  document.body.appendChild(helpFab);

  const helpOverlay = document.createElement("div");
  helpOverlay.className = "help-modal-overlay";

  const helpModal = document.createElement("div");
  helpModal.className = "help-modal";
  helpModal.setAttribute("role", "dialog");
  helpModal.setAttribute("aria-modal", "true");
  helpModal.setAttribute("aria-label", "Keyboard shortcuts");

  const helpHeader = document.createElement("div");
  helpHeader.className = "help-modal-header";
  helpHeader.innerHTML = "<h2>Keyboard Shortcuts</h2>";

  const helpClose = document.createElement("button");
  helpClose.type = "button";
  helpClose.className = "help-modal-close";
  helpClose.setAttribute("aria-label", "Close");
  helpClose.textContent = "×";
  helpHeader.appendChild(helpClose);
  helpModal.appendChild(helpHeader);

  const helpList = document.createElement("ul");
  helpList.className = "help-shortcut-list";
  SHORTCUTS.forEach((shortcut) => {
    const item = document.createElement("li");

    const keysWrap = document.createElement("span");
    keysWrap.className = "help-shortcut-keys";
    shortcut.keys.forEach((k) => {
      const kbd = document.createElement("span");
      kbd.className = "help-key";
      kbd.textContent = k;
      keysWrap.appendChild(kbd);
    });

    const descSpan = document.createElement("span");
    descSpan.className = "help-shortcut-desc";
    descSpan.textContent = shortcut.desc;

    item.appendChild(keysWrap);
    item.appendChild(descSpan);
    helpList.appendChild(item);
  });
  helpModal.appendChild(helpList);

  helpOverlay.appendChild(helpModal);
  document.body.appendChild(helpOverlay);

  function openHelp() {
    helpOverlay.classList.add("open");
    helpClose.focus();
  }

  function closeHelp() {
    helpOverlay.classList.remove("open");
    helpFab.focus();
  }

  helpFab.addEventListener("click", openHelp);
  helpClose.addEventListener("click", closeHelp);
  helpOverlay.addEventListener("click", (e) => {
    if (e.target === helpOverlay) closeHelp();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && helpOverlay.classList.contains("open")) {
      closeHelp();
    }
  });

  const currentSegment = window.location.pathname.split("/").filter(Boolean)[0] || "";
  const subpageParents = {
    facts: "fun",
    recipe: "fun",
    game: "fun",
    music: "fun",
    project: "projects",
  };
  const activeSegment = subpageParents[currentSegment] || currentSegment;
  const activeHref = activeSegment ? `/${activeSegment}/` : "/";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === activeHref) {
      link.classList.add("active");
    }
  });

  const langTitle = document.getElementById("lang-title");
  const factList = document.getElementById("fact-list");
  const langBasics = document.getElementById("lang-basics");
  if (langTitle && factList) {
    const langKey = new URLSearchParams(window.location.search).get("lang");
    const lang = LANGUAGE_FACTS[langKey];

    if (lang) {
      langTitle.textContent = `${lang.name} Facts`;
      factList.innerHTML = lang.facts
        .map((fact) => `<li><p>${fact}</p></li>`)
        .join("");

      if (langBasics) {
        langBasics.innerHTML = lang.basics ? renderLanguageBasics(lang.basics) : "";
        if (lang.basics) {
          wireBasicsTabs(langBasics);
          wireOcrPractice(langBasics);
        }
      }
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

function getSiteNavDepth() {
  if (history.state && typeof history.state.navDepth === "number") {
    return history.state.navDepth;
  }

  let prevMax = 0;
  try {
    prevMax = parseInt(sessionStorage.getItem("navDepthMax") || "0", 10);
  } catch (err) {
    prevMax = 0;
  }

  const depth = prevMax + 1;
  history.replaceState({ navDepth: depth }, "", location.href);

  try {
    sessionStorage.setItem("navDepthMax", String(depth));
  } catch (err) {
    // ignore storage errors (e.g. private browsing)
  }

  return depth;
}

getSiteNavDepth();

function renderBasicsGroups(groups) {
  let html = "";
  (groups || []).forEach((group) => {
    html += `<div class="basics-group"><h3>${group.label}</h3><div class="chip-grid">`;
    group.items.forEach((item) => {
      html += `<div class="char-chip"><span class="chip-char">${item.ch}</span><span class="chip-translit">${item.t}</span></div>`;
    });
    html += "</div></div>";
  });
  return html;
}

function renderToneCards(cards) {
  let html = '<div class="tone-card-grid">';
  (cards || []).forEach((card) => {
    html += `<div class="tone-card">
      <div class="tone-card-head"><span class="tone-symbol">${card.symbol}</span><span class="tone-name">${card.name}</span></div>
      <p class="tone-effect">${card.effect}</p>
      <p class="tone-example">${card.example}</p>
    </div>`;
  });
  html += "</div>";
  return html;
}

function renderLanguageBasics(basics) {
  let html = '<div class="basics-section"><h2>Writing &amp; Basics</h2>';

  if (basics.writing) {
    html += `<p class="basics-note">${basics.writing}</p>`;
  }
  if (basics.note) {
    html += `<p class="basics-note">${basics.note}</p>`;
  }

  if (basics.tabbed && basics.tabs && basics.tabs.length) {
    html += '<div class="basics-tabs" role="tablist">';
    basics.tabs.forEach((tab, i) => {
      html += `<button type="button" class="basics-tab-btn${i === 0 ? " active" : ""}" data-basics-tab="${tab.key}" role="tab" aria-selected="${i === 0 ? "true" : "false"}">${tab.label}</button>`;
    });
    html += "</div>";
    basics.tabs.forEach((tab, i) => {
      html += `<div class="basics-tab-panel${i === 0 ? " active" : ""}" id="basics-tab-${tab.key}" role="tabpanel">`;
      if (tab.practice) {
        html += renderOcrPractice();
      } else {
        html += renderBasicsGroups(tab.groups);
        if (tab.cards) {
          html += renderToneCards(tab.cards);
        }
      }
      html += "</div>";
    });
  } else {
    html += renderBasicsGroups(basics.groups);
  }

  if (basics.vocab && basics.vocab.length) {
    html += '<div class="basics-group"><h3>Useful Words</h3><div class="vocab-table">';
    basics.vocab.forEach((v) => {
      html += `<div class="vocab-word">${v.w}</div><div class="vocab-translit">${v.t}</div><div class="vocab-meaning">${v.m}</div>`;
    });
    html += "</div></div>";
  }

  html += "</div>";
  return html;
}

function wireBasicsTabs(container) {
  const tabButtons = container.querySelectorAll(".basics-tab-btn");
  if (!tabButtons.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-basics-tab");
      tabButtons.forEach((b) => {
        const isTarget = b === btn;
        b.classList.toggle("active", isTarget);
        b.setAttribute("aria-selected", isTarget ? "true" : "false");
      });
      container.querySelectorAll(".basics-tab-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === `basics-tab-${target}`);
      });
    });
  });
}

const OCR_SERVICE_URL = "http://localhost:5050/predict";

const OCR_PRACTICE_WORDS = [
  { w: "ไก่", t: "gài", m: "chicken" },
  { w: "ไข่", t: "khài", m: "egg" },
  { w: "สวัสดี", t: "sawatdee", m: "hello" },
  { w: "ขอบคุณ", t: "khop khun", m: "thank you" },
  { w: "แมว", t: "maew", m: "cat" },
  { w: "หมา", t: "mǎa", m: "dog" },
  { w: "น้ำ", t: "náam", m: "water" },
  { w: "ไฟ", t: "fai", m: "fire" },
];

function renderOcrPractice() {
  return `
    <p class="basics-note">Draw the target word below and check it against a real Thai handwriting-recognition model. This runs locally only ~ start it with <code>docker compose --profile ocr up</code> alongside the site.</p>
    <div class="ocr-target">
      <div>
        <span class="ocr-target-word" id="ocr-target-word"></span>
        <span class="ocr-target-meta" id="ocr-target-meta"></span>
      </div>
      <button type="button" class="ocr-btn ocr-btn-secondary" id="ocr-new-word">New word</button>
    </div>
    <canvas id="ocr-canvas" class="ocr-canvas" width="440" height="220"></canvas>
    <div class="ocr-controls">
      <button type="button" class="ocr-btn ocr-btn-secondary" id="ocr-clear">Clear</button>
      <button type="button" class="ocr-btn ocr-btn-primary" id="ocr-submit">Check my writing</button>
    </div>
    <div class="ocr-result" id="ocr-result"></div>
  `;
}

function wireOcrPractice(container) {
  const canvas = container.querySelector("#ocr-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const targetWordEl = container.querySelector("#ocr-target-word");
  const targetMetaEl = container.querySelector("#ocr-target-meta");
  const resultEl = container.querySelector("#ocr-result");
  let currentWord = OCR_PRACTICE_WORDS[0];

  function clearCanvas() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
  }

  function pickWord() {
    currentWord = OCR_PRACTICE_WORDS[Math.floor(Math.random() * OCR_PRACTICE_WORDS.length)];
    targetWordEl.textContent = currentWord.w;
    targetMetaEl.textContent = `${currentWord.t} ~ ${currentWord.m}`;
    clearCanvas();
    resultEl.className = "ocr-result";
    resultEl.innerHTML = "";
  }

  clearCanvas();
  pickWord();

  let drawing = false;
  let lastX = 0;
  let lastY = 0;

  function pos(e) {
    const rect = canvas.getBoundingClientRect();
    const point = e.touches ? e.touches[0] : e;
    return [point.clientX - rect.left, point.clientY - rect.top];
  }

  function start(e) {
    e.preventDefault();
    drawing = true;
    [lastX, lastY] = pos(e);
  }

  function move(e) {
    if (!drawing) return;
    e.preventDefault();
    const [x, y] = pos(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    [lastX, lastY] = [x, y];
  }

  function stop() {
    drawing = false;
  }

  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mousemove", move);
  canvas.addEventListener("mouseup", stop);
  canvas.addEventListener("mouseleave", stop);
  canvas.addEventListener("touchstart", start);
  canvas.addEventListener("touchmove", move);
  canvas.addEventListener("touchend", stop);

  container.querySelector("#ocr-new-word").addEventListener("click", pickWord);
  container.querySelector("#ocr-clear").addEventListener("click", () => {
    clearCanvas();
    resultEl.className = "ocr-result";
    resultEl.innerHTML = "";
  });

  container.querySelector("#ocr-submit").addEventListener("click", async () => {
    resultEl.className = "ocr-result pending";
    resultEl.innerHTML = "<p>Recognizing&hellip;</p>";

    const image = canvas.toDataURL("image/png");

    try {
      const res = await fetch(OCR_SERVICE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image, target: currentWord.w }),
      });
      const data = await res.json();

      resultEl.className = `ocr-result ${data.match ? "match" : "nomatch"}`;
      resultEl.innerHTML = `
        <p class="ocr-result-status">${data.match ? "✅ Match!" : "❌ Not quite"}</p>
        <p class="ocr-result-row"><span>Model read:</span> ${data.predicted || "(nothing recognized)"}</p>
        <p class="ocr-result-row"><span>Target:</span> ${data.target}</p>
      `;
    } catch (err) {
      resultEl.className = "ocr-result error";
      resultEl.innerHTML = "<p>Can't reach the practice server. Run <code>docker compose --profile ocr up</code> to use this locally.</p>";
    }
  });
}

function getMainFocusables() {
  return Array.from(document.querySelectorAll("main a[href], main button")).filter(
    (el) => el.offsetParent !== null
  );
}

function findInDirection(current, direction, candidates) {
  const rect = current.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  let best = null;
  let bestScore = Infinity;

  candidates.forEach((el) => {
    if (el === current) return;
    const r = el.getBoundingClientRect();
    const ex = r.left + r.width / 2;
    const ey = r.top + r.height / 2;
    const dx = ex - cx;
    const dy = ey - cy;
    let primary;
    let secondary;

    if (direction === "left") {
      if (dx >= -1) return;
      primary = -dx;
      secondary = Math.abs(dy);
    } else if (direction === "right") {
      if (dx <= 1) return;
      primary = dx;
      secondary = Math.abs(dy);
    } else if (direction === "up") {
      if (dy >= -1) return;
      primary = -dy;
      secondary = Math.abs(dx);
    } else {
      if (dy <= 1) return;
      primary = dy;
      secondary = Math.abs(dx);
    }

    const score = primary + secondary * 4;
    if (score < bestScore) {
      bestScore = score;
      best = el;
    }
  });

  return best;
}

document.addEventListener("keydown", (e) => {
  if (document.querySelector(".help-modal-overlay.open")) {
    return;
  }

  const activeTag = document.activeElement ? document.activeElement.tagName : "";
  if (activeTag === "INPUT" || activeTag === "TEXTAREA" || (document.activeElement && document.activeElement.isContentEditable)) {
    return;
  }

  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

  if (key === "/" || key === "'") {
    e.preventDefault();
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    if (!navLinks.length) return;

    let idx = navLinks.indexOf(document.activeElement);
    if (idx === -1) idx = navLinks.findIndex((a) => a.classList.contains("active"));
    if (idx === -1) idx = 0;

    const delta = key === "'" ? -1 : 1;
    idx = (idx + delta + navLinks.length) % navLinks.length;
    navLinks[idx].focus();
    return;
  }

  if (key === "a" || key === "d" || key === "w" || key === "s") {
    e.preventDefault();
    const current = document.activeElement;
    const isTabButton = current && current.matches && current.matches(".tab-buttons button");

    if (key === "s" && isTabButton) {
      current.click();
      const panel = document.getElementById(current.getAttribute("data-tab"));
      const firstFocusable = panel ? panel.querySelector("a[href], button") : null;
      if (firstFocusable) firstFocusable.focus();
      return;
    }

    const candidates = getMainFocusables();
    if (!candidates.length) return;

    const from = candidates.includes(current) ? current : null;
    if (!from) {
      candidates[0].focus();
      return;
    }

    const dirMap = { a: "left", d: "right", w: "up", s: "down" };
    const next = findInDirection(from, dirMap[key], candidates);
    if (next) next.focus();
    return;
  }

  if (key === " ") {
    const current = document.activeElement;
    if (current && current.tagName === "A") {
      e.preventDefault();
      current.click();
    }
    return;
  }

  if (e.key === "Shift") {
    if (getSiteNavDepth() > 1) {
      window.history.back();
    }
    return;
  }

  if (e.code === "ControlRight") {
    window.history.forward();
  }
});
