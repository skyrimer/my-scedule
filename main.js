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
  "16:45 - 17:25",
];
const subjectList = [
  "Physics",
  "English",
  "Russian",
  "Extended Essay",
  "Economics",
  "Mathematics",
  "Advisory",
  "Studyhall",
  "Business",
  "TOK",
  "CAS",
].join(",");
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].join(",");

const nextSiblings = (elem) => {
  // create an empty array
  let siblings = [];

  // loop through next siblings until `null`
  while ((elem = elem.nextElementSibling)) {
    // push sibling to array
    siblings.push(elem);
  }
  return siblings;
};

document.querySelectorAll("p").forEach((paragraph) => {
  const textContent = paragraph.textContent;
  if (textContent.includes("Mr") || textContent.includes("Ms")) {
    paragraph.classList.add("teacher");
  } else if ("Guitar".includes(textContent)) {
    paragraph.classList.add("extra");
  } else if (subjectList.includes(textContent)) {
    paragraph.classList.add("lesson");
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
