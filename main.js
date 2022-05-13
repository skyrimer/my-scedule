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
document.querySelectorAll("p").forEach((paragraph) => {
  const textContent = paragraph.textContent;
  if (textContent.includes("Mr")) {
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

const getDateFromTableTime = (time) => {
  let date = new Date();
  date.setHours(time.split(":")[0]);
  date.setMinutes(time.split(":")[1]);
  return date;
};
const getWeekdayOrder = (currentDate) => {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const currentWeekday = currentDate.toLocaleDateString("en-us", { weekday: "long" });
  for (let index = 0; index < weekdays.length; index++) {
    const weekday = weekdays[index];
    if (weekday == currentWeekday) {
      return index;
    }
  }
};
const highlightCell = (time, weekdayOrder) => {
  time.parentElement.parentElement
    .querySelector(`td:nth-child(${weekdayOrder})`)
    .classList.add("current");
};
const currentDate = new Date();
const weekdayOrder = getWeekdayOrder(currentDate) + 2;

document.querySelectorAll("tr td:first-child p").forEach((time) => {
  const timeSplitted = time.textContent.split(" - ");
  let startTime = getDateFromTableTime(timeSplitted[0]);
  let endTime = getDateFromTableTime(timeSplitted[1]);

  if (currentDate > startTime && currentDate < endTime) {
    highlightCell(time, weekdayOrder);
  }
});
document.querySelectorAll("td").forEach((cell) => {
  if (cell.textContent == "") {
    cell.classList.add("empty");
  }
});
