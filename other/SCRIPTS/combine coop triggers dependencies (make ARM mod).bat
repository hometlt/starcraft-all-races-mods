::this operation might need >2Gb of Memory sometimes
node --max_old_space_size=4000 node_modules/sc-parser/run --read ../../all-races-assets/{Scion,UED,Hybrids,Dragons,Talon,UPL,UPLCampaign,COOP},../{built-in/VoidMulti,factions/{Campaign,Scion,Hybrids,UED,Dragons,UPL,UPLCampaign,UPLBalance,Talon},dependencies/LIB} --write ../../ARM.SC2Mod
pause