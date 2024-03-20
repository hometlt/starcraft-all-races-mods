import * as SCParser from "./../../../TOOLS/parser/index.js";

SCParser.SCGame.directories.mods = `C:\\Program Files (x86)\\StarCraft II\\mods\\all-races-mods`

let mod = await SCParser.createMod({
    core: [
        '$mods/builtin/Core',
    ],
    mods: [
        '$mods/dependencies/Base',
        '$mods/bundles/VoidCoop',
        '$mods/dependencies/Base'
    ]
})

// mod.index();
//
// let result = {}
// for(let catalog in mod.catalogs){
//     result[catalog] = mod.catalogs[catalog].map(u => ({relations: u.$$relations.map(rel => rel.namespace + "."+ rel.link.split(",")[0]) , id: u.id}))
// }
// console.log(result)

// SCParser.config.binaryFolder = 'C:\\Program Files (x86)\\StarCraft II\\TOOLS\\parser\\binary'
// await mod.write( 'C:\\Program Files (x86)\\StarCraft II\\MODS\\all-races-mods\\bundles\\VoidCoopX.SC2Mod', {
//     format: "json",
//     ext: {
//         Name: `mod name`,
//         DescLong: `combined mod`,
//         DescShort: `1-12 players`,
//         Signature: `<n/>mod By Visceroid<n/>ALL RACES COOP<n/>ponomarevtlt@gmail.com`,
//         Website: `https://discord.gg/2RbcjRkddw`
//     }
// })
// mod.pick({race: ["Nafash"]})
// mod.filter()

mod.renameEntities("ARC@*")
// mod.renamePickedEntities("ARC@")
SCParser.config.binaryFolder = 'C:\\Program Files (x86)\\StarCraft II\\TOOLS\\parser\\binary'
await mod.write( 'C:\\Program Files (x86)\\StarCraft II\\MODS\\all-races-mods\\bundles\\VoidCoopX.SC2Mod', {
    text: {
        Name: `mod name`,
        DescLong: `combined mod`,
        DescShort: `1-12 players`,
        Signature: `<n/>mod By Visceroid<n/>ALL RACES COOP<n/>ponomarevtlt@gmail.com`,
        Website: `https://discord.gg/2RbcjRkddw`
    }
})
console.log("Finished!")