import requests
import os

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

import requests
import cloudinary
from cloudinary.uploader import upload

          
cloudinary.config( 
  cloud_name = "", 
  api_key = "", 
  api_secret = "" 
)


def download_and_upload_image(gif_url):
    try:
        # Download the GIF image
        response = requests.get(gif_url)
        response.raise_for_status()

        # Temporary file to store the downloaded image
        temp_file_path = "temp.gif"
        with open(temp_file_path, "wb") as temp_file:
            temp_file.write(response.content)

        # Upload the downloaded image to Cloudinary
        upload_result = upload(response.content)

        # Return the URL of the uploaded image on Cloudinary
        return upload_result.get("secure_url")

    except requests.RequestException as e:
        print(f"Error downloading image: {e}")
        return None
    except Exception as e:
        print(f"Error processing image: {e}")
        return None
    finally:
        # Clean up: remove the temporary file
        try:
            os.remove(temp_file_path)
        except Exception as e:
            print(f"Error removing temporary file: {e}")
