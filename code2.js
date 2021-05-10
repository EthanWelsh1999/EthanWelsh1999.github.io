gdjs.GameOverCode = {};
gdjs.GameOverCode.GDScoreTextObjects1= [];
gdjs.GameOverCode.GDScoreTextObjects2= [];
gdjs.GameOverCode.GDScoreTextObjects3= [];
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDGameOverObjects3= [];
gdjs.GameOverCode.GDEndTextObjects1= [];
gdjs.GameOverCode.GDEndTextObjects2= [];
gdjs.GameOverCode.GDEndTextObjects3= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EndText"), gdjs.GameOverCode.GDEndTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.GameOverCode.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameOverCode.GDScoreTextObjects1);
{}{for(var i = 0, len = gdjs.GameOverCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreTextObjects1[i].setX(400 - (gdjs.GameOverCode.GDScoreTextObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameOverObjects1[i].setX(400 - (gdjs.GameOverCode.GDGameOverObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDEndTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDEndTextObjects1[i].setX(400 - (gdjs.GameOverCode.GDEndTextObjects1[i].getWidth()) / 2);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "178126__zagi2__game-over2.wav", true, 100, 1);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8076556);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8069756);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDScoreTextObjects3.length = 0;
gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDGameOverObjects3.length = 0;
gdjs.GameOverCode.GDEndTextObjects1.length = 0;
gdjs.GameOverCode.GDEndTextObjects2.length = 0;
gdjs.GameOverCode.GDEndTextObjects3.length = 0;

gdjs.GameOverCode.eventsList1(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
