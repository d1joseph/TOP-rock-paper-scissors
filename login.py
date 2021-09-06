import profiles
import json

def main():

    # read json and access user properties
    with open("user_00001.json") as rego_data:
        json_obj = json.load(rego_data)
        rego_data.close()

    # user data parsed from json
    user_zero = profiles.User(
        json_obj["user_name"],
        json_obj["wallet_address"],
        json_obj["preferences"],
        json_obj["date_of_birth"],
    )







