import random

class BlackjackGame:
    def __init__(self):
        self.deck = [(suit, value) for suit in ['Clubs', 'Diamonds', 'Hearts', 'Spades']
                     for value in range(1, 14)]
        self.player_hand = []
        self.dealer_hand = []
    
    def shuffle_deck(self):
        random.shuffle(self.deck)

    def deal_card(self, hand):
        card = self.deck.pop()
        hand.append(card)
        return card

    def deal_initial_cards(self):
        for _ in range(2):
            self.deal_card(self.player_hand)
            self.deal_card(self.dealer_hand)
    
    def get_hand_value(self, hand):
        value = 0
        aces = 0
        for card in hand:
            card_suit, card_value = card
            if card_value == 1:  # Ace
                aces += 1
                value += 11
            elif card_value >= 10:  # Face cards
                value += 10
            else:
                value += card_value
        
        while value > 21 and aces:
            value -= 10  # Adjust for Ace
            aces -= 1

        return value

    def show_hands(self, reveal_dealer=False):
        print("\nPlayer's hand:", self.player_hand, "Value:", self.get_hand_value(self.player_hand))
        if reveal_dealer:
            print("Dealer's hand:", self.dealer_hand, "Value:", self.get_hand_value(self.dealer_hand))
        else:
            print("Dealer's hand: [", self.dealer_hand[0], ", * ]")

    def player_hit(self):
        card = self.deal_card(self.player_hand)
        print("\nPlayer draws:", card)

    def player_stands(self):
        print("\nPlayer stands.")
        self.show_hands(reveal_dealer=True)
        
        while self.get_hand_value(self.dealer_hand) < 17:
            card = self.deal_card(self.dealer_hand)
            print("Dealer draws:", card)
        
        self.check_winner()

    def check_winner(self):
        player_value = self.get_hand_value(self.player_hand)
        dealer_value = self.get_hand_value(self.dealer_hand)

        if dealer_value > 21:
            print("Dealer busts! Player wins!")
        elif player_value > dealer_value:
            print("Player wins!")
        elif player_value < dealer_value:
            print("Dealer wins!")
        else:
            print("It's a tie!")

    def play(self):
        self.shuffle_deck()
        self.deal_initial_cards()
        self.show_hands()

        blackjack = (len(self.player_hand) == 2 and self.get_hand_value(self.player_hand) == 21)
        if blackjack:
            print("Blackjack! Player wins!")
            return

        while self.get_hand_value(self.player_hand) < 21:
            move = input("Do you want to (h)it or (s)tand? ").lower()
            if move == 'h':
                self.player_hit()
                self.show_hands()
            elif move == 's':
                self.player_stands()
                break

        if self.get_hand_value(self.player_hand) > 21:
            print("Player busts! Dealer wins!")


#Example
game = BlackjackGame()
game.play()
