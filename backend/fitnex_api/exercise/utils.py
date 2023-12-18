import requests


def make_req(url):
    querystring = {"limit": "2"}

    headers = {
        "X-RapidAPI-Key": "b66e203ba8msh2f5903f28ae9dcbp1fdd05jsnb4b4f8add13b",
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
