# a profiles module of web applications with user services

class User:

    def __init__(self, user_name, wallet_id, preferences, date_of_birth):
        # class attribute
        user_type = ["free", "premium"]

        # instance attribute
        # unpacked from a JSON file via a html form input
        self.user_name = user_name
        self.wallet_address = wallet_id
        self.preferences = preferences # dict object
        self.date_of_birth = date_of_birth
