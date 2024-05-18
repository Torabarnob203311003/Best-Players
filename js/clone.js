 
//   this is the clone of teams.js .. so ignore it.....
 
 const playerList = document.getElementById('player-list');
        const selectedPlayers = document.getElementById('selected-players');
        const perPlayerCostInput = document.getElementById('per-player-cost');
        const playerExpensesInput = document.getElementById('player-expenses');
        const managerCostInput = document.getElementById('manager-cost');
        const coachCostInput = document.getElementById('coach-cost');
        const totalCostElement = document.getElementById('total-cost');
        const calculateTotalButton = document.getElementById('calculate-total');

        let selectedPlayerNames = [];
        let perPlayerCost = parseInt(perPlayerCostInput.value);

        playerList.addEventListener('click', function (e) {
            if (e.target.classList.contains('select-btn')) {
                const playerCard = e.target.closest('[data-player]');
                const playerName = playerCard.getAttribute('data-player');

                if (!selectedPlayerNames.includes(playerName) && selectedPlayerNames.length < 5) {
                    selectedPlayerNames.push(playerName);
                    updateSelectedPlayers();
                    updatePlayerExpenses();
                }
                else{

                    alert('Dream list is full')
                }
            }
        });

        perPlayerCostInput.addEventListener('input', function () {
            perPlayerCost = parseInt(perPlayerCostInput.value);
            updatePlayerExpenses();
        });

        calculateTotalButton.addEventListener('click', function () {
            const managerCost = parseInt(managerCostInput.value);
            const coachCost = parseInt(coachCostInput.value);
            const playerExpenses = parseInt(playerExpensesInput.value);

            const totalCost = managerCost + coachCost + playerExpenses;
            totalCostElement.textContent = totalCost;
        });

        function updateSelectedPlayers() {
            selectedPlayers.innerHTML = selectedPlayerNames.map((name, index) => `<li>${index + 1}. ${name}</li>`).join('');
        }

        function updatePlayerExpenses() {
            const playerExpenses = selectedPlayerNames.length * perPlayerCost;
            playerExpensesInput.value = playerExpenses;
        }