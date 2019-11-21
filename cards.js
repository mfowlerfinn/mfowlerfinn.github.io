const cardContainer = document.querySelector(".cards");

function showProjects() {
  let html = "";
  let i = 0;
  data.forEach(card => {
    let liveLink, gitLink;
    card.live
      ? (liveLink = `<a href="${card.live}" class="live icon det" target="_blank"><img class="link_icon" src="./assets/images/launch.png" width=32px; height=32px; title="launch"</a>`)
      : (liveLink = "");
    card.github
      ? (gitLink = `<a href="${card.github}" class="github icon det" target="_blank"><img class="link_icon" src="./assets/images/GitHub-Mark-64px.png" width=32px; height=32px; title="github"></a>`)
      : (gitLink = "");
    let oneCard = `
      <div name="card-${i}" id="card-${i}" class="card">
        <img class="card__photo" src="${card.photo}"></img>
        <div class="card__details">
          <div class="card__title">
           <h2 class="card__title__text">${card.title}</h2>
          </div>
          <a id="detail_card_${i}" name="detail_card_${i}" class="details">${card.details}</a>
          <div class="card-footer det">
            <a class="card__tags det">${card.tags}</a>
            <div class="icons">
              ${liveLink}
              ${gitLink}
            </div>
          </div>
        </div>
      </div>
    `;
    i++;
    // console.log(oneCard);
    html += oneCard;
  });
  cardContainer.innerHTML = html;
  attachCardHandle();
}
