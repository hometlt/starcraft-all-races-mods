//--------------------------------------------------------------------------------------------------
//  AI Requirements Functions
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
//  Neutral Units
//--------------------------------------------------------------------------------------------------
const string c_NU_Minerals              = "MineralField";
const string c_NU_HighYieldMinerals     = "RichMineralField";
const string c_NU_VespeneGeyser         = "VespeneGeyser";


const int    e_AB_TransportLoadUnit         = 0;
const int    e_AB_TransportUnloadAll        = 1;
const int    e_AB_TransportUnloadUnit       = 3;
const int    e_AB_TransportLoadAll          = 4;

//--------------------------------------------------------------------------------------------------
// Unit Attributes
//--------------------------------------------------------------------------------------------------
// these shouldn't exist, but leaving them in case some custom map is using them
const int e_unitAttributeNone           = c_unitAttributeNone;
const int e_unitAttributeLight          = c_unitAttributeLight;
const int e_unitAttributeArmored        = c_unitAttributeArmored;
const int e_unitAttributeBiological     = c_unitAttributeBiological;
const int e_unitAttributeMechanical     = c_unitAttributeMechanical;
const int e_unitAttributeRobotic        = c_unitAttributeRobotic;
const int e_unitAttributePsionic        = c_unitAttributePsionic;
const int e_unitAttributeMassive        = c_unitAttributeMassive;
const int e_unitAttributeStructure      = c_unitAttributeStructure;
const int e_unitAttributeHover          = c_unitAttributeHover;
const int e_unitAttributeHeroic         = c_unitAttributeHeroic;
const int e_unitAttributeSummoned       = c_unitAttributeSummoned;
const int e_unitAttributeUser1          = c_unitAttributeUser1;

//--------------------------------------------------------------------------------------------------
//  Object Types
//--------------------------------------------------------------------------------------------------
const int c_objTypeIsInvalid          = -1;
const int c_objTypeIsUnit             = 0;
const int c_objTypeIsBuilding         = 1;
const int c_objTypeIsResearch         = 2;


//--------------------------------------------------------------------------------------------------
//  AI Get Object Type
//--------------------------------------------------------------------------------------------------
int AIGetObjectType (int player, string objType) {

    // override any special cases here

    return AIDefaultGetObjectType(player, objType);
}

//--------------------------------------------------------------------------------------------------
//  AI Get Maker
//--------------------------------------------------------------------------------------------------
string AIGetMaker (int player, string objType) {

    // override any special cases here

    return AIDefaultGetMaker(player, objType);
}

//--------------------------------------------------------------------------------------------------
//  AI Get First Missing Req
//--------------------------------------------------------------------------------------------------
string AIGetFirstMissingReq (int player, string objType) {

    // override any special cases here

    return AIDefaultGetFirstMissingReq(player, objType);
}

//--------------------------------------------------------------------------------------------------
//  AI Any Unbuilt Reqs
//--------------------------------------------------------------------------------------------------
string AIGetFirstUnfinishedReq (int player, string objType) {

    // override any special cases here

    return AIDefaultGetFirstUnfinishedReq(player, objType);
}

//--------------------------------------------------------------------------------------------------
//  AI Get Full Make Time
//--------------------------------------------------------------------------------------------------
int AIGetFullMakeTime (int player, string objType) {

    // override any special cases here

    return AIDefaultGetFullMakeTime(player, objType);
}
