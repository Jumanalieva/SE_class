# CALCULATOR application:

class RentalPropertyCalculator:
    def __init__(self, rental_income, total_expenses, total_investment):
        self.rental_income = rental_income
        self.total_expenses = total_expenses
        self.total_investment = total_investment

    def calculate_cash_flow(self):
        return self.rental_income - self.total_expenses

    def calculate_annual_cash_flow(self):
        return self.calculate_cash_flow() * 12

    def calculate_roi(self):
        annual_cash_flow = self.calculate_annual_cash_flow()
        roi = (annual_cash_flow / self.total_investment) * 100
        return f"{round(roi)}%"


rental_income = 2000  # Monthly rental income
total_expenses = 1500  # Total monthly expenses.
total_investment = 40000  # Down payment, renovation costs, etc.

calculator = RentalPropertyCalculator(rental_income, total_expenses, total_investment)
monthly_cash_flow = calculator.calculate_cash_flow()
annual_cash_flow = calculator.calculate_annual_cash_flow()
roi = calculator.calculate_roi()

print(f"Monthly Cash Flow: ${monthly_cash_flow}")
print(f"Annual Cash Flow: ${annual_cash_flow}")
print(f"ROI: {roi}")
