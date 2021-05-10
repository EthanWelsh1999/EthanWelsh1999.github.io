gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDCentreObjects1= [];
gdjs.GameCode.GDCentreObjects2= [];
gdjs.GameCode.GDCentreObjects3= [];
gdjs.GameCode.GDProjectilePlayerObjects1= [];
gdjs.GameCode.GDProjectilePlayerObjects2= [];
gdjs.GameCode.GDProjectilePlayerObjects3= [];
gdjs.GameCode.GDScoreIndicatorObjects1= [];
gdjs.GameCode.GDScoreIndicatorObjects2= [];
gdjs.GameCode.GDScoreIndicatorObjects3= [];
gdjs.GameCode.GDEnemyObjects1= [];
gdjs.GameCode.GDEnemyObjects2= [];
gdjs.GameCode.GDEnemyObjects3= [];
gdjs.GameCode.GDForceFieldObjects1= [];
gdjs.GameCode.GDForceFieldObjects2= [];
gdjs.GameCode.GDForceFieldObjects3= [];
gdjs.GameCode.GDHealthIndicatorObjects1= [];
gdjs.GameCode.GDHealthIndicatorObjects2= [];
gdjs.GameCode.GDHealthIndicatorObjects3= [];
gdjs.GameCode.GDHealthBoxObjects1= [];
gdjs.GameCode.GDHealthBoxObjects2= [];
gdjs.GameCode.GDHealthBoxObjects3= [];
gdjs.GameCode.GDNotifierObjects1= [];
gdjs.GameCode.GDNotifierObjects2= [];
gdjs.GameCode.GDNotifierObjects3= [];
gdjs.GameCode.GDTimerObjects1= [];
gdjs.GameCode.GDTimerObjects2= [];
gdjs.GameCode.GDTimerObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.conditionTrue_2 = {val:false};
gdjs.GameCode.condition0IsTrue_2 = {val:false};
gdjs.GameCode.condition1IsTrue_2 = {val:false};
gdjs.GameCode.condition2IsTrue_2 = {val:false};
gdjs.GameCode.condition3IsTrue_2 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects = Hashtable.newFrom({"ProjectilePlayer": gdjs.GameCode.GDProjectilePlayerObjects1});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects = Hashtable.newFrom({"ProjectilePlayer": gdjs.GameCode.GDProjectilePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDForceFieldObjects1Objects = Hashtable.newFrom({"ForceField": gdjs.GameCode.GDForceFieldObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects = Hashtable.newFrom({"ProjectilePlayer": gdjs.GameCode.GDProjectilePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects = Hashtable.newFrom({"ProjectilePlayer": gdjs.GameCode.GDProjectilePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHealthBoxObjects1Objects = Hashtable.newFrom({"HealthBox": gdjs.GameCode.GDHealthBoxObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHealthBoxObjects1Objects = Hashtable.newFrom({"HealthBox": gdjs.GameCode.GDHealthBoxObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.GameCode.GDTimerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDTimerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTimerObjects2[i].getOpacity() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDTimerObjects2[k] = gdjs.GameCode.GDTimerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTimerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDTimerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTimerObjects2[i].setOpacity(255);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.GameCode.GDTimerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDTimerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDTimerObjects1[i].getOpacity() == 255 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDTimerObjects1[k] = gdjs.GameCode.GDTimerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDTimerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDTimerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTimerObjects1[i].setOpacity(0);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHealthBoxObjects1Objects = Hashtable.newFrom({"HealthBox": gdjs.GameCode.GDHealthBoxObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects1});gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Centre"), gdjs.GameCode.GDCentreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].putAroundObject((gdjs.GameCode.GDCentreObjects1.length !== 0 ? gdjs.GameCode.GDCentreObjects1[0] : null), 300, (gdjs.GameCode.GDPlayerObjects1[i].getAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].rotate(100, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Centre"), gdjs.GameCode.GDCentreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].putAroundObject((gdjs.GameCode.GDCentreObjects1.length !== 0 ? gdjs.GameCode.GDCentreObjects1[0] : null), 300, (gdjs.GameCode.GDPlayerObjects1[i].getAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].rotate(-(100), runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8011372);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Centre"), gdjs.GameCode.GDCentreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].putAroundObject((gdjs.GameCode.GDCentreObjects1.length !== 0 ? gdjs.GameCode.GDCentreObjects1[0] : null), 300, (gdjs.GameCode.GDPlayerObjects1[i].getAngle()) + 180);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAngle((gdjs.GameCode.GDPlayerObjects1[i].getAngle()) + 180);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8012668);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Centre"), gdjs.GameCode.GDCentreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.GameCode.GDProjectilePlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("")) + (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getWidth()) / 2, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDProjectilePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDProjectilePlayerObjects1[i].addForceTowardPosition((( gdjs.GameCode.GDCentreObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCentreObjects1[0].getPointX("")), (( gdjs.GameCode.GDCentreObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCentreObjects1[0].getPointY("")), 500, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "344310__musiclegends__laser-shoot.wav", false, 100, 1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8015492);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ForceField"), gdjs.GameCode.GDForceFieldObjects1);
gdjs.copyArray(runtimeScene.getObjects("ProjectilePlayer"), gdjs.GameCode.GDProjectilePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDForceFieldObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDProjectilePlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDProjectilePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDProjectilePlayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ProjectilePlayer"), gdjs.GameCode.GDProjectilePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects1[i].getAnimation() == 0 ) {
        gdjs.GameCode.condition0IsTrue_1.val = true;
        gdjs.GameCode.GDEnemyObjects1[k] = gdjs.GameCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Notifier"), gdjs.GameCode.GDNotifierObjects1);
/* Reuse gdjs.GameCode.GDProjectilePlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreIndicator"), gdjs.GameCode.GDScoreIndicatorObjects1);
{for(var i = 0, len = gdjs.GameCode.GDProjectilePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDProjectilePlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "162792__timgormly__8-bit-explosion1.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].unpauseTimer("DeathTimer");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDScoreIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreIndicatorObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameCode.GDNotifierObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNotifierObjects1[i].setString("Score+1!");
}
}{for(var i = 0, len = gdjs.GameCode.GDNotifierObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNotifierObjects1[i].setX(400 - (gdjs.GameCode.GDNotifierObjects1[i].getWidth()) / 2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NotificationTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects1[i].timerElapsedTime("DeathTimer", 0.5) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects1[k] = gdjs.GameCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("EnemyCount").sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HealthBox"), gdjs.GameCode.GDHealthBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("ProjectilePlayer"), gdjs.GameCode.GDProjectilePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHealthBoxObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDHealthBoxObjects1 */
/* Reuse gdjs.GameCode.GDProjectilePlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDProjectilePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDProjectilePlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBoxObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HealthIndicator"), gdjs.GameCode.GDHealthIndicatorObjects1);
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.GameCode.GDHealthIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthIndicatorObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "327738__distillerystudio__error-01.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HealthBox"), gdjs.GameCode.GDHealthBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHealthBoxObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDHealthBoxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HealthIndicator"), gdjs.GameCode.GDHealthIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notifier"), gdjs.GameCode.GDNotifierObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHealthBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBoxObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDHealthIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthIndicatorObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "241809__suntemple__magic-sfx-for-games.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDNotifierObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNotifierObjects1[i].setString("Health +1!");
}
}{for(var i = 0, len = gdjs.GameCode.GDNotifierObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNotifierObjects1[i].setX(400 - (gdjs.GameCode.GDNotifierObjects1[i].getWidth()) / 2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NotificationTimer");
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) <= 0;
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F1");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8036092);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F2");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8037324);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(1, 10), "EnemyTimer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Centre"), gdjs.GameCode.GDCentreObjects1);
gdjs.GameCode.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects, (( gdjs.GameCode.GDCentreObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCentreObjects1[0].getPointX("")), (( gdjs.GameCode.GDCentreObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCentreObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].addPolarForce((gdjs.GameCode.GDEnemyObjects1[i].getAngle()), 30 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyTimer");
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].resetTimer("DeathTimer");
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].pauseTimer("DeathTimer");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(1, 50), "HealthTimer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Centre"), gdjs.GameCode.GDCentreObjects1);
gdjs.GameCode.GDHealthBoxObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHealthBoxObjects1Objects, (( gdjs.GameCode.GDCentreObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCentreObjects1[0].getPointX("")), (( gdjs.GameCode.GDCentreObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCentreObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDHealthBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBoxObjects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBoxObjects1[i].addPolarForce((gdjs.GameCode.GDHealthBoxObjects1[i].getAngle()), 30 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HealthTimer");
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Centre"), gdjs.GameCode.GDCentreObjects1);
gdjs.copyArray(runtimeScene.getObjects("ForceField"), gdjs.GameCode.GDForceFieldObjects1);
gdjs.copyArray(runtimeScene.getObjects("HealthIndicator"), gdjs.GameCode.GDHealthIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreIndicator"), gdjs.GameCode.GDScoreIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.GameCode.GDTimerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].putAroundObject((gdjs.GameCode.GDCentreObjects1.length !== 0 ? gdjs.GameCode.GDCentreObjects1[0] : null), 300, (gdjs.GameCode.GDPlayerObjects1[i].getAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthIndicatorObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreIndicatorObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameCode.GDForceFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDForceFieldObjects1[i].putAroundObject((gdjs.GameCode.GDCentreObjects1.length !== 0 ? gdjs.GameCode.GDCentreObjects1[0] : null), 0, 0);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "laserpack-by-kevin-macleod-from-filmmusic-io.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTimerObjects1[i].setOpacity(0);
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "NotificationTimer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Notifier"), gdjs.GameCode.GDNotifierObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNotifierObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNotifierObjects1[i].setString("");
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition0IsTrue_1;
gdjs.GameCode.conditionTrue_2.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 10) == 0);
}
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) != 0;
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8052276);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Notifier"), gdjs.GameCode.GDNotifierObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).mul(1.2);
}{for(var i = 0, len = gdjs.GameCode.GDNotifierObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNotifierObjects1[i].setString("Speed increasing!");
}
}{for(var i = 0, len = gdjs.GameCode.GDNotifierObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNotifierObjects1[i].setX(400 - (gdjs.GameCode.GDNotifierObjects1[i].getWidth()) / 2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NotificationTimer");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.GameCode.GDTimerObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.object.pickedObjectsCount(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects));
}{for(var i = 0, len = gdjs.GameCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTimerObjects1[i].setString("Object count: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDCentreObjects1.length = 0;
gdjs.GameCode.GDCentreObjects2.length = 0;
gdjs.GameCode.GDCentreObjects3.length = 0;
gdjs.GameCode.GDProjectilePlayerObjects1.length = 0;
gdjs.GameCode.GDProjectilePlayerObjects2.length = 0;
gdjs.GameCode.GDProjectilePlayerObjects3.length = 0;
gdjs.GameCode.GDScoreIndicatorObjects1.length = 0;
gdjs.GameCode.GDScoreIndicatorObjects2.length = 0;
gdjs.GameCode.GDScoreIndicatorObjects3.length = 0;
gdjs.GameCode.GDEnemyObjects1.length = 0;
gdjs.GameCode.GDEnemyObjects2.length = 0;
gdjs.GameCode.GDEnemyObjects3.length = 0;
gdjs.GameCode.GDForceFieldObjects1.length = 0;
gdjs.GameCode.GDForceFieldObjects2.length = 0;
gdjs.GameCode.GDForceFieldObjects3.length = 0;
gdjs.GameCode.GDHealthIndicatorObjects1.length = 0;
gdjs.GameCode.GDHealthIndicatorObjects2.length = 0;
gdjs.GameCode.GDHealthIndicatorObjects3.length = 0;
gdjs.GameCode.GDHealthBoxObjects1.length = 0;
gdjs.GameCode.GDHealthBoxObjects2.length = 0;
gdjs.GameCode.GDHealthBoxObjects3.length = 0;
gdjs.GameCode.GDNotifierObjects1.length = 0;
gdjs.GameCode.GDNotifierObjects2.length = 0;
gdjs.GameCode.GDNotifierObjects3.length = 0;
gdjs.GameCode.GDTimerObjects1.length = 0;
gdjs.GameCode.GDTimerObjects2.length = 0;
gdjs.GameCode.GDTimerObjects3.length = 0;

gdjs.GameCode.eventsList2(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
