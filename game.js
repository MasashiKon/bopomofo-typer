import Phaser from 'phaser'

// let keys;

let location = [0, 0];

let test;

class Word {
  constructor(kanji, bopomofo) {
      this.kanji = kanji;
      this.bopomofo = bopomofo;
    }
}

const noun = [new Word("這", ["ㄓ", "ㄜ", "ˋ"]), new Word("那", ["ㄋ", "ㄚ", "ˋ"]), new Word("我", ["ㄨ", "ㄛ", "ˇ"]), new Word("你", ["ㄋ", "ㄧ", "ˇ"]), new Word("妳", ["ㄋ", "ㄧ", "ˇ"]), new Word("他", ["ㄊ", "ㄚ"]), new Word("她", ["ㄊ", "ㄚ"]), new Word("男", ["ㄋ", "ㄢ", "ˊ"]), new Word("女", ["ㄋ", "ㄩ", "ˇ"])];
const object = [new Word("這", ["ㄓ", "ㄜ", "ˋ"]), new Word("那", ["ㄋ", "ㄚ", "ˋ"]), new Word("我", ["ㄨ", "ㄛ", "ˇ"]), new Word("你", ["ㄋ", "ㄧ", "ˇ"]), new Word("妳", ["ㄋ", "ㄧ", "ˇ"]), new Word("他", ["ㄊ", "ㄚ"]), new Word("她", ["ㄊ", "ㄚ"]), new Word("男", ["ㄋ", "ㄢ", "ˊ"]), new Word("女", ["ㄋ", "ㄩ", "ˇ"])];

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
  timeLimit: 3000,
  onTyping: false,
  noun,
  timeLimitText: null,
  timeLimitBar: null,
  score: 0,
  scoreText: null,
}

class GameScene extends Phaser.Scene {
  constructor(){
    super({ key: 'GameScene' });
    this.key;
  }

  create() {
    gameState.scoreText = this.add.text(10, 10, `Score: ${gameState.score}`);
    gameState.sentenceContainer = this.add.container(this.game.config.width/2, this.game.config.height/2);
    gameState.sentences = [[noun[0], object[1]], [noun[5], object[5]]];
    this.keys = this.input.keyboard.addKeys('A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,zero,one,two,three,four,five,six,seven,eight,nine,MINUS,COMMA,PERIOD,FORWARD_SLASH');
  }

  update() {
    if(gameState.onTyping) {
      gameState.timeLimit -= 1;

      if(gameState.timeLimitBar !== null) gameState.timeLimitBar.destroy();
      gameState.timeLimitBar = this.add.rectangle(this.game.config.width/10 * 6, this.game.config.height/10, gameState.timeLimit/10, 10, 0x00ff00).setOrigin(0, 0.5);

      if(gameState.timeLimit <= 0) {
        gameState.onTyping = false;
        this.setNewWord();
        gameState.timeLimit = 3000;
      }
    } 

    if(gameState.currentSentence === null) {
      this.setNewSentence();
    }

    if(gameState.currentWord === null) {
      this.setNewWord();
    }

    if(gameState.cooltime > 0) {
      gameState.cooltime++
    }

    if(gameState.cooltime >= 1) {
      gameState.cooltime = 0;
      this.enableAllKeys();
    }

    if(gameState.cooltime === 0) {
      if(this.keys.A.isDown) {
        this.keys.A.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄇ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {

        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.B.isDown) {
        this.keys.B.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄖ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.C.isDown) {
        this.keys.C.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄏ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.D.isDown) {
        this.keys.D.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄎ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.E.isDown) {
        this.keys.E.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄍ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.F.isDown) {
        this.keys.F.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄑ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.G.isDown) {
        this.keys.G.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄕ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.H.isDown) {
        this.keys.H.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄘ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.I.isDown) {
        this.keys.I.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄛ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.J.isDown) {
        this.keys.J.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄨ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.K.isDown) {
        this.keys.K.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄜ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.L.isDown) {
        this.keys.L.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄠ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.M.isDown) {
        this.keys.M.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄩ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.N.isDown) {
        this.keys.N.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄙ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.O.isDown) {
        this.keys.O.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄟ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.P.isDown) {
        this.keys.P.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄣ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.Q.isDown) {
        this.keys.Q.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄆ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.R.isDown) {
        this.keys.R.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄐ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.S.isDown) {
        this.keys.S.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄋ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.T.isDown) {
        this.keys.T.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄔ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.U.isDown) {
        this.keys.U.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄧ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.V.isDown) {
        this.keys.V.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄒ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.W.isDown) {
        this.keys.W.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄊ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.X.isDown) {
        this.keys.X.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄌ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.Y.isDown) {
        this.keys.Y.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "Ｙ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.Z.isDown) {
        this.keys.Z.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄈ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.zero.isDown) {
        this.keys.zero.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄢ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.one.isDown) {
        this.keys.one.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄅ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.two.isDown) {
        this.keys.two.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄉ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.three.isDown) {
        this.keys.three.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ˇ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.four.isDown) {
        this.keys.four.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ˋ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.five.isDown) {
        this.keys.five.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄓ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.six.isDown) {
        this.keys.six.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ˊ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.seven.isDown) {
        this.keys.seven.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "˙") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.eight.isDown) {
        this.keys.eight.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄚ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.nine.isDown) {
        this.keys.nine.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄞ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }


      if(this.keys.MINUS.isDown) {
        this.keys.MINUS.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄦ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.COMMA.isDown) {
        this.keys.COMMA.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄝ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.PERIOD.isDown) {
        this.keys.PERIOD.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄡ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }

      if(this.keys.FORWARD_SLASH.isDown) {
        this.keys.FORWARD_SLASH.isDown = false;
        this.disableAllKeys();
        gameState.cooltime++;
        if(gameState.currentAnswer === "ㄥ") {
          this.clucScore(true);
          this.changeColor();
          this.evalNext();
        } else if(gameState.currentAnswer === null) {
          
        } else {
          this.clucScore(false);
        }
      }
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
    gameState.onTyping = true;
  }

  setNewSentence() {
    while(gameState.sentenceContainer.list.length > 0) {
      gameState.sentenceContainer.list[0].destroy();
    }
    gameState.kanji = [];
    gameState.bopomofo = [];
    gameState.currentSentence = gameState.sentences.shift();
    for(const [i, word] of gameState.currentSentence.entries()) {
      gameState.kanji.push(this.add.text(0 + i * 50, 0, word.kanji));
      for(const [j, bopomofo] of word.bopomofo.entries()) {
        gameState.bopomofo.push(this.add.text(0 + (j * 20) + (i * 50), 20, bopomofo));
      }
    }
    gameState.sentenceContainer.add([...gameState.kanji]);
    gameState.sentenceContainer.add([...gameState.bopomofo]);

    gameState.currentBopomofoIndex = 0;
    gameState.currentKanjiIndex = 0;
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
    if(gameState.currentWord.bopomofo.length > 0) {
      gameState.currentAnswer = gameState.currentWord.bopomofo.shift();
    } else if (gameState.currentSentence.length > 0) {
      this.setNewWord();
      gameState.timeLimit += 200;
    } else if(gameState.sentences.length > 0) {
      this.setNewSentence();
      this.setNewWord();
    } else {
      gameState.onTyping = false;
      if(gameState.currentWord) {
        gameState.sentenceContainer.destroy();
      }
      gameState.timeLimitBar.destroy();
      gameState.scoreText.destroy();
      gameState.scoreText = this.add.text(this.game.config.width/2, this.game.config.height/2, gameState.score, {font: 20});
      gameState.currentAnswer = null;

    }
  }

  clucScore(correct) {
    if(correct) {
      gameState.score += 10;
    } else {
      gameState.score -= 10;
    }
    if(gameState.scoreText) gameState.scoreText.destroy();
    gameState.scoreText = this.add.text(10, 10, `Score: ${gameState.score}`);
  }
}

class MenuScene extends Phaser.Scene {
  constructor() {
    super({key: "MenuScene"});
    this.title;
    this.menu;
    this.enter;
  }
  create() {
    this.title = this.add.text(this.game.config.width/2, this.game.config.height/2, "Bopomofo Typer", {font: 50});
    this.menu = this.add.container(this.game.config.width/2, this.game.config.height/2 + 100);
    const navText = this.add.text(0, 0, "Press Enter to start.");
    this.menu.add([navText]);
    this.input.keyboard.on("keydown-ENTER", () => {
      this.scene.stop('MenuScene');
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
  scene: [MenuScene, GameScene]
}

const game = new Phaser.Game(config);