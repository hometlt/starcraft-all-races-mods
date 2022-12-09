
include "TriggerLibs/Genetron/GenetronHard"

//--------------------------------------------------------------------------------------------------
//  Counter-Attack Units
//--------------------------------------------------------------------------------------------------
static void InitCounters (int player) {
    // versus Protoss
    AICounterUnitSetup(player, c_PU_Zealot,             1.00, c_GU_Blaze,       1.00, c_GU_Blaze);
}

//--------------------------------------------------------------------------------------------------
//  AINewUnitGen
//--------------------------------------------------------------------------------------------------
void AINewUnitGen (int player, unit u) {
    wave w;
    string type = UnitGetType(u);

    // ignored units
    //
    if (UnitTypeTestAttribute(type, c_unitAttributeStructure)) {
        return;
    }
    if (UnitTypeTestFlag(type, c_unitFlagWorker)) {
        return;
    }

    // units that stay near home
    //
    if (type == c_GU_Courier) {
        AIWaveAddUnitPriority(AIWaveGet(player, c_waveHome), u, c_prioWavePeon);
        return;
    }

    // clear obstacle units
    //
    if (AIWaveNeedClearObsUnits(player)) {
        if (type == c_GU_Spitfire || type == c_GU_Blitzer || type == c_GU_Equalizer) {
            AIMergeUnit(player, u, AIWaveGet(player, c_waveClearObs));
            return;
        }
    }

    // diversion units
    if (AIGetFlag(player, e_flagsDiversion)) {
        if (type == c_GU_Inciter) {
            AIMergeUnit(player, u, AIWaveGet(player, c_waveDivert1));
            return;
        }
        if (type == c_GU_Hornet) {
            AIMergeUnit(player, u, AIWaveGet(player, c_waveDivert2));
            return;
        }
    }

    // processing drone
    //
    if (type == c_GU_ProcessingDrone) {

        AINewDetector(player, u, false);

        if (AINumEnemyBuildings(player) == 0) {
            if (AIOfferNewScout(player, u)) {
                return;
            }
        }

        AIWaveAddUnitPriority(AIWaveGet(player, c_waveMain), u, c_prioWavePeon);
        return;
    }

    // main wave units
    //
    AINewUnitDefault(player, u);
}

//--------------------------------------------------------------------------------------------------
//  AIGetScoutGen
//--------------------------------------------------------------------------------------------------
unit AIGetScoutGen (int player, int index, unit prev, bool allowWorkers) {
    unit processingDrone;
    string prevType = UnitGetType(prev);
    
    if (!PlayerBeaconIsSet(player, c_beaconScout) &&
        !AIGetFlag(player, e_flagsScouting)) {
        // if no scouting beacons are set and we're not ready to scout, don't return a unit
        return c_nullUnit;
    }

    if (index == 1 && PlayerBeaconIsSet(player, c_beaconScout)) {
        AISetFlag(player, e_flagsScouting, true);
        if (allowWorkers) {
            // only return a worker, we want to claim a tower
            if (prevType == c_GU_ACR) {
                return prev;
            } 
            return AIGrabUnit(player, c_GU_ACR, c_prioScout, null);
        }
    }

    if (AINumEnemyBuildings(player) == 0) {
        // only use medivac scouts if we don't know of any enemy buildings
        //   (ie we need a flying scout to check other islands etc).
        if (prevType == c_GU_ProcessingDrone) {
            return prev;
        }
        processingDrone = AIGrabUnit(player, c_GU_ProcessingDrone, c_prioScout, null);
        if (processingDrone) {
            return processingDrone;
        }
    }

    if (prev) {
        return prev;
    }

    // back to allowing workers as late scouts
    //if (AIGetFlag(player, e_flagsLateScout)) {
    //    return c_nullUnit;
    //}
    if (!allowWorkers) {
        return c_nullUnit;
    }
    return AIGrabUnit(player, c_GU_ACR, c_prioScout, null);
}

//--------------------------------------------------------------------------------------------------
//  AIEarlyDefScoutGen
//--------------------------------------------------------------------------------------------------
unit AIEarlyDefScoutGen (int player, unit prev, bool allowWorkers) {
    unit obs;
    string prevType; 
    
    if (!AIGetFlag(player, e_flagsEarlyDefScout)) {
        return c_nullUnit;
    }
    prevType = UnitGetType(prev);
    if (prevType == c_GU_ProcessingDrone) {
        return prev;
    }
    obs = AIGrabUnit(player, c_GU_ProcessingDrone, c_prioScout, null);
    if (obs) {
        return obs;
    }
    if (prevType == c_GU_Spitfire) {
        return prev;
    }
    obs = AIGrabUnit(player, c_GU_Spitfire, c_prioScout, null);
    if (obs) {
        return obs;
    }
    if (prev) {
        return prev;
    }
    if (!allowWorkers) {
        return c_nullUnit;
    }
    return AIGrabUnit(player, c_GU_ACR, c_prioScout, null);
}

//--------------------------------------------------------------------------------------------------
//  AIWaveThinkGen
//--------------------------------------------------------------------------------------------------
void AIWaveThinkGen (int player, wave w, int type) {
    AIWaveThinkDefault(player, w, type);
}

//--------------------------------------------------------------------------------------------------
//  Genetron Init
//--------------------------------------------------------------------------------------------------
static void GenetronInit (int player) {

    InitCounters(player);
    AIMeleeSharedInit(player);

    AISetDefaultArmyUnit(player, c_GU_Spitfire);
    AISetDefaultTownHall(player, c_GB_ProcessingCore);
    AISetMainState(player, e_mainState_Open, e_mainSubState_Init);
    if (AIPlayerDifficulty(player) > c_skirHard) {
        UIDisplayMessage(PlayerGroupAll(), c_messageAreaChat, StringToText("Genetron AI: Difficulties above Harder are not supported at this time, please use at most Harder difficulty for this AI"));
    }
}

//--------------------------------------------------------------------------------------------------
void GenetronOpen (int player);
void GenetronMid (int player);
void GenetronLate (int player);

//--------------------------------------------------------------------------------------------------
//  AIMeleeGen
//--------------------------------------------------------------------------------------------------
void AIMeleeGen (int player) {
    int mainState = AIState(player, e_mainState);

    if (AIPlayerDifficulty(player) >= c_skirChMoney) {
        AIMeleeCheatResources(player);
    }

    if (mainState == e_mainState_Init)      { GenetronInit(player); }
    else if (mainState == e_mainState_Open) { GenetronOpen(player); }
    else if (mainState == e_mainState_Mid ) { GenetronMid (player); }
    else if (mainState == e_mainState_Late) { GenetronLate(player); }
    else { ErrorMeleeScript(player, "Invalid mainState"); }
}

void GenetronOpen (int player) {
    int diff = AIPlayerDifficulty(player);
    
    if      (diff == c_skirVeryEasy) { GenetronOpenVyEy(player); }
    else if (diff == c_skirEasy)     { GenetronOpenEasy(player); }
    else if (diff == c_skirMedium)   { GenetronOpenMedi(player); }
    else if (diff == c_skirMed_Hard) { GenetronOpenMdHd(player); }
    else if (diff == c_skirHard)     { GenetronOpenHard(player); }
    else                             { GenetronOpenHard(player); }

}

void GenetronMid (int player) {
    int diff = AIPlayerDifficulty(player);

    if      (diff == c_skirVeryEasy) { GenetronMidVyEy(player); }
    else if (diff == c_skirEasy)     { GenetronMidEasy(player); }
    else if (diff == c_skirMedium)   { GenetronMidMedi(player); }
    else if (diff == c_skirMed_Hard) { GenetronMidMdHd(player); }
    else if (diff == c_skirHard)     { GenetronMidHard(player); }
    else                             { GenetronMidHard(player); }

}

void GenetronLate (int player) {
    int diff = AIPlayerDifficulty(player);
    
    if      (diff == c_skirVeryEasy) { GenetronLateVyEy(player); }
    else if (diff == c_skirEasy)     { GenetronLateEasy(player); }
    else if (diff == c_skirMedium)   { GenetronLateMedi(player); }
    else if (diff == c_skirMed_Hard) { GenetronLateMdHd(player); }
    else if (diff == c_skirHard)     { GenetronLateHard(player); }
    else                             { GenetronLateHard(player); }

}
