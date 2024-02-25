document.getElementById('saveButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: captureContent
        });
    });
});

function captureContent() {
    const content = document.body.innerText;
    console.log(content);
    // Extend this to trigger saving the content to Google Docs or Notion.
}