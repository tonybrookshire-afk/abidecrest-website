"use strict";

const form = document.querySelector("#guess-form");
const guess = document.querySelector("#guess");
const submit = document.querySelector("#submit");
const word = document.querySelector("#word");
const clue = document.querySelector("#clue");
const hint = document.querySelector("#hint");
const hintButton = document.querySelector("#clue-button");
const partButton = document.querySelector("#part");
const newButton = document.querySelector("#new");
const status = document.querySelector("#status");
const partsCount = document.querySelector("#parts-count");
const scene = document.querySelector("#scene");
const object = document.querySelector("#object");
const parts = [".head", ".torso", ".left-arm", ".right-arm", ".left-leg", ".right-leg"]
  .map(selector => document.querySelector(selector));
let deck = [];
let puzzle;
let remainingLetters;
let revealedLetters;
let partCount;
let finished;
const progress = document.querySelector("#parts-progress");
const progressCaption = document.querySelector("#progress-caption");
const result = document.querySelector("#round-result");
const resultTitle = document.querySelector("#result-title");
const resultAnswer = document.querySelector("#result-answer");
const resultDetail = document.querySelector("#result-detail");
const encouragement = document.querySelector("#encouragement");
function updateProgress(){ const available=parts.length-partCount; partsCount.textContent=available+" of "+parts.length+" parts remaining"; progress.value=partCount; progressCaption.textContent=partCount+" of "+parts.length+" parts revealed"; }
function encourage(message){encouragement.textContent="Shell says: "+message;}

function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z]/g, "");
}

function showWord() {
  const groups = puzzle.answer.split(" ");
  let index = 0;
  const descriptions = [];
  word.replaceChildren(...groups.map(group => {
    const row = document.createElement("span");
    const letters = [];
    row.className = "word-group";
    for (const character of group.toUpperCase()) {
      const cell = document.createElement("span");
      cell.className = "letter";
      const visible = revealedLetters.has(index++) || finished;
      cell.textContent = visible ? character : "";
      letters.push(visible ? character : "blank");
      row.append(cell);
    }
    descriptions.push(letters.join(", "));
    return row;
  }));
  word.setAttribute("aria-label", descriptions.join("; next word: "));
}

function startRound() {
  if (!deck.length) {
    deck = shuffled(mysteryObjects);
    if (deck.at(-1) === puzzle) deck.unshift(deck.pop());
  }
  puzzle = deck.pop();
  remainingLetters = shuffled(Array.from({length:normalize(puzzle.answer).length}, (_, i) => i));
  revealedLetters = new Set();
  partCount = 0;
  finished = false;
  for (const part of parts) part.hidden = true;
  object.textContent = "?";
  object.classList.remove("revealed");
  scene.setAttribute("aria-label", "Character holding a hidden object");
  clue.textContent = puzzle.clue;
  hint.textContent = puzzle.hint;
  hint.hidden = true;
  guess.value = "";
  guess.disabled = submit.disabled = hintButton.disabled = partButton.disabled = false;
  status.textContent = "";
  result.hidden = true; result.classList.remove("win"); newButton.textContent = "New object"; updateProgress(); encourage("Let’s solve a mystery!");
  showWord();
}

function endRound(correct) {
  finished = true;
  guess.disabled = submit.disabled = hintButton.disabled = partButton.disabled = true;
  object.textContent = puzzle.icon;
  object.classList.add("revealed");
  scene.setAttribute("aria-label", "Mystery object revealed: " + puzzle.answer);
  const unused = parts.length - partCount;
  status.textContent = "";
  resultTitle.textContent = correct ? "Great job! Mystery solved! ⭐" : "Game over — nice try!";
  resultAnswer.textContent = puzzle.icon + " " + puzzle.answer.toUpperCase();
  resultDetail.textContent = correct ? "You solved it with " + unused + (unused === 1 ? " part" : " parts") + " remaining!" : "You revealed all six parts. Let’s try another object!";
  result.classList.toggle("win", correct); result.hidden = false;
  newButton.textContent = "Play again";
  for (const part of parts) part.hidden = false;
  progress.value = parts.length;
  progressCaption.textContent = "Full character revealed at end of round";
  partsCount.textContent = unused + (unused === 1 ? " part" : " parts") + " unused at finish";
  encourage(correct ? "Wonderful work! You solved it!" : "Great effort! Every guess helps us learn.");
  showWord();
  newButton.focus({preventScroll:true});
}

partButton.addEventListener("click", () => {
  if (finished || partCount === parts.length) return;
  parts[partCount++].hidden = false;
  if (remainingLetters.length) revealedLetters.add(remainingLetters.pop());
  const available = parts.length - partCount;
  partButton.disabled = !available;
  updateProgress(); encourage(available ? "Good thinking! Look at the letters and clues." : "Give it your best final guess!");
  status.textContent = available ? "One letter revealed." : hint.hidden ? "One last guess! You can still use the extra hint." : "One last guess!";
  showWord();
});

hintButton.addEventListener("click", () => {
  hint.hidden = false;
  hintButton.disabled = true;
  status.textContent = "Extra hint: " + puzzle.hint;
});

form.addEventListener("submit", event => {
  event.preventDefault();
  if (finished) return;
  const answer = normalize(guess.value);
  if (!answer) {
    status.textContent = "Type your guess first.";
    return;
  }
  if ([puzzle.answer, ...puzzle.aliases].some(value => normalize(value) === answer)) {
    endRound(true);
  } else if (partCount === parts.length) {
    endRound(false);
  } else {
    status.textContent = "Try again, use the extra hint, or add a part for a letter."; encourage("You can do it! Try another clue.");
    guess.select();
  }
});

newButton.addEventListener("click", startRound);
startRound();
