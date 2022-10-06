const times = [
  "8:15 - 8:55",
  "9:00 - 9:40",
  "9:45 - 10:25",
  "10:45 - 11:25",
  "11:30 - 12:10",
  "12:15 - 12:55",
  "13:00 - 13:45",
  "13:45 - 14:25",
  "14:30 - 15:10",
  "15:15 - 15:55",
  "16:00 - 16:40",
];
const subjectList = {
  languages: ["English", "Russian"],
  "natural-science": ["Physics", "Mathematics"],
  "human-science": ["Economics", "Business"],
  other: ["Advisory", "TOK", "CAS"],
};
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].join(",");

const nextSiblings = (elem) => {
  let siblings = [];
  while ((elem = elem.nextElementSibling)) {
    siblings.push(elem);
  }
  return siblings;
};

document.querySelectorAll("p").forEach((paragraph) => {
  const textContent = paragraph.textContent;
  for (subject in subjectList) {
    if (
      subjectList[subject]
        .join(", ")
        .includes(textContent.replace("HL", "").replace("(Subject Atelier)", "").trim())
    ) {
      paragraph.classList.add(subject);
      break;
    }
  }
  if (textContent.includes("Mr") || textContent.includes("Ms")) {
    paragraph.classList.add("teacher");
  } else if (weekDays.includes(textContent)) {
    paragraph.classList.add("day");
  } else if (/^\d/.test(textContent)) {
    paragraph.classList.add("time");
  }
});

timeCells = document.querySelectorAll("tr td:first-child p");
for (let index = 0; index < timeCells.length; index++) {
  let time = timeCells[index];
  time.textContent = times[index];
  nextSiblings(time.parentElement).forEach((cell) => {
    cell.setAttribute("data-label", time.textContent);
  });
}
