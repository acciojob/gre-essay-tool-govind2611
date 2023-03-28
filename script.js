//your code here
 function countWords() {
      let text = document.getElementById("evaluatedText").value.trim();
      let wordCount = text.length > 0 ? text.match(/\S+/g).length : 0;
      document.getElementById("wordCount").textContent = wordCount;
    }