gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDCentreObjects1= [];
gdjs.GameCode.GDCentreObjects2= [];
gdjs.GameCode.GDProjectilePlayerObjects1= [];
gdjs.GameCode.GDProjectilePlayerObjects2= [];
gdjs.GameCode.GDScoreIndicatorObjects1= [];
gdjs.GameCode.GDScoreIndicatorObjects2= [];
gdjs.GameCode.GDEnemyObjects1= [];
gdjs.GameCode.GDEnemyObjects2= [];
gdjs.GameCode.GDForceFieldObjects1= [];
gdjs.GameCode.GDForceFieldObjects2= [];
gdjs.GameCode.GDHealthIndicatorObjects1= [];
gdjs.GameCode.GDHealthIndicatorObjects2= [];
gdjs.GameCode.GDHealthBoxObjects1= [];
gdjs.GameCode.GDHealthBoxObjects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects = Hashtable.newFrom({"ProjectilePlayer": gdjs.GameCode.GDProjectilePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects = Hashtable.newFrom({"ProjectilePlayer": gdjs.GameCode.GDProjectilePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDForceFieldObjects1Objects = Hashtable.newFrom({"ForceField": gdjs.GameCode.GDForceFieldObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects = Hashtable.newFrom({"ProjectilePlayer": gdjs.GameCode.GDProjectilePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects = Hashtable.newFrom({"ProjectilePlayer": gdjs.GameCode.GDProjectilePlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHealthBoxObjects1Objects = Hashtable.newFrom({"HealthBox": gdjs.GameCode.GDHealthBoxObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHealthBoxObjects1Objects = Hashtable.newFrom({"HealthBox": gdjs.GameCode.GDHealthBoxObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHealthBoxObjects1Objects = Hashtable.newFrom({"HealthBox": gdjs.GameCode.GDHealthBoxObjects1});gdjs.GameCode.eventsList0 = function(runtimeScene) {

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
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7739836);
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
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7740940);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Centre"), gdjs.GameCode.GDCentreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.GameCode.GDProjectilePlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDProjectilePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDProjectilePlayerObjects1[i].addForceTowardPosition((( gdjs.GameCode.GDCentreObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCentreObjects1[0].getPointX("")), (( gdjs.GameCode.GDCentreObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCentreObjects1[0].getPointY("")), 500, 1);
}
}}

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
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDProjectilePlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects1 */
/* Reuse gdjs.GameCode.GDProjectilePlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreIndicator"), gdjs.GameCode.GDScoreIndicatorObjects1);
{for(var i = 0, len = gdjs.GameCode.GDProjectilePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDProjectilePlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDScoreIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreIndicatorObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
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
{for(var i = 0, len = gdjs.GameCode.GDHealthBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBoxObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDHealthIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthIndicatorObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
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
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F1");
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7750468);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

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
    gdjs.GameCode.GDEnemyObjects1[i].addPolarForce((gdjs.GameCode.GDEnemyObjects1[i].getAngle()), 30, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyTimer");
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
    gdjs.GameCode.GDHealthBoxObjects1[i].addPolarForce((gdjs.GameCode.GDHealthBoxObjects1[i].getAngle()), 30, 1);
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
gdjs.copyArray(runtimeScene.getObjects("HealthIndicator"), gdjs.GameCode.GDHealthIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreIndicator"), gdjs.GameCode.GDScoreIndicatorObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].putAroundObject((gdjs.GameCode.GDCentreObjects1.length !== 0 ? gdjs.GameCode.GDCentreObjects1[0] : null), 300, (gdjs.GameCode.GDPlayerObjects1[i].getAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthIndicatorObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreIndicatorObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDCentreObjects1.length = 0;
gdjs.GameCode.GDCentreObjects2.length = 0;
gdjs.GameCode.GDProjectilePlayerObjects1.length = 0;
gdjs.GameCode.GDProjectilePlayerObjects2.length = 0;
gdjs.GameCode.GDScoreIndicatorObjects1.length = 0;
gdjs.GameCode.GDScoreIndicatorObjects2.length = 0;
gdjs.GameCode.GDEnemyObjects1.length = 0;
gdjs.GameCode.GDEnemyObjects2.length = 0;
gdjs.GameCode.GDForceFieldObjects1.length = 0;
gdjs.GameCode.GDForceFieldObjects2.length = 0;
gdjs.GameCode.GDHealthIndicatorObjects1.length = 0;
gdjs.GameCode.GDHealthIndicatorObjects2.length = 0;
gdjs.GameCode.GDHealthBoxObjects1.length = 0;
gdjs.GameCode.GDHealthBoxObjects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
