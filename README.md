# 3D Shirt AI Generator

## Overview

Welcome to the GitHub repository for the 3D Shirt Customization WebApp! This project is an immersive web application that empowers users to customize 3D shirt models using a powerful tech stack. The frontend is built using Vite, React, and Tailwind CSS, while the backend is developed with Express and Node.js. Additionally, the TryLeap AI API is seamlessly integrated to generate dynamic shirt designs and colors.

## Screen Snapshots

<p float="left">
  <img src="https://imgur.com/oNNycfs.png" width=400  style="border-radius: 10px;" />
  <img src="https://imgur.com/s01FC1N.png" width=400 style="border-radius: 10px;"  />
 <img src="https://imgur.com/U22xYsh.png" width=250 style="border-radius: 10px;"  />
<img src="https://imgur.com/zWXvJTY.png" width=250 style="border-radius: 10px;"  />
</p>

Video Demo link: https://youtu.be/d6FXOOD05n8

Demo Link: https://threejs-ai-react.vercel.app/

## Features

- Dynamic 3D Shirt Customization: The heart of the web app is the interactive 3D shirt model, brought to life using Three.js. Users can manipulate, rotate, zoom, and personalize the shirt model in real-time. This engaging experience lets users tailor their clothing items precisely to their preferences.
- Vite for Rapid Development: The frontend is powered by Vite, a fast build tool that enhances the development experience. With near-instant hot module replacement and optimized build times, Vite ensures a smooth and efficient development workflow.
- Tailwind CSS for Responsive Design: The user interface is crafted using Tailwind CSS, allowing for efficient and responsive design across various screen sizes. This ensures that the web app looks and functions well on both desktop and mobile devices.
- Express and Node.js Backend: The backend is built using Express and Node.js, providing a robust foundation for handling API requests, managing user sessions, and serving the frontend files. This separation of concerns enhances the maintainability and scalability of the application.
- The TryLeap AI API integration enables users to generate custom shirt designs effortlessly. Through POST requests, the web app generates logos and color schemes based on user preferences, adding a personalized touch to each design.

## Getting Started

To get started, clone the repository and install the dependencies:

Clone the repository:

Code snippet

```
git clone https://github.com/Nuellity/Threejs-AI-React.git

```

Install Frontend dependencies:

Code snippet

```
cd client
npm install

```

Install API dependencies:

Code snippet

```
cd api
npm install

```

Then, start the api server:

Code snippet

```
cd api
npm run start

```

To start the client :

Code snippet

```
cd client
npm run dev

```

The application will be available at ` http://127.0.0.1:5173/`.

The API application will be available at `http://localhost:4000`.

### Deployment

To deploy the application, you can use a service like Render or Vercel.

## Contributing

Contributions are welcome! Please open an issue or a pull request if you have any ideas for improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Nuellity/Threejs-AI-React/blob/main/LICENSE) file for details.
