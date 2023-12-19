import requests


def make_req(url):
    querystring = {"limit": "2"}

    headers = {
        "X-RapidAPI-Key": "70d6472d65msh9049d34eadcfccep11be13jsn0852ddb5bc01",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    }

    try:
        # Fetch data from the API
        response = requests.get(url, headers=headers, params=querystring)
        response.raise_for_status()  # Raise an exception for HTTP errors

        api_data = response.json()

        return api_data
    except requests.RequestException as e:
        # Handle API request errors
        print(f"Error making API request: {e}")


# url = "https://exercisedb.p.rapidapi.com/exercises"
