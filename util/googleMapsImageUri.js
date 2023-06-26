const API = "AIzaSyCTkAM8HINQ05nZiVZIE2Ce7KJ8bbLIBKM"
export const mapUri = (lat,long) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${API}`;

  