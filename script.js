let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.getElementById("voiceSelect");
let textInput = document.getElementById("textInput");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });

    speech.voice = voices[0];
}

window.addEventListener("load", () => {
    populateVoiceList();
});

window.speechSynthesis.onvoiceschanged = populateVoiceList;

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.getElementById("listenButton").addEventListener("click", () => {
    speech.text = textInput.value;
    window.speechSynthesis.speak(speech);
});

// Clear the text area on page reload
window.addEventListener("beforeunload", () => {
    textInput.value = "";
});
