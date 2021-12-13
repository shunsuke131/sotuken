const chat = {
  1: {
    text: "こんにちは！ここではあなたに合ったお店を紹介できます。",
    options: [{
      text: "わかった",
      next: 2
    }]
  },
  2: {
    text: "まず最初にあなたの目的を教えてください",
    options: [{
        text: "がっつり食べたい！",
        next: 3
      },
      {
        text: "甘いものが食べたい！",
        next: 4
      },
      {
        text: "おしゃれな店に行きたい！",
        next: 5
      },
      {
        text: "家族連れにおすすめなお店に行きたい！",
        next: 6
      }
    ]
  },
  //がっつり食べたい
  3: {
    text: "何系統の料理が食べたいですか？",
    options: [{
        text: "中華",
        next: 7
      },
      {
        text: "洋食",
        next: 8
      },
      {
        text: "和食",
        next: 9
      }
    ]
  },
  //甘いものが食べたい
  4: {
    text: "何系統の料理が食べたいですか？",
    options: [{
        text: "菓子パン系",
        next: 10
      },
      {
        text: "パフェ",
        next: 11
      },
      {
        text: "ケーキ",
        next: 12
      }
    ]
  },
  //おしゃれなお店に行きたい
  5: {
    text: "何系統の料理が食べたいですか？",
    options: [{
        text: "洋食",
        next: 13
      },
      {
        text: "和食",
        next: 14
      }
    ]
  },
  //家族で食べたい
  6: {
    text: "何系統の料理が食べたいですか？",
    options: [{
        text: "中華",
        next: 15
      },
      {
        text: "洋食",
        next: 16
      },
      {
        text: "和食",
        next: 17
      }
    ]
  },



  //がっつり食べたい、中華
  7: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 18
      },
      {
        text: "大通り付近",
        next: 19
      },
      {
        text: "それ以外",
        next: 20
      }
    ]
  },

  //がっつり食べたい、洋食
  8: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 21
      },
      {
        text: "大通り付近",
        next: 22
      },
      {
        text: "それ以外",
        next: 23
      }
    ]
  },
  //がっつり食べたい、和食
  9: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 24
      },
      {
        text: "大通り付近",
        next: 25
      },
      {
        text: "それ以外",
        next: 26
      }
    ]
  },
  //甘いもの、菓子パン
  10: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 27
      },
      {
        text: "大通り付近",
        next: 28
      },
      {
        text: "それ以外",
        next: 29
      }

    ]
  },
  //甘いもの、果物
  11: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 30
      },
      {
        text: "大通り付近",
        next: 31
      },
      {
        text: "それ以外",
        next: 32
      }
    ]
  },
  //甘いもの、ケーキ
  12: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 33
      },
      {
        text: "大通り付近",
        next: 34
      },
      {
        text: "それ以外",
        next: 35
      }
    ]
  },
  //おしゃれ、洋食
  13: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 36
      },
      {
        text: "大通り付近",
        next: 37
      },
      {
        text: "それ以外",
        next: 38
      },
    ]
  },
  //おしゃれ、和食
  14: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 39
      },
      {
        text: "大通り付近",
        next: 40
      },
      {
        text: "それ以外",
        next: 41
      },
    ]
  },
  //家族連れ、中華
  15: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 42
      },
      {
        text: "大通り付近",
        next: 43
      },
      {
        text: "それ以外",
        next: 44
      }
    ]
  },

  //家族連れ、洋食
  16: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 45
      },
      {
        text: "大通り付近",
        next: 46
      },
      {
        text: "それ以外",
        next: 47
      },
    ]
  },
  //家族連れ、和食
  17: {
    text: "どの付近を希望ですか",
    options: [{
        text: "盛岡駅付近",
        next: 48
      },
      {
        text: "大通り付近",
        next: 49
      },
      {
        text: "それ以外",
        next: 50
      }
    ]
  },

  18: {
    text: "該当した内容がありませんでした。前のページに戻りますか？",
    options: [{
        text: "はい",
        next: 2
      }

    ]
  },

  19: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot19.html"
    }]
  },

  20: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot20.html"
    }]
  },

  21: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot21.html"
    }]
  },

  22: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot22.html"
    }]
  },

  23: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot23.html"
    }]
  },

  24: {
    text: "あなたにあったお店を紹介します",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot24.html"
    }]
  },

  25: {
    text: "該当した内容がありませんでした。前のページに戻りますか？",
    options: [{
      text: "はい",
      next: 2
    }]
  },

  26: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot26.html"
    }]
  },

  27: {
    text: "該当する内容がありませんでした。前のページに戻りますか？",
    options: [{
      text: "はい",
      next: 2
    }]
  },


  28: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot28.html"
    }]
  },

  29: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot29.html"
    }]
  },

  30: {
    text: "該当する内容がありませんでした。前のページに戻りますか？",
    options: [{
      text: "はい",
      next: 2
    }]
  },

  31: {
    text: "該当する内容がありませんでした。前のページに戻りますか？",
    options: [{
      text: "はい",
      next: 2
    }]
  },
  32: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot32.html"
    }]
  },
  33: {
    text: "該当する内容がありませんでした。前のページに戻りますか？",
    options: [{
      text: "はい",
      next: 2
    }]
  },
  34: {
    text: "該当する内容がありませんでした。前のページに戻りますか？",
    options: [{
      text: "はい",
      next: 2
    }]
  },
  35: {
    text: "該当する内容がありませんでした。前のページに戻りますか？",
    options: [{
      text: "はい",
      next: 2
    }]
  },

  36: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot36.html"
    }]
  },
  37: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot37.html"
    }]
  },
  38: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot38.html"
    }]
  },
  39: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot39.html"
    }]
  },
  40: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot40.html"
    }]
  },
  41: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot41.html"
    }]
  },
  42: {
    text: "該当する内容がありませんでした。前のページに戻りますか？",
    options: [{
      text: "はい",
      next:2
    }]
  },
  43: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot43.html"
    }]
  },
  44: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot44.html"
    }]
  },
  45: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot45.html"
    }]
  },
  46: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot46.html"
    }]
  },
  47: {
    text: "該当する内容がありませんでした。前のページに戻りますか？",
    options: [{
      text: "はい",
      next:2
    }]
  },
  48: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot48.html"
    }]
  },
  49: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot49.html"
    }]
  },
  50: {
    text: "あなたにあったお店を紹介します！",
    options: [{
      text: "紹介されたお店を見る",
      url: "bot50.html"
    }]
  },

};




const bot = function () {
  const peekobot = document.getElementById("peekobot");
  const container = document.getElementById("peekobot-container");

  const sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const scrollContainer = function () {
    container.scrollTop = container.scrollHeight;
  };

  const insertNewChatItem = function (elem) {
    container.insertBefore(elem, peekobot);
    scrollContainer();
    //debugger;
    elem.classList.add("activated");
  };

  const printResponse = async function (step) {
    const response = document.createElement("div");
    response.classList.add("chat-response");
    response.innerHTML = step.text;
    insertNewChatItem(response);

    await sleep(1500);

    if (step.options) {
      const choices = document.createElement("div");
      choices.classList.add("choices");
      step.options.forEach(function (option) {
        const button = document.createElement(option.url ? "a" : "button");
        button.classList.add("choice");
        button.innerHTML = option.text;
        if (option.url) {
          button.href = option.url;
        } else {
          button.dataset.next = option.next;
        }
        choices.appendChild(button);
      });
      insertNewChatItem(choices);
    } else if (step.next) {
      printResponse(chat[step.next]);
    }
  };

  const printChoice = function (choice) {
    const choiceElem = document.createElement("div");
    choiceElem.classList.add("chat-ask");
    choiceElem.innerHTML = choice.innerHTML;
    insertNewChatItem(choiceElem);
  };

  const disableAllChoices = function () {
    const choices = document.querySelectorAll(".choice");
    choices.forEach(function (choice) {
      choice.disabled = "disabled";
    });
    return;
  };

  const handleChoice = async function (e) {
    if (!e.target.classList.contains("choice") || "A" === e.target.tagName) {
      return;
    }

    e.preventDefault();
    const choice = e.target;

    disableAllChoices();

    printChoice(choice);
    scrollContainer();

    await sleep(1500);

    if (choice.dataset.next) {
      printResponse(chat[choice.dataset.next]);
    }
    // Need to disable buttons here to prevent multiple choices
  };

  const init = function () {
    container.addEventListener("click", handleChoice);
    printResponse(chat[1]);
  };

  init();
};

bot();
