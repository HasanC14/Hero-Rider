# Hero Rider

Hero Rider is a ride-sharing startup that connects drivers with passengers. In addition to ride-sharing, the website also offers driving lessons. This project was built using Node.js, React.js, MongoDB, Firebase, Stripe, and Vercel.

## Features

The following features have been implemented in this project:

1. Two types of sign up:
    - Join as a rider: Users need to add their full name, email, age, address, phone number, driving license picture, area, NID picture, profile picture, car information (name, model, nameplate), password, confirm password, and vehicle type (car, bike). After registration, the user will be redirected to their profile page.
    - Join as a driving lesson learner: Users need to add their full name, email, age, address, phone number, profile picture, NID picture, password, confirm password, and vehicle type (car, bike).

2. Admin panel:
    - The admin can view a list of registered users and search users by email, phone, and full name.
    - The admin can filter users by age range (example: 18-25, 26-30).
    - Proper backend pagination with 10 data per page has been implemented.

3. Bulk actions:
    - Every row in the table has a checkbox to mark/check for bulk action.
    - The admin can block multiple users if anything suspicious is found.

4. Payment:
    - If a user joins as a driving lesson learner, they will find two packages: 
        - Car driving lessons for $200
        - Bike driving lessons for $100
    - Users have to make payment via Stripe.


## Tech Stack

- MongoDB
- ReactJS
- ExpressJS
- Node.js
- Tailwind CSS
- Stripe
- Firebase
- Vercel

## Installation
1. Clone the repository
2. Clone the Client Side repository
3. Clone the Server Side repository
4. Install the dependencies
5. Start the project
6. Open your browser and visit `http://localhost:3000` to view the project.

## Contributing

If you want to contribute to the project, please feel free to create a pull request. All contributions are welcome!

## Contact

If you have any questions or suggestions, please don't hesitate to reach out. You can contact me at chowdhuryh999@gmail.com.

