::this operation might need >2Gb of Memory sometimes
node --max_old_space_size=4000 node_modules/sc-parser/run --read ../built-in/{LibertyCampaign,Swarm,SwarmCampaign,Void,VoidCampaign,VoidMulti},../dependencies/LIB --write ../built-in/CampaignCombined.SC2Mod
pause