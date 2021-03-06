'use strict';

const CORE =
    [   { name: "#1 Black Barrow",
          decks:
            [   {"name": "Bandit Guard"},
                {"name": "Bandit Archer"},
                {"name": "Living Bones"}
            ]
        },
        { name: "#2 Barrow Lair",
          decks:
            [   {"name": "Bandit Archer"},
                {"name": "Bandit Commander", "class": "Boss"},
                {"name": "Living Bones"},
                {"name": "Living Corpse"}
            ]
        },
        { name: "#3 Inox Encampment",
          decks:
            [   {"name": "Inox Guard"},
                {"name": "Inox Archer"},
                {"name": "Inox Shaman"}
            ]
        },
        { name: "#4 Crypt of the Damned",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Bandit Archer"},
                {"name": "Cultist"},
                {"name": "Earth Demon"},
                {"name": "Wind Demon"}
            ]
        },
        { name: "#5 Ruinous Crypt",
          decks:
            [   {"name": "Cultist"},
                {"name": "Living Bones"},
                {"name": "Night Demon"},
                {"name": "Flame Demon"},
                {"name": "Frost Demon"}
            ]
        },
        { name: "#6 Decaying Crypt",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Living Corpse"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#7 Vibrant Grotto",
          decks:
            [   {"name": "Forest Imp"},
                {"name": "Cave Bear"},
                {"name": "Inox Shaman"},
                {"name": "Earth Demon"}
            ]
        },
        { name: "#8 Gloomhaven Warehouse",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Living Corpse"},
                {"name": "Inox Bodyguard", "class": "Boss"}
            ]
        },
        { name: "#9 Diamond Mine",
          decks:
            [   {"name": "Hound"},
                {"name": "Vermling Scout"},
                {"name": "Merciless Overseer", "class": "Boss"}
            ]
        },
        { name: "#10 Plane of Elemental Power",
          decks:
            [   {"name": "Flame Demon"},
                {"name": "Earth Demon"},
                {"name": "Sun Demon"}
            ]
        },
        { name: "#11 Gloomhaven Square A",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Living Corpse"},
                {"name": "City Guard"},
                {"name": "City Archer"},
                {"name": "Captain of the Guard", "class": "Boss"}
            ]
        },
        { name: "#12 Gloomhaven Square B",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Living Corpse"},
                {"name": "Cultist"},
                {"name": "City Guard"},
                {"name": "City Archer"},
                {"name": "Jekserah", "class": "Boss"}
            ]
        },
        { name: "#13 Temple of the Seer",
          decks:
            [   {"name": "Stone Golem"},
                {"name": "Cave Bear"},
                {"name": "Living Spirit"},
                {"name": "Spitting Drake"}
            ]
        },
        { name: "#14 Frozen Hollow",
          decks:
            [   {"name": "Hound"},
                {"name": "Living Spirit"},
                {"name": "Frost Demon"}
            ]
        },
        { name: "#15 Shrine of Strength",
          decks:
            [   {"name": "Stone Golem"},
                {"name": "Savvas Icestorm"},
                {"name": "Frost Demon"},
                {"name": "Wind Demon"},
                {"name": "Harrower Infester"}
            ]
        },
        { name: "#16 Mountain Pass",
          decks:
            [   {"name": "Earth Demon"},
                {"name": "Wind Demon"},
                {"name": "Inox Guard"},
                {"name": "Inox Archer"}
            ]
        },
        { name: "#17 Lost Island",
          decks:
            [   {"name": "Vermling Scout"},
                {"name": "Vermling Shaman"},
                {"name": "Cave Bear"}
            ]
        },
        { name: "#18 Abandoned Sewers",
          decks:
            [   {"name": "Giant Viper"},
                {"name": "Ooze"},
                {"name": "Vermling Scout"}
            ]
        },
        { name: "#19 Forgotten Crypt",
          decks:
            [   {"name": "Cultist"},
                {"name": "Living Bones"},
                {"name": "Living Spirit"},
                {"name": "Living Corpse"}
            ]
        },
        { name: "#20 Necromancer's Sanctum",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Cultist"},
                {"name": "Night Demon"},
                {"name": "Living Corpse"},
                {"name": "Jekserah", "class": "Boss"}
            ]
        },
        { name: "#21 Infernal Throne",
          decks:
            [   {"name": "Sun Demon"},
                {"name": "Frost Demon"},
                {"name": "Night Demon"},
                {"name": "Wind Demon"},
                {"name": "Earth Demon"},
                {"name": "Flame Demon"},
                {"name": "Prime Demon", "class": "Boss"}
            ]
        },
        { name: "#22 Temple of the Elements",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Cultist"},
                {"name": "Earth Demon"},
                {"name": "Flame Demon"},
                {"name": "Frost Demon"},
                {"name": "Wind Demon"}
            ]
        },
        { name: "#23 Deep Ruins",
          decks:
            [   {"name": "Stone Golem"},
                {"name": "Ancient Artillery"},
                {"name": "Living Bones"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#24 Echo Chamber",
          decks:
            [   {"name": "Rending Drake"},
                {"name": "Ooze"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#25 Icecrag Ascent",
          decks:
            [   {"name": "Hound"},
                {"name": "Rending Drake"},
                {"name": "Spitting Drake"}
            ]
        },
        { name: "#26 Ancient Cistern",
          decks:
            [   {"name": "Living Corpse"},
                {"name": "Ooze"},
                {"name": "Night Demon"},
                {"name": "Black Imp"}
            ]
        },
        { name: "#27 Ruinous Rift",
          decks:
            [   {"name": "Night Demon"},
                {"name": "Wind Demon"},
                {"name": "Frost Demon"},
                {"name": "Sun Demon"},
                {"name": "Earth Demon"},
                {"name": "Flame Demon"}
            ]
        },
        { name: "#28 Outer Ritual Chamber",
          decks:
            [   {"name": "Living Corpse", "level": 2},
                {"name": "Cultist"},
                {"name": "Living Bones"},
                {"name": "Night Demon"},
                {"name": "Sun Demon"}
            ]
        },
        { name: "#29 Sanctuary of Gloom",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Living Corpse"},
                {"name": "Living Spirit"},
                {"name": "Black Imp"}
            ]
        },
        { name: "#30 Shrine of the Depths",
          decks:
            [   {"name": "Ooze"},
                {"name": "Lurker"},
                {"name": "Deep Terror"}
            ]
        },
        { name: "#31 Plane of the Night",
          decks:
            [   {"name": "Deep Terror"},
                {"name": "Night Demon"},
                {"name": "Black Imp"}
            ]
        },
        { name: "#32 Decrepit Wood",
          decks:
            [   {"name": "Harrower Infester"},
                {"name": "Giant Viper"},
                {"name": "Deep Terror"},
                {"name": "Black Imp"}
            ]
        },
        { name: "#33 Savvas Armory",
          decks:
            [   {"name": "Savvas Icestorm"},
                {"name": "Savvas Lavaflow"},
                {"name": "Frost Demon"},
                {"name": "Flame Demon"},
                {"name": "Wind Demon"},
                {"name": "Earth Demon"}
            ]
        },
        { name: "#34 Scorched Summit",
          decks:
            [   {"name": "Rending Drake"},
                {"name": "Spitting Drake"},
                {"name": "Elder Drake", "class": "Boss"}
            ]
        },
        { name: "#35 Gloomhaven Battlements A",
          decks:
            [   {"name": "Flame Demon"},
                {"name": "Frost Demon"},
                {"name": "Earth Demon"},
                {"name": "Wind Demon"},
                {"name": "City Archer"},
                {"name": "City Guard"},          
                {"name": "Boss: Captain of the Guard"}
            ]
        },
        { name: "#36 Gloomhaven Battlements B",
          decks:
            [   {"name": "Flame Demon"},
                {"name": "Frost Demon"},
                {"name": "Earth Demon"},
                {"name": "Wind Demon"},
                {"name": "City Archer"},
                {"name": "Prime Demon", "class": "Boss"}
            ]
        },
        { name: "#37 Doom Trench",
          decks:
            [   {"name": "Lurker"},
                {"name": "Deep Terror"},
                {"name": "Harrower Infester"}
            ]
        },
        { name: "#38 Slave Pens",
          decks:
            [   {"name": "Inox Guard"},
                {"name": "Inox Archer"},
                {"name": "Inox Shaman"},
                {"name": "Stone Golem"}
            ]
        },
        { name: "#39 Treacherous Divide",
          decks:
            [   {"name": "Cave Bear"},
                {"name": "Frost Demon"},
                {"name": "Spitting Drake"},
                {"name": "Cultist"},
                {"name": "Living Bones"}
            ]
        },
        { name: "#40 Ancient Defense Network",
          decks:
            [   {"name": "Living Corpse"},
                {"name": "Flame Demon"},
                {"name": "Cave Bear"},
                {"name": "Stone Golem"},
                {"name": "Forest Imp"}
            ]
        },
        { name: "#41 Timeworn Tomb",
          decks:
            [   {"name": "Ancient Artillery"},
                {"name": "Living Corpse"},
                {"name": "Living Spirit"},
                {"name": "Stone Golem"}
            ]
        },
        { name: "#42 Realm of the Voice",
          decks:
            [   {"name": "Night Demon"},
                {"name": "Wind Demon"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#43 - Drake Nest",
          decks:
            [   {"name": "Flame Demon"},
                {"name": "Rending Drake"},
                {"name": "Spitting Drake"}
            ]
        },
        { name: "#44 Tribal Assault",
          decks:
            [   {"name": "Inox Guard"},
                {"name": "Inox Archer"},
                {"name": "Hound"},
                {"name": "Inox Shaman"}
            ]
        },
        { name: "#45 Rebel Swamp",
          decks:
            [   {"name": "City Guard"},
                {"name": "City Archer"},
                {"name": "Hound"}
            ]
        },
        { name: "#46 Nightmare Peak",
          decks:
            [   {"name": "Night Demon"},
                {"name": "Frost Demon"},
                {"name": "Wind Demon"},
                {"name": "Savvas Icestorm"},
                {"name": "Winged Horror", "class": "Boss"}
            ]
        },
        { name: "#47 Lair of the Unseeing Eye",
          decks:
            [   {"name": "Lurker"},
                {"name": "Deep Terror"},
                {"name": "Harrower Infester"},
                {"name": "The Sightless Eye", "class": "Boss"}
            ]
        },
        { name: "#48 - Shadow Weald",
          decks:
            [   {"name": "Forest Imp"},
                {"name": "Earth Demon"},
                {"name": "Harrower Infester"},
                {"name": "Dark Rider", "class": "Boss"}
            ]
        },
        { name: "#49 Rebel's Stand",
          decks:
            [   {"name": "Giant Viper"},
                {"name": "City Archer"},
                {"name": "City Guard"},
                {"name": "Ancient Artillery"}
            ]
        },
        { name: "#50 Ghost Fortress",
          decks:
            [   {"name": "Night Demon"},
                {"name": "Sun Demon"},
                {"name": "Earth Demon"}
            ]
        },
        { name: "#51 The Void",
          decks:
            [   {"name": "The Gloom", "class": "Boss"}
            ]
        },
        { name: "#52 Noxious Cellar",
          decks:
            [   {"name": "Spitting Drake"},
                {"name": "Ooze"},
                {"name": "Vermling Scout"},
                {"name": "Living Corpse"},
                {"name": "Vermling Shaman"}
            ]
        },
        { name: "#53 Crypt Basement",
          decks:
            [   {"name": "Ooze"},
                {"name": "Living Corpse"},
                {"name": "Living Spirit"},
                {"name": "Living Bones"},
                {"name": "Giant Viper"}
            ]
        },
        { name: "#54 Palace of Ice",
          decks:
            [   {"name": "Cave Bear"},
                {"name": "Living Spirit"},
                {"name": "Frost Demon"},
                {"name": "Harrower Infester"}
            ]
        },
        //TODO Show message that this is random, use deck tab instead
        { name: "#55 Foggy Thicket",
          decks:
            [ ]
        },
        { name: "#56 Bandit's Wood",
          decks:
            [   {"name": "Hound"},
                {"name": "Bandit Archer"},
                {"name": "Rending Drake"},
                {"name": "Bandit Guard"}
            ]
        },
        { name: "#57 Investigation",
          decks:
            [   {"name": "City Guard"},
                {"name": "City Archer"},
                {"name": "Hound"}
            ]
        },
        { name: "#58 Bloody Shack",
          decks:
            [   {"name": "Earth Demon"},
                {"name": "Harrower Infester"},
                {"name": "Black Imp"},
                {"name": "City Guard"}
            ]
        },
        { name: "#59 Forgotten Grove",
          decks:
            [   {"name": "Cave Bear"},
                {"name": "Hound"},
                {"name": "Forest Imp"}
            ]
        },
        { name: "#60 Alchemy Lab",
          decks:
            [   {"name": "Ooze"},
                {"name": "Giant Viper"},
                {"name": "Hound"},
                {"name": "Rending Drake"},
                {"name": "Spitting Drake"}
            ]
        },
        { name: "#61 Fading Lighthouse",
          decks:
            [   {"name": "Ooze"},
                {"name": "Giant Viper"},
                {"name": "Frost Demon"},
                {"name": "Flame Demon"}
            ]
        },
        { name: "#62 Pit of Souls",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#63 Magma Pit",
          decks:
            [   {"name": "Vermling Scout"},
                {"name": "Inox Guard"},
                {"name": "Inox Archer"},
                {"name": "Flame Demon"}
            ]
        },
        { name: "#64 Underwater Lagoon",
          decks:
            [   {"name": "Ooze"},
                {"name": "Forest Imp"},
                {"name": "Rending Drake"}
            ]
        },
        { name: "#65 Sulfur Mine",
          decks:
            [   {"name": "Vermling Scout"},
                {"name": "Hound"},
                {"name": "Inox Shaman"}
            ]
        },
        { name: "#66 Clockwork Cove",
          decks:
            [   {"name": "Ooze"},
                {"name": "Ancient Artillery"},
                {"name": "Living Spirit"},
                {"name": "Stone Golem"}
            ]
        },
        { name: "#67 Arcane Library",
          decks:
            [   {"name": "Forest Imp"},
                {"name": "Cave Bear"},
                {"name": "Stone Golem"}
            ]
        },
        { name: "#68 Toxic Moor",
          decks:
            [   {"name": "Rending Drake"},
                {"name": "Black Imp"},
                {"name": "Giant Viper"},
                {"name": "Living Corpse"}
            ]
        },
        { name: "#69 Well of the Unfortunate",
          decks:
            [   {"name": "Vermling Scout"},
                {"name": "Vermling Shaman"},
                {"name": "Forest Imp"},
                {"name": "Stone Golem"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#70 Chained Isle",
          decks:
            [   {"name": "Night Demon"},
                {"name": "Wind Demon"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#71 Windswept Highlands",
          decks:
            [   {"name": "Spitting Drake"},
                {"name": "Wind Demon"},
                {"name": "Sun Demon"}
            ]
        },
        { name: "#72 Oozing Grove",
          decks:
            [   {"name": "Ooze"},
                {"name": "Forest Imp"},
                {"name": "Giant Viper"}
            ]
        },
        { name: "#73 Rockslide Ridge",
          decks:
            [   {"name": "Hound"},
                {"name": "Inox Archer"},
                {"name": "Ancient Artillery"},
                {"name": "Inox Guard"},
                {"name": "Inox Shaman"}
            ]
        },
        { name: "#74 Merchant Ship",
          decks:
            [   {"name": "Bandit Guard"},
                {"name": "Bandit Archer"},
                {"name": "Lurker"},
                {"name": "Deep Terror"}
            ]
        },
        { name: "#75 Overgrown Graveyard",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Living Corpse"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#76 Harrower Hive",
          decks:
            [   {"name": "Giant Viper"},
                {"name": "Living Bones"},
                {"name": "Night Demon"},
                {"name": "Harrower Infester"}
            ]
        },
        { name: "#77 Vault of Secrets",
          decks:
            [   {"name": "City Guard"},
                {"name": "City Archer"},
                {"name": "Stone Golem"},
                {"name": "Hound"}
            ]
        },
        { name: "#78 Sacrifice Pit",
          decks:
            [   {"name": "Bandit Guard"},
                {"name": "Bandit Archer"},
                {"name": "Cultist"},
                {"name": "Living Bones"},
                {"name": "Black Imp"}
            ]
        },
        { name: "#79 Lost Temple",
          decks:
            [   {"name": "Stone Golem"},
                {"name": "Giant Viper"},
                {"name": "The Betrayer", "class": "Boss"}
            ]
        },
        { name: "#80 Vigil Keep",
          decks:
            [   {"name": "City Guard"},
                {"name": "City Archer"},
                {"name": "Ancient Artillery"},
                {"name": "Hound"}
            ]
        },
        { name: "#81 Temple of the Eclipse",
          decks:
            [   {"name": "Night Demon"},
                {"name": "Sun Demon"},
                {"name": "Stone Golem"},
                {"name": "Ancient Artillery"},
                {"name": "The Colorless", "class": "Boss"}
            ]
        },
        { name: "#82 Burning Mountain",
          decks:
            [   {"name": "Earth Demon"},
                {"name": "Flame Demon"},
                {"name": "Stone Golem"}
            ]
        },
        { name: "#83 Shadows Within",
          decks:
            [   {"name": "Hound"},
                {"name": "Cultist"},
                {"name": "Living Bones"},
                {"name": "Living Spirit"},
                {"name": "Flame Demon"}
            ]
        },
        { name: "#84 Crystalline Cave",
          decks:
            [   {"name": "Flame Demon"},
                {"name": "Frost Demon"},
                {"name": "Earth Demon"}
            ]
        },
        { name: "#85 Sun Temple",
          decks:
            [   {"name": "Hound"},
                {"name": "Black Imp"},
                {"name": "Night Demon"},
                {"name": "Sun Demon"}
            ]
        },
        { name: "#86 Harried Village",
          decks:
            [   {"name": "Cave Bear"},
                {"name": "Vermling Shaman"},
                {"name": "Vermling Scout"},
                {"name": "Lurker"}
            ]
        },
        { name: "#87 Corrupted Cove",
          decks:
            [   {"name": "Lurker"},
                {"name": "Deep Terror"},
                {"name": "Ooze"},
                {"name": "Black Imp"}
            ]
        },
        { name: "#88 Plane of Water",
          decks:
            [   {"name": "Frost Demon"},
                {"name": "Ooze"},
                {"name": "Lurker"}
            ]
        },
        { name: "#89 Syndicate Hideout",
          decks:
            [   {"name": "Bandit Archer"},
                {"name": "Bandit Guard"},
                {"name": "Cultist"},
                {"name": "Giant Viper"}
            ]
        },
        { name: "#90 Demonic Rift",
          decks:
            [   {"name": "Earth Demon"},
                {"name": "Wind Demon"},
                {"name": "Night Demon"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#91 Wild Melee",
          decks:
            [   {"name": "Cave Bear"},
                {"name": "Hound"},
                {"name": "Bandit Guard"},
                {"name": "Bandit Archer"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#92 Back Alley Brawl",
          decks:
            [   {"name": "Bandit Guard"},
                {"name": "City Guard"},
                {"name": "Inox Guard"},
                {"name": "Bandit Archer"},
                {"name": "City Archer"},
                {"name": "Savvas Icestorm"},
                {"name": "Frost Demon"},
                {"name": "Wind Demon"}
            ]
        },
        { name: "#93 Sunken Vessel",
          decks:
            [   {"name": "Lurker"},
                {"name": "Frost Demon"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#94 Vermling Nest",
          decks:
            [   {"name": "Hound"},
                {"name": "Vermling Scout"},
                {"name": "Vermling Shaman"},
                {"name": "Cave Bear"}
            ]
        },
        { name: "#95 Payment Due",
          decks:
            [   {"name": "Deep Terror"},
                {"name": "Flame Demon"},
                {"name": "Earth Demon"},
                {"name": "Savvas Lavaflow"}
            ]
        }
    ];

const INTO_THE_UNKNOWN =
    [   { name: "#1 Just Another Night",
          decks:
            [   {"name": "Bandit Archer"},
                {"name": "Bandit Guard"},
                {"name": "Inox Archer"},
                {"name": "Inox Guard"},
                {"name": "Inox Shaman"}
            ]
        },
        { name: "#2 A Quatryl Scorned",
          decks:
            [   {"name": "Bandit Archer"},
                {"name": "Bandit Guard"},
                {"name": "Ancient Artillery"}
            ]
        },
        { name: "#3 Unreliable Medicine",
          decks:
            [   {"name": "Giant Viper"},
                {"name": "Earth Demon"},
                {"name": "Vermling Scout"},
                {"name": "Vermling Shaman"}
            ]
        },
        { name: "#4 Unlikely Allies",
          decks:
            [   {"name": "Vermling Scout"},
                {"name": "Giant Viper"}
            ]
        },
        { name: "#5 The Sun Spire",
          decks:
            [   {"name": "Vermling Scout"},
                {"name": "Sun Demon"},
                {"name": "Black Imp"},
                {"name": "Vermling Shaman"}
            ]
        },
        { name: "#6 A Ship in a Storm",
          decks:
            [   {"name": "Wind Demon"},
                {"name": "Lurker"},
                {"name": "Frost Demon"}
            ]
        },
        { name: "#7 Arrival in Chains",
          decks:
            [   {"name": "Cave Bear"},
                {"name": "Rending Drake"},
                {"name": "Spitting Drake"},
                {"name": "Stone Golem"}
            ]
        },
        { name: "#8 The Doctor’s Lab",
          decks:
            [   {"name": "Living Bones"},
                {"name": "Cultist"},
                {"name": "Living Spirit"}
            ]
        },
        { name: "#9 Skewed Perspective",
          decks:
            [   {"name": "Hound"},
                {"name": "Vermling Scout"},
                {"name": "Merciless Overseer", "class": "Boss"}
            ]
        },
        { name: "#10 Panic Room",
          decks:
            [   {"name": "Night Demon"},
                {"name": "Deep Terror"}
            ]
        }];

const SOLO_SCENARIOS =
    [   { name: "Return to the Black Barrow",
          decks:
            [   {"name": "Bandit Guard", "level": -1},
                {"name": "Bandit Archer", "level": -1},
                {"name": "Living Bones", "level": -1}
            ]
        },
        { name: "An Unfortunate Intrusion",
          decks:
            [   {"name": "City Guard", "shield": -1},
                {"name": "Vermling Scout"},
                {"name": "Vermling Shaman"}
            ]
        },
        { name: "Corrupted Laboratory",
          decks:
            [   {"name": "Black Imp"},
                {"name": "Spitting Drake"},
                {"name": "Stone Golem"}
            ]
        },
        { name: "Armory Heist",
          decks:
            [   {"name": "City Guard", "shield": 3},
                {"name": "Stone Golem", "shield": 4},
                {"name": "Ancient Artillery"}
            ]
        },
        { name: "Stone Defense",
          decks:
            [   {"name": "Cave Bear"},
                {"name": "Ooze"},
                {"name": "Sun Demon"}
            ]
        },
        { name: "Rodent Liberation",
          decks:
            [   {"name": "Vermling Scout", "level": -1},
                {"name": "Vermling Shaman"},
                {"name": "Earth Demon", "health": "x2"}
            ]
        },
        { name: "Caravan Escort",
          decks:
            [   {"name": "City Guard", "level": -2, "cards": [ [ true, "99", "* %move% +0", "* %attack% +0" ] ] },
                {"name": "Bandit Guard"},
                {"name": "Bandit Archer"},
                {"name": "Inox Guard"},
                {"name": "Inox Archer"},
                {"name": "Inox Shaman"},
                {"name": "Vermling Scout"},
                {"name": "Vermling Shaman"},
                {"name": "Cave Bear"}
            ]
        },
        { name: "Unnatural Insults",
          decks:
            [   {"name": "Living Corpse"},
                {"name": "Living Bones"},
                {"name": "Cultist"},
                {"name": "Inox Shaman"}
            ]
        },
        { name: "Storage Fees",
          decks:
            [   {"name": "Hound"},
                {"name": "Bandit Guard"},
                {"name": "Bandit Archer"}
            ]
        },
        { name: "Plane of Wild Beasts",
          decks:
            [   {"name": "Hound"},
                {"name": "Spitting Drake"},
                {"name": "Cave Bear", "health": "x2"}
            ]
        },
        { name: "Harvesting the Night",
          decks:
            [   {"name": "Night Demon"},
                {"name": "Deep Terror"}
            ]
        },
        { name: "Plagued Crypt",
          decks:
            [   {"name": "Giant Viper"},
                {"name": "Black Imp"}
            ]
        },
        { name: "Battle of the Bards",
          decks:
            [   {"name": "Bandit Guard", "level": -2, "cards": [ [ true, "99", "* %move% +0", "* %attack% +0" ] ] },
                {"name": "Bandit Archer", "level": -2, "cards": [ [ true, "99", "* %move% +0", "* %attack% +0" ] ] },
                {"name": "City Guard"},
                {"name": "City Archer"},
                {"name": "Stone Golem"},
                {"name": "Vermling Shaman"}
            ]
        },
        { name: "Corrupted Hunt",
          decks:
            [   {"name": "Hound"},
                {"name": "Earth Demon", "health": "x2"},
                {"name": "Flame Demon", "retaliate": 2},
                {"name": "Giant Viper", "attack": 1},
                {"name": "Spitting Drake"}
            ]
        },
        // no decks required - CityGuard does not move
        { name: "Aftermath",
          decks:
            [ ]
        },
        { name: "Elemental Secrets",
          decks:
            [   {"name": "Flame Demon"},
                {"name": "Earth Demon"},
                {"name": "Frost Demon"},
                {"name": "Wind Demon"}
            ]
        },
        { name: "The Caged Bear",
          decks:
            [   {"name": "Hound"},
                {"name": "Forest Imp"},
                {"name": "Rending Drake"},
                {"name": "Vermling Shaman"},
                {"name": "Cave Bear"}
            ]
        }];        

const CAMPAIGNS = { "Gloomhaven": CORE, "Into the Unknown": INTO_THE_UNKNOWN, "Solo Scenarios": SOLO_SCENARIOS };

export default {};
export { CAMPAIGNS };