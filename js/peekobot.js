const chat = {
    1: {
      text: "こんにちは！ここではあなたに合ったお店を紹介できます。",
      options: [
        {
          text: "わかった",
          next: 2
        },
      ]
    },
    2: {
      text: "まず最初にあなたの目的を教えてください",
      options:[
        {
          text: "がっつり食べたい！",
          next:3
        },
        {
          text:"甘いものが食べたい！",
          next:4
        },
        {
          text:"おしゃれな店に行きたい！",
          next:5
        },
        {
          text:"家族連れにおすすめなお店に行きたい！",
          next:6
        }
      ]
    },

    3: {
      text:"何系統の料理が食べたいですか？",
      options:[
        {
          text:"中華",
          next:7
        },
        {
          text:"洋食",
          next:8
        },
        {
          text:"和食",
          next:9
        },
      ]
    },

    4: {
      text:"何系統の料理が食べたいですか？",
      options:[
        {
          text:"菓子パン系",
          next:10
        },
        {
          text:"果物系",
          next:11
        },
        {
          text:"ケーキ",
          next:12
        }
      ]
    },

    5: {
      text:"何系統の料理が食べたいですか？",
      options:[
        {
          text:"中華",
          next:13
        },
        {
          text:"洋食",
          next:14
        },
        {
          text:"和食",
          next:15
        },
      ]
    },

    6: {
      text:"何系統の料理が食べたいですか？",
      options:[
        {
          text:"中華",
          next:16
        },
        {
          text:"洋食",
          next:17
        },
        {
          text:"和食",
          next:18
        },
      ]
    },


    11: {
      text: "こちらのお店を紹介します",
      options:[
        {
        text:"push！！！",
        url:
        ""
    }
        ]
    },
    6: {
      text: "サンドイッチマンの動画を紹介しますね",
      options: [
        {
          text: "サンドの公式Youtubeへどうぞ！",
          url:
            "https://www.youtube.com/playlist?list=PLe8FGQbLGisnnab5M-2o88p4SAKPVb1RV"
        }
      ]
    },
    7: {
      text:"どの付近を希望ですか",
      options:[
        {
          text:"盛岡駅付近",
        }  
      ]
    }
  };
  

  const bot = function() {
    const peekobot = document.getElementById("peekobot");
    const container = document.getElementById("peekobot-container");
  
    const sleep = function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
  
    const scrollContainer = function() {
      container.scrollTop = container.scrollHeight;
    };
  
    const insertNewChatItem = function(elem) {
      container.insertBefore(elem, peekobot);
      scrollContainer();
      //debugger;
      elem.classList.add("activated");
    };
  
    const printResponse = async function(step) {
      const response = document.createElement("div");
      response.classList.add("chat-response");
      response.innerHTML = step.text;
      insertNewChatItem(response);
  
      await sleep(1500);
  
      if (step.options) {
        const choices = document.createElement("div");
        choices.classList.add("choices");
        step.options.forEach(function(option) {
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
  
    const printChoice = function(choice) {
      const choiceElem = document.createElement("div");
      choiceElem.classList.add("chat-ask");
      choiceElem.innerHTML = choice.innerHTML;
      insertNewChatItem(choiceElem);
    };
  
    const disableAllChoices = function() {
      const choices = document.querySelectorAll(".choice");
      choices.forEach(function(choice) {
        choice.disabled = "disabled";
      });
      return;
    };
  
    const handleChoice = async function(e) {
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
  
    const init = function() {
      container.addEventListener("click", handleChoice);
      printResponse(chat[1]);
    };
  
    init();
  };
  
  bot();