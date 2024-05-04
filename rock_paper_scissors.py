import random

class RockPaperScissors:
    def __init__(self):
        self.choices = ["Rock", "Paper", "Scissors"]

    def get_computer_choice(self):
        return random.choice(self.choices)
    
    def determine_winner(self, player_choice, computer_choice):
        if player_choice == computer_choice:
            return 'Game Tied'
        elif (player_choice == "Rock" and computer_choice == "Scissors"
              or player_choice == "Paper" and computer_choice == "Rock"
              or player_choice == "Scissors" and computer_choice == "Paper"):
            return "You win!"
        return "You lose"
    
    def play(self):
        while True:
            player_choice = input("Enter Rock, Paper or Scissors " \
                                   "(or type 'q' to quit): ").capitalize()
            
            if player_choice == 'Q':
                print("Thank you for playing!")
                break
            
            if player_choice not in self.choices:
                print("Invalid choice, please try again.")
                continue

            computer_choice = self.get_computer_choice()
            print(f"Computer chose {computer_choice}")
            result = self.determine_winner(player_choice, computer_choice)
            print(result)

        
first_game = RockPaperScissors()
first_game.play()