const kits = ["crash", "bass", "snare", "tom"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  console.log(kit, typeof kit);
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = "url(./images/" + kit + ".jpg";
  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio");
  audioEl.src = "./media/" + kit + ".mp3";
  containerEl.appendChild(audioEl);
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });
});
