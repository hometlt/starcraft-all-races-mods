import * as SCParser from "./../../../tools/parser/index.js";

SCParser.config.binaryFolder = 'C:\\Program Files (x86)\\StarCraft II\\TOOLS\\parser\\binary'
SCParser.SCGame.directories.mods = `C:\\Program Files (x86)\\StarCraft II\\mods\\all-races-mods`

let mod = await SCParser.createMod({
    core: [
        '$mods/builtin/Core',
        '$mods/dependencies/Base',
        '$mods/factions/Legacy',
    ],
    mods: [
        '$mods/factions/Scion',
        '$mods/factions/Hybrids',
        '$mods/factions/UED',
        '$mods/factions/Dragons',
        '$mods/factions/UPL',
        '$mods/factions/Umojan',
        '$mods/factions/Synoid'
    ]
})

mod.dependencies = [
    'bnet:Void (Mod)/0.0/999,file:Mods/Void.SC2Mod',
    'bnet:[ARA] Dragons/0.0/311522,file:Mods/ARC-ASSETS.SC2Mod',
    'bnet:[ARA] Hybrids/0.0/311410,file:Mods/ARC-ASSETS.SC2Mod',
    'bnet:[ARA] Scion/0.0/314963,file:Mods/ARC-ASSETS.SC2Mod',
    'bnet:[ARA] Synoid/0.0/224770,file:Mods/ARC-ASSETS.SC2Mod',
    'bnet:[ARA] UED-TS/0.0/312314,file:Mods/ARC-ASSETS.SC2Mod',
    'bnet:[ARA] Umojan/0.0/316598,file:Mods/ARC-ASSETS.SC2Mod',
    'bnet:[ARA] UPL MELEE/0.0/311406,file:Mods/ARC-ASSETS.SC2Mod',
]

mod.setDocInfo({
    Name:`[ARC] Custom Factions Bundle`,
    LongDest: `Custom Factions Bundle`,
    ShortDesc: `1-16`
})

mod.write('./../bundles/Factions.SC2Mod')
