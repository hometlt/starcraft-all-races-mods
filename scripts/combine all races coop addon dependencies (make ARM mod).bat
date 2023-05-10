::this operation might need >2Gb of Memory sometimes
node --max_old_space_size=4000 node_modules/sc-parser/run --read ../../all-races-assets/{Scion,UED,Hybrids,Dragons,UPL,UPLCampaign,Talon},../factions/{Scion,Hybrids,UED,Dragons,UPL,UPLBalance,Talon} --write ../../ARM.SC2Mod
pause