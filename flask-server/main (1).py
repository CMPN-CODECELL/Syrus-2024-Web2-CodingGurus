from bs4 import BeautifulSoup
import requests
import json
import jsonify

# with open("website.html", encoding='utf-8') as file:
#     data = file.read()
#
# soup = BeautifulSoup(data, "html.parser")
# print(soup.title)
tempdata={

}

def write_to_json():
    try:
        # Specify the file path
        json_file_path = './location_data.json'

        # Open the file in write mode
        with open(json_file_path, 'w') as json_file:
            # Write the data to the file
            json.dump(tempdata, json_file)

        # Return a success message
        return jsonify({"message": "Data written to JSON file successfully!"})

    except Exception as e:
        # Handle exceptions, log the error, etc.
        return jsonify({"error": str(e)})


def mainfunc(location):
    response = requests.get(f"https://www.javatpoint.com/tourist-places-in-madhya-pradesh")
    yc_webpage = response.text
    soup = BeautifulSoup(yc_webpage, "html.parser")
    
    all_links = soup.find_all(name="div" , class_="leftmenu")
    print(all_links)
    # Extract links from 'a' tags within each 'div'
    links = []
    for div in all_links:
        links.extend([a['href'] for a in div.find_all('a')])

# Print the links
    print(links)

# Save links to a JSON file
    with open('links.json', 'w') as json_file:
        json.dump(links, json_file)
    locations = []
 
     # Find all h2 tags representing locations
    location_tags = soup.find_all('h2', class_='h2')
#     print(location_tags)
    for location_tag in location_tags:
         # Extract information about each location
         location_info = {}
 
         # Extract location name from h2 tag
         location_info['name'] = location_tag.text.strip()
 
         # Extract corresponding p tag (location info)
         next_p_tag = location_tag.find_next('p')
         location_info['info'] = next_p_tag.text.strip() if next_p_tag else ''
 
         # Extract image src from the corresponding img tag
         img_tag = location_tag.find_next('img')
         location_info['image_src'] = img_tag['src'] if img_tag and 'src' in img_tag.attrs else ''
 
         # Append the location information to the list
         locations.append(location_info)
 
     # Convert the list of locations to JSON
    locations_json = json.dumps(locations, indent=2)
 
     # Print or use the generated JSON
#     print(locations_json)
#     print(paragraphs)
    return locations_json
mainfunc("mumbai")
