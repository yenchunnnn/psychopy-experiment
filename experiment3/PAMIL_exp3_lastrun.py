#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.1.1),
    on 六月 19, 2023, at 15:30
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2023.1.1')


# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2023.1.1'
expName = '正向情緒與意義感研究三'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(1, 180):03.0f}",
    'session': '001',
    'groupE': '',
    'groupM': '',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\User\\Desktop\\psychopy\\Experiment3\\PAMIL_exp3_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1366, 768], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
    backgroundImage='', backgroundFit='none',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "assignMILgroup" ---
# Run 'Begin Experiment' code from code_MILgroup
#assign MIL group, set 0 at the beginning
highMIL_rep = 0
lowMIL_rep = 0

#if id%2 = 0 will show highMIL survey, if id%2 != 0 will show lowMIL survey
if int(expInfo['participant']) % 2 == 0:
    highMIL_rep = 1
    expInfo['groupM'] = 'high'
else:
    lowMIL_rep = 1
    expInfo['groupM'] = 'low'

# --- Initialize components for Routine "AffectGrid_instruction" ---
image_AffectGrid_instruction = visual.ImageStim(
    win=win,
    name='image_AffectGrid_instruction', 
    image='resources/images/AffectGrid_instruction.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_AffectGridInstruction = keyboard.Keyboard()

# --- Initialize components for Routine "PretestEmotion_valence" ---
text_pretest_valenceInstruction = visual.TextStim(win=win, name='text_pretest_valenceInstruction',
    text='請依下方情感方格中「橫軸」所標示的數字，在最下方相應的量尺橫桿上，用滑鼠點選最適合描述您「目前」的「情緒正負向程度」。',
    font='Arial',
    pos=(0, 0.4), height=0.025, wrapWidth=20.0, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_pre0valence = visual.TextStim(win=win, name='text_pre0valence',
    text='若您一開始即點選0\n請先嘗試點選其他數字\n會於右下角出現下一頁按鈕\n接著再次點選0\n即可按下一頁',
    font='Arial',
    pos=(-0.6, -0.4), height=0.02, wrapWidth=11.0, ori=0.0, 
    color=[-0.6314, -0.3804, -0.3804], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
image_pretest_valence = visual.ImageStim(
    win=win,
    name='image_pretest_valence', 
    image='resources/images/valence.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1,0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
slider_pretestvalence = visual.Slider(win=win, name='slider_pretestvalence',
    startValue=None, size=(0.7, 0.06), pos=(0, -0.38), units=win.units,
    labels=["-4", "-3", "-2", "-1", "0", "1", "2", "3", "4"], ticks=(-4, -3, -2, -1, 0, 1, 2, 3, 4), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor=[0.0039, 0.0039, 0.0039], markerColor='Red', lineColor=[0.0039, 0.0039, 0.0039], colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-3, readOnly=False)
button_pretestvalence = visual.ImageStim(
    win=win,
    name='button_pretestvalence', 
    image='resources/images/nextpage_button.png', mask=None, anchor='center',
    ori=0.0, pos=(0.75, -0.4), size=(0.17, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
mouse_pretestvalence = event.Mouse(win=win)
x, y = [None, None]
mouse_pretestvalence.mouseClock = core.Clock()

# --- Initialize components for Routine "PretestEmotion_arousal" ---
text_pretest_arousalnstruction = visual.TextStim(win=win, name='text_pretest_arousalnstruction',
    text='請依下方情感方格中「縱軸」所標示的數字，在左方相應的量尺橫桿上，用滑鼠點選最適合描述您「目前」的「情緒激動程度」。',
    font='Arial',
    pos=(0, 0.4), height=0.025, wrapWidth=20.0, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
image_pretest_arousal = visual.ImageStim(
    win=win,
    name='image_pretest_arousal', 
    image='resources/images/arousal.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1,0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
slider_pretestarousal = visual.Slider(win=win, name='slider_pretestarousal',
    startValue=None, size=(0.06, 0.7), pos=(-0.43, -0.05), units=win.units,
    labels=["1", "2", "3", "4", "5", "6", "7", "8", "9"], ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor=[0.0039, 0.0039, 0.0039], markerColor='Red', lineColor=[0.0039, 0.0039, 0.0039], colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-2, readOnly=False)
button_pretestarousal = visual.ImageStim(
    win=win,
    name='button_pretestarousal', 
    image='resources/images/nextpage_button.png', mask=None, anchor='center',
    ori=0.0, pos=(0.75, -0.4), size=(0.17, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
mouse_pretestarousal = event.Mouse(win=win)
x, y = [None, None]
mouse_pretestarousal.mouseClock = core.Clock()

# --- Initialize components for Routine "EmotionVideo" ---
# Run 'Begin Experiment' code from code_moviegroup
# Makes a list of 3 emotion movie
movie_groups = ["resources/videos/neutral.mp4", "resources/videos/positive.mp4", "resources/videos/sadness.mp4"] 

#condition group based on participant ID 
#ID%3=0->neu; ID%3=1->pos; ID%3=2->sad
if int(expInfo['participant'])%3 == 0:
     expInfo['groupE'] = movie_groups[0]
elif int(expInfo['participant'])%3 == 1:
     expInfo['groupE'] = movie_groups[1]
elif int(expInfo['participant'])%3 == 2:
     expInfo['groupE'] = movie_groups[2]
text_MovieInstruction = visual.TextStim(win=win, name='text_MovieInstruction',
    text='接下來會自動播放一部時間在兩分鐘內的短片\n\n請您注意觀看\n\n(可透過鍵盤的音量鍵來調整短片的音量)',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
movie_fixation = visual.TextStim(win=win, name='movie_fixation',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
Emotion_Movie = visual.MovieStim(
    win, name='Emotion_Movie',
    filename=expInfo['groupE'], movieLib='ffpyplayer',
    loop=False, volume=1.0, noAudio=False,
    pos=(0, 0), size=(1,0.7), units=win.units,
    ori=0.0, anchor='center',opacity=None, contrast=1.0,
    depth=-3
)

# --- Initialize components for Routine "GolbalLocal_instruction" ---
image_GobalLocalInstruction = visual.ImageStim(
    win=win,
    name='image_GobalLocalInstruction', 
    image='resources/images/GobalLocal_instruction.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_GobalLocalInstruction = keyboard.Keyboard()

# --- Initialize components for Routine "GobalLocal_example" ---
image_GobalLocalExample = visual.ImageStim(
    win=win,
    name='image_GobalLocalExample', 
    image='resources/images/p1_FgJl.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_GobalLocalExample = keyboard.Keyboard()

# --- Initialize components for Routine "example_feedback" ---
feedback_to_formal_GobalLocal = visual.TextStim(win=win, name='feedback_to_formal_GobalLocal',
    text='很好，您現在知道該怎麼做了!\n\n若您準備好開始進入正式題\n\n請按「空白鍵」開始',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_GolbalLocal_formalsession = keyboard.Keyboard()

# --- Initialize components for Routine "fixpoint" ---
fixation = visual.TextStim(win=win, name='fixation',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "GobalLocal_FormalSession" ---
# Run 'Begin Experiment' code from code_caculateGobalChoiceRate
global_choice = []
gobal_rt = []
local_rt = []
image_GobalLocal_Formal = visual.ImageStim(
    win=win,
    name='image_GobalLocal_Formal', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
key_GobalLocal_ans = keyboard.Keyboard()

# --- Initialize components for Routine "MLQP" ---
# Run 'Begin Experiment' code from code_MLQmean
MLQP_ans = []
text_MLQinstruction = visual.TextStim(win=win, name='text_MLQinstruction',
    text='以下句子是想了解您「現在」可能有的想法或感受。\n請您依據您「現在的感受」，用滑鼠在下面的橫桿中，點選最適合描述您現在的感受的正確程度。',
    font='Arial',
    pos=(0, 0.3), height=0.03, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
MLQP_item = visual.TextStim(win=win, name='MLQP_item',
    text='',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
slider_MLQ = visual.Slider(win=win, name='slider_MLQ',
    startValue=None, size=(1, 0.05), pos=(0, -0.2), units=win.units,
    labels=["1\n完全不正確", "2", "3", "4", "5", "6", "7\n完全正確"], ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor=[0.0039, 0.0039, 0.0039], markerColor='Red', lineColor=[0.0039, 0.0039, 0.0039], colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-3, readOnly=False)
button_MLQ = visual.ImageStim(
    win=win,
    name='button_MLQ', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(0.75, -0.4), size=(0.17, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
mouse_MLQ = event.Mouse(win=win)
x, y = [None, None]
mouse_MLQ.mouseClock = core.Clock()

# --- Initialize components for Routine "PostestEmotion_valence" ---
text_postest_valenceInstruction = visual.TextStim(win=win, name='text_postest_valenceInstruction',
    text='請依下方情感方格中「橫軸」所標示的數字，在最下方相應的量尺橫桿上，用滑鼠點選最適合描述您剛才在「觀看短片時」的「情緒正負向程度」。',
    font='Arial',
    pos=(0, 0.4), height=0.025, wrapWidth=20.0, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_post0valence = visual.TextStim(win=win, name='text_post0valence',
    text='若您一開始即點選0\n請先嘗試點選其他數字\n會於右下角出現下一頁按鈕\n接著再次點選0\n即可按下一頁',
    font='Arial',
    pos=(-0.6, -0.4), height=0.02, wrapWidth=11.0, ori=0.0, 
    color=[-0.6314, -0.3804, -0.3804], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
image_postest_valence = visual.ImageStim(
    win=win,
    name='image_postest_valence', 
    image='resources/images/valence.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1,0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
slider_postestvalence = visual.Slider(win=win, name='slider_postestvalence',
    startValue=None, size=(0.7, 0.06), pos=(0, -0.38), units=win.units,
    labels=["-4", "-3", "-2", "-1", "0", "1", "2", "3", "4"], ticks=(-4, -3, -2, -1, 0, 1, 2, 3, 4), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor=[0.0039, 0.0039, 0.0039], markerColor='Red', lineColor=[0.0039, 0.0039, 0.0039], colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-3, readOnly=False)
button_postestvalence = visual.ImageStim(
    win=win,
    name='button_postestvalence', 
    image='resources/images/nextpage_button.png', mask=None, anchor='center',
    ori=0.0, pos=(0.75, -0.4), size=(0.17, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
mouse_postestvalence = event.Mouse(win=win)
x, y = [None, None]
mouse_postestvalence.mouseClock = core.Clock()

# --- Initialize components for Routine "PostestEmotion_arousal" ---
text_postest_arousalInstruction = visual.TextStim(win=win, name='text_postest_arousalInstruction',
    text='請依下方情感方格中「縱軸」所標示的數字，在左方相應的量尺橫桿上，用滑鼠點選最適合描述您剛才在「觀看短片時」的「情緒激動程度」。',
    font='Arial',
    pos=(0, 0.4), height=0.025, wrapWidth=20.0, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
image_postest_arousal = visual.ImageStim(
    win=win,
    name='image_postest_arousal', 
    image='resources/images/arousal.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1,0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
slider_postestarousal = visual.Slider(win=win, name='slider_postestarousal',
    startValue=None, size=(0.06, 0.7), pos=(-0.43, -0.05), units=win.units,
    labels=["1", "2", "3", "4", "5", "6", "7", "8", "9"], ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor=[0.0039, 0.0039, 0.0039], markerColor='Red', lineColor=[0.0039, 0.0039, 0.0039], colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-2, readOnly=False)
button_postestarousal = visual.ImageStim(
    win=win,
    name='button_postestarousal', 
    image='resources/images/nextpage_button.png', mask=None, anchor='center',
    ori=0.0, pos=(0.75, -0.4), size=(0.17, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
mouse_postestarousal = event.Mouse(win=win)
x, y = [None, None]
mouse_postestarousal.mouseClock = core.Clock()

# --- Initialize components for Routine "movie_check" ---
# Run 'Begin Experiment' code from repeat_check
check_repeat = []
MovieRepeatCheck = visual.TextStim(win=win, name='MovieRepeatCheck',
    text='',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
slider_check = visual.Slider(win=win, name='slider_check',
    startValue=None, size=(0.7, 0.05), pos=(0, -0.2), units=win.units,
    labels=["是", "否"],ticks=None, granularity=1,
    style='radio', styleTweaks=(), opacity=None,
    labelColor=[0.0039, 0.0039, 0.0039], markerColor='Red', lineColor=[0.0039, 0.0039, 0.0039], colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-2, readOnly=False)
button_check = visual.ImageStim(
    win=win,
    name='button_check', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(0.75, -0.4), size=(0.17, 0.08),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
mouse_check = event.Mouse(win=win)
x, y = [None, None]
mouse_check.mouseClock = core.Clock()

# --- Initialize components for Routine "EndScreen" ---
text_goodbye = visual.TextStim(win=win, name='text_goodbye',
    text='本次實驗已完成，稍後請稍等實驗數據儲存\n\n數據儲存完畢後，會出現下圖畫面\n\n屆時請「點選OK」，接著再關閉實驗網頁\n\n閱讀完此頁說明，請用滑鼠點擊下圖來結束實驗\n\n感謝您的參與及協助!',
    font='Arial',
    pos=(0, 0.2), height=0.03, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
image_endmsg = visual.ImageStim(
    win=win,
    name='image_endmsg', 
    image='resources/images/end_message.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.2), size=(0.5, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
mouse_goodbye = event.Mouse(win=win)
x, y = [None, None]
mouse_goodbye.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "assignMILgroup" ---
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
assignMILgroupComponents = []
for thisComponent in assignMILgroupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "assignMILgroup" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in assignMILgroupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "assignMILgroup" ---
for thisComponent in assignMILgroupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "assignMILgroup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
showhighMIL = data.TrialHandler(nReps=highMIL_rep, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='showhighMIL')
thisExp.addLoop(showhighMIL)  # add the loop to the experiment
thisShowhighMIL = showhighMIL.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisShowhighMIL.rgb)
if thisShowhighMIL != None:
    for paramName in thisShowhighMIL:
        exec('{} = thisShowhighMIL[paramName]'.format(paramName))

for thisShowhighMIL in showhighMIL:
    currentLoop = showhighMIL
    # abbreviate parameter names if possible (e.g. rgb = thisShowhighMIL.rgb)
    if thisShowhighMIL != None:
        for paramName in thisShowhighMIL:
            exec('{} = thisShowhighMIL[paramName]'.format(paramName))
# completed highMIL_rep repeats of 'showhighMIL'


# set up handler to look after randomisation of conditions etc
showlowMIL = data.TrialHandler(nReps=lowMIL_rep, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='showlowMIL')
thisExp.addLoop(showlowMIL)  # add the loop to the experiment
thisShowlowMIL = showlowMIL.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisShowlowMIL.rgb)
if thisShowlowMIL != None:
    for paramName in thisShowlowMIL:
        exec('{} = thisShowlowMIL[paramName]'.format(paramName))

for thisShowlowMIL in showlowMIL:
    currentLoop = showlowMIL
    # abbreviate parameter names if possible (e.g. rgb = thisShowlowMIL.rgb)
    if thisShowlowMIL != None:
        for paramName in thisShowlowMIL:
            exec('{} = thisShowlowMIL[paramName]'.format(paramName))
# completed lowMIL_rep repeats of 'showlowMIL'


# --- Prepare to start Routine "AffectGrid_instruction" ---
continueRoutine = True
# update component parameters for each repeat
key_AffectGridInstruction.keys = []
key_AffectGridInstruction.rt = []
_key_AffectGridInstruction_allKeys = []
# keep track of which components have finished
AffectGrid_instructionComponents = [image_AffectGrid_instruction, key_AffectGridInstruction]
for thisComponent in AffectGrid_instructionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "AffectGrid_instruction" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_AffectGrid_instruction* updates
    
    # if image_AffectGrid_instruction is starting this frame...
    if image_AffectGrid_instruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_AffectGrid_instruction.frameNStart = frameN  # exact frame index
        image_AffectGrid_instruction.tStart = t  # local t and not account for scr refresh
        image_AffectGrid_instruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_AffectGrid_instruction, 'tStartRefresh')  # time at next scr refresh
        # update status
        image_AffectGrid_instruction.status = STARTED
        image_AffectGrid_instruction.setAutoDraw(True)
    
    # if image_AffectGrid_instruction is active this frame...
    if image_AffectGrid_instruction.status == STARTED:
        # update params
        pass
    
    # *key_AffectGridInstruction* updates
    waitOnFlip = False
    
    # if key_AffectGridInstruction is starting this frame...
    if key_AffectGridInstruction.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
        # keep track of start time/frame for later
        key_AffectGridInstruction.frameNStart = frameN  # exact frame index
        key_AffectGridInstruction.tStart = t  # local t and not account for scr refresh
        key_AffectGridInstruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_AffectGridInstruction, 'tStartRefresh')  # time at next scr refresh
        # update status
        key_AffectGridInstruction.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_AffectGridInstruction.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_AffectGridInstruction.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_AffectGridInstruction.status == STARTED and not waitOnFlip:
        theseKeys = key_AffectGridInstruction.getKeys(keyList=['space'], waitRelease=False)
        _key_AffectGridInstruction_allKeys.extend(theseKeys)
        if len(_key_AffectGridInstruction_allKeys):
            key_AffectGridInstruction.keys = _key_AffectGridInstruction_allKeys[-1].name  # just the last key pressed
            key_AffectGridInstruction.rt = _key_AffectGridInstruction_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in AffectGrid_instructionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "AffectGrid_instruction" ---
for thisComponent in AffectGrid_instructionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "AffectGrid_instruction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "PretestEmotion_valence" ---
continueRoutine = True
# update component parameters for each repeat
slider_pretestvalence.reset()
# setup some python lists for storing info about the mouse_pretestvalence
mouse_pretestvalence.x = []
mouse_pretestvalence.y = []
mouse_pretestvalence.leftButton = []
mouse_pretestvalence.midButton = []
mouse_pretestvalence.rightButton = []
mouse_pretestvalence.time = []
mouse_pretestvalence.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
PretestEmotion_valenceComponents = [text_pretest_valenceInstruction, text_pre0valence, image_pretest_valence, slider_pretestvalence, button_pretestvalence, mouse_pretestvalence]
for thisComponent in PretestEmotion_valenceComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "PretestEmotion_valence" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_pretest_valenceInstruction* updates
    
    # if text_pretest_valenceInstruction is starting this frame...
    if text_pretest_valenceInstruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_pretest_valenceInstruction.frameNStart = frameN  # exact frame index
        text_pretest_valenceInstruction.tStart = t  # local t and not account for scr refresh
        text_pretest_valenceInstruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_pretest_valenceInstruction, 'tStartRefresh')  # time at next scr refresh
        # update status
        text_pretest_valenceInstruction.status = STARTED
        text_pretest_valenceInstruction.setAutoDraw(True)
    
    # if text_pretest_valenceInstruction is active this frame...
    if text_pretest_valenceInstruction.status == STARTED:
        # update params
        pass
    
    # *text_pre0valence* updates
    
    # if text_pre0valence is starting this frame...
    if text_pre0valence.status == NOT_STARTED and slider_pretestvalence.getRating() == 0:
        # keep track of start time/frame for later
        text_pre0valence.frameNStart = frameN  # exact frame index
        text_pre0valence.tStart = t  # local t and not account for scr refresh
        text_pre0valence.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_pre0valence, 'tStartRefresh')  # time at next scr refresh
        # update status
        text_pre0valence.status = STARTED
        text_pre0valence.setAutoDraw(True)
    
    # if text_pre0valence is active this frame...
    if text_pre0valence.status == STARTED:
        # update params
        pass
    
    # *image_pretest_valence* updates
    
    # if image_pretest_valence is starting this frame...
    if image_pretest_valence.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_pretest_valence.frameNStart = frameN  # exact frame index
        image_pretest_valence.tStart = t  # local t and not account for scr refresh
        image_pretest_valence.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_pretest_valence, 'tStartRefresh')  # time at next scr refresh
        # update status
        image_pretest_valence.status = STARTED
        image_pretest_valence.setAutoDraw(True)
    
    # if image_pretest_valence is active this frame...
    if image_pretest_valence.status == STARTED:
        # update params
        pass
    
    # *slider_pretestvalence* updates
    
    # if slider_pretestvalence is starting this frame...
    if slider_pretestvalence.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slider_pretestvalence.frameNStart = frameN  # exact frame index
        slider_pretestvalence.tStart = t  # local t and not account for scr refresh
        slider_pretestvalence.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_pretestvalence, 'tStartRefresh')  # time at next scr refresh
        # update status
        slider_pretestvalence.status = STARTED
        slider_pretestvalence.setAutoDraw(True)
    
    # if slider_pretestvalence is active this frame...
    if slider_pretestvalence.status == STARTED:
        # update params
        pass
    
    # *button_pretestvalence* updates
    
    # if button_pretestvalence is starting this frame...
    if button_pretestvalence.status == NOT_STARTED and slider_pretestvalence.rating:
        # keep track of start time/frame for later
        button_pretestvalence.frameNStart = frameN  # exact frame index
        button_pretestvalence.tStart = t  # local t and not account for scr refresh
        button_pretestvalence.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_pretestvalence, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'button_pretestvalence.started')
        # update status
        button_pretestvalence.status = STARTED
        button_pretestvalence.setAutoDraw(True)
    
    # if button_pretestvalence is active this frame...
    if button_pretestvalence.status == STARTED:
        # update params
        pass
    # *mouse_pretestvalence* updates
    
    # if mouse_pretestvalence is starting this frame...
    if mouse_pretestvalence.status == NOT_STARTED and slider_pretestvalence.rating:
        # keep track of start time/frame for later
        mouse_pretestvalence.frameNStart = frameN  # exact frame index
        mouse_pretestvalence.tStart = t  # local t and not account for scr refresh
        mouse_pretestvalence.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_pretestvalence, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_pretestvalence.started', t)
        # update status
        mouse_pretestvalence.status = STARTED
        mouse_pretestvalence.mouseClock.reset()
        prevButtonState = mouse_pretestvalence.getPressed()  # if button is down already this ISN'T a new click
    if mouse_pretestvalence.status == STARTED:  # only update if started and not finished!
        buttons = mouse_pretestvalence.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                clickableList = core.getFromNames(button_pretestvalence, namespace=locals())
                for obj in clickableList:
                    # is this object clicked on?
                    if obj.contains(mouse_pretestvalence):
                        gotValidClick = True
                        mouse_pretestvalence.clicked_name.append(obj.name)
                x, y = mouse_pretestvalence.getPos()
                mouse_pretestvalence.x.append(x)
                mouse_pretestvalence.y.append(y)
                buttons = mouse_pretestvalence.getPressed()
                mouse_pretestvalence.leftButton.append(buttons[0])
                mouse_pretestvalence.midButton.append(buttons[1])
                mouse_pretestvalence.rightButton.append(buttons[2])
                mouse_pretestvalence.time.append(mouse_pretestvalence.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # end routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PretestEmotion_valenceComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "PretestEmotion_valence" ---
for thisComponent in PretestEmotion_valenceComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('slider_pretestvalence.response', slider_pretestvalence.getRating())
thisExp.addData('slider_pretestvalence.rt', slider_pretestvalence.getRT())
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_pretestvalence.x', mouse_pretestvalence.x)
thisExp.addData('mouse_pretestvalence.y', mouse_pretestvalence.y)
thisExp.addData('mouse_pretestvalence.leftButton', mouse_pretestvalence.leftButton)
thisExp.addData('mouse_pretestvalence.midButton', mouse_pretestvalence.midButton)
thisExp.addData('mouse_pretestvalence.rightButton', mouse_pretestvalence.rightButton)
thisExp.addData('mouse_pretestvalence.time', mouse_pretestvalence.time)
thisExp.addData('mouse_pretestvalence.clicked_name', mouse_pretestvalence.clicked_name)
thisExp.nextEntry()
# the Routine "PretestEmotion_valence" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "PretestEmotion_arousal" ---
continueRoutine = True
# update component parameters for each repeat
slider_pretestarousal.reset()
# setup some python lists for storing info about the mouse_pretestarousal
mouse_pretestarousal.x = []
mouse_pretestarousal.y = []
mouse_pretestarousal.leftButton = []
mouse_pretestarousal.midButton = []
mouse_pretestarousal.rightButton = []
mouse_pretestarousal.time = []
mouse_pretestarousal.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
PretestEmotion_arousalComponents = [text_pretest_arousalnstruction, image_pretest_arousal, slider_pretestarousal, button_pretestarousal, mouse_pretestarousal]
for thisComponent in PretestEmotion_arousalComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "PretestEmotion_arousal" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_pretest_arousalnstruction* updates
    
    # if text_pretest_arousalnstruction is starting this frame...
    if text_pretest_arousalnstruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_pretest_arousalnstruction.frameNStart = frameN  # exact frame index
        text_pretest_arousalnstruction.tStart = t  # local t and not account for scr refresh
        text_pretest_arousalnstruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_pretest_arousalnstruction, 'tStartRefresh')  # time at next scr refresh
        # update status
        text_pretest_arousalnstruction.status = STARTED
        text_pretest_arousalnstruction.setAutoDraw(True)
    
    # if text_pretest_arousalnstruction is active this frame...
    if text_pretest_arousalnstruction.status == STARTED:
        # update params
        pass
    
    # *image_pretest_arousal* updates
    
    # if image_pretest_arousal is starting this frame...
    if image_pretest_arousal.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_pretest_arousal.frameNStart = frameN  # exact frame index
        image_pretest_arousal.tStart = t  # local t and not account for scr refresh
        image_pretest_arousal.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_pretest_arousal, 'tStartRefresh')  # time at next scr refresh
        # update status
        image_pretest_arousal.status = STARTED
        image_pretest_arousal.setAutoDraw(True)
    
    # if image_pretest_arousal is active this frame...
    if image_pretest_arousal.status == STARTED:
        # update params
        pass
    
    # *slider_pretestarousal* updates
    
    # if slider_pretestarousal is starting this frame...
    if slider_pretestarousal.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slider_pretestarousal.frameNStart = frameN  # exact frame index
        slider_pretestarousal.tStart = t  # local t and not account for scr refresh
        slider_pretestarousal.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_pretestarousal, 'tStartRefresh')  # time at next scr refresh
        # update status
        slider_pretestarousal.status = STARTED
        slider_pretestarousal.setAutoDraw(True)
    
    # if slider_pretestarousal is active this frame...
    if slider_pretestarousal.status == STARTED:
        # update params
        pass
    
    # *button_pretestarousal* updates
    
    # if button_pretestarousal is starting this frame...
    if button_pretestarousal.status == NOT_STARTED and slider_pretestarousal.rating:
        # keep track of start time/frame for later
        button_pretestarousal.frameNStart = frameN  # exact frame index
        button_pretestarousal.tStart = t  # local t and not account for scr refresh
        button_pretestarousal.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_pretestarousal, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'button_pretestarousal.started')
        # update status
        button_pretestarousal.status = STARTED
        button_pretestarousal.setAutoDraw(True)
    
    # if button_pretestarousal is active this frame...
    if button_pretestarousal.status == STARTED:
        # update params
        pass
    # *mouse_pretestarousal* updates
    
    # if mouse_pretestarousal is starting this frame...
    if mouse_pretestarousal.status == NOT_STARTED and slider_pretestarousal.rating:
        # keep track of start time/frame for later
        mouse_pretestarousal.frameNStart = frameN  # exact frame index
        mouse_pretestarousal.tStart = t  # local t and not account for scr refresh
        mouse_pretestarousal.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_pretestarousal, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_pretestarousal.started', t)
        # update status
        mouse_pretestarousal.status = STARTED
        mouse_pretestarousal.mouseClock.reset()
        prevButtonState = mouse_pretestarousal.getPressed()  # if button is down already this ISN'T a new click
    if mouse_pretestarousal.status == STARTED:  # only update if started and not finished!
        buttons = mouse_pretestarousal.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                clickableList = core.getFromNames(button_pretestarousal, namespace=locals())
                for obj in clickableList:
                    # is this object clicked on?
                    if obj.contains(mouse_pretestarousal):
                        gotValidClick = True
                        mouse_pretestarousal.clicked_name.append(obj.name)
                x, y = mouse_pretestarousal.getPos()
                mouse_pretestarousal.x.append(x)
                mouse_pretestarousal.y.append(y)
                buttons = mouse_pretestarousal.getPressed()
                mouse_pretestarousal.leftButton.append(buttons[0])
                mouse_pretestarousal.midButton.append(buttons[1])
                mouse_pretestarousal.rightButton.append(buttons[2])
                mouse_pretestarousal.time.append(mouse_pretestarousal.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # end routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PretestEmotion_arousalComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "PretestEmotion_arousal" ---
for thisComponent in PretestEmotion_arousalComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('slider_pretestarousal.response', slider_pretestarousal.getRating())
thisExp.addData('slider_pretestarousal.rt', slider_pretestarousal.getRT())
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_pretestarousal.x', mouse_pretestarousal.x)
thisExp.addData('mouse_pretestarousal.y', mouse_pretestarousal.y)
thisExp.addData('mouse_pretestarousal.leftButton', mouse_pretestarousal.leftButton)
thisExp.addData('mouse_pretestarousal.midButton', mouse_pretestarousal.midButton)
thisExp.addData('mouse_pretestarousal.rightButton', mouse_pretestarousal.rightButton)
thisExp.addData('mouse_pretestarousal.time', mouse_pretestarousal.time)
thisExp.addData('mouse_pretestarousal.clicked_name', mouse_pretestarousal.clicked_name)
thisExp.nextEntry()
# the Routine "PretestEmotion_arousal" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "EmotionVideo" ---
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
EmotionVideoComponents = [text_MovieInstruction, movie_fixation, Emotion_Movie]
for thisComponent in EmotionVideoComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "EmotionVideo" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_MovieInstruction* updates
    
    # if text_MovieInstruction is starting this frame...
    if text_MovieInstruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_MovieInstruction.frameNStart = frameN  # exact frame index
        text_MovieInstruction.tStart = t  # local t and not account for scr refresh
        text_MovieInstruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_MovieInstruction, 'tStartRefresh')  # time at next scr refresh
        # update status
        text_MovieInstruction.status = STARTED
        text_MovieInstruction.setAutoDraw(True)
    
    # if text_MovieInstruction is active this frame...
    if text_MovieInstruction.status == STARTED:
        # update params
        pass
    
    # if text_MovieInstruction is stopping this frame...
    if text_MovieInstruction.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_MovieInstruction.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            text_MovieInstruction.tStop = t  # not accounting for scr refresh
            text_MovieInstruction.frameNStop = frameN  # exact frame index
            # update status
            text_MovieInstruction.status = FINISHED
            text_MovieInstruction.setAutoDraw(False)
    
    # *movie_fixation* updates
    
    # if movie_fixation is starting this frame...
    if movie_fixation.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
        # keep track of start time/frame for later
        movie_fixation.frameNStart = frameN  # exact frame index
        movie_fixation.tStart = t  # local t and not account for scr refresh
        movie_fixation.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(movie_fixation, 'tStartRefresh')  # time at next scr refresh
        # update status
        movie_fixation.status = STARTED
        movie_fixation.setAutoDraw(True)
    
    # if movie_fixation is active this frame...
    if movie_fixation.status == STARTED:
        # update params
        pass
    
    # if movie_fixation is stopping this frame...
    if movie_fixation.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > movie_fixation.tStartRefresh + 0.5-frameTolerance:
            # keep track of stop time/frame for later
            movie_fixation.tStop = t  # not accounting for scr refresh
            movie_fixation.frameNStop = frameN  # exact frame index
            # update status
            movie_fixation.status = FINISHED
            movie_fixation.setAutoDraw(False)
    
    # *Emotion_Movie* updates
    
    # if Emotion_Movie is starting this frame...
    if Emotion_Movie.status == NOT_STARTED and tThisFlip >= 5.5-frameTolerance:
        # keep track of start time/frame for later
        Emotion_Movie.frameNStart = frameN  # exact frame index
        Emotion_Movie.tStart = t  # local t and not account for scr refresh
        Emotion_Movie.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Emotion_Movie, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Emotion_Movie.started')
        # update status
        Emotion_Movie.status = STARTED
        Emotion_Movie.setAutoDraw(True)
        Emotion_Movie.play()
    if Emotion_Movie.isFinished:  # force-end the routine
        continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EmotionVideoComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "EmotionVideo" ---
for thisComponent in EmotionVideoComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
Emotion_Movie.stop()
# the Routine "EmotionVideo" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "GolbalLocal_instruction" ---
continueRoutine = True
# update component parameters for each repeat
key_GobalLocalInstruction.keys = []
key_GobalLocalInstruction.rt = []
_key_GobalLocalInstruction_allKeys = []
# keep track of which components have finished
GolbalLocal_instructionComponents = [image_GobalLocalInstruction, key_GobalLocalInstruction]
for thisComponent in GolbalLocal_instructionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "GolbalLocal_instruction" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_GobalLocalInstruction* updates
    
    # if image_GobalLocalInstruction is starting this frame...
    if image_GobalLocalInstruction.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        image_GobalLocalInstruction.frameNStart = frameN  # exact frame index
        image_GobalLocalInstruction.tStart = t  # local t and not account for scr refresh
        image_GobalLocalInstruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_GobalLocalInstruction, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'image_GobalLocalInstruction.started')
        # update status
        image_GobalLocalInstruction.status = STARTED
        image_GobalLocalInstruction.setAutoDraw(True)
    
    # if image_GobalLocalInstruction is active this frame...
    if image_GobalLocalInstruction.status == STARTED:
        # update params
        pass
    
    # *key_GobalLocalInstruction* updates
    waitOnFlip = False
    
    # if key_GobalLocalInstruction is starting this frame...
    if key_GobalLocalInstruction.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
        # keep track of start time/frame for later
        key_GobalLocalInstruction.frameNStart = frameN  # exact frame index
        key_GobalLocalInstruction.tStart = t  # local t and not account for scr refresh
        key_GobalLocalInstruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_GobalLocalInstruction, 'tStartRefresh')  # time at next scr refresh
        # update status
        key_GobalLocalInstruction.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_GobalLocalInstruction.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_GobalLocalInstruction.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_GobalLocalInstruction.status == STARTED and not waitOnFlip:
        theseKeys = key_GobalLocalInstruction.getKeys(keyList=['space'], waitRelease=False)
        _key_GobalLocalInstruction_allKeys.extend(theseKeys)
        if len(_key_GobalLocalInstruction_allKeys):
            key_GobalLocalInstruction.keys = _key_GobalLocalInstruction_allKeys[-1].name  # just the last key pressed
            key_GobalLocalInstruction.rt = _key_GobalLocalInstruction_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GolbalLocal_instructionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "GolbalLocal_instruction" ---
for thisComponent in GolbalLocal_instructionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "GolbalLocal_instruction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "GobalLocal_example" ---
continueRoutine = True
# update component parameters for each repeat
key_GobalLocalExample.keys = []
key_GobalLocalExample.rt = []
_key_GobalLocalExample_allKeys = []
# keep track of which components have finished
GobalLocal_exampleComponents = [image_GobalLocalExample, key_GobalLocalExample]
for thisComponent in GobalLocal_exampleComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "GobalLocal_example" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_GobalLocalExample* updates
    
    # if image_GobalLocalExample is starting this frame...
    if image_GobalLocalExample.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_GobalLocalExample.frameNStart = frameN  # exact frame index
        image_GobalLocalExample.tStart = t  # local t and not account for scr refresh
        image_GobalLocalExample.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_GobalLocalExample, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'image_GobalLocalExample.started')
        # update status
        image_GobalLocalExample.status = STARTED
        image_GobalLocalExample.setAutoDraw(True)
    
    # if image_GobalLocalExample is active this frame...
    if image_GobalLocalExample.status == STARTED:
        # update params
        pass
    
    # *key_GobalLocalExample* updates
    waitOnFlip = False
    
    # if key_GobalLocalExample is starting this frame...
    if key_GobalLocalExample.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_GobalLocalExample.frameNStart = frameN  # exact frame index
        key_GobalLocalExample.tStart = t  # local t and not account for scr refresh
        key_GobalLocalExample.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_GobalLocalExample, 'tStartRefresh')  # time at next scr refresh
        # update status
        key_GobalLocalExample.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_GobalLocalExample.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_GobalLocalExample.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_GobalLocalExample.status == STARTED and not waitOnFlip:
        theseKeys = key_GobalLocalExample.getKeys(keyList=['f','j'], waitRelease=False)
        _key_GobalLocalExample_allKeys.extend(theseKeys)
        if len(_key_GobalLocalExample_allKeys):
            key_GobalLocalExample.keys = _key_GobalLocalExample_allKeys[-1].name  # just the last key pressed
            key_GobalLocalExample.rt = _key_GobalLocalExample_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GobalLocal_exampleComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "GobalLocal_example" ---
for thisComponent in GobalLocal_exampleComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_GobalLocalExample.keys in ['', [], None]:  # No response was made
    key_GobalLocalExample.keys = None
thisExp.addData('key_GobalLocalExample.keys',key_GobalLocalExample.keys)
if key_GobalLocalExample.keys != None:  # we had a response
    thisExp.addData('key_GobalLocalExample.rt', key_GobalLocalExample.rt)
thisExp.nextEntry()
# the Routine "GobalLocal_example" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "example_feedback" ---
continueRoutine = True
# update component parameters for each repeat
key_GolbalLocal_formalsession.keys = []
key_GolbalLocal_formalsession.rt = []
_key_GolbalLocal_formalsession_allKeys = []
# keep track of which components have finished
example_feedbackComponents = [feedback_to_formal_GobalLocal, key_GolbalLocal_formalsession]
for thisComponent in example_feedbackComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "example_feedback" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *feedback_to_formal_GobalLocal* updates
    
    # if feedback_to_formal_GobalLocal is starting this frame...
    if feedback_to_formal_GobalLocal.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        feedback_to_formal_GobalLocal.frameNStart = frameN  # exact frame index
        feedback_to_formal_GobalLocal.tStart = t  # local t and not account for scr refresh
        feedback_to_formal_GobalLocal.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(feedback_to_formal_GobalLocal, 'tStartRefresh')  # time at next scr refresh
        # update status
        feedback_to_formal_GobalLocal.status = STARTED
        feedback_to_formal_GobalLocal.setAutoDraw(True)
    
    # if feedback_to_formal_GobalLocal is active this frame...
    if feedback_to_formal_GobalLocal.status == STARTED:
        # update params
        pass
    
    # *key_GolbalLocal_formalsession* updates
    waitOnFlip = False
    
    # if key_GolbalLocal_formalsession is starting this frame...
    if key_GolbalLocal_formalsession.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        key_GolbalLocal_formalsession.frameNStart = frameN  # exact frame index
        key_GolbalLocal_formalsession.tStart = t  # local t and not account for scr refresh
        key_GolbalLocal_formalsession.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_GolbalLocal_formalsession, 'tStartRefresh')  # time at next scr refresh
        # update status
        key_GolbalLocal_formalsession.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_GolbalLocal_formalsession.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_GolbalLocal_formalsession.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_GolbalLocal_formalsession.status == STARTED and not waitOnFlip:
        theseKeys = key_GolbalLocal_formalsession.getKeys(keyList=['space'], waitRelease=False)
        _key_GolbalLocal_formalsession_allKeys.extend(theseKeys)
        if len(_key_GolbalLocal_formalsession_allKeys):
            key_GolbalLocal_formalsession.keys = _key_GolbalLocal_formalsession_allKeys[-1].name  # just the last key pressed
            key_GolbalLocal_formalsession.rt = _key_GolbalLocal_formalsession_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in example_feedbackComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "example_feedback" ---
for thisComponent in example_feedbackComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "example_feedback" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trialsGobalLocal = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('resources/loop/pictureloop.xlsx'),
    seed=None, name='trialsGobalLocal')
thisExp.addLoop(trialsGobalLocal)  # add the loop to the experiment
thisTrialsGobalLocal = trialsGobalLocal.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrialsGobalLocal.rgb)
if thisTrialsGobalLocal != None:
    for paramName in thisTrialsGobalLocal:
        exec('{} = thisTrialsGobalLocal[paramName]'.format(paramName))

for thisTrialsGobalLocal in trialsGobalLocal:
    currentLoop = trialsGobalLocal
    # abbreviate parameter names if possible (e.g. rgb = thisTrialsGobalLocal.rgb)
    if thisTrialsGobalLocal != None:
        for paramName in thisTrialsGobalLocal:
            exec('{} = thisTrialsGobalLocal[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "fixpoint" ---
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    fixpointComponents = [fixation]
    for thisComponent in fixpointComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "fixpoint" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 1.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation* updates
        
        # if fixation is starting this frame...
        if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation.frameNStart = frameN  # exact frame index
            fixation.tStart = t  # local t and not account for scr refresh
            fixation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fixation.started')
            # update status
            fixation.status = STARTED
            fixation.setAutoDraw(True)
        
        # if fixation is active this frame...
        if fixation.status == STARTED:
            # update params
            pass
        
        # if fixation is stopping this frame...
        if fixation.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                fixation.tStop = t  # not accounting for scr refresh
                fixation.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fixation.stopped')
                # update status
                fixation.status = FINISHED
                fixation.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixpointComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "fixpoint" ---
    for thisComponent in fixpointComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-1.000000)
    
    # --- Prepare to start Routine "GobalLocal_FormalSession" ---
    continueRoutine = True
    # update component parameters for each repeat
    image_GobalLocal_Formal.setImage(picture_list)
    key_GobalLocal_ans.keys = []
    key_GobalLocal_ans.rt = []
    _key_GobalLocal_ans_allKeys = []
    # keep track of which components have finished
    GobalLocal_FormalSessionComponents = [image_GobalLocal_Formal, key_GobalLocal_ans]
    for thisComponent in GobalLocal_FormalSessionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "GobalLocal_FormalSession" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_GobalLocal_Formal* updates
        
        # if image_GobalLocal_Formal is starting this frame...
        if image_GobalLocal_Formal.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_GobalLocal_Formal.frameNStart = frameN  # exact frame index
            image_GobalLocal_Formal.tStart = t  # local t and not account for scr refresh
            image_GobalLocal_Formal.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_GobalLocal_Formal, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_GobalLocal_Formal.started')
            # update status
            image_GobalLocal_Formal.status = STARTED
            image_GobalLocal_Formal.setAutoDraw(True)
        
        # if image_GobalLocal_Formal is active this frame...
        if image_GobalLocal_Formal.status == STARTED:
            # update params
            pass
        
        # *key_GobalLocal_ans* updates
        waitOnFlip = False
        
        # if key_GobalLocal_ans is starting this frame...
        if key_GobalLocal_ans.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_GobalLocal_ans.frameNStart = frameN  # exact frame index
            key_GobalLocal_ans.tStart = t  # local t and not account for scr refresh
            key_GobalLocal_ans.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_GobalLocal_ans, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_GobalLocal_ans.started')
            # update status
            key_GobalLocal_ans.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_GobalLocal_ans.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_GobalLocal_ans.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_GobalLocal_ans.status == STARTED and not waitOnFlip:
            theseKeys = key_GobalLocal_ans.getKeys(keyList=['f','j'], waitRelease=False)
            _key_GobalLocal_ans_allKeys.extend(theseKeys)
            if len(_key_GobalLocal_ans_allKeys):
                key_GobalLocal_ans.keys = _key_GobalLocal_ans_allKeys[-1].name  # just the last key pressed
                key_GobalLocal_ans.rt = _key_GobalLocal_ans_allKeys[-1].rt
                # was this correct?
                if (key_GobalLocal_ans.keys == str(Gobal_corrAns)) or (key_GobalLocal_ans.keys == Gobal_corrAns):
                    key_GobalLocal_ans.corr = 1
                else:
                    key_GobalLocal_ans.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in GobalLocal_FormalSessionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "GobalLocal_FormalSession" ---
    for thisComponent in GobalLocal_FormalSessionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_caculateGobalChoiceRate
    #choice list
    global_choice.append(key_GobalLocal_ans.corr)
    
    #glocal reaction time list
    if key_GobalLocal_ans.corr == 1:
        gobal_rt.append(key_GobalLocal_ans.rt)
    elif key_GobalLocal_ans.corr == 0:
        local_rt.append(key_GobalLocal_ans.rt)
    # check responses
    if key_GobalLocal_ans.keys in ['', [], None]:  # No response was made
        key_GobalLocal_ans.keys = None
        # was no response the correct answer?!
        if str(Gobal_corrAns).lower() == 'none':
           key_GobalLocal_ans.corr = 1;  # correct non-response
        else:
           key_GobalLocal_ans.corr = 0;  # failed to respond (incorrectly)
    # store data for trialsGobalLocal (TrialHandler)
    trialsGobalLocal.addData('key_GobalLocal_ans.keys',key_GobalLocal_ans.keys)
    trialsGobalLocal.addData('key_GobalLocal_ans.corr', key_GobalLocal_ans.corr)
    if key_GobalLocal_ans.keys != None:  # we had a response
        trialsGobalLocal.addData('key_GobalLocal_ans.rt', key_GobalLocal_ans.rt)
    # the Routine "GobalLocal_FormalSession" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trialsGobalLocal'


# set up handler to look after randomisation of conditions etc
trialsMIL = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('resources/loop/MLQP_loop.xlsx'),
    seed=None, name='trialsMIL')
thisExp.addLoop(trialsMIL)  # add the loop to the experiment
thisTrialsMIL = trialsMIL.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrialsMIL.rgb)
if thisTrialsMIL != None:
    for paramName in thisTrialsMIL:
        exec('{} = thisTrialsMIL[paramName]'.format(paramName))

for thisTrialsMIL in trialsMIL:
    currentLoop = trialsMIL
    # abbreviate parameter names if possible (e.g. rgb = thisTrialsMIL.rgb)
    if thisTrialsMIL != None:
        for paramName in thisTrialsMIL:
            exec('{} = thisTrialsMIL[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "MLQP" ---
    continueRoutine = True
    # update component parameters for each repeat
    MLQP_item.setText(MLQP_items)
    slider_MLQ.reset()
    button_MLQ.setImage('resources/images/nextpage_button.png')
    # setup some python lists for storing info about the mouse_MLQ
    mouse_MLQ.x = []
    mouse_MLQ.y = []
    mouse_MLQ.leftButton = []
    mouse_MLQ.midButton = []
    mouse_MLQ.rightButton = []
    mouse_MLQ.time = []
    mouse_MLQ.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    MLQPComponents = [text_MLQinstruction, MLQP_item, slider_MLQ, button_MLQ, mouse_MLQ]
    for thisComponent in MLQPComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "MLQP" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_MLQinstruction* updates
        
        # if text_MLQinstruction is starting this frame...
        if text_MLQinstruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_MLQinstruction.frameNStart = frameN  # exact frame index
            text_MLQinstruction.tStart = t  # local t and not account for scr refresh
            text_MLQinstruction.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_MLQinstruction, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_MLQinstruction.status = STARTED
            text_MLQinstruction.setAutoDraw(True)
        
        # if text_MLQinstruction is active this frame...
        if text_MLQinstruction.status == STARTED:
            # update params
            pass
        
        # *MLQP_item* updates
        
        # if MLQP_item is starting this frame...
        if MLQP_item.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            MLQP_item.frameNStart = frameN  # exact frame index
            MLQP_item.tStart = t  # local t and not account for scr refresh
            MLQP_item.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(MLQP_item, 'tStartRefresh')  # time at next scr refresh
            # update status
            MLQP_item.status = STARTED
            MLQP_item.setAutoDraw(True)
        
        # if MLQP_item is active this frame...
        if MLQP_item.status == STARTED:
            # update params
            pass
        
        # *slider_MLQ* updates
        
        # if slider_MLQ is starting this frame...
        if slider_MLQ.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_MLQ.frameNStart = frameN  # exact frame index
            slider_MLQ.tStart = t  # local t and not account for scr refresh
            slider_MLQ.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_MLQ, 'tStartRefresh')  # time at next scr refresh
            # update status
            slider_MLQ.status = STARTED
            slider_MLQ.setAutoDraw(True)
        
        # if slider_MLQ is active this frame...
        if slider_MLQ.status == STARTED:
            # update params
            pass
        
        # *button_MLQ* updates
        
        # if button_MLQ is starting this frame...
        if button_MLQ.status == NOT_STARTED and slider_MLQ.rating:
            # keep track of start time/frame for later
            button_MLQ.frameNStart = frameN  # exact frame index
            button_MLQ.tStart = t  # local t and not account for scr refresh
            button_MLQ.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(button_MLQ, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'button_MLQ.started')
            # update status
            button_MLQ.status = STARTED
            button_MLQ.setAutoDraw(True)
        
        # if button_MLQ is active this frame...
        if button_MLQ.status == STARTED:
            # update params
            pass
        # *mouse_MLQ* updates
        
        # if mouse_MLQ is starting this frame...
        if mouse_MLQ.status == NOT_STARTED and slider_MLQ.rating:
            # keep track of start time/frame for later
            mouse_MLQ.frameNStart = frameN  # exact frame index
            mouse_MLQ.tStart = t  # local t and not account for scr refresh
            mouse_MLQ.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_MLQ, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_MLQ.started', t)
            # update status
            mouse_MLQ.status = STARTED
            mouse_MLQ.mouseClock.reset()
            prevButtonState = mouse_MLQ.getPressed()  # if button is down already this ISN'T a new click
        if mouse_MLQ.status == STARTED:  # only update if started and not finished!
            buttons = mouse_MLQ.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = core.getFromNames(button_MLQ, namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(mouse_MLQ):
                            gotValidClick = True
                            mouse_MLQ.clicked_name.append(obj.name)
                    x, y = mouse_MLQ.getPos()
                    mouse_MLQ.x.append(x)
                    mouse_MLQ.y.append(y)
                    buttons = mouse_MLQ.getPressed()
                    mouse_MLQ.leftButton.append(buttons[0])
                    mouse_MLQ.midButton.append(buttons[1])
                    mouse_MLQ.rightButton.append(buttons[2])
                    mouse_MLQ.time.append(mouse_MLQ.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in MLQPComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "MLQP" ---
    for thisComponent in MLQPComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_MLQmean
    MLQP_ans.append(slider_MLQ.rating)
    trialsMIL.addData('slider_MLQ.response', slider_MLQ.getRating())
    trialsMIL.addData('slider_MLQ.rt', slider_MLQ.getRT())
    # store data for trialsMIL (TrialHandler)
    trialsMIL.addData('mouse_MLQ.x', mouse_MLQ.x)
    trialsMIL.addData('mouse_MLQ.y', mouse_MLQ.y)
    trialsMIL.addData('mouse_MLQ.leftButton', mouse_MLQ.leftButton)
    trialsMIL.addData('mouse_MLQ.midButton', mouse_MLQ.midButton)
    trialsMIL.addData('mouse_MLQ.rightButton', mouse_MLQ.rightButton)
    trialsMIL.addData('mouse_MLQ.time', mouse_MLQ.time)
    trialsMIL.addData('mouse_MLQ.clicked_name', mouse_MLQ.clicked_name)
    # the Routine "MLQP" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trialsMIL'


# --- Prepare to start Routine "PostestEmotion_valence" ---
continueRoutine = True
# update component parameters for each repeat
slider_postestvalence.reset()
# setup some python lists for storing info about the mouse_postestvalence
mouse_postestvalence.x = []
mouse_postestvalence.y = []
mouse_postestvalence.leftButton = []
mouse_postestvalence.midButton = []
mouse_postestvalence.rightButton = []
mouse_postestvalence.time = []
mouse_postestvalence.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
PostestEmotion_valenceComponents = [text_postest_valenceInstruction, text_post0valence, image_postest_valence, slider_postestvalence, button_postestvalence, mouse_postestvalence]
for thisComponent in PostestEmotion_valenceComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "PostestEmotion_valence" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_postest_valenceInstruction* updates
    
    # if text_postest_valenceInstruction is starting this frame...
    if text_postest_valenceInstruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_postest_valenceInstruction.frameNStart = frameN  # exact frame index
        text_postest_valenceInstruction.tStart = t  # local t and not account for scr refresh
        text_postest_valenceInstruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_postest_valenceInstruction, 'tStartRefresh')  # time at next scr refresh
        # update status
        text_postest_valenceInstruction.status = STARTED
        text_postest_valenceInstruction.setAutoDraw(True)
    
    # if text_postest_valenceInstruction is active this frame...
    if text_postest_valenceInstruction.status == STARTED:
        # update params
        pass
    
    # *text_post0valence* updates
    
    # if text_post0valence is starting this frame...
    if text_post0valence.status == NOT_STARTED and slider_postestvalence.getRating() == 0:
        # keep track of start time/frame for later
        text_post0valence.frameNStart = frameN  # exact frame index
        text_post0valence.tStart = t  # local t and not account for scr refresh
        text_post0valence.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_post0valence, 'tStartRefresh')  # time at next scr refresh
        # update status
        text_post0valence.status = STARTED
        text_post0valence.setAutoDraw(True)
    
    # if text_post0valence is active this frame...
    if text_post0valence.status == STARTED:
        # update params
        pass
    
    # *image_postest_valence* updates
    
    # if image_postest_valence is starting this frame...
    if image_postest_valence.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_postest_valence.frameNStart = frameN  # exact frame index
        image_postest_valence.tStart = t  # local t and not account for scr refresh
        image_postest_valence.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_postest_valence, 'tStartRefresh')  # time at next scr refresh
        # update status
        image_postest_valence.status = STARTED
        image_postest_valence.setAutoDraw(True)
    
    # if image_postest_valence is active this frame...
    if image_postest_valence.status == STARTED:
        # update params
        pass
    
    # *slider_postestvalence* updates
    
    # if slider_postestvalence is starting this frame...
    if slider_postestvalence.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slider_postestvalence.frameNStart = frameN  # exact frame index
        slider_postestvalence.tStart = t  # local t and not account for scr refresh
        slider_postestvalence.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_postestvalence, 'tStartRefresh')  # time at next scr refresh
        # update status
        slider_postestvalence.status = STARTED
        slider_postestvalence.setAutoDraw(True)
    
    # if slider_postestvalence is active this frame...
    if slider_postestvalence.status == STARTED:
        # update params
        pass
    
    # *button_postestvalence* updates
    
    # if button_postestvalence is starting this frame...
    if button_postestvalence.status == NOT_STARTED and slider_postestvalence.rating:
        # keep track of start time/frame for later
        button_postestvalence.frameNStart = frameN  # exact frame index
        button_postestvalence.tStart = t  # local t and not account for scr refresh
        button_postestvalence.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_postestvalence, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'button_postestvalence.started')
        # update status
        button_postestvalence.status = STARTED
        button_postestvalence.setAutoDraw(True)
    
    # if button_postestvalence is active this frame...
    if button_postestvalence.status == STARTED:
        # update params
        pass
    # *mouse_postestvalence* updates
    
    # if mouse_postestvalence is starting this frame...
    if mouse_postestvalence.status == NOT_STARTED and slider_postestvalence.rating:
        # keep track of start time/frame for later
        mouse_postestvalence.frameNStart = frameN  # exact frame index
        mouse_postestvalence.tStart = t  # local t and not account for scr refresh
        mouse_postestvalence.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_postestvalence, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_postestvalence.started', t)
        # update status
        mouse_postestvalence.status = STARTED
        mouse_postestvalence.mouseClock.reset()
        prevButtonState = mouse_postestvalence.getPressed()  # if button is down already this ISN'T a new click
    if mouse_postestvalence.status == STARTED:  # only update if started and not finished!
        buttons = mouse_postestvalence.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                clickableList = core.getFromNames(button_postestvalence, namespace=locals())
                for obj in clickableList:
                    # is this object clicked on?
                    if obj.contains(mouse_postestvalence):
                        gotValidClick = True
                        mouse_postestvalence.clicked_name.append(obj.name)
                x, y = mouse_postestvalence.getPos()
                mouse_postestvalence.x.append(x)
                mouse_postestvalence.y.append(y)
                buttons = mouse_postestvalence.getPressed()
                mouse_postestvalence.leftButton.append(buttons[0])
                mouse_postestvalence.midButton.append(buttons[1])
                mouse_postestvalence.rightButton.append(buttons[2])
                mouse_postestvalence.time.append(mouse_postestvalence.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # end routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PostestEmotion_valenceComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "PostestEmotion_valence" ---
for thisComponent in PostestEmotion_valenceComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('slider_postestvalence.response', slider_postestvalence.getRating())
thisExp.addData('slider_postestvalence.rt', slider_postestvalence.getRT())
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_postestvalence.x', mouse_postestvalence.x)
thisExp.addData('mouse_postestvalence.y', mouse_postestvalence.y)
thisExp.addData('mouse_postestvalence.leftButton', mouse_postestvalence.leftButton)
thisExp.addData('mouse_postestvalence.midButton', mouse_postestvalence.midButton)
thisExp.addData('mouse_postestvalence.rightButton', mouse_postestvalence.rightButton)
thisExp.addData('mouse_postestvalence.time', mouse_postestvalence.time)
thisExp.addData('mouse_postestvalence.clicked_name', mouse_postestvalence.clicked_name)
thisExp.nextEntry()
# the Routine "PostestEmotion_valence" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "PostestEmotion_arousal" ---
continueRoutine = True
# update component parameters for each repeat
slider_postestarousal.reset()
# setup some python lists for storing info about the mouse_postestarousal
mouse_postestarousal.x = []
mouse_postestarousal.y = []
mouse_postestarousal.leftButton = []
mouse_postestarousal.midButton = []
mouse_postestarousal.rightButton = []
mouse_postestarousal.time = []
mouse_postestarousal.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
PostestEmotion_arousalComponents = [text_postest_arousalInstruction, image_postest_arousal, slider_postestarousal, button_postestarousal, mouse_postestarousal]
for thisComponent in PostestEmotion_arousalComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "PostestEmotion_arousal" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_postest_arousalInstruction* updates
    
    # if text_postest_arousalInstruction is starting this frame...
    if text_postest_arousalInstruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_postest_arousalInstruction.frameNStart = frameN  # exact frame index
        text_postest_arousalInstruction.tStart = t  # local t and not account for scr refresh
        text_postest_arousalInstruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_postest_arousalInstruction, 'tStartRefresh')  # time at next scr refresh
        # update status
        text_postest_arousalInstruction.status = STARTED
        text_postest_arousalInstruction.setAutoDraw(True)
    
    # if text_postest_arousalInstruction is active this frame...
    if text_postest_arousalInstruction.status == STARTED:
        # update params
        pass
    
    # *image_postest_arousal* updates
    
    # if image_postest_arousal is starting this frame...
    if image_postest_arousal.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_postest_arousal.frameNStart = frameN  # exact frame index
        image_postest_arousal.tStart = t  # local t and not account for scr refresh
        image_postest_arousal.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_postest_arousal, 'tStartRefresh')  # time at next scr refresh
        # update status
        image_postest_arousal.status = STARTED
        image_postest_arousal.setAutoDraw(True)
    
    # if image_postest_arousal is active this frame...
    if image_postest_arousal.status == STARTED:
        # update params
        pass
    
    # *slider_postestarousal* updates
    
    # if slider_postestarousal is starting this frame...
    if slider_postestarousal.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slider_postestarousal.frameNStart = frameN  # exact frame index
        slider_postestarousal.tStart = t  # local t and not account for scr refresh
        slider_postestarousal.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_postestarousal, 'tStartRefresh')  # time at next scr refresh
        # update status
        slider_postestarousal.status = STARTED
        slider_postestarousal.setAutoDraw(True)
    
    # if slider_postestarousal is active this frame...
    if slider_postestarousal.status == STARTED:
        # update params
        pass
    
    # *button_postestarousal* updates
    
    # if button_postestarousal is starting this frame...
    if button_postestarousal.status == NOT_STARTED and slider_postestarousal.rating:
        # keep track of start time/frame for later
        button_postestarousal.frameNStart = frameN  # exact frame index
        button_postestarousal.tStart = t  # local t and not account for scr refresh
        button_postestarousal.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_postestarousal, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'button_postestarousal.started')
        # update status
        button_postestarousal.status = STARTED
        button_postestarousal.setAutoDraw(True)
    
    # if button_postestarousal is active this frame...
    if button_postestarousal.status == STARTED:
        # update params
        pass
    # *mouse_postestarousal* updates
    
    # if mouse_postestarousal is starting this frame...
    if mouse_postestarousal.status == NOT_STARTED and slider_postestarousal.rating:
        # keep track of start time/frame for later
        mouse_postestarousal.frameNStart = frameN  # exact frame index
        mouse_postestarousal.tStart = t  # local t and not account for scr refresh
        mouse_postestarousal.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_postestarousal, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_postestarousal.started', t)
        # update status
        mouse_postestarousal.status = STARTED
        mouse_postestarousal.mouseClock.reset()
        prevButtonState = mouse_postestarousal.getPressed()  # if button is down already this ISN'T a new click
    if mouse_postestarousal.status == STARTED:  # only update if started and not finished!
        buttons = mouse_postestarousal.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                clickableList = core.getFromNames(button_postestarousal, namespace=locals())
                for obj in clickableList:
                    # is this object clicked on?
                    if obj.contains(mouse_postestarousal):
                        gotValidClick = True
                        mouse_postestarousal.clicked_name.append(obj.name)
                x, y = mouse_postestarousal.getPos()
                mouse_postestarousal.x.append(x)
                mouse_postestarousal.y.append(y)
                buttons = mouse_postestarousal.getPressed()
                mouse_postestarousal.leftButton.append(buttons[0])
                mouse_postestarousal.midButton.append(buttons[1])
                mouse_postestarousal.rightButton.append(buttons[2])
                mouse_postestarousal.time.append(mouse_postestarousal.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # end routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PostestEmotion_arousalComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "PostestEmotion_arousal" ---
for thisComponent in PostestEmotion_arousalComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('slider_postestarousal.response', slider_postestarousal.getRating())
thisExp.addData('slider_postestarousal.rt', slider_postestarousal.getRT())
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_postestarousal.x', mouse_postestarousal.x)
thisExp.addData('mouse_postestarousal.y', mouse_postestarousal.y)
thisExp.addData('mouse_postestarousal.leftButton', mouse_postestarousal.leftButton)
thisExp.addData('mouse_postestarousal.midButton', mouse_postestarousal.midButton)
thisExp.addData('mouse_postestarousal.rightButton', mouse_postestarousal.rightButton)
thisExp.addData('mouse_postestarousal.time', mouse_postestarousal.time)
thisExp.addData('mouse_postestarousal.clicked_name', mouse_postestarousal.clicked_name)
thisExp.nextEntry()
# the Routine "PostestEmotion_arousal" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
repeatCheck = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('resources/loop/repeat_check.xlsx'),
    seed=None, name='repeatCheck')
thisExp.addLoop(repeatCheck)  # add the loop to the experiment
thisRepeatCheck = repeatCheck.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRepeatCheck.rgb)
if thisRepeatCheck != None:
    for paramName in thisRepeatCheck:
        exec('{} = thisRepeatCheck[paramName]'.format(paramName))

for thisRepeatCheck in repeatCheck:
    currentLoop = repeatCheck
    # abbreviate parameter names if possible (e.g. rgb = thisRepeatCheck.rgb)
    if thisRepeatCheck != None:
        for paramName in thisRepeatCheck:
            exec('{} = thisRepeatCheck[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "movie_check" ---
    continueRoutine = True
    # update component parameters for each repeat
    MovieRepeatCheck.setText(check_items)
    slider_check.reset()
    button_check.setImage('resources/images/nextpage_button.png')
    # setup some python lists for storing info about the mouse_check
    mouse_check.x = []
    mouse_check.y = []
    mouse_check.leftButton = []
    mouse_check.midButton = []
    mouse_check.rightButton = []
    mouse_check.time = []
    mouse_check.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    movie_checkComponents = [MovieRepeatCheck, slider_check, button_check, mouse_check]
    for thisComponent in movie_checkComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "movie_check" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *MovieRepeatCheck* updates
        
        # if MovieRepeatCheck is starting this frame...
        if MovieRepeatCheck.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            MovieRepeatCheck.frameNStart = frameN  # exact frame index
            MovieRepeatCheck.tStart = t  # local t and not account for scr refresh
            MovieRepeatCheck.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(MovieRepeatCheck, 'tStartRefresh')  # time at next scr refresh
            # update status
            MovieRepeatCheck.status = STARTED
            MovieRepeatCheck.setAutoDraw(True)
        
        # if MovieRepeatCheck is active this frame...
        if MovieRepeatCheck.status == STARTED:
            # update params
            pass
        
        # *slider_check* updates
        
        # if slider_check is starting this frame...
        if slider_check.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_check.frameNStart = frameN  # exact frame index
            slider_check.tStart = t  # local t and not account for scr refresh
            slider_check.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_check, 'tStartRefresh')  # time at next scr refresh
            # update status
            slider_check.status = STARTED
            slider_check.setAutoDraw(True)
        
        # if slider_check is active this frame...
        if slider_check.status == STARTED:
            # update params
            pass
        
        # *button_check* updates
        
        # if button_check is starting this frame...
        if button_check.status == NOT_STARTED and slider_check.rating:
            # keep track of start time/frame for later
            button_check.frameNStart = frameN  # exact frame index
            button_check.tStart = t  # local t and not account for scr refresh
            button_check.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(button_check, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'button_check.started')
            # update status
            button_check.status = STARTED
            button_check.setAutoDraw(True)
        
        # if button_check is active this frame...
        if button_check.status == STARTED:
            # update params
            pass
        # *mouse_check* updates
        
        # if mouse_check is starting this frame...
        if mouse_check.status == NOT_STARTED and slider_check.rating:
            # keep track of start time/frame for later
            mouse_check.frameNStart = frameN  # exact frame index
            mouse_check.tStart = t  # local t and not account for scr refresh
            mouse_check.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_check, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_check.started', t)
            # update status
            mouse_check.status = STARTED
            mouse_check.mouseClock.reset()
            prevButtonState = mouse_check.getPressed()  # if button is down already this ISN'T a new click
        if mouse_check.status == STARTED:  # only update if started and not finished!
            buttons = mouse_check.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = core.getFromNames(button_check, namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(mouse_check):
                            gotValidClick = True
                            mouse_check.clicked_name.append(obj.name)
                    x, y = mouse_check.getPos()
                    mouse_check.x.append(x)
                    mouse_check.y.append(y)
                    buttons = mouse_check.getPressed()
                    mouse_check.leftButton.append(buttons[0])
                    mouse_check.midButton.append(buttons[1])
                    mouse_check.rightButton.append(buttons[2])
                    mouse_check.time.append(mouse_check.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in movie_checkComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "movie_check" ---
    for thisComponent in movie_checkComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from repeat_check
    check_repeat.append(slider_check.rating)
    repeatCheck.addData('slider_check.response', slider_check.getRating())
    repeatCheck.addData('slider_check.rt', slider_check.getRT())
    # store data for repeatCheck (TrialHandler)
    repeatCheck.addData('mouse_check.x', mouse_check.x)
    repeatCheck.addData('mouse_check.y', mouse_check.y)
    repeatCheck.addData('mouse_check.leftButton', mouse_check.leftButton)
    repeatCheck.addData('mouse_check.midButton', mouse_check.midButton)
    repeatCheck.addData('mouse_check.rightButton', mouse_check.rightButton)
    repeatCheck.addData('mouse_check.time', mouse_check.time)
    repeatCheck.addData('mouse_check.clicked_name', mouse_check.clicked_name)
    # the Routine "movie_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'repeatCheck'


# --- Prepare to start Routine "EndScreen" ---
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_goodbye
mouse_goodbye.x = []
mouse_goodbye.y = []
mouse_goodbye.leftButton = []
mouse_goodbye.midButton = []
mouse_goodbye.rightButton = []
mouse_goodbye.time = []
mouse_goodbye.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
EndScreenComponents = [text_goodbye, image_endmsg, mouse_goodbye]
for thisComponent in EndScreenComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "EndScreen" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_goodbye* updates
    
    # if text_goodbye is starting this frame...
    if text_goodbye.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_goodbye.frameNStart = frameN  # exact frame index
        text_goodbye.tStart = t  # local t and not account for scr refresh
        text_goodbye.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_goodbye, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_goodbye.started')
        # update status
        text_goodbye.status = STARTED
        text_goodbye.setAutoDraw(True)
    
    # if text_goodbye is active this frame...
    if text_goodbye.status == STARTED:
        # update params
        pass
    
    # *image_endmsg* updates
    
    # if image_endmsg is starting this frame...
    if image_endmsg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_endmsg.frameNStart = frameN  # exact frame index
        image_endmsg.tStart = t  # local t and not account for scr refresh
        image_endmsg.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_endmsg, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'image_endmsg.started')
        # update status
        image_endmsg.status = STARTED
        image_endmsg.setAutoDraw(True)
    
    # if image_endmsg is active this frame...
    if image_endmsg.status == STARTED:
        # update params
        pass
    # *mouse_goodbye* updates
    
    # if mouse_goodbye is starting this frame...
    if mouse_goodbye.status == NOT_STARTED and t >= 1-frameTolerance:
        # keep track of start time/frame for later
        mouse_goodbye.frameNStart = frameN  # exact frame index
        mouse_goodbye.tStart = t  # local t and not account for scr refresh
        mouse_goodbye.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_goodbye, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_goodbye.started', t)
        # update status
        mouse_goodbye.status = STARTED
        mouse_goodbye.mouseClock.reset()
        prevButtonState = mouse_goodbye.getPressed()  # if button is down already this ISN'T a new click
    if mouse_goodbye.status == STARTED:  # only update if started and not finished!
        buttons = mouse_goodbye.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                clickableList = core.getFromNames(image_endmsg, namespace=locals())
                for obj in clickableList:
                    # is this object clicked on?
                    if obj.contains(mouse_goodbye):
                        gotValidClick = True
                        mouse_goodbye.clicked_name.append(obj.name)
                x, y = mouse_goodbye.getPos()
                mouse_goodbye.x.append(x)
                mouse_goodbye.y.append(y)
                buttons = mouse_goodbye.getPressed()
                mouse_goodbye.leftButton.append(buttons[0])
                mouse_goodbye.midButton.append(buttons[1])
                mouse_goodbye.rightButton.append(buttons[2])
                mouse_goodbye.time.append(mouse_goodbye.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # end routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndScreenComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "EndScreen" ---
for thisComponent in EndScreenComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_goodbye.x', mouse_goodbye.x)
thisExp.addData('mouse_goodbye.y', mouse_goodbye.y)
thisExp.addData('mouse_goodbye.leftButton', mouse_goodbye.leftButton)
thisExp.addData('mouse_goodbye.midButton', mouse_goodbye.midButton)
thisExp.addData('mouse_goodbye.rightButton', mouse_goodbye.rightButton)
thisExp.addData('mouse_goodbye.time', mouse_goodbye.time)
thisExp.addData('mouse_goodbye.clicked_name', mouse_goodbye.clicked_name)
thisExp.nextEntry()
# the Routine "EndScreen" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()
# Run 'End Experiment' code from code_caculateGobalChoiceRate
#Gobal Choice percentage(100%)
thisExp.addData('GobalChoice_percentage', sum(global_choice)/len(global_choice)*100)
#gobal rt mean and standard deviation
thisExp.addData('Gobal_rt_mean', average(gobal_rt))
#local rt mean
thisExp.addData('local_rt_mean', average(local_rt))
# Run 'End Experiment' code from code_MLQmean
#MLQ_item 5 reverse score
MLQP_ans[4] = 8-MLQP_ans[4]
#add data
thisExp.addData('MLQ_1', MLQP_ans[0])
thisExp.addData('MLQ_2', MLQP_ans[1])
thisExp.addData('MLQ_3', MLQP_ans[2])
thisExp.addData('MLQ_4', MLQP_ans[3])
thisExp.addData('MLQ_5r', MLQP_ans[4])
thisExp.addData('MLQans_mean', average(MLQP_ans))
# Run 'End Experiment' code from repeat_check
thisExp.addData('DoExp2', check_repeat[0])
thisExp.addData('SeeSameVideo', check_repeat[1])

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
