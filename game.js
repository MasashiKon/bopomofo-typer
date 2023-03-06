import Phaser from 'phaser';

import A from './img/a.png';
import Ai from "./img/ai.png";
import An from "./img/an.png"
import Ang from "./img/ang.png";
import Ao from "./img/ao.png";
import B from "./img/b.png";
import C from "./img/c.png";
import Ch from "./img/ch.png";
import D from "./img/d.png";
import E from "./img/e.png";
import E2 from "./img/e2.png";
import Ei from "./img/ei.png";
import En from "./img/en.png";
import Eng from "./img/eng.png";
import Er from "./img/er.png";
import F from "./img/f.png";
import G from "./img/g.png";
import H from "./img/h.png";
import I from "./img/i.png";
import J from "./img/j.png";
import K from "./img/k.png";
import L from "./img/l.png";
import M from "./img/m.png";
import N from "./img/n.png";
import O from "./img/o.png";
import Ou from "./img/ou.png";
import P from "./img/p.png";
import Q from "./img/q.png";
import R from "./img/r.png";
import S from "./img/s.png";
import Sh from "./img/sh.png";
import T from "./img/t.png";
import U from "./img/u.png";
import U2 from "./img/u2.png";
import X from "./img/x.png";
import Z from "./img/z.png";
import Zh from "./img/zh.png";
import Two from "./img/2.png";
import Three from "./img/3.png";
import Four from "./img/4.png";
import Light from "./img/light.png";
import Keyboard from "./img/keyboard.png";

// reference
// "ㄇ", "m"
// "ㄖ", "r"
// "ㄏ", "h"
// "ㄎ", "k"
// "ㄍ", "g"
// "ㄑ", "q"
// "ㄕ", "sh"
// "ㄘ", "c"
// "ㄛ", "o"
// "ㄨ", "u"
// "ㄜ", "e"
// "ㄠ", "ao"
// "ㄩ", "u2"
// "ㄙ", "s"
// "ㄟ", "ei"
// "ㄣ", "en"
// "ㄆ", "p"
// "ㄐ", "j"
// "ㄋ", "n"
// "ㄔ", "ch"
// "一", "i"
// "ㄒ", "x"
// "ㄊ", "t"
// "ㄌ", "l"
// "ㄗ", "z"
// "ㄈ", "f"
// "ㄢ", "an"
// "ㄅ", "b"
// "ㄉ", "d"
// "ˇ", "3"
// "ˋ", "4"
// "ㄓ", "zh"
// "ˊ", "2"
// "˙", "light"
// "ㄚ", "a"
// "ㄞ", "ai"
// "ㄦ", "er"
// "ㄝ", "e2"
// "ㄡ", "ou"
// "ㄥ", "eng"
// "ㄤ", "ang"

class Word {
  constructor(kanji, bopomofo) {
      this.kanji = kanji;
      this.bopomofo = bopomofo;
    }
}

const noun = [[{kanji: "這", bopomofo: ["ㄓ", "ㄜ", "ˋ"]}], [{kanji: "那", bopomofo: ["ㄋ", "ㄚ", "ˋ"]}], [{kanji: "我", bopomofo: ["ㄨ", "ㄛ", "ˇ"]}], [{kanji: "你", bopomofo: ["ㄋ", "一", "ˇ"]}], [{kanji: "妳", bopomofo: ["ㄋ", "一", "ˇ"]}], [{kanji: "他", bopomofo: ["ㄊ", "ㄚ"]}], [{kanji: "她", bopomofo: ["ㄊ", "ㄚ"]}], [{kanji: "男", bopomofo: ["ㄋ", "ㄢ", "ˊ"]}], [{kanji: "女", bopomofo: ["ㄋ", "ㄩ", "ˇ"]}]];
const object = [[{kanji: "這", bopomofo: ["ㄓ", "ㄜ", "ˋ"]}], [{kanji: "那", bopomofo: ["ㄋ", "ㄚ", "ˋ"]}], [{kanji: "我", bopomofo: ["ㄨ", "ㄛ", "ˇ"]}], [{kanji: "你", bopomofo: ["ㄋ", "一", "ˇ"]}], [{kanji: "妳", bopomofo: ["ㄋ", "一", "ˇ"]}], [{kanji: "他", bopomofo: ["ㄊ", "ㄚ"]}], [{kanji: "她", bopomofo: ["ㄊ", "ㄚ"]}], [{kanji: "男", bopomofo: ["ㄋ", "ㄢ", "ˊ"]}], [{kanji: "女", bopomofo: ["ㄋ", "ㄩ", "ˇ"]}]];
const verb = [[{kanji: "愛", bopomofo: ["ㄞ", "ˋ"]}], [{kanji: "懂", bopomofo: ["ㄉ", "ㄨ", "ㄥ", "ˇ"]}], [{kanji: "笑", bopomofo: ["ㄒ", "一", "ㄠ", "ˋ"]}], [{kanji: "知", bopomofo: ["ㄓ"]}, {kanji: "道", bopomofo: ["ㄉ", "ㄠ", "ˋ"]}], [{kanji: "認", bopomofo: ["ㄖ", "ㄣ", "ˋ"]}, {kanji: "識", bopomofo: ["ㄕ", "ˋ"]}], [{kanji: "覺", bopomofo: ["ㄐ", "ㄩ", "ㄝ", "ˊ"]}, {kanji: "得", bopomofo: ["ㄉ", "ㄜ", "˙"]}]];

const gameState = {
  cooltime: 0,
  currentWord: null,
  currentSentence: null,
  currentAnswer: null,
  currentBopomofoIndex: 0,
  currentKanjiIndex: 0,
  sentences: [],
  sentenceContainer: null,
  kanji: [],
  bopomofo: [],
  timeLimit: 0,
  timeLimitMax: 3000,
  waitTime: 1000,
  helperDuration: 100,
  mistakeCountForHelp: 0,
  onTyping: false,
  noun,
  timeLimitText: null,
  timeLimitBar: null,
  score: 0,
  scoreText: null,
  keySize: 0.2,
  keyPressedSize: 0.3,
  difficulty: "normal",
  timeReady: 60 * 3,
  wrongTypes: {
    m: 0,
    r: 0,
    h: 0,
    k: 0,
    g: 0,
    q: 0,
    sh: 0,
    c: 0,
    o: 0,
    u: 0,
    e: 0,
    ao: 0,
    u2: 0,
    s: 0,
    ei: 0,
    en: 0,
    p: 0,
    j: 0,
    n: 0,
    ch: 0,
    i: 0,
    x: 0,
    t: 0,
    l: 0,
    z: 0,
    f: 0,
    an: 0,
    b: 0,
    d: 0,
    3: 0,
    4: 0,
    zh: 0,
    2: 0,
    light: 0,
    a: 0,
    ai: 0,
    er: 0,
    e2: 0,
    ou: 0,
    eng: 0,
    ang: 0
  },
  worstThreeContainer: null,
  worstThree: [{key: null, numOfMisstypes: 0}, {key: null, numOfMisstypes: 0}, {key: null, numOfMisstypes: 0}]
}

class GameScene extends Phaser.Scene {
  constructor(){
    super({ key: 'GameScene' });
  }

  create() {
    gameState.scoreText = this.add.text(10, 10, `Score: ${gameState.score}`);
    gameState.sentenceContainer = this.add.container(this.game.config.width/2, this.game.config.height/2);
    gameState.sentences = this.makeSentences();
    this.keys = this.input.keyboard.addKeys('A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,zero,one,two,three,four,five,six,seven,eight,nine,MINUS,COMMA,PERIOD,FORWARD_SLASH,SEMICOLON');
    this.countDownText;

    this.keyboard = this.add.image(this.game.config.width/2, 400, 'keyboard').setOrigin(1/2, 0);
    this.keyimg_a = this.add.image(451, 422, 'a').setScale(gameState.keySize);
    this.keyimg_ai = this.add.image(490, 422, 'ai').setScale(gameState.keySize);
    this.keyimg_an = this.add.image(530, 425, 'an').setScale(gameState.keySize);
    this.keyimg_ang = this.add.image(558, 500, 'ang').setScale(gameState.keySize);
    this.keyimg_ao = this.add.image(517, 497, 'ao').setScale(gameState.keySize);
    this.keyimg_b = this.add.image(171, 422, 'b').setScale(gameState.keySize);
    this.keyimg_c = this.add.image(400, 500, 'c').setScale(gameState.keySize);
    this.keyimg_ch = this.add.image(347, 462, 'ch').setScale(gameState.keySize);
    this.keyimg_d = this.add.image(212, 422, 'd').setScale(gameState.keySize);
    this.keyimg_e = this.add.image(480, 500, 'e').setScale(gameState.keySize);
    this.keyimg_e2 = this.add.image(500, 540, 'e2').setScale(gameState.keySize);
    this.keyimg_ei = this.add.image(507, 464, 'ei').setScale(gameState.keySize);
    this.keyimg_en = this.add.image(546, 462, 'en').setScale(gameState.keySize);
    this.keyimg_eng = this.add.image(580, 539, 'eng').setScale(gameState.keySize);
    this.keyimg_er = this.add.image(570, 422, 'er').setScale(gameState.keySize);
    this.keyimg_f = this.add.image(218, 539, 'f').setScale(gameState.keySize);
    this.keyimg_g = this.add.image(268, 462, 'g').setScale(gameState.keySize);
    this.keyimg_h = this.add.image(300, 539, 'h').setScale(gameState.keySize);
    this.keyimg_i = this.add.image(427, 460, 'i').setScale(gameState.keySize);
    this.keyimg_j = this.add.image(308, 463, 'j').setScale(gameState.keySize);
    this.keyimg_k = this.add.image(277, 500, 'k').setScale(gameState.keySize);
    this.keyimg_l = this.add.image(257, 539, 'l').setScale(gameState.keySize);
    this.keyimg_m = this.add.image(198, 502, 'm').setScale(gameState.keySize);
    this.keyimg_n = this.add.image(240, 500, 'n').setScale(gameState.keySize);
    this.keyimg_o = this.add.image(468, 462, 'o').setScale(gameState.keySize);
    this.keyimg_ou = this.add.image(539, 538, 'ou').setScale(gameState.keySize);
    this.keyimg_p = this.add.image(187, 461, 'p').setScale(gameState.keySize);
    this.keyimg_q = this.add.image(318, 501, 'q').setScale(gameState.keySize);
    this.keyimg_r = this.add.image(379, 540, 'r').setScale(gameState.keySize);
    this.keyimg_s = this.add.image(420, 538, 's').setScale(gameState.keySize);
    this.keyimg_sh = this.add.image(359, 500, 'sh').setScale(gameState.keySize);
    this.keyimg_t = this.add.image(228, 461, 't').setScale(gameState.keySize);
    this.keyimg_u = this.add.image(438, 500, 'u').setScale(gameState.keySize);
    this.keyimg_u2 = this.add.image(460, 540, 'u2').setScale(gameState.keySize);
    this.keyimg_x = this.add.image(340, 540, 'x').setScale(gameState.keySize);
    this.keyimg_z = this.add.image(387, 462, 'z').setScale(gameState.keySize);
    this.keyimg_zh = this.add.image(331, 423, 'zh').setScale(gameState.keySize);
    this.keyimg_2 = this.add.image(370, 423, '2').setScale(gameState.keySize);
    this.keyimg_3 = this.add.image(252, 423, '3').setScale(gameState.keySize);
    this.keyimg_4 = this.add.image(290, 423, '4').setScale(gameState.keySize);
    this.keyimg_light = this.add.image(410, 422, 'light').setScale(gameState.keySize);
  }

  update() {
    if(!gameState.onTyping) {
      if(gameState.timeReady === 180) {
        gameState.sentences = this.makeSentences();
        gameState.currentSentence = null;

        this.countDownText = this.add.text(this.game.config.width/2, this.game.config.height/2 - this.game.config.height/2 / 3, "3", {fontSize: 50});
      } else if(gameState.timeReady <= 120 && gameState.timeReady > 60) {
        this.countDownText.setText("2");
      } else if(gameState.timeReady <= 60) {
        this.countDownText.setText("1");
      }

      gameState.timeReady--;
    }

    if(gameState.onTyping) {
      gameState.timeLimit -= 1;
      gameState.waitTime -= 1;

      if(gameState.timeLimitBar !== null) gameState.timeLimitBar.destroy();
      gameState.timeLimitBar = this.add.rectangle(this.game.config.width/10 * 6, this.game.config.height/10, gameState.timeLimit/10, 10, 0x00ff00).setOrigin(0, 0.5);
      
      if(gameState.timeLimit >= 800) {
        gameState.timeLimitBar.setFillStyle(0x00ff00);
      } else if(gameState.timeLimit >= 300) {
        gameState.timeLimitBar.setFillStyle(0xffff00);
      } else {
        gameState.timeLimitBar.setFillStyle(0xff0000);
      }

      if(gameState.timeLimit <= 0) {
        gameState.timeLimit = gameState.timeLimitMax;
        gameState.currentSentence = null;
        gameState.currentWord = null;
        gameState.currentAnswer = null;
        this.evalNext();
      }

      if(gameState.waitTime <= 0) {
        gameState.helperDuration = (gameState.helperDuration + 1) % 100; 

        switch(gameState.currentAnswer) {
          case "ㄇ":
            this.helper("m", gameState.helperDuration);
            break;  
          case "ㄖ":
            this.helper("r", gameState.helperDuration);
            break;  
          case "ㄏ":
            this.helper("h", gameState.helperDuration);
            break;  
          case "ㄎ":
            this.helper("k", gameState.helperDuration);
            break;
          case "ㄍ":
            this.helper("g", gameState.helperDuration);
            break;
          case "ㄑ":
            this.helper("q", gameState.helperDuration);
            break;
          case "ㄕ":
            this.helper("sh", gameState.helperDuration);
            break;
          case "ㄘ":
            this.helper("c", gameState.helperDuration);
            break;
          case "ㄛ":
            this.helper("o", gameState.helperDuration);
            break;  
          case "ㄨ":
            this.helper("u", gameState.helperDuration);
            break;
          case "ㄜ":
            this.helper("e", gameState.helperDuration);
            break;
          case "ㄠ":
            this.helper("ao", gameState.helperDuration);
            break;  
          case "ㄩ":
            this.helper("u2", gameState.helperDuration);
            break;
          case "ㄙ":
            this.helper("s", gameState.helperDuration);
            break;  
          case "ㄟ":
            this.helper("ei", gameState.helperDuration);
            break;  
          case "ㄣ":
            this.helper("en", gameState.helperDuration);
            break;  
          case "ㄆ":
            this.helper("p", gameState.helperDuration);
            break;  
          case "ㄐ":
            this.helper("j", gameState.helperDuration);
            break;
          case "ㄋ":
            this.helper("n", gameState.helperDuration);
            break;
          case "ㄔ":
            this.helper("ch", gameState.helperDuration);
            break;
          case "一":
            this.helper("i", gameState.helperDuration);
            break;
          case "ㄒ":
            this.helper("x", gameState.helperDuration);
            break;
          case "ㄊ":
            this.helper("t", gameState.helperDuration);
            break;
          case "ㄌ":
            this.helper("l", gameState.helperDuration);
            break;
          case "ㄗ":
            this.helper("z", gameState.helperDuration);
            break;
          case "ㄈ":
            this.helper("f", gameState.helperDuration);
            break;
          case "ㄢ":
            this.helper("an", gameState.helperDuration);
            break;
          case "ㄅ":
            this.helper("b", gameState.helperDuration);
            break;
          case "ㄉ":
            this.helper("d", gameState.helperDuration);
            break;
          case "ˇ":
            this.helper("3", gameState.helperDuration);
            break;
          case "ˋ":
            this.helper("4", gameState.helperDuration);
            break;
          case "ㄓ":
            this.helper("zh", gameState.helperDuration);
            break;
          case "ˊ":
            this.helper("2", gameState.helperDuration);
            break;
          case "˙":
            this.helper("light", gameState.helperDuration);
            break;
          case "ㄚ":
            this.helper("a", gameState.helperDuration);
            break;
          case "ㄞ":
            this.helper("ai", gameState.helperDuration);
            break;
          case "ㄦ":
            this.helper("er", gameState.helperDuration);
            break;
          case "ㄝ":
            this.helper("e2", gameState.helperDuration);
            break;
          case "ㄡ":
            this.helper("ou", gameState.helperDuration);
            break;
          case "ㄥ":
            this.helper("eng", gameState.helperDuration);
            break;
        }
      }

    } 

    if(gameState.currentSentence === null && !gameState.onTyping && gameState.timeReady <= 0) {
      this.countDownText.destroy();
      this.setNewSentence();
      this.setNewWord();
    }

    if(gameState.cooltime > 0) {
      gameState.cooltime++
    }

    if(gameState.cooltime >= 10) {
      gameState.cooltime = 0;
      this.enableAllKeys();
    }

    if(gameState.cooltime === 0) {
      if(this.keys.A.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄇ") {
          this.correctProcess("m");
        } else if(gameState.currentAnswer === null) {

        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.B.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄖ") {
          this.correctProcess("r");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.C.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄏ") {
          this.correctProcess("h");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.D.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄎ") {
          this.correctProcess("k");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.E.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄍ") {
          this.correctProcess("g");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.F.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄑ") {
          this.correctProcess("q");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.G.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄕ") {
          this.correctProcess("sh");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.H.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄘ") {
          this.correctProcess("c");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.I.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄛ") {
          this.correctProcess("o");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.J.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄨ") {
          this.correctProcess("u");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.K.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄜ") {
          this.correctProcess("e");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.L.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄠ") {
          this.correctProcess("ao");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.M.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄩ") {
          this.correctProcess("u2");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.N.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄙ") {
          this.correctProcess("s");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.O.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄟ") {
          this.correctProcess("ei");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.P.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄣ") {
          this.correctProcess("en");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.Q.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄆ") {
          this.correctProcess("p");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.R.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄐ") {
          this.correctProcess("j");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.S.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄋ") {
          this.correctProcess("n");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.T.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄔ") {
          this.correctProcess("ch");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.U.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "一") {
          this.correctProcess("i");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.V.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄒ") {
          this.correctProcess("x");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.W.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄊ") {
          this.correctProcess("t");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.X.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄌ") {
          this.correctProcess("l");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.Y.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄗ") {
          this.correctProcess("z");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.Z.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄈ") {
          this.correctProcess("f");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.zero.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄢ") {
          this.correctProcess("an");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.one.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄅ") {
          this.correctProcess("b");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.two.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄉ") {
          this.correctProcess("d");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.three.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ˇ") {
          this.correctProcess("3");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.four.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ˋ") {
          this.correctProcess("4");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.five.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄓ") {
          this.correctProcess("zh");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.six.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ˊ") {
          this.correctProcess("2");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.seven.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "˙") {
          this.correctProcess("light");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.eight.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄚ") {
          this.correctProcess("a");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.nine.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄞ") {
          this.correctProcess("ai");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }


      if(this.keys.MINUS.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄦ") {
          this.correctProcess("er");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.COMMA.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄝ") {
          this.correctProcess("e2");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.PERIOD.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄡ") {
          this.correctProcess("ou");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.FORWARD_SLASH.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄥ") {
          this.correctProcess("eng");
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.SEMICOLON.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄤ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }
    }

    if(this.keys.A.isDown) {
      this.keyimg_m.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_m.setScale(gameState.keySize);
    }

    if(this.keys.B.isDown) {
      this.keyimg_r.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_r.setScale(gameState.keySize);
    }

    if(this.keys.C.isDown) {
      this.keyimg_h.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_h.setScale(gameState.keySize);
    }

    if(this.keys.D.isDown) {
      this.keyimg_k.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_k.setScale(gameState.keySize);
    }

    if(this.keys.E.isDown) {
      this.keyimg_g.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_g.setScale(gameState.keySize);
    }

    if(this.keys.F.isDown) {
      this.keyimg_q.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_q.setScale(gameState.keySize);
    }

    if(this.keys.G.isDown) {
      this.keyimg_sh.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_sh.setScale(gameState.keySize);
    }

    if(this.keys.H.isDown) {
      this.keyimg_c.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_c.setScale(gameState.keySize);
    }

    if(this.keys.I.isDown) {
      this.keyimg_o.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_o.setScale(gameState.keySize);
    }

    if(this.keys.J.isDown) {
      this.keyimg_u.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_u.setScale(gameState.keySize);
    }
    
    if(this.keys.K.isDown) {
      this.keyimg_e.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_e.setScale(gameState.keySize);
    }

    if(this.keys.L.isDown) {
      this.keyimg_ao.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_ao.setScale(gameState.keySize);
    }

    if(this.keys.M.isDown) {
      this.keyimg_u2.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_u2.setScale(gameState.keySize);
    }

    if(this.keys.N.isDown) {
      this.keyimg_s.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_s.setScale(gameState.keySize);
    }

    if(this.keys.O.isDown) {
      this.keyimg_ei.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_ei.setScale(gameState.keySize);
    }

    if(this.keys.P.isDown) {
      this.keyimg_en.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_en.setScale(gameState.keySize);
    }

    if(this.keys.Q.isDown) {
      this.keyimg_p.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_p.setScale(gameState.keySize);
    }

    if(this.keys.R.isDown) {
      this.keyimg_j.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_j.setScale(gameState.keySize);
    }

    if(this.keys.S.isDown) {
      this.keyimg_n.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_n.setScale(gameState.keySize);
    }
    
    if(this.keys.T.isDown) {
      this.keyimg_ch.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_ch.setScale(gameState.keySize);
    }

    if(this.keys.U.isDown) {
      this.keyimg_i.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_i.setScale(gameState.keySize);
    }

    if(this.keys.V.isDown) {
      this.keyimg_x.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_x.setScale(gameState.keySize);
    }

    if(this.keys.W.isDown) {
      this.keyimg_t.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_t.setScale(gameState.keySize);
    }

    if(this.keys.X.isDown) {
      this.keyimg_l.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_l.setScale(gameState.keySize);
    }

    if(this.keys.Y.isDown) {
      this.keyimg_z.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_z.setScale(gameState.keySize);
    }

    if(this.keys.Z.isDown) {
      this.keyimg_f.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_f.setScale(gameState.keySize);
    }

    if(this.keys.one.isDown) {
      this.keyimg_b.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_b.setScale(gameState.keySize);
    }

    if(this.keys.two.isDown) {
      this.keyimg_d.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_d.setScale(gameState.keySize);
    }

    if(this.keys.three.isDown) {
      this.keyimg_3.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_3.setScale(gameState.keySize);
    }

    if(this.keys.four.isDown) {
      this.keyimg_4.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_4.setScale(gameState.keySize);
    }

    if(this.keys.five.isDown) {
      this.keyimg_zh.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_zh.setScale(gameState.keySize);
    }

    if(this.keys.six.isDown) {
      this.keyimg_2.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_2.setScale(gameState.keySize);
    }

    if(this.keys.seven.isDown) {
      this.keyimg_light.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_light.setScale(gameState.keySize);
    }

    if(this.keys.eight.isDown) {
      this.keyimg_a.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_a.setScale(gameState.keySize);
    }

    if(this.keys.nine.isDown) {
      this.keyimg_ai.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_ai.setScale(gameState.keySize);
    }

    if(this.keys.zero.isDown) {
      this.keyimg_an.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_an.setScale(gameState.keySize);
    }

    if(this.keys.MINUS.isDown) {
      this.keyimg_er.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_er.setScale(gameState.keySize);
    }

    if(this.keys.COMMA.isDown) {
      this.keyimg_e2.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_e2.setScale(gameState.keySize);
    }

    if(this.keys.PERIOD.isDown) {
      this.keyimg_ou.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_ou.setScale(gameState.keySize);
    }

    if(this.keys.FORWARD_SLASH.isDown) {
      this.keyimg_eng.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_eng.setScale(gameState.keySize);
    }

    if(this.keys.SEMICOLON.isDown) {
      this.keyimg_ang.setScale(gameState.keyPressedSize);
    } else {
      this.keyimg_ang.setScale(gameState.keySize);
    }
  }

  disableAllKeys() {
    this.keys.A.enabled = false;
    this.keys.B.enabled = false;
    this.keys.C.enabled = false;
    this.keys.D.enabled = false;
    this.keys.E.enabled = false;
    this.keys.F.enabled = false;
    this.keys.G.enabled = false;
    this.keys.H.enabled = false;
    this.keys.I.enabled = false;
    this.keys.J.enabled = false;
    this.keys.K.enabled = false;
    this.keys.L.enabled = false;
    this.keys.M.enabled = false;
    this.keys.N.enabled = false;
    this.keys.O.enabled = false;
    this.keys.P.enabled = false;
    this.keys.Q.enabled = false;
    this.keys.L.enabled = false;
    this.keys.S.enabled = false;
    this.keys.T.enabled = false;
    this.keys.U.enabled = false;
    this.keys.V.enabled = false;
    this.keys.W.enabled = false;
    this.keys.X.enabled = false;
    this.keys.Y.enabled = false;
    this.keys.Z.enabled = false;
    this.keys.zero.enabled = false;
    this.keys.one.enabled = false;
    this.keys.two.enabled = false;
    this.keys.three.enabled = false;
    this.keys.four.enabled = false;
    this.keys.five.enabled = false;
    this.keys.six.enabled = false;
    this.keys.seven.enabled = false;
    this.keys.eight.enabled = false;
    this.keys.nine.enabled = false;
    this.keys.MINUS.enabled = false;
    this.keys.COMMA.enabled = false;
    this.keys.PERIOD.enabled = false;
    this.keys.FORWARD_SLASH.enabled = false;
  }

  enableAllKeys() {
    this.keys.A.enabled = true;
    this.keys.B.enabled = true;
    this.keys.C.enabled = true;
    this.keys.D.enabled = true;
    this.keys.E.enabled = true;
    this.keys.F.enabled = true;
    this.keys.G.enabled = true;
    this.keys.H.enabled = true;
    this.keys.I.enabled = true;
    this.keys.J.enabled = true;
    this.keys.K.enabled = true;
    this.keys.L.enabled = true;
    this.keys.M.enabled = true;
    this.keys.N.enabled = true;
    this.keys.O.enabled = true;
    this.keys.P.enabled = true;
    this.keys.Q.enabled = true;
    this.keys.L.enabled = true;
    this.keys.S.enabled = true;
    this.keys.T.enabled = true;
    this.keys.U.enabled = true;
    this.keys.V.enabled = true;
    this.keys.W.enabled = true;
    this.keys.X.enabled = true;
    this.keys.Y.enabled = true;
    this.keys.Z.enabled = true;
    this.keys.zero.enabled = true;
    this.keys.one.enabled = true;
    this.keys.two.enabled = true;
    this.keys.three.enabled = true;
    this.keys.four.enabled = true;
    this.keys.five.enabled = true;
    this.keys.six.enabled = true;
    this.keys.seven.enabled = true;
    this.keys.eight.enabled = true;
    this.keys.nine.enabled = true;
    this.keys.MINUS.enabled = true;
    this.keys.COMMA.enabled = true;
    this.keys.PERIOD.enabled = true;
    this.keys.FORWARD_SLASH.enabled = true;
  }

  setNewWord() {
    gameState.currentWord = gameState.currentSentence.shift();
    gameState.currentAnswer =  gameState.currentWord.bopomofo.shift();
  }

  setNewSentence() {
    while(gameState.sentenceContainer.list.length > 0) {
      gameState.sentenceContainer.list[0].destroy();
    }
    gameState.kanji = [];
    gameState.bopomofo = [];
    gameState.currentSentence = gameState.sentences.shift();
    let width = 0;
    let height = 0;
    for(const [i, word] of gameState.currentSentence.entries()) {
      gameState.kanji.push(this.add.text(0 + i * 120, 0, word.kanji, {fontSize: 80}).setOrigin(0, 0.5));
      for(const [j, bopomofo] of word.bopomofo.entries()) {
        gameState.bopomofo.push(this.add.text(0 + (120 / word.bopomofo.length * j) + (i * 120), 60, bopomofo, {fontSize: 30}).setOrigin(0, 0.5));
        if(j === word.bopomofo.length - 1) {
          width = (120 / word.bopomofo.length * j) + (i * 120);
          height = 60;
        }
      }
    }

    gameState.sentenceContainer.add([...gameState.kanji]);
    gameState.sentenceContainer.add([...gameState.bopomofo]);

    gameState.sentenceContainer.setSize(width, height);
    gameState.sentenceContainer.setX(this.game.config.width/2 - width/2);
    gameState.sentenceContainer.setY(this.game.config.height/2 - height/2 * 2.5);

    gameState.currentBopomofoIndex = 0;
    gameState.currentKanjiIndex = 0;

    gameState.onTyping = true;
    gameState.timeLimit = gameState.timeLimitMax;
  }

  changeColor() {
    gameState.bopomofo[gameState.currentBopomofoIndex].setColor("#ff00ff");
    gameState.currentBopomofoIndex++;
    if(gameState.currentWord.bopomofo.length <= 0) {
      gameState.kanji[gameState.currentKanjiIndex].setColor("#ff00ff");
      gameState.currentKanjiIndex++;
    }
  }

  evalNext() {
    if(gameState.currentWord !== null && gameState.currentWord.bopomofo.length > 0) {
      gameState.currentAnswer = gameState.currentWord.bopomofo.shift();
    } else if (gameState.currentSentence !== null && gameState.currentSentence.length > 0) {
      gameState.timeLimit += 200;
      this.setNewWord();
    } else if(gameState.sentences.length > 0) {
      this.setNewSentence();
      this.setNewWord();
    } else {
      this.scene.stop('GameScene');
      this.scene.start('ScoreScene');
    }
  }

  clucScore(correct) {
    if(correct) {
      gameState.score += 10;
    } else {
      gameState.score -= 1;
      if(gameState.score < 0) gameState.score = 0;
    }
    if(gameState.scoreText) gameState.scoreText.destroy();
    gameState.scoreText = this.add.text(10, 10, `Score: ${gameState.score}`);
  }

  makeSentences() {
    const words = [];
    let numOfSentences;
    switch(gameState.mode) {
      case "normal":
        numOfSentences = 10;
        break;
      case "debug":
        numOfSentences = 2;
        break;
      default:
        numOfSentences = 10;
    }
    for(let i = 0; i < numOfSentences; i++) {
      const syntaxType = Math.floor(Math.random() * 2);
      if(syntaxType === 0) {
        const nounIndex = Math.floor(Math.random() * noun.length);
        const verbIndex = Math.floor(Math.random() * verb.length);
        const objectIndex = Math.floor(Math.random() * object.length);
        const pickedNoun = noun[nounIndex];
        const pickedVerb = verb[verbIndex];
        const pickedObject = object[objectIndex];
        const word = [];
        for(let char of pickedNoun) {
          word.push(new Word(char.kanji, [...char.bopomofo]));
        }
        for(let char of pickedVerb) {
          word.push(new Word(char.kanji, [...char.bopomofo]));
        }
        for(let char of pickedObject) {
          word.push(new Word(char.kanji, [...char.bopomofo]));
        }
        words.push(word);
      } else {
        const nounIndex = Math.floor(Math.random() * noun.length);
        const verbIndex = Math.floor(Math.random() * verb.length);
        const objectIndex = Math.floor(Math.random() * object.length);
        const pickedNoun = noun[nounIndex];
        const pickedVerb = verb[verbIndex];
        const pickedObject = object[objectIndex];
        const word = [];
        for(let char of pickedNoun) {
          word.push(new Word(char.kanji, [...char.bopomofo]));
        }
        for(let char of pickedVerb) {
          word.push(new Word(char.kanji, [...char.bopomofo]));
        }
        for(let char of pickedObject) {
          word.push(new Word(char.kanji, [...char.bopomofo]));
        }
        words.push(word);
      }
    }
    return words;
  }

  correctProcess(typedKey) {
    gameState.waitTime = 1000;
    gameState.helperDuration = 100;
    gameState.mistakeCountForHelp = 0;
    this.clucScore(true);
    this.changeColor();
    this.evalNext();

    this.keyimg_a.setAlpha(1);
    this.keyimg_ai.setAlpha(1);
    this.keyimg_an.setAlpha(1);
    this.keyimg_ang.setAlpha(1);
    this.keyimg_ao.setAlpha(1);
    this.keyimg_b.setAlpha(1);
    this.keyimg_c.setAlpha(1);
    this.keyimg_ch.setAlpha(1);
    this.keyimg_d.setAlpha(1);
    this.keyimg_e.setAlpha(1);
    this.keyimg_e2.setAlpha(1);
    this.keyimg_ei.setAlpha(1);
    this.keyimg_en.setAlpha(1);
    this.keyimg_eng.setAlpha(1);
    this.keyimg_er.setAlpha(1);
    this.keyimg_f.setAlpha(1);
    this.keyimg_g.setAlpha(1);
    this.keyimg_h.setAlpha(1);
    this.keyimg_i.setAlpha(1);
    this.keyimg_j.setAlpha(1);
    this.keyimg_k.setAlpha(1);
    this.keyimg_l.setAlpha(1);
    this.keyimg_m.setAlpha(1);
    this.keyimg_n.setAlpha(1);
    this.keyimg_o.setAlpha(1);
    this.keyimg_ou.setAlpha(1);
    this.keyimg_p.setAlpha(1);
    this.keyimg_q.setAlpha(1);
    this.keyimg_r.setAlpha(1);
    this.keyimg_s.setAlpha(1);
    this.keyimg_sh.setAlpha(1);
    this.keyimg_t.setAlpha(1);
    this.keyimg_u.setAlpha(1);
    this.keyimg_u2.setAlpha(1);
    this.keyimg_x.setAlpha(1);
    this.keyimg_z.setAlpha(1);
    this.keyimg_zh.setAlpha(1);
    this.keyimg_2.setAlpha(1);
    this.keyimg_3.setAlpha(1);
    this.keyimg_4.setAlpha(1);
    this.keyimg_light.setAlpha(1);
  }

  mistakeProcess() {
    gameState.mistakeCountForHelp += 1;
    gameState.wrongTypes[this.bopomofoToAlphabet(gameState.currentAnswer)] ++;
    this.clucScore(false);
    if(gameState.mistakeCountForHelp >= 10) {
      gameState.waitTime = 0;
    }
  }

  helper(key, alpha) {
    this[`keyimg_${key}`].setAlpha(alpha / 100);
  }

  bopomofoToAlphabet(bopomofo) {
    switch(bopomofo) {
      case "ㄇ": 
        return "m";
      case "ㄖ": 
        return "r";
      case "ㄏ": 
        return "h";
      case "ㄎ": 
        return "k";
      case "ㄍ": 
        return "g";
      case "ㄑ": 
        return "q";
      case "ㄕ": 
        return "sh";
      case "ㄘ": 
        return "c";
      case "ㄛ": 
        return "o";
      case "ㄨ": 
        return "u";
      case "ㄜ": 
        return "e";
      case "ㄠ": 
        return "ao";
      case "ㄩ": 
        return "u2";
      case "ㄙ": 
        return "s";
      case "ㄟ": 
        return "ei";
      case "ㄣ": 
        return "en";
      case "ㄆ": 
        return "p";
      case "ㄐ": 
        return "j";
      case "ㄋ": 
        return "n";
      case "ㄔ": 
        return "ch";
      case "一": 
        return "i";
      case "ㄒ": 
        return "x";
      case "ㄊ": 
        return "t";
      case "ㄌ": 
        return "l";
      case "ㄗ": 
        return "z";
      case "ㄈ": 
        return "f";
      case "ㄢ": 
        return "an";
      case "ㄅ": 
        return "b";
      case "ㄉ": 
        return "d";
      case "ˇ": 
        return "3";
      case "ˋ": 
        return "4";
      case "ㄓ": 
        return "zh";
      case "ˊ": 
        return "2";
      case "˙": 
        return "light";
      case "ㄚ": 
        return "a";
      case "ㄞ": 
        return "ai";
      case "ㄦ": 
        return "er";
      case "ㄝ": 
        return "e2";
      case "ㄡ": 
        return "ou";
      case "ㄥ": 
        return "eng";
      case "ㄤ": 
        return "ang";
      dafault: 
        return undefined;
    }
  }
}

class MenuScene extends Phaser.Scene {
  constructor() {
    super({key: "MenuScene"});
    this.title;
    this.menu;
    this.enter;
  }

  preload() {
    this.load.image('a', A);
    this.load.image('ai', Ai); 
    this.load.image('an', An);
    this.load.image('ang', Ang);
    this.load.image('ao', Ao);
    this.load.image('b', B);
    this.load.image('c', C);
    this.load.image('ch', Ch);
    this.load.image('d', D);
    this.load.image('e', E);
    this.load.image('e2', E2);
    this.load.image('ei', Ei);
    this.load.image('en', En);
    this.load.image('eng', Eng);
    this.load.image('er', Er);
    this.load.image('f', F);
    this.load.image('g', G);
    this.load.image('h', H);
    this.load.image('i', I);
    this.load.image('j', J);
    this.load.image('k', K);
    this.load.image('l', L);
    this.load.image('m', M);
    this.load.image('n', N);
    this.load.image('o', O);
    this.load.image('ou', Ou);
    this.load.image('p', P);
    this.load.image('q', Q);
    this.load.image('r', R);
    this.load.image('s', S);
    this.load.image('sh', Sh);
    this.load.image('t', T);
    this.load.image('u', U);
    this.load.image('u2', U2);
    this.load.image('x', X);
    this.load.image('z', Z);
    this.load.image('zh', Zh);
    this.load.image('2', Two);
    this.load.image('3', Three);
    this.load.image('4', Four);
    this.load.image('light', Light);
    this.load.image('keyboard', Keyboard);
  }

  create() {
    this.modes = ["normal", "debug"];
    this.index = 0;
    this.title = this.add.text(this.game.config.width/2, this.game.config.height/2, "Bopomofo Typer", {fontSize: 50}).setOrigin(0.5, 0.5);;
    this.menu = this.add.container(this.game.config.width/2, this.game.config.height/2 + 100);
    const navText1 = this.add.text(0, 0, "Normal", {fontSize: 30}).setOrigin(0.5, 0.5);
    const navText2 = this.add.text(0, 40, "Debug", {fontSize: 30}).setOrigin(0.5, 0.5);
    const cursorRect = this.add.rectangle(0, 0, 120, 30, 0xffffff, 0.3).setOrigin(0.5, 0.5);
    this.menu.add([navText1, navText2, cursorRect]);

    this.input.keyboard.on("keydown-ENTER", () => {
      this.scene.stop('MenuScene');
			this.scene.start('GameScene');
    });

    this.input.keyboard.on("keydown-UP", () => {
      this.index = this.index > 0 ? this.index - 1 : this.modes.length - 1;
      gameState.mode = this.modes[this.index];
      cursorRect.setY(this.index * 40);
    });

    this.input.keyboard.on("keydown-DOWN", () => {
      this.index = (this.index + 1) % this.modes.length;
      gameState.mode = this.modes[this.index];
      cursorRect.setY(this.index * 40);
    });
  }
}

class ScoreScene extends Phaser.Scene {
  constructor() {
    super({key: "ScoreScene"});
  }

  create() {
    gameState.onTyping = false;
    gameState.timeReady = 60 * 3;
    gameState.scoreText = this.add.text(this.game.config.width/2, this.game.config.height/2, gameState.score, {fontSize: 30}).setOrigin(0.5, 0.5);
    this.set = false;

    for(let key in gameState.wrongTypes) {
      if(gameState.wrongTypes[key] >= gameState.worstThree[2].numOfMisstypes) {
        if(gameState.wrongTypes[key] >= gameState.worstThree[1].numOfMisstypes) {
          if(gameState.wrongTypes[key] >= gameState.worstThree[0].numOfMisstypes) {
            gameState.worstThree[2] = gameState.worstThree[1];
            gameState.worstThree[1] = gameState.worstThree[0];
            gameState.worstThree[0] = {key, numOfMisstypes: gameState.wrongTypes[key]};
          } else {
            gameState.worstThree[2] = gameState.worstThree[1];
            gameState.worstThree[1] = {key, numOfMisstypes: gameState.wrongTypes[key]};
          }
        } else {
          gameState.worstThree[2] = {key, numOfMisstypes: gameState.wrongTypes[key]};
        }
      }
    }

    if(gameState.worstThreeContainer === null) {
      gameState.worstThreeContainer = this.add.container(100, 100);
    } else {
      gameState.worstThreeContainer.destroy();
      gameState.worstThreeContainer = this.add.container(100, 100);
    }

    gameState.worstThreeContainer.add(this.add.text(0, 0, "Your frequently mistyped keys:"));

    for(let i = 0; i < 3; i++) {
      gameState.worstThreeContainer.add(this.add.text(0 + 100 * i, 30, `${i + 1}. ${this.alphabetToBopomofo(gameState.worstThree[i].key)}: ${gameState.worstThree[i].numOfMisstypes}`));
    }

    this.options = ["replay", "title"];
    this.index = 0;
    this.option = this.options[this.index];
    this.menu = this.add.container(this.game.config.width/2, this.game.config.height/2 + 100);
    const navText1 = this.add.text(0, 0, "Another Game", {fontSize: 30}).setOrigin(0.5, 0.5);
    const navText2 = this.add.text(0, 40, "Back to Title", {fontSize: 30}).setOrigin(0.5, 0.5);
    const cursorRect = this.add.rectangle(0, 0, 250, 30, 0xffffff, 0.3).setOrigin(0.5, 0.5);

    this.menu.add([navText1, navText2, cursorRect]);

    this.input.keyboard.on("keydown-ENTER", () => {
      this.scene.stop('ScoreScene');
      switch(this.option) {
        case "replay":
          this.resetWorstKeys();
          gameState.score = 0;
          this.scene.start('GameScene');
          break;
        case "title":
          this.resetWorstKeys();
          gameState.score = 0;
          this.scene.start('MenuScene');
          break;
        default:
          this.resetWorstKeys();
          gameState.score = 0;
          this.scene.start('MenuScene');
      }
    })

    this.input.keyboard.on("keydown-UP", () => {
      this.index = this.index > 0 ? this.index - 1 : this.options.length - 1;
      this.option = this.options[this.index];
      cursorRect.setY(this.index * 40);
    });

    this.input.keyboard.on("keydown-DOWN", () => {
      this.index = (this.index + 1) % this.options.length;
      this.option = this.options[this.index];
      cursorRect.setY(this.index * 40);
    });

    // this.events.on('addedtoscene', () => {
    //   console.log("addedtoscene");
    // });

    // this.events.on('boot', () => {
    //   console.log("boot");
    // });

    // this.events.on('create', () => {
    //   console.log("create");
    // });

    // this.events.on('destroy', () => {
    //   console.log("destroy");
    // });   
    
    // this.events.on('pause', () => {
    //   console.log("pause");
    // });

    // this.events.on('postupdate', () => {
    //   console.log("postupdate");
    // });   
    
    // this.events.on('prerender', () => {
    //   console.log("prerender");
    // });

    // this.events.on('preupdate', () => {
    //   console.log("preupdate");
    // });   
    
    // this.events.on('ready', () => {
    //   console.log("ready");
    // });

    // this.events.on('removedfromscene', () => {
    //   console.log("removedfromscene");
    // });   
    
    // this.events.on('render', () => {
    //   console.log("render");
    // });

    // this.events.on('resume', () => {
    //   console.log("resume");
    // });

    // this.events.on('shutdown', () => {
    //   console.log("shutdown");
    // });

    // this.events.on('resume', () => {
    //   console.log("resumed");
    // });

    // this.events.on('sleep', () => {
    //   console.log("sleep");
    // });

    // this.events.on('start', () => {
    //   console.log("start");
    // });

    // this.events.on('transitioncomplete', () => {
    //   console.log("transitioncomplete");
    // });

    // this.events.on('transitioninit', () => {
    //   console.log("transitioninit");
    // });

    // this.events.on('transitionout', () => {
    //   console.log("transitionout");
    // });

    // this.events.on('transitionstart', () => {
    //   console.log("transitionstart");
    // });

    // this.events.on('transitionout', () => {
    //   console.log("transitionout");
    // });

    // this.events.on('transitionwake', () => {
    //   console.log("transitionwake");
    // });

    // this.events.on('update', () => {
    //   console.log("update");
    // });

    // this.events.on('wake', () => {
    //   console.log("wake");
    // });

  }

  resetWorstKeys() {
    for(let i = 0; i < 3; i++) {
      gameState.worstThree.pop();
    }
    for(let i = 0; i < 3; i++) {
      gameState.worstThree .push({key: null, numOfMisstypes: 0});
    }
  }

  alphabetToBopomofo(alphabet) {
    switch(alphabet) {
      case "m":
        return "ㄇ";
      case "r":
        return "ㄖ";
      case "h":
        return "ㄏ";
      case "k":
        return "ㄎ";
      case "g":
        return "ㄍ";
      case "q":
        return "ㄑ";
      case "sh":
        return "ㄕ";
      case "c":
        return "ㄘ";
      case "o":
        return "ㄛ";
      case "u":
        return "ㄨ";
      case "e":
      return "ㄜ"; 
      case "ao":
        return "ㄠ"; 
      case "u2":
        return "ㄩ"; 
      case "s":
        return "ㄙ"; 
      case "ei":
        return "ㄟ"; 
      case "en":
        return "ㄣ";
      case "p":
      return "ㄆ"; 
      case "j":
        return "ㄐ"; 
      case "n":
        return "ㄋ"; 
      case "ch":
        return "ㄔ"; 
      case "i":
      return "一";
      case "x":
        return "ㄒ";
      case "t":
        return "ㄊ"; 
      case "l":
        return "ㄌ";
      case "z":
      return "ㄗ"; 
      case "f":
        return "ㄈ";
      case "an":
        return "ㄢ";
      case "b":
        return "ㄅ"; 
      case "d":
        return "ㄉ";
      case "3":
        return "ˇ";
      case "4":
        return "ˋ";
      case "zh":
        return "ㄓ";
      case "2":
        return "ˊ"; 
      case "light":
        return "˙";
      case "a":
        return "ㄚ"; 
      case "ai":
        return "ㄞ";
      case "er":
        return "ㄦ";
      case "e2":
        return "ㄝ";
      case "ou":
        return "ㄡ";
      case "eng":
        return "ㄥ";
      case "ang":
        return "ㄤ"; 
      case dafault: 
        return undefined;
    }
  }
}

const config = {
  type: Phaser.CANVAS,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
    // parent: "game"
  },
  scene: [MenuScene, GameScene, ScoreScene]
}

export const typingGame = () => {new Phaser.Game(config)};