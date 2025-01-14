Car Dealer App
This is a web application for a car dealership, developed with Next.js and React. The application allows users to select the make and year of a vehicle and view the available models.

Technologies Used
Next.js
React
TypeScript
Tailwind CSS
Axios

Features
Select vehicle make and year
Display available vehicle models
Navigation between pages
Asynchronous data loading


Installation
To install and run the project locally, follow these steps:

Clone the repository:

git clone https://github.com/vitoriosb/car-dealer-app.git

Navigate to the project directory:

cd car-dealer-app

Install the dependencies:

npm install

Create a .env file in the root of the project and add the necessary environment variables:

# Example environment variables
API_URL=https://vpic.nhtsa.dot.gov/api/vehicles
Run the project:

npm run dev

Usage

Open your browser and go to http://localhost:3000.
Select the vehicle make and year.
Click "Search" to view the available models.


Project Structure

/src
  /components
    Button.tsx
    Input.tsx
  /lib
    GenerateStaticParams.ts
  /pages
    /result
      /[makeId]
        /[year]
          page.tsx
  /request
    /api
      getMakes.ts
      getModels.ts
  /app
    layout.tsx
    page.tsx
    globals.css
    loading.tsx
next.config.js
tsconfig.json


License
This project is licensed under the MIT License. See the LICENSE file for details.
