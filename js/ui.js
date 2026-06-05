function getTime(){

    return new Date()
        .toLocaleTimeString(
            [],
            {
                hour:'2-digit',
                minute:'2-digit'
            }
        );

}

function confidenceClass(value){

    if(value >= 75)
        return "high";

    if(value >= 40)
        return "medium";

    return "low";

}

function addUserMessage(text){

    const container =
        document.getElementById(
            "chatContainer"
        );

    container.insertAdjacentHTML(
        "beforeend",

        `
        <div class="chat-message user">

            <div class="message-content">

                ${text}

                <div class="message-time">
                    ${getTime()}
                </div>

            </div>

        </div>
        `
    );

}

function addBotMessage(result){

    const container =
        document.getElementById(
            "chatContainer"
        );

    container.insertAdjacentHTML(
        "beforeend",

        `
        <div class="chat-message bot">

            <div class="message-content">

                <div class="bot-header">

                    <div class="bot-avatar">
                        🤖
                    </div>

                    <strong>
                        AI Assistant
                    </strong>

                </div>

                <p>
                    ${result.answer}
                </p>

                <div class="confidence-bar">

                    <div class="confidence-label">

                        Confidence:
                        ${result.confidence}%

                    </div>

                    <div class="confidence-track">

                        <div
                            class="confidence-fill
                            ${confidenceClass(result.confidence)}"

                            style="
                            width:
                            ${result.confidence}%">

                        </div>

                    </div>

                </div>

                <div class="message-time">
                    ${getTime()}
                </div>

            </div>

        </div>
        `
    );

    container.scrollTop =
        container.scrollHeight;

}