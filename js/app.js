let totalQuestions = 0;
let messages = [];

document.addEventListener(
    "DOMContentLoaded",
    async ()=>{

        await loadFAQs();

        restoreChat();

        setupEvents();

    }
);

function setupEvents(){

    document
        .getElementById("sendBtn")
        .addEventListener(
            "click",
            sendMessage
        );

    document
        .getElementById("userInput")
        .addEventListener(
            "keypress",
            e=>{

                if(e.key==="Enter")
                    sendMessage();

            }
        );

    document
        .getElementById("clearBtn")
        ?.addEventListener(
            "click",
            clearChat
        );

}

function sendMessage(){

    const input =
        document.getElementById(
            "userInput"
        );

    const question =
        input.value.trim();

    if(!question)
        return;

    addUserMessage(question);

    messages.push({
        type:"user",
        text:question
    });

    setTimeout(()=>{

        const result =
            getBestAnswer(question);

        addBotMessage(result);

        messages.push({
            type:"bot",
            text:result.answer
        });

        saveChat(messages);

    },700);

    totalQuestions++;

    document.getElementById(
        "questionCount"
    ).textContent =
        totalQuestions;

    input.value="";

}

function restoreChat(){

    messages =
        loadChat();

    messages.forEach(msg=>{

        if(msg.type==="user")
            addUserMessage(
                msg.text
            );

        else

            addBotMessage({
                answer:msg.text,
                confidence:80
            });

    });

}

function clearChat(){

    document.getElementById(
        "chatContainer"
    ).innerHTML="";

    messages=[];

    clearStoredChat();

}