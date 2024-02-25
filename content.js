function extractStructuredContent() {
    // Attempt to get the main content and title; this will vary greatly between sites
    const title = document.querySelector('title') ? document.querySelector('title').innerText : '';
    const url = window.location.href;
    const mainContentText = document.querySelector('article, main') ? document.querySelector('article, main').innerText : document.body.innerText;
    const imageSources = Array.from(document.querySelectorAll('img')).map(img => img.src);

    return {
        title,
        url,
        mainContentText,
        imageSources
    };
}

// Listen for a message from the popup
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.action === "extractContent") {
        const content = extractStructuredContent();
        response(content);
    }
});
