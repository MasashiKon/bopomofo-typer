import Phaser from 'phaser'
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

let test;

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
  keyPressedSize: 0.3
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
      gameState.sentences = this.makeSentences();
      gameState.currentSentence = null
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

    if(gameState.currentSentence === null && gameState.onTyping === false) {
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
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {

        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.B.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄖ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.C.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄏ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.D.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄎ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.E.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄍ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.F.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄑ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.G.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄕ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.H.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄘ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.I.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄛ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.J.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄨ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.K.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄜ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.L.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄠ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.M.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄩ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.N.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄙ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.O.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄟ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.P.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄣ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.Q.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄆ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.R.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄐ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.S.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄋ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.T.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄔ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.U.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "一") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.V.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄒ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.W.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄊ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.X.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄌ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.Y.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄗ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.Z.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄈ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.zero.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄢ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.one.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄅ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.two.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄉ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.three.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ˇ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.four.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ˋ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.five.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄓ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.six.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ˊ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.seven.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "˙") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.eight.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄚ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.nine.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄞ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }


      if(this.keys.MINUS.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄦ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.COMMA.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄝ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.PERIOD.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄡ") {
          this.correctProcess();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.mistakeProcess();
        }
      }

      if(this.keys.FORWARD_SLASH.isDown) {
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄥ") {
          this.correctProcess();
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
    for(let i = 0; i < 10; i++) {
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

  correctProcess() {
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
    this.clucScore(false);
    if(gameState.mistakeCountForHelp >= 10) {
      gameState.waitTime = 0;
    }
  }

  helper(key, alpha) {
    this[`keyimg_${key}`].setAlpha(alpha / 100);
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
    this.load.image('a', 'img/a.png');
    this.load.image('ai', 'img/ai.png'); 
    this.load.image('an', 'img/an.png');
    this.load.image('ang', 'img/ang.png');
    this.load.image('ao', 'img/ao.png');
    this.load.image('b', 'img/b.png');
    this.load.image('c', 'img/c.png');
    this.load.image('ch', 'img/ch.png');
    this.load.image('d', 'img/d.png');
    this.load.image('e', 'img/e.png');
    this.load.image('e2', 'img/e2.png');
    this.load.image('ei', 'img/ei.png');
    this.load.image('en', 'img/en.png');
    this.load.image('eng', 'img/eng.png');
    this.load.image('er', 'img/er.png');
    this.load.image('f', 'img/f.png');
    this.load.image('g', 'img/g.png');
    this.load.image('h', 'img/h.png');
    this.load.image('i', 'img/i.png');
    this.load.image('j', 'img/j.png');
    this.load.image('k', 'img/k.png');
    this.load.image('l', 'img/l.png');
    this.load.image('m', 'img/m.png');
    this.load.image('n', 'img/n.png');
    this.load.image('o', 'img/o.png');
    this.load.image('ou', 'img/ou.png');
    this.load.image('p', 'img/p.png');
    this.load.image('q', 'img/q.png');
    this.load.image('r', 'img/r.png');
    this.load.image('s', 'img/s.png');
    this.load.image('sh', 'img/sh.png');
    this.load.image('t', 'img/t.png');
    this.load.image('u', 'img/u.png');
    this.load.image('u2', 'img/u2.png');
    this.load.image('x', 'img/x.png');
    this.load.image('z', 'img/z.png');
    this.load.image('zh', 'img/zh.png');
    this.load.image('2', 'img/2.png');
    this.load.image('3', 'img/3.png');
    this.load.image('4', 'img/4.png');
    this.load.image('light', 'img/light.png');
    this.load.image('keyboard', 'img/keyboard.png');
  }
  create() {
    this.title = this.add.text(this.game.config.width/2, this.game.config.height/2, "Bopomofo Typer", {font: 50}).setOrigin(0.5, 0.5);;
    this.menu = this.add.container(this.game.config.width/2, this.game.config.height/2 + 100);
    const navText = this.add.text(0, 0, "Press Enter to start.").setOrigin(0.5, 0.5);
    this.menu.add([navText]);
    this.input.keyboard.on("keydown-ENTER", () => {
      this.scene.stop('MenuScene');
			this.scene.start('GameScene');
    })
  }
}

class ScoreScene extends Phaser.Scene {
  constructor() {
    super({key: "ScoreScene"});
  }

  create() {
    gameState.onTyping = false;
    gameState.scoreText = this.add.text(this.game.config.width/2, this.game.config.height/2, gameState.score, {font: 20});
    this.input.keyboard.on("keydown-ENTER", () => {
      this.scene.stop('ScoreScene');
			this.scene.start('GameScene');
    })
  }
}

const config = {
  type: Phaser.CANVAS,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
  },
  scene: [MenuScene, GameScene, ScoreScene]
}

const game = new Phaser.Game(config);