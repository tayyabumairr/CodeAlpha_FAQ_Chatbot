function saveChat(messages) {
    localStorage.setItem(
        "ai_assistant_chat",
        JSON.stringify(messages)
    );
}

function loadChat() {
    const data =
        localStorage.getItem(
            "ai_assistant_chat"
        );

    return data
        ? JSON.parse(data)
        : [];
}

function clearStoredChat() {
    localStorage.removeItem(
        "ai_assistant_chat"
    );
}