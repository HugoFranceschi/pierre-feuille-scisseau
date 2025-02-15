const pierrePapierScisseauDiv = document.querySelector(".pierre-papier-scisseau");
const choixGameDiv = document.querySelector(".choix-game");

const pageChoitGameButton1 = document.querySelector(".jeux1");
const pageChoitGameButton2 = document.querySelector(".jeux2");
const pageChoitGameButton3 = document.querySelector(".jeux3");

const pagMain = document.querySelector("main");

pageChoitGameButton1.addEventListener("click", () => {
	pierrePapierScisseauDiv.remove();
});
pageChoitGameButton2.addEventListener("click", () => {
	pierrePapierScisseauDiv.remove();
});
pageChoitGameButton3.addEventListener("click", () => {
	pierrePapierScisseauDiv.remove();
});

function createBandrole(player1) {
	const gameDiv = document.createElement("div");
	gameDiv.classList.add("game");

    const choixDiv = document.createElement("div");
	choixDiv.classList.add("choix");

    const Div1 = document.createElement("div");

    const choixDeToiImg = document.createElement("img");
    choixDeToiImg.src = "./asset/air.webp"

    const toiP = document.createElement("p");
    toiP.textContent = "YOU PICKED";

    const Div2 = document.createElement("div");

    const choixDuCPUImg = document.createElement("img");
    choixDuCPUImg.src = "./asset/air.webp"

    const CPUP = document.createElement("p");
    CPUP.textContent = "THE HOUSE PICKED";

    const victoirDefaiteDiv = document.createElement("div");
	victoirDefaiteDiv.classList.add("victoir-defaite");

    const GangneOuPreduH2 = document.createElement("h2");

    const rejouerButton = document.createElement("button");
	rejouerButton.classList.add("button");
    rejouerButton.classList.add("blanc");

    const testDeRejouerP = document.createElement("p");
	testDeRejouerP.classList.add("margin-0");
    testDeRejouerP.textContent = "PLAY AGAIN";

	if (player1 == true){
		GangneOuPreduH2.textContent = "YOU WIN";
	} else{
		GangneOuPreduH2.textContent = "YOU LOSE";
    }

    gameDiv.appendChild(choixDiv);
	choixDiv.appendChild(Div1);
    choixDiv.appendChild(Div2);
    Div1.appendChild(choixDeToiImg);
    Div1.appendChild(toiP);
    Div2.appendChild(choixDuCPUImg);
    Div2.appendChild(CPUP);
    gameDiv.appendChild(victoirDefaiteDiv);
	victoirDefaiteDiv.appendChild(GangneOuPreduH2);
	victoirDefaiteDiv.appendChild(rejouerButton);
    rejouerButton.appendChild(testDeRejouerP);

	return gameDiv;
	
}

const baderole = createBandrole(true);
pagMain.appendChild(baderole);