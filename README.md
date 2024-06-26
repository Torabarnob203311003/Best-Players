# Best-Players


## "Select Your Best Five" is a web application where users can select their top five football players from a list of available players. The application allows users to dynamically update their selections and calculate the total cost based on player expenses, manager costs, and coach costs. This project uses HTML, Tailwind CSS, and vanilla JavaScript to create a responsive and interactive user interface.

## Features
- Player Selection: Users can select up to five players from a list. The selected players are displayed in a list on the right side of the screen.

- Budget Calculation: Users can input the cost per player, manager, and coach. The application calculates the total cost dynamically based on the number of selected players and other expenses.
- Responsive Design: The application is built with Tailwind CSS to ensure a responsive design that works well on various screen sizes.
- Dynamic Updates: JavaScript is used to handle dynamic updates of the player selection and budget calculations.
## How It Works
- Player Cards: Each player is displayed as a card with an image, name, stats, and a "SELECT" button.
- Selection Process: When the "SELECT" button is clicked, the player's name is added to the "Selected - V" list if fewer than five players are currently selected and if the player has not already been selected.
- Cost Calculation: Users can input costs for players, the manager, and the coach. The total cost is calculated when the "Calculate Total" button is clicked, taking into account the selected players' expenses and other costs.
- Dynamic Updates: The list of selected players and the total cost are dynamically updated whenever a selection is made or a cost input is changed.
## Making Patterns
- HTML Structure: The HTML structure consists of a header, a section for player cards, a section for selected players and budget inputs, and a footer.
CSS with Tailwind: Tailwind CSS classes are used for styling. Custom styles are added for specific elements such as the header background.
- JavaScript Functionality: JavaScript handles the logic for player selection, updating the selected players list, and calculating the total budget.
