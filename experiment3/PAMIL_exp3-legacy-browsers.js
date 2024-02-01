/******************* 
 * Pamil_Exp3 Test *
 *******************/


// store info about the experiment session:
let expName = 'PAMIL_exp3';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(1, 180)).toFixed(0), 3)}`,
    'session': '001',
    'groupE': '',
    'groupM': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(assignMILgroupRoutineBegin());
flowScheduler.add(assignMILgroupRoutineEachFrame());
flowScheduler.add(assignMILgroupRoutineEnd());
const showhighMILLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(showhighMILLoopBegin(showhighMILLoopScheduler));
flowScheduler.add(showhighMILLoopScheduler);
flowScheduler.add(showhighMILLoopEnd);
const showlowMILLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(showlowMILLoopBegin(showlowMILLoopScheduler));
flowScheduler.add(showlowMILLoopScheduler);
flowScheduler.add(showlowMILLoopEnd);
flowScheduler.add(AffectGrid_instructionRoutineBegin());
flowScheduler.add(AffectGrid_instructionRoutineEachFrame());
flowScheduler.add(AffectGrid_instructionRoutineEnd());
flowScheduler.add(PretestEmotion_valenceRoutineBegin());
flowScheduler.add(PretestEmotion_valenceRoutineEachFrame());
flowScheduler.add(PretestEmotion_valenceRoutineEnd());
flowScheduler.add(PretestEmotion_arousalRoutineBegin());
flowScheduler.add(PretestEmotion_arousalRoutineEachFrame());
flowScheduler.add(PretestEmotion_arousalRoutineEnd());
flowScheduler.add(EmotionVideoRoutineBegin());
flowScheduler.add(EmotionVideoRoutineEachFrame());
flowScheduler.add(EmotionVideoRoutineEnd());
flowScheduler.add(GolbalLocal_instructionRoutineBegin());
flowScheduler.add(GolbalLocal_instructionRoutineEachFrame());
flowScheduler.add(GolbalLocal_instructionRoutineEnd());
flowScheduler.add(GobalLocal_exampleRoutineBegin());
flowScheduler.add(GobalLocal_exampleRoutineEachFrame());
flowScheduler.add(GobalLocal_exampleRoutineEnd());
flowScheduler.add(example_feedbackRoutineBegin());
flowScheduler.add(example_feedbackRoutineEachFrame());
flowScheduler.add(example_feedbackRoutineEnd());
const trialsGobalLocalLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsGobalLocalLoopBegin(trialsGobalLocalLoopScheduler));
flowScheduler.add(trialsGobalLocalLoopScheduler);
flowScheduler.add(trialsGobalLocalLoopEnd);
const trialsMILLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsMILLoopBegin(trialsMILLoopScheduler));
flowScheduler.add(trialsMILLoopScheduler);
flowScheduler.add(trialsMILLoopEnd);
flowScheduler.add(PostestEmotion_valenceRoutineBegin());
flowScheduler.add(PostestEmotion_valenceRoutineEachFrame());
flowScheduler.add(PostestEmotion_valenceRoutineEnd());
flowScheduler.add(PostestEmotion_arousalRoutineBegin());
flowScheduler.add(PostestEmotion_arousalRoutineEachFrame());
flowScheduler.add(PostestEmotion_arousalRoutineEnd());
const repeatCheckLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeatCheckLoopBegin(repeatCheckLoopScheduler));
flowScheduler.add(repeatCheckLoopScheduler);
flowScheduler.add(repeatCheckLoopEnd);
flowScheduler.add(EndScreenRoutineBegin());
flowScheduler.add(EndScreenRoutineEachFrame());
flowScheduler.add(EndScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '超商電子禮券預計在一至兩週後寄出，屆時煩請撥冗收取簡訊。感謝您的參與及協助，謝謝!', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // libraries:
    {'surveyLibrary': true},
    // resources:
    {'name': 'resources/loop/pictureloop.xlsx', 'path': 'resources/loop/pictureloop.xlsx'},
    {'name': 'resources/images/p1_FgJl.png', 'path': 'resources/images/p1_FgJl.png'},
    {'name': 'resources/images/p2_FlJg.png', 'path': 'resources/images/p2_FlJg.png'},
    {'name': 'resources/images/p3_FlJg.png', 'path': 'resources/images/p3_FlJg.png'},
    {'name': 'resources/images/p4_FgJl.png', 'path': 'resources/images/p4_FgJl.png'},
    {'name': 'resources/images/p5_FgJl.png', 'path': 'resources/images/p5_FgJl.png'},
    {'name': 'resources/images/p6_FlJg.png', 'path': 'resources/images/p6_FlJg.png'},
    {'name': 'resources/images/p7_FlJg.png', 'path': 'resources/images/p7_FlJg.png'},
    {'name': 'resources/images/p8_FgJl.png', 'path': 'resources/images/p8_FgJl.png'},
    {'name': 'resources/loop/MLQP_loop.xlsx', 'path': 'resources/loop/MLQP_loop.xlsx'},
    {'name': 'resources/loop/repeat_check.xlsx', 'path': 'resources/loop/repeat_check.xlsx'},
    {'surveyId': '2a7cc41e-20de-4421-8b93-eb07974dbd2e'},
    {'surveyId': '2e7a6b4d-ecef-472a-a708-6de3bec87327'},
    {'name': 'resources/images/AffectGrid_instruction.png', 'path': 'resources/images/AffectGrid_instruction.png'},
    {'name': 'resources/images/valence.png', 'path': 'resources/images/valence.png'},
    {'name': 'resources/images/nextpage_button.png', 'path': 'resources/images/nextpage_button.png'},
    {'name': 'resources/images/arousal.png', 'path': 'resources/images/arousal.png'},
    {'name': 'resources/images/GobalLocal_instruction.png', 'path': 'resources/images/GobalLocal_instruction.png'},
    {'name': 'resources/images/p1_FgJl.png', 'path': 'resources/images/p1_FgJl.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'resources/images/end_message.png', 'path': 'resources/images/end_message.png'},
    {'name': 'resources/loop/repeat_check.xlsx', 'path': 'resources/loop/repeat_check.xlsx'},
    {'name': 'resources/images/end_message.png', 'path': 'resources/images/end_message.png'},
    {'name': 'resources/images/AffectGrid_instruction.png', 'path': 'resources/images/AffectGrid_instruction.png'},
    {'name': 'resources/images/nextpage_button.png', 'path': 'resources/images/nextpage_button.png'},
    {'name': 'resources/images/valence.png', 'path': 'resources/images/valence.png'},
    {'name': 'resources/images/arousal.png', 'path': 'resources/images/arousal.png'},
    {'name': 'resources/videos/neutral.mp4', 'path': 'resources/videos/neutral.mp4'},
    {'name': 'resources/videos/positive.mp4', 'path': 'resources/videos/positive.mp4'},
    {'name': 'resources/videos/sadness.mp4', 'path': 'resources/videos/sadness.mp4'},
    {'name': 'resources/loop/MLQP_loop.xlsx', 'path': 'resources/loop/MLQP_loop.xlsx'},
    {'name': 'resources/loop/pictureloop.xlsx', 'path': 'resources/loop/pictureloop.xlsx'},
    {'name': 'resources/images/GobalLocal_instruction.png', 'path': 'resources/images/GobalLocal_instruction.png'},
    {'name': 'resources/images/p1_FgJl.png', 'path': 'resources/images/p1_FgJl.png'},
    {'name': 'resources/images/p2_FlJg.png', 'path': 'resources/images/p2_FlJg.png'},
    {'name': 'resources/images/p3_FlJg.png', 'path': 'resources/images/p3_FlJg.png'},
    {'name': 'resources/images/p4_FgJl.png', 'path': 'resources/images/p4_FgJl.png'},
    {'name': 'resources/images/p5_FgJl.png', 'path': 'resources/images/p5_FgJl.png'},
    {'name': 'resources/images/p6_FlJg.png', 'path': 'resources/images/p6_FlJg.png'},
    {'name': 'resources/images/p7_FlJg.png', 'path': 'resources/images/p7_FlJg.png'},
    {'name': 'resources/images/p8_FgJl.png', 'path': 'resources/images/p8_FgJl.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var assignMILgroupClock;
var highMIL_rep;
var lowMIL_rep;
var AffectGrid_instructionClock;
var image_AffectGrid_instruction;
var key_AffectGridInstruction;
var PretestEmotion_valenceClock;
var text_pretest_valenceInstruction;
var text_pre0valence;
var image_pretest_valence;
var slider_pretestvalence;
var button_pretestvalence;
var mouse_pretestvalence;
var PretestEmotion_arousalClock;
var text_pretest_arousalnstruction;
var image_pretest_arousal;
var slider_pretestarousal;
var button_pretestarousal;
var mouse_pretestarousal;
var EmotionVideoClock;
var movie_groups;
var text_MovieInstruction;
var movie_fixation;
var Emotion_MovieClock;
var Emotion_Movie;
var GolbalLocal_instructionClock;
var image_GobalLocalInstruction;
var key_GobalLocalInstruction;
var GobalLocal_exampleClock;
var image_GobalLocalExample;
var key_GobalLocalExample;
var example_feedbackClock;
var feedback_to_formal_GobalLocal;
var key_GolbalLocal_formalsession;
var fixpointClock;
var fixation;
var GobalLocal_FormalSessionClock;
var global_choice;
var gobal_rt;
var local_rt;
var image_GobalLocal_Formal;
var key_GobalLocal_ans;
var MLQPClock;
var MLQP_ans;
var text_MLQinstruction;
var MLQP_item;
var slider_MLQ;
var button_MLQ;
var mouse_MLQ;
var PostestEmotion_valenceClock;
var text_postest_valenceInstruction;
var text_post0valence;
var image_postest_valence;
var slider_postestvalence;
var button_postestvalence;
var mouse_postestvalence;
var PostestEmotion_arousalClock;
var text_postest_arousalInstruction;
var image_postest_arousal;
var slider_postestarousal;
var button_postestarousal;
var mouse_postestarousal;
var movie_checkClock;
var check_repeat;
var MovieRepeatCheck;
var slider_check;
var button_check;
var mouse_check;
var EndScreenClock;
var text_goodbye;
var image_endmsg;
var mouse_goodbye;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "assignMILgroup"
  assignMILgroupClock = new util.Clock();
  // Run 'Begin Experiment' code from code_MILgroup
  highMIL_rep = 0;
  lowMIL_rep = 0;
  if (((Number.parseInt(expInfo["participant"]) % 2) === 0)) {
      highMIL_rep = 1;
      expInfo["groupM"] = "high";
  } else {
      lowMIL_rep = 1;
      expInfo["groupM"] = "low";
  }
  
  // Initialize components for Routine "AffectGrid_instruction"
  AffectGrid_instructionClock = new util.Clock();
  image_AffectGrid_instruction = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_AffectGrid_instruction', units : undefined, 
    image : 'resources/images/AffectGrid_instruction.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_AffectGridInstruction = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PretestEmotion_valence"
  PretestEmotion_valenceClock = new util.Clock();
  text_pretest_valenceInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_pretest_valenceInstruction',
    text: '請依下方情感方格中「橫軸」所標示的數字，在最下方相應的量尺橫桿上，用滑鼠點選最適合描述您「目前」的「情緒正負向程度」。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.025,  wrapWidth: 20.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_pre0valence = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_pre0valence',
    text: '若您一開始即點選0\n請先嘗試點選其他數字\n會於右下角出現下一頁按鈕\n接著再次點選0\n即可按下一頁',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.02,  wrapWidth: 11.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]),  opacity: undefined,
    depth: -1.0 
  });
  
  image_pretest_valence = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_pretest_valence', units : undefined, 
    image : 'resources/images/valence.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  slider_pretestvalence = new visual.Slider({
    win: psychoJS.window, name: 'slider_pretestvalence',
    startValue: undefined,
    size: [0.7, 0.06], pos: [0, (- 0.38)], ori: 0.0, units: psychoJS.window.units,
    labels: ["-4", "-3", "-2", "-1", "0", "1", "2", "3", "4"], fontSize: 0.03, ticks: [(- 4), (- 3), (- 2), (- 1), 0, 1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([0.0039, 0.0039, 0.0039]), markerColor: new util.Color('Red'), lineColor: new util.Color([0.0039, 0.0039, 0.0039]), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  button_pretestvalence = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_pretestvalence', units : undefined, 
    image : 'resources/images/nextpage_button.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.75, (- 0.4)], size : [0.17, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  mouse_pretestvalence = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pretestvalence.mouseClock = new util.Clock();
  // Initialize components for Routine "PretestEmotion_arousal"
  PretestEmotion_arousalClock = new util.Clock();
  text_pretest_arousalnstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_pretest_arousalnstruction',
    text: '請依下方情感方格中「縱軸」所標示的數字，在左方相應的量尺橫桿上，用滑鼠點選最適合描述您「目前」的「情緒激動程度」。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.025,  wrapWidth: 20.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  image_pretest_arousal = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_pretest_arousal', units : undefined, 
    image : 'resources/images/arousal.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  slider_pretestarousal = new visual.Slider({
    win: psychoJS.window, name: 'slider_pretestarousal',
    startValue: undefined,
    size: [0.06, 0.7], pos: [(- 0.43), (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([0.0039, 0.0039, 0.0039]), markerColor: new util.Color('Red'), lineColor: new util.Color([0.0039, 0.0039, 0.0039]), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  button_pretestarousal = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_pretestarousal', units : undefined, 
    image : 'resources/images/nextpage_button.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.75, (- 0.4)], size : [0.17, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse_pretestarousal = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pretestarousal.mouseClock = new util.Clock();
  // Initialize components for Routine "EmotionVideo"
  EmotionVideoClock = new util.Clock();
  // Run 'Begin Experiment' code from code_moviegroup
  movie_groups = ["resources/videos/neutral.mp4", "resources/videos/positive.mp4", "resources/videos/sadness.mp4"];
  if (((Number.parseInt(expInfo["participant"]) % 3) === 0)) {
      expInfo["groupE"] = movie_groups[0];
  } else {
      if (((Number.parseInt(expInfo["participant"]) % 3) === 1)) {
          expInfo["groupE"] = movie_groups[1];
      } else {
          if (((Number.parseInt(expInfo["participant"]) % 3) === 2)) {
              expInfo["groupE"] = movie_groups[2];
          }
      }
  }
  
  text_MovieInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_MovieInstruction',
    text: '接下來會自動播放一部時間在兩分鐘內的短片\n\n請您注意觀看\n\n(可透過鍵盤的音量鍵來調整短片的音量)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  movie_fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'movie_fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Emotion_MovieClock = new util.Clock();
  Emotion_Movie = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Emotion_Movie',
    units: psychoJS.window.units,
    movie: expInfo["groupE"],
    pos: [0, 0],
    anchor: 'center',
    size: [1, 0.7],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: -3
    });
  // Initialize components for Routine "GolbalLocal_instruction"
  GolbalLocal_instructionClock = new util.Clock();
  image_GobalLocalInstruction = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_GobalLocalInstruction', units : undefined, 
    image : 'resources/images/GobalLocal_instruction.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_GobalLocalInstruction = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GobalLocal_example"
  GobalLocal_exampleClock = new util.Clock();
  image_GobalLocalExample = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_GobalLocalExample', units : undefined, 
    image : 'resources/images/p1_FgJl.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_GobalLocalExample = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "example_feedback"
  example_feedbackClock = new util.Clock();
  feedback_to_formal_GobalLocal = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_to_formal_GobalLocal',
    text: '很好，您現在知道該怎麼做了!\n\n若您準備好開始進入正式題\n\n請按「空白鍵」開始',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_GolbalLocal_formalsession = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixpoint"
  fixpointClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "GobalLocal_FormalSession"
  GobalLocal_FormalSessionClock = new util.Clock();
  // Run 'Begin Experiment' code from code_caculateGobalChoiceRate
  global_choice = [];
  gobal_rt = [];
  local_rt = [];
  
  image_GobalLocal_Formal = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_GobalLocal_Formal', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_GobalLocal_ans = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MLQP"
  MLQPClock = new util.Clock();
  // Run 'Begin Experiment' code from code_MLQmean
  MLQP_ans = [];
  
  text_MLQinstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_MLQinstruction',
    text: '以下句子是想了解您「現在」可能有的想法或感受。\n請您依據您「現在的感受」，用滑鼠在下面的橫桿中，點選最適合描述您現在的感受的正確程度。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  MLQP_item = new visual.TextStim({
    win: psychoJS.window,
    name: 'MLQP_item',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  slider_MLQ = new visual.Slider({
    win: psychoJS.window, name: 'slider_MLQ',
    startValue: undefined,
    size: [1, 0.05], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1\n\u5b8c\u5168\u4e0d\u6b63\u78ba", "2", "3", "4", "5", "6", "7\n\u5b8c\u5168\u6b63\u78ba"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([0.0039, 0.0039, 0.0039]), markerColor: new util.Color('Red'), lineColor: new util.Color([0.0039, 0.0039, 0.0039]), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  button_MLQ = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_MLQ', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.75, (- 0.4)], size : [0.17, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  mouse_MLQ = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_MLQ.mouseClock = new util.Clock();
  // Initialize components for Routine "PostestEmotion_valence"
  PostestEmotion_valenceClock = new util.Clock();
  text_postest_valenceInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_postest_valenceInstruction',
    text: '請依下方情感方格中「橫軸」所標示的數字，在最下方相應的量尺橫桿上，用滑鼠點選最適合描述您剛才在「觀看短片時」的「情緒正負向程度」。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.025,  wrapWidth: 20.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_post0valence = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_post0valence',
    text: '若您一開始即點選0\n請先嘗試點選其他數字\n會於右下角出現下一頁按鈕\n接著再次點選0\n即可按下一頁',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.02,  wrapWidth: 11.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]),  opacity: undefined,
    depth: -1.0 
  });
  
  image_postest_valence = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_postest_valence', units : undefined, 
    image : 'resources/images/valence.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  slider_postestvalence = new visual.Slider({
    win: psychoJS.window, name: 'slider_postestvalence',
    startValue: undefined,
    size: [0.7, 0.06], pos: [0, (- 0.38)], ori: 0.0, units: psychoJS.window.units,
    labels: ["-4", "-3", "-2", "-1", "0", "1", "2", "3", "4"], fontSize: 0.03, ticks: [(- 4), (- 3), (- 2), (- 1), 0, 1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([0.0039, 0.0039, 0.0039]), markerColor: new util.Color('Red'), lineColor: new util.Color([0.0039, 0.0039, 0.0039]), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  button_postestvalence = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_postestvalence', units : undefined, 
    image : 'resources/images/nextpage_button.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.75, (- 0.4)], size : [0.17, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  mouse_postestvalence = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_postestvalence.mouseClock = new util.Clock();
  // Initialize components for Routine "PostestEmotion_arousal"
  PostestEmotion_arousalClock = new util.Clock();
  text_postest_arousalInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_postest_arousalInstruction',
    text: '請依下方情感方格中「縱軸」所標示的數字，在左方相應的量尺橫桿上，用滑鼠點選最適合描述您剛才在「觀看短片時」的「情緒激動程度」。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.025,  wrapWidth: 20.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  image_postest_arousal = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_postest_arousal', units : undefined, 
    image : 'resources/images/arousal.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  slider_postestarousal = new visual.Slider({
    win: psychoJS.window, name: 'slider_postestarousal',
    startValue: undefined,
    size: [0.06, 0.7], pos: [(- 0.43), (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([0.0039, 0.0039, 0.0039]), markerColor: new util.Color('Red'), lineColor: new util.Color([0.0039, 0.0039, 0.0039]), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  button_postestarousal = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_postestarousal', units : undefined, 
    image : 'resources/images/nextpage_button.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.75, (- 0.4)], size : [0.17, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse_postestarousal = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_postestarousal.mouseClock = new util.Clock();
  // Initialize components for Routine "movie_check"
  movie_checkClock = new util.Clock();
  // Run 'Begin Experiment' code from repeat_check
  check_repeat = [];
  
  MovieRepeatCheck = new visual.TextStim({
    win: psychoJS.window,
    name: 'MovieRepeatCheck',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  slider_check = new visual.Slider({
    win: psychoJS.window, name: 'slider_check',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u662f", "\u5426"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color([0.0039, 0.0039, 0.0039]), markerColor: new util.Color('Red'), lineColor: new util.Color([0.0039, 0.0039, 0.0039]), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  button_check = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_check', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.75, (- 0.4)], size : [0.17, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse_check = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_check.mouseClock = new util.Clock();
  // Initialize components for Routine "EndScreen"
  EndScreenClock = new util.Clock();
  text_goodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_goodbye',
    text: '本次實驗已完成，稍後請稍等實驗數據儲存\n\n數據儲存完畢後，會出現下圖畫面\n\n屆時請「點選OK」，接著再關閉實驗網頁\n\n閱讀完此頁說明，請用滑鼠點擊下圖來結束實驗\n\n感謝您的參與及協助!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  image_endmsg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_endmsg', units : undefined, 
    image : 'resources/images/end_message.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.5, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_goodbye = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_goodbye.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var assignMILgroupComponents;
function assignMILgroupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'assignMILgroup' ---
    t = 0;
    assignMILgroupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    assignMILgroupComponents = [];
    
    assignMILgroupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function assignMILgroupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'assignMILgroup' ---
    // get current time
    t = assignMILgroupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    assignMILgroupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function assignMILgroupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'assignMILgroup' ---
    assignMILgroupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "assignMILgroup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var showhighMIL;
function showhighMILLoopBegin(showhighMILLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    showhighMIL = new TrialHandler({
      psychoJS: psychoJS,
      nReps: highMIL_rep, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'showhighMIL'
    });
    psychoJS.experiment.addLoop(showhighMIL); // add the loop to the experiment
    currentLoop = showhighMIL;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    showhighMIL.forEach(function() {
      snapshot = showhighMIL.getSnapshot();
    
      showhighMILLoopScheduler.add(importConditions(snapshot));
      showhighMILLoopScheduler.add(survey_highMILRoutineBegin(snapshot));
      showhighMILLoopScheduler.add(survey_highMILRoutineEachFrame());
      showhighMILLoopScheduler.add(survey_highMILRoutineEnd(snapshot));
      showhighMILLoopScheduler.add(showhighMILLoopEndIteration(showhighMILLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function showhighMILLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(showhighMIL);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function showhighMILLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var showlowMIL;
function showlowMILLoopBegin(showlowMILLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    showlowMIL = new TrialHandler({
      psychoJS: psychoJS,
      nReps: lowMIL_rep, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'showlowMIL'
    });
    psychoJS.experiment.addLoop(showlowMIL); // add the loop to the experiment
    currentLoop = showlowMIL;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    showlowMIL.forEach(function() {
      snapshot = showlowMIL.getSnapshot();
    
      showlowMILLoopScheduler.add(importConditions(snapshot));
      showlowMILLoopScheduler.add(survey_lowMILRoutineBegin(snapshot));
      showlowMILLoopScheduler.add(survey_lowMILRoutineEachFrame());
      showlowMILLoopScheduler.add(survey_lowMILRoutineEnd(snapshot));
      showlowMILLoopScheduler.add(showlowMILLoopEndIteration(showlowMILLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function showlowMILLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(showlowMIL);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function showlowMILLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialsGobalLocal;
function trialsGobalLocalLoopBegin(trialsGobalLocalLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsGobalLocal = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/loop/pictureloop.xlsx',
      seed: undefined, name: 'trialsGobalLocal'
    });
    psychoJS.experiment.addLoop(trialsGobalLocal); // add the loop to the experiment
    currentLoop = trialsGobalLocal;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialsGobalLocal.forEach(function() {
      snapshot = trialsGobalLocal.getSnapshot();
    
      trialsGobalLocalLoopScheduler.add(importConditions(snapshot));
      trialsGobalLocalLoopScheduler.add(fixpointRoutineBegin(snapshot));
      trialsGobalLocalLoopScheduler.add(fixpointRoutineEachFrame());
      trialsGobalLocalLoopScheduler.add(fixpointRoutineEnd(snapshot));
      trialsGobalLocalLoopScheduler.add(GobalLocal_FormalSessionRoutineBegin(snapshot));
      trialsGobalLocalLoopScheduler.add(GobalLocal_FormalSessionRoutineEachFrame());
      trialsGobalLocalLoopScheduler.add(GobalLocal_FormalSessionRoutineEnd(snapshot));
      trialsGobalLocalLoopScheduler.add(trialsGobalLocalLoopEndIteration(trialsGobalLocalLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsGobalLocalLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialsGobalLocal);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsGobalLocalLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialsMIL;
function trialsMILLoopBegin(trialsMILLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsMIL = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/loop/MLQP_loop.xlsx',
      seed: undefined, name: 'trialsMIL'
    });
    psychoJS.experiment.addLoop(trialsMIL); // add the loop to the experiment
    currentLoop = trialsMIL;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialsMIL.forEach(function() {
      snapshot = trialsMIL.getSnapshot();
    
      trialsMILLoopScheduler.add(importConditions(snapshot));
      trialsMILLoopScheduler.add(MLQPRoutineBegin(snapshot));
      trialsMILLoopScheduler.add(MLQPRoutineEachFrame());
      trialsMILLoopScheduler.add(MLQPRoutineEnd(snapshot));
      trialsMILLoopScheduler.add(trialsMILLoopEndIteration(trialsMILLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsMILLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialsMIL);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsMILLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var repeatCheck;
function repeatCheckLoopBegin(repeatCheckLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeatCheck = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/loop/repeat_check.xlsx',
      seed: undefined, name: 'repeatCheck'
    });
    psychoJS.experiment.addLoop(repeatCheck); // add the loop to the experiment
    currentLoop = repeatCheck;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    repeatCheck.forEach(function() {
      snapshot = repeatCheck.getSnapshot();
    
      repeatCheckLoopScheduler.add(importConditions(snapshot));
      repeatCheckLoopScheduler.add(movie_checkRoutineBegin(snapshot));
      repeatCheckLoopScheduler.add(movie_checkRoutineEachFrame());
      repeatCheckLoopScheduler.add(movie_checkRoutineEnd(snapshot));
      repeatCheckLoopScheduler.add(repeatCheckLoopEndIteration(repeatCheckLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function repeatCheckLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repeatCheck);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function repeatCheckLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var survey_highMIL;
var survey_highMILClock;
function survey_highMILRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'survey_highMIL' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'survey_highMIL' ---
    survey_highMIL = new visual.Survey({
        win: psychoJS.window,
        name: 'survey_highMIL',
        surveyId: '2a7cc41e-20de-4421-8b93-eb07974dbd2e',
    });
    survey_highMILClock = new util.Clock();
    survey_highMIL.setAutoDraw(true);
    survey_highMIL.stauts = PsychoJS.Status.STARTED;
    survey_highMIL.isFinished = false;
    survey_highMIL.tStart = t;  // (not accounting for frame time here)
    survey_highMIL.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function survey_highMILRoutineEachFrame() {
  return async function () {
    t = survey_highMILClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if survey_highMIL is completed, move on
    if (survey_highMIL.isFinished) {
      survey_highMIL.setAutoDraw(false);
      survey_highMIL.stauts = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function survey_highMILRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'survey_highMIL' ---
    // get data from survey_highMIL
    const survey_highMILResponse =  survey_highMIL.getResponse();
    for (const question in survey_highMILResponse) {
      psychoJS.experiment.addData(`survey_highMIL.${question}`, survey_highMILResponse[question]);
    }
    await survey_highMIL.save();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var survey_lowMIL;
var survey_lowMILClock;
function survey_lowMILRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'survey_lowMIL' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'survey_lowMIL' ---
    survey_lowMIL = new visual.Survey({
        win: psychoJS.window,
        name: 'survey_lowMIL',
        surveyId: '2e7a6b4d-ecef-472a-a708-6de3bec87327',
    });
    survey_lowMILClock = new util.Clock();
    survey_lowMIL.setAutoDraw(true);
    survey_lowMIL.stauts = PsychoJS.Status.STARTED;
    survey_lowMIL.isFinished = false;
    survey_lowMIL.tStart = t;  // (not accounting for frame time here)
    survey_lowMIL.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function survey_lowMILRoutineEachFrame() {
  return async function () {
    t = survey_lowMILClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if survey_lowMIL is completed, move on
    if (survey_lowMIL.isFinished) {
      survey_lowMIL.setAutoDraw(false);
      survey_lowMIL.stauts = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function survey_lowMILRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'survey_lowMIL' ---
    // get data from survey_lowMIL
    const survey_lowMILResponse =  survey_lowMIL.getResponse();
    for (const question in survey_lowMILResponse) {
      psychoJS.experiment.addData(`survey_lowMIL.${question}`, survey_lowMILResponse[question]);
    }
    await survey_lowMIL.save();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_AffectGridInstruction_allKeys;
var AffectGrid_instructionComponents;
function AffectGrid_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AffectGrid_instruction' ---
    t = 0;
    AffectGrid_instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_AffectGridInstruction.keys = undefined;
    key_AffectGridInstruction.rt = undefined;
    _key_AffectGridInstruction_allKeys = [];
    // keep track of which components have finished
    AffectGrid_instructionComponents = [];
    AffectGrid_instructionComponents.push(image_AffectGrid_instruction);
    AffectGrid_instructionComponents.push(key_AffectGridInstruction);
    
    AffectGrid_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function AffectGrid_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AffectGrid_instruction' ---
    // get current time
    t = AffectGrid_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_AffectGrid_instruction* updates
    if (t >= 0.0 && image_AffectGrid_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_AffectGrid_instruction.tStart = t;  // (not accounting for frame time here)
      image_AffectGrid_instruction.frameNStart = frameN;  // exact frame index
      
      image_AffectGrid_instruction.setAutoDraw(true);
    }

    
    // *key_AffectGridInstruction* updates
    if (t >= 3 && key_AffectGridInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_AffectGridInstruction.tStart = t;  // (not accounting for frame time here)
      key_AffectGridInstruction.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_AffectGridInstruction.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_AffectGridInstruction.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_AffectGridInstruction.clearEvents(); });
    }

    if (key_AffectGridInstruction.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_AffectGridInstruction.getKeys({keyList: ['space'], waitRelease: false});
      _key_AffectGridInstruction_allKeys = _key_AffectGridInstruction_allKeys.concat(theseKeys);
      if (_key_AffectGridInstruction_allKeys.length > 0) {
        key_AffectGridInstruction.keys = _key_AffectGridInstruction_allKeys[_key_AffectGridInstruction_allKeys.length - 1].name;  // just the last key pressed
        key_AffectGridInstruction.rt = _key_AffectGridInstruction_allKeys[_key_AffectGridInstruction_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AffectGrid_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AffectGrid_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AffectGrid_instruction' ---
    AffectGrid_instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_AffectGridInstruction.stop();
    // the Routine "AffectGrid_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gotValidClick;
var PretestEmotion_valenceComponents;
function PretestEmotion_valenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PretestEmotion_valence' ---
    t = 0;
    PretestEmotion_valenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_pretestvalence.reset()
    // setup some python lists for storing info about the mouse_pretestvalence
    // current position of the mouse:
    mouse_pretestvalence.x = [];
    mouse_pretestvalence.y = [];
    mouse_pretestvalence.leftButton = [];
    mouse_pretestvalence.midButton = [];
    mouse_pretestvalence.rightButton = [];
    mouse_pretestvalence.time = [];
    mouse_pretestvalence.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PretestEmotion_valenceComponents = [];
    PretestEmotion_valenceComponents.push(text_pretest_valenceInstruction);
    PretestEmotion_valenceComponents.push(text_pre0valence);
    PretestEmotion_valenceComponents.push(image_pretest_valence);
    PretestEmotion_valenceComponents.push(slider_pretestvalence);
    PretestEmotion_valenceComponents.push(button_pretestvalence);
    PretestEmotion_valenceComponents.push(mouse_pretestvalence);
    
    PretestEmotion_valenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function PretestEmotion_valenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PretestEmotion_valence' ---
    // get current time
    t = PretestEmotion_valenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_pretest_valenceInstruction* updates
    if (t >= 0.0 && text_pretest_valenceInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_pretest_valenceInstruction.tStart = t;  // (not accounting for frame time here)
      text_pretest_valenceInstruction.frameNStart = frameN;  // exact frame index
      
      text_pretest_valenceInstruction.setAutoDraw(true);
    }

    
    // *text_pre0valence* updates
    if (((slider_pretestvalence.getRating() == 0)) && text_pre0valence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_pre0valence.tStart = t;  // (not accounting for frame time here)
      text_pre0valence.frameNStart = frameN;  // exact frame index
      
      text_pre0valence.setAutoDraw(true);
    }

    
    // *image_pretest_valence* updates
    if (t >= 0.0 && image_pretest_valence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_pretest_valence.tStart = t;  // (not accounting for frame time here)
      image_pretest_valence.frameNStart = frameN;  // exact frame index
      
      image_pretest_valence.setAutoDraw(true);
    }

    
    // *slider_pretestvalence* updates
    if (t >= 0.0 && slider_pretestvalence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_pretestvalence.tStart = t;  // (not accounting for frame time here)
      slider_pretestvalence.frameNStart = frameN;  // exact frame index
      
      slider_pretestvalence.setAutoDraw(true);
    }

    
    // *button_pretestvalence* updates
    if ((slider_pretestvalence.rating) && button_pretestvalence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_pretestvalence.tStart = t;  // (not accounting for frame time here)
      button_pretestvalence.frameNStart = frameN;  // exact frame index
      
      button_pretestvalence.setAutoDraw(true);
    }

    // *mouse_pretestvalence* updates
    if ((slider_pretestvalence.rating) && mouse_pretestvalence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_pretestvalence.tStart = t;  // (not accounting for frame time here)
      mouse_pretestvalence.frameNStart = frameN;  // exact frame index
      
      mouse_pretestvalence.status = PsychoJS.Status.STARTED;
      mouse_pretestvalence.mouseClock.reset();
      prevButtonState = mouse_pretestvalence.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_pretestvalence.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_pretestvalence.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button_pretestvalence]) {
            if (obj.contains(mouse_pretestvalence)) {
              gotValidClick = true;
              mouse_pretestvalence.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_pretestvalence.getPos();
          mouse_pretestvalence.x.push(_mouseXYs[0]);
          mouse_pretestvalence.y.push(_mouseXYs[1]);
          mouse_pretestvalence.leftButton.push(_mouseButtons[0]);
          mouse_pretestvalence.midButton.push(_mouseButtons[1]);
          mouse_pretestvalence.rightButton.push(_mouseButtons[2]);
          mouse_pretestvalence.time.push(mouse_pretestvalence.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PretestEmotion_valenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PretestEmotion_valenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PretestEmotion_valence' ---
    PretestEmotion_valenceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_pretestvalence.response', slider_pretestvalence.getRating());
    psychoJS.experiment.addData('slider_pretestvalence.rt', slider_pretestvalence.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_pretestvalence.x) {  psychoJS.experiment.addData('mouse_pretestvalence.x', mouse_pretestvalence.x[0])};
    if (mouse_pretestvalence.y) {  psychoJS.experiment.addData('mouse_pretestvalence.y', mouse_pretestvalence.y[0])};
    if (mouse_pretestvalence.leftButton) {  psychoJS.experiment.addData('mouse_pretestvalence.leftButton', mouse_pretestvalence.leftButton[0])};
    if (mouse_pretestvalence.midButton) {  psychoJS.experiment.addData('mouse_pretestvalence.midButton', mouse_pretestvalence.midButton[0])};
    if (mouse_pretestvalence.rightButton) {  psychoJS.experiment.addData('mouse_pretestvalence.rightButton', mouse_pretestvalence.rightButton[0])};
    if (mouse_pretestvalence.time) {  psychoJS.experiment.addData('mouse_pretestvalence.time', mouse_pretestvalence.time[0])};
    if (mouse_pretestvalence.clicked_name) {  psychoJS.experiment.addData('mouse_pretestvalence.clicked_name', mouse_pretestvalence.clicked_name[0])};
    
    // the Routine "PretestEmotion_valence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PretestEmotion_arousalComponents;
function PretestEmotion_arousalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PretestEmotion_arousal' ---
    t = 0;
    PretestEmotion_arousalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_pretestarousal.reset()
    // setup some python lists for storing info about the mouse_pretestarousal
    // current position of the mouse:
    mouse_pretestarousal.x = [];
    mouse_pretestarousal.y = [];
    mouse_pretestarousal.leftButton = [];
    mouse_pretestarousal.midButton = [];
    mouse_pretestarousal.rightButton = [];
    mouse_pretestarousal.time = [];
    mouse_pretestarousal.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PretestEmotion_arousalComponents = [];
    PretestEmotion_arousalComponents.push(text_pretest_arousalnstruction);
    PretestEmotion_arousalComponents.push(image_pretest_arousal);
    PretestEmotion_arousalComponents.push(slider_pretestarousal);
    PretestEmotion_arousalComponents.push(button_pretestarousal);
    PretestEmotion_arousalComponents.push(mouse_pretestarousal);
    
    PretestEmotion_arousalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PretestEmotion_arousalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PretestEmotion_arousal' ---
    // get current time
    t = PretestEmotion_arousalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_pretest_arousalnstruction* updates
    if (t >= 0.0 && text_pretest_arousalnstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_pretest_arousalnstruction.tStart = t;  // (not accounting for frame time here)
      text_pretest_arousalnstruction.frameNStart = frameN;  // exact frame index
      
      text_pretest_arousalnstruction.setAutoDraw(true);
    }

    
    // *image_pretest_arousal* updates
    if (t >= 0.0 && image_pretest_arousal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_pretest_arousal.tStart = t;  // (not accounting for frame time here)
      image_pretest_arousal.frameNStart = frameN;  // exact frame index
      
      image_pretest_arousal.setAutoDraw(true);
    }

    
    // *slider_pretestarousal* updates
    if (t >= 0.0 && slider_pretestarousal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_pretestarousal.tStart = t;  // (not accounting for frame time here)
      slider_pretestarousal.frameNStart = frameN;  // exact frame index
      
      slider_pretestarousal.setAutoDraw(true);
    }

    
    // *button_pretestarousal* updates
    if ((slider_pretestarousal.rating) && button_pretestarousal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_pretestarousal.tStart = t;  // (not accounting for frame time here)
      button_pretestarousal.frameNStart = frameN;  // exact frame index
      
      button_pretestarousal.setAutoDraw(true);
    }

    // *mouse_pretestarousal* updates
    if ((slider_pretestarousal.rating) && mouse_pretestarousal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_pretestarousal.tStart = t;  // (not accounting for frame time here)
      mouse_pretestarousal.frameNStart = frameN;  // exact frame index
      
      mouse_pretestarousal.status = PsychoJS.Status.STARTED;
      mouse_pretestarousal.mouseClock.reset();
      prevButtonState = mouse_pretestarousal.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_pretestarousal.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_pretestarousal.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button_pretestarousal]) {
            if (obj.contains(mouse_pretestarousal)) {
              gotValidClick = true;
              mouse_pretestarousal.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_pretestarousal.getPos();
          mouse_pretestarousal.x.push(_mouseXYs[0]);
          mouse_pretestarousal.y.push(_mouseXYs[1]);
          mouse_pretestarousal.leftButton.push(_mouseButtons[0]);
          mouse_pretestarousal.midButton.push(_mouseButtons[1]);
          mouse_pretestarousal.rightButton.push(_mouseButtons[2]);
          mouse_pretestarousal.time.push(mouse_pretestarousal.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PretestEmotion_arousalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PretestEmotion_arousalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PretestEmotion_arousal' ---
    PretestEmotion_arousalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_pretestarousal.response', slider_pretestarousal.getRating());
    psychoJS.experiment.addData('slider_pretestarousal.rt', slider_pretestarousal.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_pretestarousal.x) {  psychoJS.experiment.addData('mouse_pretestarousal.x', mouse_pretestarousal.x[0])};
    if (mouse_pretestarousal.y) {  psychoJS.experiment.addData('mouse_pretestarousal.y', mouse_pretestarousal.y[0])};
    if (mouse_pretestarousal.leftButton) {  psychoJS.experiment.addData('mouse_pretestarousal.leftButton', mouse_pretestarousal.leftButton[0])};
    if (mouse_pretestarousal.midButton) {  psychoJS.experiment.addData('mouse_pretestarousal.midButton', mouse_pretestarousal.midButton[0])};
    if (mouse_pretestarousal.rightButton) {  psychoJS.experiment.addData('mouse_pretestarousal.rightButton', mouse_pretestarousal.rightButton[0])};
    if (mouse_pretestarousal.time) {  psychoJS.experiment.addData('mouse_pretestarousal.time', mouse_pretestarousal.time[0])};
    if (mouse_pretestarousal.clicked_name) {  psychoJS.experiment.addData('mouse_pretestarousal.clicked_name', mouse_pretestarousal.clicked_name[0])};
    
    // the Routine "PretestEmotion_arousal" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EmotionVideoComponents;
function EmotionVideoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EmotionVideo' ---
    t = 0;
    EmotionVideoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    EmotionVideoComponents = [];
    EmotionVideoComponents.push(text_MovieInstruction);
    EmotionVideoComponents.push(movie_fixation);
    EmotionVideoComponents.push(Emotion_Movie);
    
    EmotionVideoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function EmotionVideoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EmotionVideo' ---
    // get current time
    t = EmotionVideoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_MovieInstruction* updates
    if (t >= 0.0 && text_MovieInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_MovieInstruction.tStart = t;  // (not accounting for frame time here)
      text_MovieInstruction.frameNStart = frameN;  // exact frame index
      
      text_MovieInstruction.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_MovieInstruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_MovieInstruction.setAutoDraw(false);
    }
    
    // *movie_fixation* updates
    if (t >= 5 && movie_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_fixation.tStart = t;  // (not accounting for frame time here)
      movie_fixation.frameNStart = frameN;  // exact frame index
      
      movie_fixation.setAutoDraw(true);
    }

    frameRemains = 5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (movie_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      movie_fixation.setAutoDraw(false);
    }
    
    // *Emotion_Movie* updates
    if (t >= 5.5 && Emotion_Movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Emotion_Movie.tStart = t;  // (not accounting for frame time here)
      Emotion_Movie.frameNStart = frameN;  // exact frame index
      
      Emotion_Movie.setAutoDraw(true);
      Emotion_Movie.play();
    }

    if (Emotion_Movie.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EmotionVideoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EmotionVideoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EmotionVideo' ---
    EmotionVideoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    Emotion_Movie.stop();
    // the Routine "EmotionVideo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_GobalLocalInstruction_allKeys;
var GolbalLocal_instructionComponents;
function GolbalLocal_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GolbalLocal_instruction' ---
    t = 0;
    GolbalLocal_instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_GobalLocalInstruction.keys = undefined;
    key_GobalLocalInstruction.rt = undefined;
    _key_GobalLocalInstruction_allKeys = [];
    // keep track of which components have finished
    GolbalLocal_instructionComponents = [];
    GolbalLocal_instructionComponents.push(image_GobalLocalInstruction);
    GolbalLocal_instructionComponents.push(key_GobalLocalInstruction);
    
    GolbalLocal_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function GolbalLocal_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GolbalLocal_instruction' ---
    // get current time
    t = GolbalLocal_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_GobalLocalInstruction* updates
    if (t >= 0.5 && image_GobalLocalInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_GobalLocalInstruction.tStart = t;  // (not accounting for frame time here)
      image_GobalLocalInstruction.frameNStart = frameN;  // exact frame index
      
      image_GobalLocalInstruction.setAutoDraw(true);
    }

    
    // *key_GobalLocalInstruction* updates
    if (t >= 5 && key_GobalLocalInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_GobalLocalInstruction.tStart = t;  // (not accounting for frame time here)
      key_GobalLocalInstruction.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_GobalLocalInstruction.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_GobalLocalInstruction.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_GobalLocalInstruction.clearEvents(); });
    }

    if (key_GobalLocalInstruction.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_GobalLocalInstruction.getKeys({keyList: ['space'], waitRelease: false});
      _key_GobalLocalInstruction_allKeys = _key_GobalLocalInstruction_allKeys.concat(theseKeys);
      if (_key_GobalLocalInstruction_allKeys.length > 0) {
        key_GobalLocalInstruction.keys = _key_GobalLocalInstruction_allKeys[_key_GobalLocalInstruction_allKeys.length - 1].name;  // just the last key pressed
        key_GobalLocalInstruction.rt = _key_GobalLocalInstruction_allKeys[_key_GobalLocalInstruction_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GolbalLocal_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GolbalLocal_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GolbalLocal_instruction' ---
    GolbalLocal_instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_GobalLocalInstruction.stop();
    // the Routine "GolbalLocal_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_GobalLocalExample_allKeys;
var GobalLocal_exampleComponents;
function GobalLocal_exampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GobalLocal_example' ---
    t = 0;
    GobalLocal_exampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_GobalLocalExample.keys = undefined;
    key_GobalLocalExample.rt = undefined;
    _key_GobalLocalExample_allKeys = [];
    // keep track of which components have finished
    GobalLocal_exampleComponents = [];
    GobalLocal_exampleComponents.push(image_GobalLocalExample);
    GobalLocal_exampleComponents.push(key_GobalLocalExample);
    
    GobalLocal_exampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function GobalLocal_exampleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GobalLocal_example' ---
    // get current time
    t = GobalLocal_exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_GobalLocalExample* updates
    if (t >= 0.0 && image_GobalLocalExample.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_GobalLocalExample.tStart = t;  // (not accounting for frame time here)
      image_GobalLocalExample.frameNStart = frameN;  // exact frame index
      
      image_GobalLocalExample.setAutoDraw(true);
    }

    
    // *key_GobalLocalExample* updates
    if (t >= 0.0 && key_GobalLocalExample.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_GobalLocalExample.tStart = t;  // (not accounting for frame time here)
      key_GobalLocalExample.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_GobalLocalExample.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_GobalLocalExample.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_GobalLocalExample.clearEvents(); });
    }

    if (key_GobalLocalExample.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_GobalLocalExample.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _key_GobalLocalExample_allKeys = _key_GobalLocalExample_allKeys.concat(theseKeys);
      if (_key_GobalLocalExample_allKeys.length > 0) {
        key_GobalLocalExample.keys = _key_GobalLocalExample_allKeys[_key_GobalLocalExample_allKeys.length - 1].name;  // just the last key pressed
        key_GobalLocalExample.rt = _key_GobalLocalExample_allKeys[_key_GobalLocalExample_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GobalLocal_exampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GobalLocal_exampleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GobalLocal_example' ---
    GobalLocal_exampleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_GobalLocalExample.corr, level);
    }
    psychoJS.experiment.addData('key_GobalLocalExample.keys', key_GobalLocalExample.keys);
    if (typeof key_GobalLocalExample.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_GobalLocalExample.rt', key_GobalLocalExample.rt);
        routineTimer.reset();
        }
    
    key_GobalLocalExample.stop();
    // the Routine "GobalLocal_example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_GolbalLocal_formalsession_allKeys;
var example_feedbackComponents;
function example_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'example_feedback' ---
    t = 0;
    example_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_GolbalLocal_formalsession.keys = undefined;
    key_GolbalLocal_formalsession.rt = undefined;
    _key_GolbalLocal_formalsession_allKeys = [];
    // keep track of which components have finished
    example_feedbackComponents = [];
    example_feedbackComponents.push(feedback_to_formal_GobalLocal);
    example_feedbackComponents.push(key_GolbalLocal_formalsession);
    
    example_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function example_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'example_feedback' ---
    // get current time
    t = example_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_to_formal_GobalLocal* updates
    if (t >= 0 && feedback_to_formal_GobalLocal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_to_formal_GobalLocal.tStart = t;  // (not accounting for frame time here)
      feedback_to_formal_GobalLocal.frameNStart = frameN;  // exact frame index
      
      feedback_to_formal_GobalLocal.setAutoDraw(true);
    }

    
    // *key_GolbalLocal_formalsession* updates
    if (t >= 0 && key_GolbalLocal_formalsession.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_GolbalLocal_formalsession.tStart = t;  // (not accounting for frame time here)
      key_GolbalLocal_formalsession.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_GolbalLocal_formalsession.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_GolbalLocal_formalsession.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_GolbalLocal_formalsession.clearEvents(); });
    }

    if (key_GolbalLocal_formalsession.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_GolbalLocal_formalsession.getKeys({keyList: ['space'], waitRelease: false});
      _key_GolbalLocal_formalsession_allKeys = _key_GolbalLocal_formalsession_allKeys.concat(theseKeys);
      if (_key_GolbalLocal_formalsession_allKeys.length > 0) {
        key_GolbalLocal_formalsession.keys = _key_GolbalLocal_formalsession_allKeys[_key_GolbalLocal_formalsession_allKeys.length - 1].name;  // just the last key pressed
        key_GolbalLocal_formalsession.rt = _key_GolbalLocal_formalsession_allKeys[_key_GolbalLocal_formalsession_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    example_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function example_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'example_feedback' ---
    example_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_GolbalLocal_formalsession.stop();
    // the Routine "example_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixpointComponents;
function fixpointRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixpoint' ---
    t = 0;
    fixpointClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixpointComponents = [];
    fixpointComponents.push(fixation);
    
    fixpointComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fixpointRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixpoint' ---
    // get current time
    t = fixpointClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixpointComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixpointRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixpoint' ---
    fixpointComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_GobalLocal_ans_allKeys;
var GobalLocal_FormalSessionComponents;
function GobalLocal_FormalSessionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GobalLocal_FormalSession' ---
    t = 0;
    GobalLocal_FormalSessionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_GobalLocal_Formal.setImage(picture_list);
    key_GobalLocal_ans.keys = undefined;
    key_GobalLocal_ans.rt = undefined;
    _key_GobalLocal_ans_allKeys = [];
    // keep track of which components have finished
    GobalLocal_FormalSessionComponents = [];
    GobalLocal_FormalSessionComponents.push(image_GobalLocal_Formal);
    GobalLocal_FormalSessionComponents.push(key_GobalLocal_ans);
    
    GobalLocal_FormalSessionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function GobalLocal_FormalSessionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GobalLocal_FormalSession' ---
    // get current time
    t = GobalLocal_FormalSessionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_GobalLocal_Formal* updates
    if (t >= 0.0 && image_GobalLocal_Formal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_GobalLocal_Formal.tStart = t;  // (not accounting for frame time here)
      image_GobalLocal_Formal.frameNStart = frameN;  // exact frame index
      
      image_GobalLocal_Formal.setAutoDraw(true);
    }

    
    // *key_GobalLocal_ans* updates
    if (t >= 0.0 && key_GobalLocal_ans.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_GobalLocal_ans.tStart = t;  // (not accounting for frame time here)
      key_GobalLocal_ans.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_GobalLocal_ans.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_GobalLocal_ans.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_GobalLocal_ans.clearEvents(); });
    }

    if (key_GobalLocal_ans.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_GobalLocal_ans.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _key_GobalLocal_ans_allKeys = _key_GobalLocal_ans_allKeys.concat(theseKeys);
      if (_key_GobalLocal_ans_allKeys.length > 0) {
        key_GobalLocal_ans.keys = _key_GobalLocal_ans_allKeys[_key_GobalLocal_ans_allKeys.length - 1].name;  // just the last key pressed
        key_GobalLocal_ans.rt = _key_GobalLocal_ans_allKeys[_key_GobalLocal_ans_allKeys.length - 1].rt;
        // was this correct?
        if (key_GobalLocal_ans.keys == Gobal_corrAns) {
            key_GobalLocal_ans.corr = 1;
        } else {
            key_GobalLocal_ans.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GobalLocal_FormalSessionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GobalLocal_FormalSessionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GobalLocal_FormalSession' ---
    GobalLocal_FormalSessionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_caculateGobalChoiceRate
    global_choice.push(key_GobalLocal_ans.corr);
    if ((key_GobalLocal_ans.corr === 1)) {
        gobal_rt.push(key_GobalLocal_ans.rt);
    } else {
        if ((key_GobalLocal_ans.corr === 0)) {
            local_rt.push(key_GobalLocal_ans.rt);
        }
    }
    
    // was no response the correct answer?!
    if (key_GobalLocal_ans.keys === undefined) {
      if (['None','none',undefined].includes(Gobal_corrAns)) {
         key_GobalLocal_ans.corr = 1;  // correct non-response
      } else {
         key_GobalLocal_ans.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_GobalLocal_ans.corr, level);
    }
    psychoJS.experiment.addData('key_GobalLocal_ans.keys', key_GobalLocal_ans.keys);
    psychoJS.experiment.addData('key_GobalLocal_ans.corr', key_GobalLocal_ans.corr);
    if (typeof key_GobalLocal_ans.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_GobalLocal_ans.rt', key_GobalLocal_ans.rt);
        routineTimer.reset();
        }
    
    key_GobalLocal_ans.stop();
    // the Routine "GobalLocal_FormalSession" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var MLQPComponents;
function MLQPRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'MLQP' ---
    t = 0;
    MLQPClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    MLQP_item.setText(MLQP_items);
    slider_MLQ.reset()
    button_MLQ.setImage('resources/images/nextpage_button.png');
    // setup some python lists for storing info about the mouse_MLQ
    // current position of the mouse:
    mouse_MLQ.x = [];
    mouse_MLQ.y = [];
    mouse_MLQ.leftButton = [];
    mouse_MLQ.midButton = [];
    mouse_MLQ.rightButton = [];
    mouse_MLQ.time = [];
    mouse_MLQ.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    MLQPComponents = [];
    MLQPComponents.push(text_MLQinstruction);
    MLQPComponents.push(MLQP_item);
    MLQPComponents.push(slider_MLQ);
    MLQPComponents.push(button_MLQ);
    MLQPComponents.push(mouse_MLQ);
    
    MLQPComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function MLQPRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'MLQP' ---
    // get current time
    t = MLQPClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_MLQinstruction* updates
    if (t >= 0.0 && text_MLQinstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_MLQinstruction.tStart = t;  // (not accounting for frame time here)
      text_MLQinstruction.frameNStart = frameN;  // exact frame index
      
      text_MLQinstruction.setAutoDraw(true);
    }

    
    // *MLQP_item* updates
    if (t >= 0.0 && MLQP_item.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MLQP_item.tStart = t;  // (not accounting for frame time here)
      MLQP_item.frameNStart = frameN;  // exact frame index
      
      MLQP_item.setAutoDraw(true);
    }

    
    // *slider_MLQ* updates
    if (t >= 0.0 && slider_MLQ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_MLQ.tStart = t;  // (not accounting for frame time here)
      slider_MLQ.frameNStart = frameN;  // exact frame index
      
      slider_MLQ.setAutoDraw(true);
    }

    
    // *button_MLQ* updates
    if ((slider_MLQ.rating) && button_MLQ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_MLQ.tStart = t;  // (not accounting for frame time here)
      button_MLQ.frameNStart = frameN;  // exact frame index
      
      button_MLQ.setAutoDraw(true);
    }

    // *mouse_MLQ* updates
    if ((slider_MLQ.rating) && mouse_MLQ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_MLQ.tStart = t;  // (not accounting for frame time here)
      mouse_MLQ.frameNStart = frameN;  // exact frame index
      
      mouse_MLQ.status = PsychoJS.Status.STARTED;
      mouse_MLQ.mouseClock.reset();
      prevButtonState = mouse_MLQ.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_MLQ.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_MLQ.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button_MLQ]) {
            if (obj.contains(mouse_MLQ)) {
              gotValidClick = true;
              mouse_MLQ.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_MLQ.getPos();
          mouse_MLQ.x.push(_mouseXYs[0]);
          mouse_MLQ.y.push(_mouseXYs[1]);
          mouse_MLQ.leftButton.push(_mouseButtons[0]);
          mouse_MLQ.midButton.push(_mouseButtons[1]);
          mouse_MLQ.rightButton.push(_mouseButtons[2]);
          mouse_MLQ.time.push(mouse_MLQ.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    MLQPComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MLQPRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'MLQP' ---
    MLQPComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_MLQmean
    MLQP_ans.push(slider_MLQ.rating);
    
    psychoJS.experiment.addData('slider_MLQ.response', slider_MLQ.getRating());
    psychoJS.experiment.addData('slider_MLQ.rt', slider_MLQ.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_MLQ.x) {  psychoJS.experiment.addData('mouse_MLQ.x', mouse_MLQ.x[0])};
    if (mouse_MLQ.y) {  psychoJS.experiment.addData('mouse_MLQ.y', mouse_MLQ.y[0])};
    if (mouse_MLQ.leftButton) {  psychoJS.experiment.addData('mouse_MLQ.leftButton', mouse_MLQ.leftButton[0])};
    if (mouse_MLQ.midButton) {  psychoJS.experiment.addData('mouse_MLQ.midButton', mouse_MLQ.midButton[0])};
    if (mouse_MLQ.rightButton) {  psychoJS.experiment.addData('mouse_MLQ.rightButton', mouse_MLQ.rightButton[0])};
    if (mouse_MLQ.time) {  psychoJS.experiment.addData('mouse_MLQ.time', mouse_MLQ.time[0])};
    if (mouse_MLQ.clicked_name) {  psychoJS.experiment.addData('mouse_MLQ.clicked_name', mouse_MLQ.clicked_name[0])};
    
    // the Routine "MLQP" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PostestEmotion_valenceComponents;
function PostestEmotion_valenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PostestEmotion_valence' ---
    t = 0;
    PostestEmotion_valenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_postestvalence.reset()
    // setup some python lists for storing info about the mouse_postestvalence
    // current position of the mouse:
    mouse_postestvalence.x = [];
    mouse_postestvalence.y = [];
    mouse_postestvalence.leftButton = [];
    mouse_postestvalence.midButton = [];
    mouse_postestvalence.rightButton = [];
    mouse_postestvalence.time = [];
    mouse_postestvalence.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PostestEmotion_valenceComponents = [];
    PostestEmotion_valenceComponents.push(text_postest_valenceInstruction);
    PostestEmotion_valenceComponents.push(text_post0valence);
    PostestEmotion_valenceComponents.push(image_postest_valence);
    PostestEmotion_valenceComponents.push(slider_postestvalence);
    PostestEmotion_valenceComponents.push(button_postestvalence);
    PostestEmotion_valenceComponents.push(mouse_postestvalence);
    
    PostestEmotion_valenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PostestEmotion_valenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PostestEmotion_valence' ---
    // get current time
    t = PostestEmotion_valenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_postest_valenceInstruction* updates
    if (t >= 0.0 && text_postest_valenceInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_postest_valenceInstruction.tStart = t;  // (not accounting for frame time here)
      text_postest_valenceInstruction.frameNStart = frameN;  // exact frame index
      
      text_postest_valenceInstruction.setAutoDraw(true);
    }

    
    // *text_post0valence* updates
    if (((slider_postestvalence.getRating() == 0)) && text_post0valence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_post0valence.tStart = t;  // (not accounting for frame time here)
      text_post0valence.frameNStart = frameN;  // exact frame index
      
      text_post0valence.setAutoDraw(true);
    }

    
    // *image_postest_valence* updates
    if (t >= 0.0 && image_postest_valence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_postest_valence.tStart = t;  // (not accounting for frame time here)
      image_postest_valence.frameNStart = frameN;  // exact frame index
      
      image_postest_valence.setAutoDraw(true);
    }

    
    // *slider_postestvalence* updates
    if (t >= 0.0 && slider_postestvalence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_postestvalence.tStart = t;  // (not accounting for frame time here)
      slider_postestvalence.frameNStart = frameN;  // exact frame index
      
      slider_postestvalence.setAutoDraw(true);
    }

    
    // *button_postestvalence* updates
    if ((slider_postestvalence.rating) && button_postestvalence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_postestvalence.tStart = t;  // (not accounting for frame time here)
      button_postestvalence.frameNStart = frameN;  // exact frame index
      
      button_postestvalence.setAutoDraw(true);
    }

    // *mouse_postestvalence* updates
    if ((slider_postestvalence.rating) && mouse_postestvalence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_postestvalence.tStart = t;  // (not accounting for frame time here)
      mouse_postestvalence.frameNStart = frameN;  // exact frame index
      
      mouse_postestvalence.status = PsychoJS.Status.STARTED;
      mouse_postestvalence.mouseClock.reset();
      prevButtonState = mouse_postestvalence.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_postestvalence.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_postestvalence.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button_postestvalence]) {
            if (obj.contains(mouse_postestvalence)) {
              gotValidClick = true;
              mouse_postestvalence.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_postestvalence.getPos();
          mouse_postestvalence.x.push(_mouseXYs[0]);
          mouse_postestvalence.y.push(_mouseXYs[1]);
          mouse_postestvalence.leftButton.push(_mouseButtons[0]);
          mouse_postestvalence.midButton.push(_mouseButtons[1]);
          mouse_postestvalence.rightButton.push(_mouseButtons[2]);
          mouse_postestvalence.time.push(mouse_postestvalence.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PostestEmotion_valenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PostestEmotion_valenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PostestEmotion_valence' ---
    PostestEmotion_valenceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_postestvalence.response', slider_postestvalence.getRating());
    psychoJS.experiment.addData('slider_postestvalence.rt', slider_postestvalence.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_postestvalence.x) {  psychoJS.experiment.addData('mouse_postestvalence.x', mouse_postestvalence.x[0])};
    if (mouse_postestvalence.y) {  psychoJS.experiment.addData('mouse_postestvalence.y', mouse_postestvalence.y[0])};
    if (mouse_postestvalence.leftButton) {  psychoJS.experiment.addData('mouse_postestvalence.leftButton', mouse_postestvalence.leftButton[0])};
    if (mouse_postestvalence.midButton) {  psychoJS.experiment.addData('mouse_postestvalence.midButton', mouse_postestvalence.midButton[0])};
    if (mouse_postestvalence.rightButton) {  psychoJS.experiment.addData('mouse_postestvalence.rightButton', mouse_postestvalence.rightButton[0])};
    if (mouse_postestvalence.time) {  psychoJS.experiment.addData('mouse_postestvalence.time', mouse_postestvalence.time[0])};
    if (mouse_postestvalence.clicked_name) {  psychoJS.experiment.addData('mouse_postestvalence.clicked_name', mouse_postestvalence.clicked_name[0])};
    
    // the Routine "PostestEmotion_valence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PostestEmotion_arousalComponents;
function PostestEmotion_arousalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PostestEmotion_arousal' ---
    t = 0;
    PostestEmotion_arousalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_postestarousal.reset()
    // setup some python lists for storing info about the mouse_postestarousal
    // current position of the mouse:
    mouse_postestarousal.x = [];
    mouse_postestarousal.y = [];
    mouse_postestarousal.leftButton = [];
    mouse_postestarousal.midButton = [];
    mouse_postestarousal.rightButton = [];
    mouse_postestarousal.time = [];
    mouse_postestarousal.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PostestEmotion_arousalComponents = [];
    PostestEmotion_arousalComponents.push(text_postest_arousalInstruction);
    PostestEmotion_arousalComponents.push(image_postest_arousal);
    PostestEmotion_arousalComponents.push(slider_postestarousal);
    PostestEmotion_arousalComponents.push(button_postestarousal);
    PostestEmotion_arousalComponents.push(mouse_postestarousal);
    
    PostestEmotion_arousalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PostestEmotion_arousalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PostestEmotion_arousal' ---
    // get current time
    t = PostestEmotion_arousalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_postest_arousalInstruction* updates
    if (t >= 0.0 && text_postest_arousalInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_postest_arousalInstruction.tStart = t;  // (not accounting for frame time here)
      text_postest_arousalInstruction.frameNStart = frameN;  // exact frame index
      
      text_postest_arousalInstruction.setAutoDraw(true);
    }

    
    // *image_postest_arousal* updates
    if (t >= 0.0 && image_postest_arousal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_postest_arousal.tStart = t;  // (not accounting for frame time here)
      image_postest_arousal.frameNStart = frameN;  // exact frame index
      
      image_postest_arousal.setAutoDraw(true);
    }

    
    // *slider_postestarousal* updates
    if (t >= 0.0 && slider_postestarousal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_postestarousal.tStart = t;  // (not accounting for frame time here)
      slider_postestarousal.frameNStart = frameN;  // exact frame index
      
      slider_postestarousal.setAutoDraw(true);
    }

    
    // *button_postestarousal* updates
    if ((slider_postestarousal.rating) && button_postestarousal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_postestarousal.tStart = t;  // (not accounting for frame time here)
      button_postestarousal.frameNStart = frameN;  // exact frame index
      
      button_postestarousal.setAutoDraw(true);
    }

    // *mouse_postestarousal* updates
    if ((slider_postestarousal.rating) && mouse_postestarousal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_postestarousal.tStart = t;  // (not accounting for frame time here)
      mouse_postestarousal.frameNStart = frameN;  // exact frame index
      
      mouse_postestarousal.status = PsychoJS.Status.STARTED;
      mouse_postestarousal.mouseClock.reset();
      prevButtonState = mouse_postestarousal.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_postestarousal.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_postestarousal.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button_postestarousal]) {
            if (obj.contains(mouse_postestarousal)) {
              gotValidClick = true;
              mouse_postestarousal.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_postestarousal.getPos();
          mouse_postestarousal.x.push(_mouseXYs[0]);
          mouse_postestarousal.y.push(_mouseXYs[1]);
          mouse_postestarousal.leftButton.push(_mouseButtons[0]);
          mouse_postestarousal.midButton.push(_mouseButtons[1]);
          mouse_postestarousal.rightButton.push(_mouseButtons[2]);
          mouse_postestarousal.time.push(mouse_postestarousal.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PostestEmotion_arousalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PostestEmotion_arousalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PostestEmotion_arousal' ---
    PostestEmotion_arousalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_postestarousal.response', slider_postestarousal.getRating());
    psychoJS.experiment.addData('slider_postestarousal.rt', slider_postestarousal.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_postestarousal.x) {  psychoJS.experiment.addData('mouse_postestarousal.x', mouse_postestarousal.x[0])};
    if (mouse_postestarousal.y) {  psychoJS.experiment.addData('mouse_postestarousal.y', mouse_postestarousal.y[0])};
    if (mouse_postestarousal.leftButton) {  psychoJS.experiment.addData('mouse_postestarousal.leftButton', mouse_postestarousal.leftButton[0])};
    if (mouse_postestarousal.midButton) {  psychoJS.experiment.addData('mouse_postestarousal.midButton', mouse_postestarousal.midButton[0])};
    if (mouse_postestarousal.rightButton) {  psychoJS.experiment.addData('mouse_postestarousal.rightButton', mouse_postestarousal.rightButton[0])};
    if (mouse_postestarousal.time) {  psychoJS.experiment.addData('mouse_postestarousal.time', mouse_postestarousal.time[0])};
    if (mouse_postestarousal.clicked_name) {  psychoJS.experiment.addData('mouse_postestarousal.clicked_name', mouse_postestarousal.clicked_name[0])};
    
    // the Routine "PostestEmotion_arousal" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var movie_checkComponents;
function movie_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'movie_check' ---
    t = 0;
    movie_checkClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    MovieRepeatCheck.setText(check_items);
    slider_check.reset()
    button_check.setImage('resources/images/nextpage_button.png');
    // setup some python lists for storing info about the mouse_check
    // current position of the mouse:
    mouse_check.x = [];
    mouse_check.y = [];
    mouse_check.leftButton = [];
    mouse_check.midButton = [];
    mouse_check.rightButton = [];
    mouse_check.time = [];
    mouse_check.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    movie_checkComponents = [];
    movie_checkComponents.push(MovieRepeatCheck);
    movie_checkComponents.push(slider_check);
    movie_checkComponents.push(button_check);
    movie_checkComponents.push(mouse_check);
    
    movie_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function movie_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'movie_check' ---
    // get current time
    t = movie_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *MovieRepeatCheck* updates
    if (t >= 0.0 && MovieRepeatCheck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MovieRepeatCheck.tStart = t;  // (not accounting for frame time here)
      MovieRepeatCheck.frameNStart = frameN;  // exact frame index
      
      MovieRepeatCheck.setAutoDraw(true);
    }

    
    // *slider_check* updates
    if (t >= 0.0 && slider_check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_check.tStart = t;  // (not accounting for frame time here)
      slider_check.frameNStart = frameN;  // exact frame index
      
      slider_check.setAutoDraw(true);
    }

    
    // *button_check* updates
    if ((slider_check.rating) && button_check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_check.tStart = t;  // (not accounting for frame time here)
      button_check.frameNStart = frameN;  // exact frame index
      
      button_check.setAutoDraw(true);
    }

    // *mouse_check* updates
    if ((slider_check.rating) && mouse_check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_check.tStart = t;  // (not accounting for frame time here)
      mouse_check.frameNStart = frameN;  // exact frame index
      
      mouse_check.status = PsychoJS.Status.STARTED;
      mouse_check.mouseClock.reset();
      prevButtonState = mouse_check.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_check.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_check.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button_check]) {
            if (obj.contains(mouse_check)) {
              gotValidClick = true;
              mouse_check.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_check.getPos();
          mouse_check.x.push(_mouseXYs[0]);
          mouse_check.y.push(_mouseXYs[1]);
          mouse_check.leftButton.push(_mouseButtons[0]);
          mouse_check.midButton.push(_mouseButtons[1]);
          mouse_check.rightButton.push(_mouseButtons[2]);
          mouse_check.time.push(mouse_check.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    movie_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function movie_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'movie_check' ---
    movie_checkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from repeat_check
    check_repeat.push(slider_check.rating);
    
    psychoJS.experiment.addData('slider_check.response', slider_check.getRating());
    psychoJS.experiment.addData('slider_check.rt', slider_check.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_check.x) {  psychoJS.experiment.addData('mouse_check.x', mouse_check.x[0])};
    if (mouse_check.y) {  psychoJS.experiment.addData('mouse_check.y', mouse_check.y[0])};
    if (mouse_check.leftButton) {  psychoJS.experiment.addData('mouse_check.leftButton', mouse_check.leftButton[0])};
    if (mouse_check.midButton) {  psychoJS.experiment.addData('mouse_check.midButton', mouse_check.midButton[0])};
    if (mouse_check.rightButton) {  psychoJS.experiment.addData('mouse_check.rightButton', mouse_check.rightButton[0])};
    if (mouse_check.time) {  psychoJS.experiment.addData('mouse_check.time', mouse_check.time[0])};
    if (mouse_check.clicked_name) {  psychoJS.experiment.addData('mouse_check.clicked_name', mouse_check.clicked_name[0])};
    
    // the Routine "movie_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndScreenComponents;
function EndScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EndScreen' ---
    t = 0;
    EndScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_goodbye
    // current position of the mouse:
    mouse_goodbye.x = [];
    mouse_goodbye.y = [];
    mouse_goodbye.leftButton = [];
    mouse_goodbye.midButton = [];
    mouse_goodbye.rightButton = [];
    mouse_goodbye.time = [];
    mouse_goodbye.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    EndScreenComponents = [];
    EndScreenComponents.push(text_goodbye);
    EndScreenComponents.push(image_endmsg);
    EndScreenComponents.push(mouse_goodbye);
    
    EndScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EndScreen' ---
    // get current time
    t = EndScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_goodbye* updates
    if (t >= 0.0 && text_goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_goodbye.tStart = t;  // (not accounting for frame time here)
      text_goodbye.frameNStart = frameN;  // exact frame index
      
      text_goodbye.setAutoDraw(true);
    }

    
    // *image_endmsg* updates
    if (t >= 0.0 && image_endmsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_endmsg.tStart = t;  // (not accounting for frame time here)
      image_endmsg.frameNStart = frameN;  // exact frame index
      
      image_endmsg.setAutoDraw(true);
    }

    // *mouse_goodbye* updates
    if (t >= 1 && mouse_goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_goodbye.tStart = t;  // (not accounting for frame time here)
      mouse_goodbye.frameNStart = frameN;  // exact frame index
      
      mouse_goodbye.status = PsychoJS.Status.STARTED;
      mouse_goodbye.mouseClock.reset();
      prevButtonState = mouse_goodbye.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_goodbye.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_goodbye.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_endmsg]) {
            if (obj.contains(mouse_goodbye)) {
              gotValidClick = true;
              mouse_goodbye.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_goodbye.getPos();
          mouse_goodbye.x.push(_mouseXYs[0]);
          mouse_goodbye.y.push(_mouseXYs[1]);
          mouse_goodbye.leftButton.push(_mouseButtons[0]);
          mouse_goodbye.midButton.push(_mouseButtons[1]);
          mouse_goodbye.rightButton.push(_mouseButtons[2]);
          mouse_goodbye.time.push(mouse_goodbye.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EndScreen' ---
    EndScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_goodbye.x) {  psychoJS.experiment.addData('mouse_goodbye.x', mouse_goodbye.x[0])};
    if (mouse_goodbye.y) {  psychoJS.experiment.addData('mouse_goodbye.y', mouse_goodbye.y[0])};
    if (mouse_goodbye.leftButton) {  psychoJS.experiment.addData('mouse_goodbye.leftButton', mouse_goodbye.leftButton[0])};
    if (mouse_goodbye.midButton) {  psychoJS.experiment.addData('mouse_goodbye.midButton', mouse_goodbye.midButton[0])};
    if (mouse_goodbye.rightButton) {  psychoJS.experiment.addData('mouse_goodbye.rightButton', mouse_goodbye.rightButton[0])};
    if (mouse_goodbye.time) {  psychoJS.experiment.addData('mouse_goodbye.time', mouse_goodbye.time[0])};
    if (mouse_goodbye.clicked_name) {  psychoJS.experiment.addData('mouse_goodbye.clicked_name', mouse_goodbye.clicked_name[0])};
    
    // the Routine "EndScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  // Run 'End Experiment' code from code_caculateGobalChoiceRate
  psychoJS.experiment.addData("GobalChoice_percentage", ((util.sum(global_choice) / global_choice.length) * 100));
  psychoJS.experiment.addData("Gobal_rt_mean", util.average(gobal_rt));
  psychoJS.experiment.addData("local_rt_mean", util.average(local_rt));
  psychoJS.experiment.nextEntry();
  
  
  // Run 'End Experiment' code from code_MLQmean
  MLQP_ans[4] = (8 - MLQP_ans[4]);
  psychoJS.experiment.addData("MLQ_1", MLQP_ans[0]);
  psychoJS.experiment.addData("MLQ_2", MLQP_ans[1]);
  psychoJS.experiment.addData("MLQ_3", MLQP_ans[2]);
  psychoJS.experiment.addData("MLQ_4", MLQP_ans[3]);
  psychoJS.experiment.addData("MLQ_5r", MLQP_ans[4]);
  psychoJS.experiment.addData("MLQans_mean", util.average(MLQP_ans));
  psychoJS.experiment.nextEntry();
  
  
  
  
  // Run 'End Experiment' code from repeat_check
  psychoJS.experiment.addData("DoExp2", check_repeat[0]);
  psychoJS.experiment.addData("SeeSameVideo", check_repeat[1]);
  psychoJS.experiment.nextEntry();
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
