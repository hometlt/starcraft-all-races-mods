import fs from 'fs'
import pairs from "./--pairs.mjs"

let file = "./ModelData.xml"
// let pairs = {
//     ward: "Buried",
//     summoned: "Summoned",
//     immunity: "Unstoppable",
//     hero: "Resistant",
//     allies: "Ally",
//     air: "Air",
//     tree: "HarvestableResource",
//     item: "Item",
//     player: "Player",
//     ancient: "Psionic",
//     enemies: "Enemy",
//     structure: "PreventDefeat",
//     self: "Self",
//     sapper: "Uncloakable",
//     mechanical: "Mechanical",
//     neutral: "Neutral",
//     ground: "Ground",
//     wall: "Hover",
//     dead: "Dead",
//     ethereal: "Stasis",
//     invulnerable: "Invulnerable",
//     debris: "Destructible",
// }

async function run(){
    let data = fs.readFileSync(file,{encoding: 'utf-8'})
    for(let i in pairs){
        let regexp = new RegExp(`(")${i}(")`,'g')
        data = data.replace(regexp,function (a,b,c){
            return b + pairs[i] + c
        } )
    }
    fs.writeFileSync(file,data)
}

run()