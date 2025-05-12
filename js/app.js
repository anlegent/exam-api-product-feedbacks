async function data() {
  let response = await fetch(
    "http://51.38.232.174:3002/v1/feedbacks?page=0&pageSize=100",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();
}

document.addEventListener("DOMContentLoaded", async () => {
  const list = await data();
  console.log(list);

  function sortType(option) {}

  function sortNumber(option) {}

  for (let i = 0; i < list.length; i++) {
    let feedbackWrapper = document.querySelector("#feedback-wrapper");

    let feedbackItem = document.createElement("div");
    feedbackItem.className = "feedback-item";

    let feedbackItemVotes = document.createElement("div");
    feedbackItemVotes.className = "feedback-item-votes";

    let votesSpan = document.createElement("span");
    votesSpan.className = "text-regular-3";
    votesSpan.textContent = list[i].votes;

    let feedbackItemText = document.createElement("div");
    feedbackItemText.className = "feedback-item-text";

    let h3 = document.createElement("h3");
    h3.textContent = list[i].title;
    h3.className = "heading-3";

    let p = document.createElement("p");
    p.textContent = list[i].description;

    let feedbackChip = document.createElement("div");
    feedbackChip.textContent = list[i].category;
    feedbackChip.className = "feedback-chip";
    feedbackChip.className = "text-regular-3";

    let feedbackItemComments = document.createElement("div");
    feedbackItemComments.className = "feedback-item-comments";

    let commentsSpan = document.createElement("span");
    commentsSpan.className = "bold";
    commentsSpan.textContent = list[i].comments;

    feedbackWrapper.appendChild(feedbackItem);
    feedbackItem.appendChild(feedbackItemVotes);
    feedbackItemVotes.appendChild(votesSpan);
    feedbackItem.appendChild(feedbackItemText);
    feedbackItemText.appendChild(h3);
    feedbackItemText.appendChild(p);
    feedbackItemText.appendChild(feedbackChip);
    feedbackItemComments.appendChild(commentsSpan);
  }
});
