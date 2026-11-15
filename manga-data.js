 // I worked really hard to get the API's working!
 
 const mangaList = [
            {
                id: "wt",
                title: "World Trigger",
                anilistId: 78151,
                mangadexId: "329758d5-034e-4d62-8424-75a471f478d2"
            },
            {
                id: "moriarty",
                title: "Moriarty the Patriot",
                anilistId: 98544,
                mangadexId: "1d9fad4e-b81a-4498-8cce-e5ddfb1e4f03"
            },
            {
                id: "sxf",
                title: "Spy x Family",
                anilistId: 108556,
                mangadexId: "6b958848-c885-4735-9201-12ee77abcb3c"
            },
            {
                id: "hxh",
                title: "Hunter x Hunter",
                anilistId: 30026,
                mangadexId: "db692d58-4b13-4174-ae8c-30c515c0689c",
                note: "Irregular batch releases due to author's back health."
            },
            {
                id: "frieren",
                title: "Frieren: Beyond Journey's End",
                anilistId: 118586,
                mangadexId: "b0b721ff-c388-4486-aa0f-c2b0bb321512"
            },
            {
                id: "berserk",
                title: "Berserk",
                anilistId: 30002,
                mangadexId: "801513ba-a712-498c-8f57-cae55b38cc92"
            },
            {
                id: "onepiece",
                title: "One Piece",
                anilistId: 30013,
                mangadexId: ""
            },
            {
                id: "jjk",
                title: "Jujutsu Kaisen",
                anilistId: 101517,
                mangadexId: ""
            },
            {
                id: "aot",
                title: "Attack on Titan",
                anilistId: 53390,
                mangadexId: "304ceac3-8cdb-4fe7-acf7-2b6ff7a60613"
            },
            {
                id: "cote",
                title: "Classroom of the Elite",
                anilistId: 94970,
                mangadexId: ""
            },
            {
                id: "assclass",
                title: "Assassination Classroom",
                anilistId: 69883,
                mangadexId: ""
            },
            {
                id: "csm",
                title: "Chainsaw Man",
                anilistId: 105778,
                mangadexId: ""
            },
            {
                id: "vagabond",
                title: "Vagabond",
                anilistId: 30656,
                mangadexId: ""
            },
            {
                id: "nana",
                title: "Nana",
                anilistId: 30028,
                mangadexId: ""
            },
            {
                id: "vinland",
                title: "Vinland Saga",
                anilistId: 30642,
                mangadexId: ""
            },
            {
                id: "mha",
                title: "My Hero Academia",
                anilistId: 85486,
                mangadexId: ""
            },
            {
                id: "dandadan",
                title: "Dandadan",
                anilistId: 132029,
                mangadexId: "68112dc1-2b80-4f20-beb8-2f2a8716a430"
            },
            {
                id: "sakamoto",
                title: "Sakamoto Days",
                anilistId: 125828,
                mangadexId: "58bc83a0-1808-484e-88b9-17e167469e23"
            },
            {
                id: "kagurabachi",
                title: "Kagurabachi",
                anilistId: 169355,
                mangadexId: "242b3119-0687-422c-9881-f3f1d7c49449"
            },
            {
                id: "kaiju8",
                title: "Kaiju No. 8",
                anilistId: 120760,
                mangadexId: "71763dfb-8b85-4a74-92df-dfe46478fc5d"
            },
            {
                id: "oshi",
                title: "Oshi no Ko",
                anilistId: 117195,
                mangadexId: "296cbc31-af1a-4b5b-a34b-fee2b4cad542"
            },
            {
                id: "tokyo-rev",
                title: "Tokyo Revengers",
                anilistId: 102988,
                mangadexId: "592b6689-3f4a-4e2b-94f2-5591321c9082"
            },
            {
                id: "demon-slayer",
                title: "Demon Slayer: Kimetsu no Yaiba",
                anilistId: 87216,
                mangadexId: "62040a44-0935-46b7-a691-5ae5833af0ae"
            },
            {
                id: "black-clover",
                title: "Black Clover",
                anilistId: 86123,
                mangadexId: "e7e7a8c5-204a-45e4-9829-145f853b3110"
            },
            {
                id: "dgrayman",
                title: "D.Gray-man",
                anilistId: 30024,
                mangadexId: "249f3069-f474-41d5-b5a5-648a105a333b"
            },
            {
                id: "made-in-abyss",
                title: "Made in Abyss",
                anilistId: 86551,
                mangadexId: "80422e14-b9ad-4fda-970f-de370d5fa4e5"
            },
            {
                id: "solo-leveling",
                title: "Solo Leveling",
                anilistId: 105398,
                mangadexId: "32d76d19-8a05-4db0-9fc2-e0b0648fe9d0"
            },
            {
                id: "real-inoue",
                title: "Real",
                anilistId: 30657,
                mangadexId: "",
                note: "Irregular releases by Takehiko Inoue (creator of Vagabond & Slam Dunk)."
            },
            {
                id: "planetes",
                title: "Planetes",
                anilistId: 30481,
                mangadexId: ""
            },
            {
                id: "mushishi",
                title: "Mushishi",
                anilistId: 30418,
                mangadexId: ""
            },
            {
                id: "march-comes-in-like-a-lion",
                title: "March Comes in Like a Lion",
                anilistId: 31224,
                mangadexId: ""
            },
            {
                id: "yotsuba",
                title: "Yotsuba&!",
                anilistId: 30104,
                mangadexId: ""
            },
            {
                id: "ouran-high-school-host-club",
                title: "Ouran High School Host Club",
                anilistId: 30030,
                mangadexId: ""
            },
            {
                id: "nisekoi",
                title: "Nisekoi: False Love",
                anilistId: 61499,
                mangadexId: ""
            },
            {
                id: "blue-period",
                title: "Blue Period",
                anilistId: 107237,
                mangadexId: ""
            },
            {
                id: "blame",
                title: "BLAME!",
                anilistId: 30149,
                mangadexId: ""
            },
            {
                id: "bakuman",
                title: "Bakuman.",
                anilistId: 39711,
                mangadexId: ""
            },
            {
                id: "yu-yu-hakusho",
                title: "Yu Yu Hakusho",
                anilistId: 30053,
                mangadexId: ""
            },
            {
                id: "inuyasha",
                title: "Inuyasha",
                anilistId: 30676,
                mangadexId: ""
            },
            {
                id: "planetes",
                title: "Planetes",
                anilistId: 30481,
                mangadexId: ""
            },
            {
                id: "mushishi",
                title: "Mushishi",
                anilistId: 30418,
                mangadexId: ""
            },
            {
                id: "march-comes-in-like-a-lion",
                title: "March Comes in Like a Lion",
                anilistId: 31224,
                mangadexId: ""
            },
            {
                id: "yotsuba",
                title: "Yotsuba&!",
                anilistId: 30104,
                mangadexId: ""
            },
            {
                id: "ouran-high-school-host-club",
                title: "Ouran High School Host Club",
                anilistId: 30030,
                mangadexId: ""
            },
            {
                id: "nisekoi",
                title: "Nisekoi: False Love",
                anilistId: 61499,
                mangadexId: ""
            },
            {
                id: "blue-period",
                title: "Blue Period",
                anilistId: 107237,
                mangadexId: ""
            },
            {
                id: "blame",
                title: "BLAME!",
                anilistId: 30149,
                mangadexId: ""
            },
            {
                id: "bakuman",
                title: "Bakuman.",
                anilistId: 39711,
                mangadexId: ""
            },
            {
                id: "hajime-no-ippo-alt-or-ashitas-joe",
                title: "Ashita no Joe",
                anilistId: 31303,
                mangadexId: ""
            },
            {
                id: "ao-ashi",
                title: "Ao Ashi",
                anilistId: 98570,
                mangadexId: ""
            },
            {
                id: "diamond-no-ace",
                title: "Ace of Diamond",
                anilistId: 40884,
                mangadexId: ""
            },
            {
                id: "kaguya-or-wotakoi",
                title: "Wotakoi: Love is Hard for Otaku",
                anilistId: 86717,
                mangadexId: ""
            },
            {
                id: "bloom-into-you",
                title: "Bloom Into You",
                anilistId: 86218,
                mangadexId: ""
            },
            {
                id: "maidsama",
                title: "Maid Sama!",
                anilistId: 32921,
                mangadexId: ""
            },
            {
                id: "psyren",
                title: "Psyren",
                anilistId: 33438,
                mangadexId: ""
            },
            {
                id: "katekyo-hitman-reborn",
                title: "Reborn!",
                anilistId: 30047,
                mangadexId: ""
            },
            {
                id: "toriko",
                title: "Toriko",
                anilistId: 37887,
                mangadexId: ""
            },
            {
                id: "zatch-bell",
                title: "Zatch Bell!",
                anilistId: 30869,
                mangadexId: ""
            },
            {
                id: "air-gear",
                title: "Air Gear",
                anilistId: 30074,
                mangadexId: ""
            },
            {
                id: "medaka-box",
                title: "Medaka Box",
                anilistId: 43949,
                mangadexId: ""
            },
            {
                id: "omniscient-reader",
                title: "Omniscient Reader's Viewpoint",
                anilistId: 119257,
                mangadexId: "12316b02-406d-4b33-9482-84221208b1e2"
            },
            {
                id: "kaguya-sama",
                title: "Kaguya-sama: Love Is War",
                anilistId: 86635,
                mangadexId: "37f5cce0-8070-4ada-96e5-fa24b1bd4ff9"
            },
            {
                id: "pluto",
                title: "Pluto",
                anilistId: 30745,
                mangadexId: ""
            },
            {
                id: "parasyte",
                title: "Parasyte",
                anilistId: 30401,
                mangadexId: ""
            },
            {
                id: "akira",
                title: "Akira",
                anilistId: 30664,
                mangadexId: ""
            },
            {
                id: "hajime-no-ippo",
                title: "Hajime no Ippo",
                anilistId: 30007,
                mangadexId: ""
            },
            {
                id: "golden-kamuy",
                title: "Golden Kamuy",
                anilistId: 86559,
                mangadexId: ""
            },
            {
                id: "dorohedoro",
                title: "Dorohedoro",
                anilistId: 31133,
                mangadexId: ""
            },
            {
                id: "houseki-no-kuni-alt",
                title: "hell's Paradise: Jigokuraku",
                anilistId: 100994,
                mangadexId: ""
            },
            {
                id: "tokyo-aliens",
                title: "Gantz",
                anilistId: 30564,
                mangadexId: ""
            },
            {
                id: "beelzebub",
                title: "Beelzebub",
                anilistId: 40010,
                mangadexId: ""
            },
            {
                id: "magi",
                title: "Magi: The Labyrinth of Magic",
                anilistId: 44790,
                mangadexId: ""
            },
            {
                id: "kengan-ashura",
                title: "Kengan Ashura",
                anilistId: 86265,
                mangadexId: ""
            },
            {
                id: "kakegurui",
                title: "Kakegurui",
                anilistId: 85793,
                mangadexId: ""
            },
            {
                id: "death-parade-or-future-diary",
                title: "Future Diary",
                anilistId: 30584,
                mangadexId: ""
            },
            {
                id: "promised-neverland",
                title: "The Promised Neverland",
                anilistId: 87423,
                mangadexId: ""
            },
            {
                id: "deadman-wonderland",
                title: "Deadman Wonderland",
                anilistId: 33986,
                mangadexId: ""
            },
            {
                id: "erased",
                title: "Erased",
                anilistId: 69325,
                mangadexId: ""
            },
            {
                id: "goodnight-punpun",
                title: "Goodnight Punpun",
                anilistId: 34632,
                mangadexId: ""
            },
            {
                id: "fairy-tail",
                title: "Fairy Tail",
                anilistId: 30598,
                mangadexId: ""
            },
            {
                id: "seven-deadly-sins",
                title: "The Seven Deadly Sins",
                anilistId: 74485,
                mangadexId: ""
            },
            {
                id: "four-knights-apocalypse",
                title: "Four Knights of the Apocalypse",
                anilistId: 127702,
                mangadexId: ""
            },
            {
                id: "akame-ga-kill",
                title: "Akame ga Kill!",
                anilistId: 55132,
                mangadexId: ""
            },
            {
                id: "gokurakugai",
                title: "Gokurakugai",
                anilistId: 151110,
                mangadexId: ""
            },
            {
                id: "wind-breaker",
                title: "Wind Breaker",
                anilistId: 130633,
                mangadexId: ""
            },
            {
                id: "ajin",
                title: "Ajin: Demi-Human",
                anilistId: 79865,
                mangadexId: ""
            },
            {
                id: "horimiya",
                title: "Horimiya",
                anilistId: 72451,
                mangadexId: "a25e46ec-30f7-4db6-89df-cacbc1d9a900"
            },
            {
                id: "fruits-basket",
                title: "Fruits Basket",
                anilistId: 30102,
                mangadexId: ""
            },
            {
                id: "blue-box",
                title: "Blue Box",
                anilistId: 132182,
                mangadexId: ""
            },
            {
                id: "apothecary",
                title: "The Apothecary Diaries",
                anilistId: 99022,
                mangadexId: "e18fe8c6-f6dc-4f05-8462-7b2083ff9a6c"
            },
            {
                id: "blue-lock",
                title: "Blue Lock",
                anilistId: 106130,
                mangadexId: "4141c5dc-c525-4df5-afd7-cc7d192a832f"
            },
            {
                id: "haikyuu",
                title: "Haikyuu!!",
                anilistId: 65243,
                mangadexId: ""
            },
            {
                id: "monster",
                title: "Monster",
                anilistId: 30001,
                mangadexId: "d9e30523-9d65-469e-92a2-30266468674b"
            },
            {
                id: "jojo-part-1",
                title: "JoJo's Bizarre Adventure Part 1: Phantom Blood",
                anilistId: 31517,
                mangadexId: ""
            },
            {
                id: "neon-genesis-evangelion",
                title: "Neon Genesis Evangelion",
                anilistId: 30698,
                mangadexId: ""
            },
            {
                id: "steins-gate",
                title: "Steins;Gate",
                anilistId: 47517,
                mangadexId: ""
            },
            {
                id: "your-lie-in-april",
                title: "Your Lie in April",
                anilistId: 67707,
                mangadexId: ""
            },
            {
                id: "a-silent-voice",
                title: "A Silent Voice",
                anilistId: 85135,
                mangadexId: ""
            },
            {
                id: "black-butler",
                title: "Black Butler",
                anilistId: 33866,
                mangadexId: ""
            },
            {
                id: "blue-exorcist",
                title: "Blue Exorcist",
                anilistId: 43492,
                mangadexId: ""
            },
            {
                id: "pandora-hearts",
                title: "Pandora Hearts",
                anilistId: 33031,
                mangadexId: ""
            },
            {
                id: "vanitas-no-carte",
                title: "The Case Study of Vanitas",
                anilistId: 86619,
                mangadexId: "",
                note: "Irregular updates due to author health breaks."
            },
            {
                id: "oshi-no-ko-alt-or-kaguya",
                title: "Rurouni Kenshin",
                anilistId: 30022,
                mangadexId: ""
            },
            {
                id: "one-punch-man",
                title: "One-Punch Man",
                anilistId: 74347,
                mangadexId: "d8a959f7-648e-4c8d-8f23-f1f3f8e129f3"
            },
            {
                id: "land-of-the-lustrous",
                title: "Land of the Lustrous",
                anilistId: 74489,
                mangadexId: "cade38b7-64c4-4a29-8e3c-8c283291d6c6"
            },
            {
                id: "noragami",
                title: "Noragami: Stray God",
                anilistId: 54692,
                mangadexId: "68635a08-9e4e-4187-b15f-841c094d546d"
            },
            {
                id: "bungo-stray-dogs",
                title: "Bungo Stray Dogs",
                anilistId: 85307,
                mangadexId: "39c579e1-d890-4a89-b779-2f3e8f179a0a"
            },
            {
                id: "seraph-of-the-end",
                title: "Seraph of the End",
                anilistId: 69929,
                mangadexId: "b5c627b7-a3b5-4a29-88aa-840b6f2b386a"
            },
            {
                id: "skip-and-loafer",
                title: "Skip and Loafer",
                anilistId: 109285,
                mangadexId: "244c9d4f-e0fb-4a90-b517-4d4a5d60f47b"
            },
            {
                id: "witch-hat-atelier",
                title: "Witch Hat Atelier",
                anilistId: 98263,
                mangadexId: "67e7453b-9ee5-4ae5-9316-215b03e4a71d"
            },
            {
                id: "dungeon-meshi",
                title: "Delicious in Dungeon",
                anilistId: 86082,
                mangadexId: "d90ea6cb-7bc3-4d80-8af0-28557e6c4e17"
            },
            {
                id: "gachiakuta",
                title: "Gachiakuta",
                anilistId: 144727,
                mangadexId: "192aa767-2479-42c1-9780-8d65a2efd36a"
            },
            {
                id: "ruri-dragon",
                title: "RuriDragon",
                anilistId: 150440,
                mangadexId: "",
                note: "Returned from a long hiatus with a biweekly digital schedule."
            },
            {
                id: "record-of-ragnarok",
                title: "Record of Ragnarok",
                anilistId: 103850,
                mangadexId: "b5b21ca1-bba5-4b9a-8cd1-6248f731650b"
            },
            {
                id: "grand-blue",
                title: "Grand Blue Dreaming",
                anilistId: 87395,
                mangadexId: "fffbfac3-b7ad-41ee-9581-b4d90ecec941"
            },
            {
                id: "gangsta",
                title: "Gangsta.",
                anilistId: 54903,
                mangadexId: "9b400b1d-c43f-4eb3-bf25-561f61f61f82",
                note: "On hiatus due to author health issues."
            },
            {
                id: "bleach",
                title: "Bleach",
                anilistId: 30012,
                mangadexId: ""
            },
            {
                id: "naruto",
                title: "Naruto",
                anilistId: 30011,
                mangadexId: ""
            },
            {
                id: "death-note",
                title: "Death Note",
                anilistId: 30021,
                mangadexId: ""
            },
            {
                id: "fullmetal-alchemist",
                title: "Fullmetal Alchemist",
                anilistId: 30025,
                mangadexId: ""
            },
            {
                id: "tokyo-ghoul",
                title: "Tokyo Ghoul",
                anilistId: 63327,
                mangadexId: ""
            },
            {
                id: "dr-stone",
                title: "Dr. STONE",
                anilistId: 98416,
                mangadexId: ""
            },
            {
                id: "fire-force",
                title: "Fire Force",
                anilistId: 86310,
                mangadexId: ""
            },
            {
                id: "mob-psycho-100",
                title: "Mob Psycho 100",
                anilistId: 85189,
                mangadexId: ""
            },
            {
                id: "claymore",
                title: "Claymore",
                anilistId: 30583,
                mangadexId: ""
            },
            {
                id: "beet-the-vandel-buster",
                title: "Beet the Vandel Buster",
                anilistId: 31348,
                mangadexId: "",
                note: "Returned after a 10-year hiatus with irregular updates."
            },
            {
                id: "yona-of-the-dawn",
                title: "Yona of the Dawn",
                anilistId: 51525,
                mangadexId: ""
            },
            {
                id: "toilet-bound-hanako",
                title: "Toilet-bound Hanako-kun",
                anilistId: 98842,
                mangadexId: ""
            },
            {
                id: "jojo-steel-ball-run",
                title: "JoJo's Bizarre Adventure Part 7: Steel Ball Run",
                anilistId: 31706,
                mangadexId: ""
            },
            {
                id: "jojo-jojolands",
                title: "The JOJOLands",
                anilistId: 138072,
                mangadexId: ""
            },
            {
                id: "mashle",
                title: "Mashle: Magic and Muscles",
                anilistId: 114960,
                mangadexId: ""
            },
            {
                id: "undead-unluck",
                title: "Undead Unluck",
                anilistId: 114791,
                mangadexId: ""
            },
            {
                id: "shangri-la-frontier",
                title: "Shangri-La Frontier",
                anilistId: 122063,
                mangadexId: ""
            },
            {
                id: "tensura",
                title: "That Time I Got Reincarnated as a Slime",
                anilistId: 86399,
                mangadexId: ""
            },
            {
                id: "mushoku-tensei",
                title: "Mushoku Tensei: Jobless Reincarnation",
                anilistId: 85564,
                mangadexId: ""
            },
            {
                id: "rezero",
                title: "Re:ZERO -Starting Life in Another World- Chapter 4",
                anilistId: 111484,
                mangadexId: ""
            },
            {
                id: "uzumaki",
                title: "Uzumaki",
                anilistId: 30436,
                mangadexId: ""
            },
            {
                id: "20th-century-boys",
                title: "20th Century Boys",
                anilistId: 30003,
                mangadexId: ""
            },
            {
                id: "slam-dunk",
                title: "Slam Dunk",
                anilistId: 30051,
                mangadexId: ""
            },
            {
                id: "kingdom",
                title: "Kingdom",
                anilistId: 46765,
                mangadexId: ""
            },
            {
                id: "code-geass",
                title: "Code Geass: Lelouch of the Rebellion",
                anilistId: 31528,
                mangadexId: ""
            },
            {
                id: "liar-game",
                title: "Liar Game",
                anilistId: 31649,
                mangadexId: ""
            },
            {
                id: "tomodachi-game",
                title: "Tomodachi Game",
                anilistId: 85911,
                mangadexId: ""
            },
            {
                id: "alice-in-borderland",
                title: "Alice in Borderland",
                anilistId: 63031,
                mangadexId: ""
            },
            {
                id: "tower-of-god",
                title: "Tower of God",
                anilistId: 85143,
                mangadexId: "",
                note: "Manhwa / Webtoon — has taken multiple extended hiatuses."
            },
            {
                id: "eleceed",
                title: "Eleceed",
                anilistId: 106929,
                mangadexId: ""
            },
            {
                id: "bastard-manhwa",
                title: "Bastard",
                anilistId: 86964,
                mangadexId: ""
            },
            {
                id: "sweet-home",
                title: "Sweet Home",
                anilistId: 100954,
                mangadexId: ""
            },
            {
                id: "lookism",
                title: "Lookism",
                anilistId: 85802,
                mangadexId: ""
            },
            {
                id: "the-horizon",
                title: "The Horizon",
                anilistId: 100568,
                mangadexId: ""
            },
            {
                id: "vinland-or-gintama",
                title: "Gintama",
                anilistId: 30044,
                mangadexId: ""
            },
            {
                id: "soul-eater",
                title: "Soul Eater",
                anilistId: 30908,
                mangadexId: ""
            },

        ];
    