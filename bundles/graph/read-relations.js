import fs from 'fs'
let data = await fs.readFileSync('./relations.json',{encoding: 'utf-8'})
let parsed = JSON.parse(data)

for(let catalog in parsed){
    for(let entity of parsed[catalog]) {
        entity.relations = [...new Set(entity.relations)];
    }
}