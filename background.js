chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "extractedContent") {
        console.log("Received content: ", message.content);
        // Additional processing here (e.g., storing or sending to an external API)
    }
});
