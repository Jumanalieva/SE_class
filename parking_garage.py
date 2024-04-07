class ParkingGarage:
    def __init__(self, num_spaces):
        self.tickets = list(range(1, num_spaces + 1))
        self.parkingSpaces = list(range(1, num_spaces + 1))
        self.currentTicket = {}

    def takeTicket(self):
        if self.tickets:
            ticket_number = self.tickets.pop()
            self.parkingSpaces.pop()
            self.currentTicket[ticket_number] = {"paid": False}
            print(f"Ticket number {ticket_number} taken. Please park in space {ticket_number}.")
        else:
            print("Sorry, the garage is full.")

    def payForParking(self):
        ticket_number = int(input("Enter your ticket number: "))
        if ticket_number in self.currentTicket:
            payment = input("Your payment amount: ")
            if payment:
                self.currentTicket[ticket_number]["paid"] = True
                print("Your ticket has been paid. You have 15 minutes to leave.")
            else:
                print("No payment detected.")
        else:
            print("Invalid ticket number.")

    def leaveGarage(self):
        ticket_number = int(input("Enter your ticket number: "))
        if ticket_number in self.currentTicket:
            if self.currentTicket[ticket_number]["paid"]:
                print("Thank You, have a nice day!")
                self.parkingSpaces.append(ticket_number)
                self.tickets.append(ticket_number)
                del self.currentTicket[ticket_number]
            else:
                print("Your ticket has not been paid. Please pay for your ticket.")
                self.payForParking()
                print("Thank you, have a nice day!")
                self.parkingSpaces.append(ticket_number)
                self.tickets.append(ticket_number)
                del self.currentTicket[ticket_number]
        else:
            print("Invalid ticket number.")

# Example 
garage = ParkingGarage(5)

# calling methods
garage.takeTicket()
garage.payForParking()
garage.leaveGarage()
