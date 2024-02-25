document.getElementById("saveButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "extractContent" },
      function (response) {
        if (response) {
          const contentToSave = `
Title: ${response.title}
URL: ${response.url}
Content: ${response.mainContentText}
Images: ${response.imageSources.join("\n")}`;

          // Create a Blob from the content
          const blob = new Blob([contentToSave], { type: "text/plain" });
          const url = URL.createObjectURL(blob);

          // Use chrome.downloads to save the file
          chrome.downloads.download({
            url: url,
            filename: "extracted-content.txt", // Suggest a filename
          });
        }
      }
    );
  });
});
