/**
 * COMP4537 - Lab 4
 * Names: Andy Lau #A01192350 - Victor Liu #A00971668
 * Date: 2024-10-20
 *
 * indexStore.js
 *
 * Note: code generated by ChatGPT has been commented where used.
 */

import en from "../lang/en/en.js";
import CONSTANTS from "../lang/en/en.js";
const SERVER_DOMAIN = "https://andypangpang.com";
const titleStoreWordText = en.titleStoreWord;


window.onload = function() {
  const element = document.getElementById("titleStoreWord");
  if (element) {  
    element.textContent = titleStoreWordText;
    element.style.visibility = 'visible';
  }
};

document
  .getElementById("storeForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const inputWord = document.getElementById("inputTextWord").value;
    const textDefinition = document.getElementById("textareaDefinition").value;

    // for local testing:
    // const url = `http://localhost:3000/comp4537-lab4/api/definitions`;
    const url = `${SERVER_DOMAIN}/comp4537-lab4/api/definitions`;

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    try {
      const response = await fetch(url, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          word: inputWord,
          definition: textDefinition,
        }),
      });

      if (!response.ok) {
        if (response.status === 405) {
          // ChatGPT: asked to convert code block using ternary operator
          const errorMessage =
            response.status === 405
              ? CONSTANTS.STATUS_405(response.status)
              : response.statusText;

          document.getElementById("sectionDisplayResult").innerHTML = `
                <div>Error: ${response.status}</div>
                <div>${errorMessage}</div>
            `;
          throw new Error(CONSTANTS.RESPONSE_STATUS(response.status));
        } else if (response.status === 409) {
          const data = await response.json();
          const displayContainer = document.getElementById(
            "sectionDisplayResult"
          );
          displayContainer.innerHTML = `
            <div>${data.error}</div>
            `;
          displayContainer.style.color = "red";
        }
      } else {
        const data = await response.json();
        document.getElementById("inputTextWord").value = "";
        document.getElementById("textareaDefinition").value = "";
        document.getElementById("sectionDisplayResult").innerHTML = `
            <div>${data.message}</div>
            `;
      }
    } catch (error) {
      console.error(error.message);
    }
  });
