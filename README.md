# DRIP  

![welcome](https://i.imgur.com/RBPcZLF.png)

DRIP is an app built to help you take care of your houseplants. Wtih a daily display of who needs taking care of, whether it be watering or fetilizing, you won't have to guess anymore. And, of course, seasons change, environments fluctuate, so if your plant doesn't need to be watered as often as it once did, or if it's been getting a bit too crispy between waterings, you can adjust the care frequency on the fly!

## Installation

You will need to fork and clone this repository as well as the backend repository that is [linked here](https://github.com/patrick-rush/react-drip-backend).

Currently, the server is configured to run on `localhost:3000` while the frontend runs on another port. If you would like to run the backend on a different port, you can do so by changing the server variable in the `.env` file found in the root of this directory.

After running `rails s` serverside (and ensuring that it is on the correct port), you can run `npm install && npm start` in the frontend's root directory.

You're all set!

## Functionality

![drip-plants](https://i.imgur.com/YQmVLxm.png)
![drip-events](https://i.imgur.com/VeETMPG.png)

Drip allows you to enter all of your plants along with their name, species, location, watering frequency, fertilizing frequency and any notes you'd like to make. Once you create your first care event, whether it be watering or fertilizing, it will automatically repeat whenever it is completed. Each day, you'll have a list of plants that need taking care of that day! 

![new-plant](https://i.imgur.com/lD8vCA4.png)

New plants can be added, and when plants are added with a photo, the photo will become the background of their info card! Here is an example of a plant's info card:

![plant-info-card](https://i.imgur.com/sQC18fs.png)

## Roadmap

Currently, the backend is already configured with devise, so a future version of this app will be hosted publicly and will have the ability to support multiple users.

## Contributing

You are welcome to submit pull requests as you see fit.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Info

This project was created for the React portion of Flatiron School's Software Engineering program. Thank you for checking it out! 