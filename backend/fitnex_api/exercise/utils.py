from datetime import datetime
from dotenv import load_dotenv
import cloudinary
import cloudinary.exceptions
import cloudinary.uploader
import requests
import os

load_dotenv()

cloudinary.config(
    cloud_name=os.environ.get('CLOUDINARY_CLOUD_NAME'),
    api_key=os.environ.get('CLOUDINARY_API_KEY'),
    api_secret=os.environ.get('CLOUDINARY_API_SECRET')
)


def make_req(url):
    querystring = {"limit": "50", "offset": "200"}

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


def download_and_upload_image(gif_url, folder='fitnex_gifs'):
    try:
        # Download the GIF image
        response = requests.get(gif_url)
        response.raise_for_status()

        # Temporary file to store the downloaded image
        # temp_file_path = "temp.gif"
        # with open(temp_file_path, "wb") as temp_file:
        #     temp_file.write(response.content)

        # Upload the downloaded image to Cloudinary
        upload_result = cloudinary.uploader.upload(
            response.content,
            folder=folder,
            resource_type='auto',
            format='gif'
        )

        # Return the URL of the uploaded image on Cloudinary
        return upload_result.get("secure_url")

    except requests.RequestException as e:
        print(f"Error downloading image: {e}")
        return None
    except cloudinary.exceptions.Error as e:
        print(f'Error uploading an GIF to cloudinary: {e}')
        return None
    except Exception as e:
        print(f"Error processing image: {e}")
        return None
    finally:
        # Clean up: remove the temporary file
        # try:
        #     os.remove(temp_file_path)
        # except Exception as e:
        #     print(f"Error removing temporary file: {e}")
        print('Done')


def get_date_details(date_str):
    try:
        date_obj = datetime.strptime(date_str, '%Y-%m-%d')
        month = date_obj.strftime('%B')
        year = date_obj.strftime('%Y')
        return (month, year)
    except ValueError:
        return None


def get_organized_data(logs):
    output = {}
    for log in logs:
        date_str = log.get('date_created')
        month, year = get_date_details(date_str)

        if year not in output:
            output[year] = {}
        if month not in output[year]:
            output[year][month] = []
        output[year][month].append(log)
    return output
