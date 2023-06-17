::this operation might need >2Gb of Memory sometimes
node --max_old_space_size=4000 node_modules/sc-parser/run --read ../../all-races-assets/{War3Core,WarCraft},../built-in/{WarCraft},../factions/{WarCraft} --write ../../WC3.SC2Mod
pause