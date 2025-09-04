const credit = 120;
const dropdown = document.getElementById("options");
const inputContainer = document.getElementById("inputGroups");
const submitBtn = document.getElementById("submitBtn");
const playerList = document.getElementById("playerList");

let players = []; // store all players here

dropdown.addEventListener("change", function () {
  inputContainer.innerHTML = ""; // clear old inputs
  playerList.innerHTML = ""; // clear old list
  players = []; // reset array

  if (this.value === "option1" || this.value === "option2") {
    for (let i = 1; i <= 2; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      // Name input
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.placeholder = `Player ${i}'s name`;
      nameInput.className = "name";

      // Batting credit input
      const batInput = document.createElement("input");
      batInput.type = "number";
      batInput.placeholder = `Batting credit`;
      batInput.className = "bat";

      // Bowling credit input
      const bowlInput = document.createElement("input");
      bowlInput.type = "number";
      bowlInput.placeholder = `Bowling credit`;
      bowlInput.className = "bowl";

      row.appendChild(nameInput);
      row.appendChild(batInput);
      row.appendChild(bowlInput);

      inputContainer.appendChild(row);
    }
  }
});

// ✅ Submit Button Logic
submitBtn.addEventListener("click", function () {
  players = []; // reset before collecting again
  playerList.innerHTML = ""; // clear old list

  const rows = document.querySelectorAll(".row");

  rows.forEach((row, index) => {
    const name = row.querySelector(".name").value;
    const batCredit = row.querySelector(".bat").value;
    const bowlCredit = row.querySelector(".bowl").value;

    const player = {
      name: name,
      batCredit: Number(batCredit),
      bowlCredit: Number(bowlCredit),
    };

    players.push(player);

    // ✅ Display each player inside webpage
    const playerItem = document.createElement("p");
    playerItem.textContent = `Player ${index + 1}: ${player.name} | Batting: ${
      player.batCredit
    }, Bowling: ${player.bowlCredit}`;
    playerList.appendChild(playerItem);
  });

  // Example: check total credits
  const totalCredits = players.reduce(
    (sum, p) => sum + p.batCredit + p.bowlCredit,
    0
  );

  const creditsInfo = document.createElement("p");
  creditsInfo.innerHTML = `<strong>Total Credits Used:</strong> ${totalCredits} | <strong>Credits Left:</strong> ${
    credit - totalCredits
  }`;

  playerList.appendChild(creditsInfo);
});
