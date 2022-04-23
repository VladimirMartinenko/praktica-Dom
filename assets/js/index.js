"use strict";

const cardsContainer = document.getElementById("root");
const loadingDiv = document.querySelector("#loading");
const errorDiv = document.querySelector("#error");

async function getData(url) {
  try {
    loadingDiv.textContent = "LOADING ...";
    const response = await fetch(url);
    const users = await response.json();
    const cards = users.map((user) => generateUserCard(user));
    cardsContainer.append(...cards);
  } catch (err) {
    errorDiv.textContent = "ERROR";
  } finally {
    loadingDiv.textContent = "";
  }
}
getData("./data.json");

function generateUserCard(userObj) {
  const fullName =
    `${userObj.firstName} ${userObj.lastName}`.trim() ||
    CARD_CONSTANTS.userName;

  const aIcon = generateLinks(userObj.contacts, fullName);
  const divIcon = createElement("div", {}, ...aIcon);

  const imgWrapper = createUserCardImageWrapper(userObj, fullName);
  const cardName = createElement(
    "h2",
    {
      classNames: ["cardName"],
    },
    fullName
  );
  const cardDescription = createElement(
    "p",
    {
      classNames: ["cardDescription"],
    },
    userObj.description || CARD_CONSTANTS.cardDescription
  );
  const cardArticle = createElement(
    "article",
    {
      classNames: ["cardContainer"],
    },
    imgWrapper,
    cardName,
    cardDescription,
    divIcon
  );
  const card = createElement(
    "li",
    { classNames: ["userCardWrapper"] },
    cardArticle
  );

  return card;
}

function generateLinks(contacsArray, fullName) {
  return contacsArray.map((url) => {
    const urls = new URL(url);
    if (SUPPORTED_SOCIAL_NETWORKS.has(urls.hostname)) {
      const elem = SUPPORTED_SOCIAL_NETWORKS.get(urls.hostname);
      const iconImg = createElement("img", {
        classNames: ["iconImg"],
        attributes: {
          src: elem.src,
          alt: `${elem.alt} ${fullName}`,
        },
      });
      const icon = createElement(
        "a",
        {
          classNames: ["cardIcon"],
          attributes: {
            href: `https://${urls.hostname}`,
          },
        },
        iconImg
      );
      return icon;
    }
  });
}

function createUserCardImageWrapper(userObj, fullName) {
  const userImgElem = createElement("img", {
    classNames: ["cardImg"],
    attributes: {
      src: userObj.profilePicture,
      alt: fullName,
      "data-id": userObj.id,
    },
    addEventListener: { event: "error", callback: errorHandler },
    addEventListener: { event: "load", callback: loadHandler },
  });

  // userImgElem.addEventListener('error', errorHandler);
  // userImgElem.addEventListener('load', loadHandler);

  const initialsElem = createElement(
    "div",
    { classNames: ["initials"] },
    getInitials(fullName)
  );
  const imgWrapperElem = createElement(
    "div",
    {
      classNames: ["cardImgWrapper"],
      attributes: { id: `imgWrapper${userObj.id}` },
    },
    initialsElem
  );
  return imgWrapperElem;
}
function errorHandler({ target }) {
  target.remove();
}
function loadHandler({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`imgWrapper${id}`).append(target);
}
