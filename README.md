# Dog Gallery App

This is a React web application that displays a gallery of 6 random dog images from random.dog. Users can choose one or more images to favorite (using local storage). If the user doesn’t like any of the six images, they can use a refresh button to get 6 more. The app has two main endpoints:
- `/` - The main gallery page
- `/favorites` - Displays all the favorite dogs

## Features

- Display a gallery of 6 random dog images
- Favorite one or more dog images
- Refresh button to load new images
- Responsive design using Flexbox
- Local storage to save favorites
- Navigation between gallery and favorites pages

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dog-gallery-app.git
   cd dog-gallery-app

# Install dependencies:

npm install

# Start the development server:

npm start

# Usage
- Visit the main gallery page at http://localhost:3000/
- Click the "Favorite" button to add an image to your favorites
- Click the "Refresh" button to load new images
- Visit the favorites page at http://localhost:3000/favorites to see your favorite images

# Running the app with docker

- Build the Docker image:

docker build -t dog-gallery-app .

- Run the Docker container:

docker run -p 5000:5000 dog-gallery-app

- Open your browser and navigate to http://localhost:5000 to verify that your app is running inside the Docker container.

# Future Improvements
- Remove from Favorites: Add functionality to remove images from the favorites list.
- Image Details: Display additional details for each image, such as the date it was added to favorites.
- Improved UI/UX: Enhance the user interface and user experience with better styling and animations.
- Error Handling: Improve error handling for API requests and image loading.
- Testing: Add comprehensive tests for all components using Jest and React Testing Library.
- Performance Optimization: Optimize image loading and caching to improve performance.

# Performance Considerations

- Parallel API Requests: Fetch multiple images in parallel to reduce loading times.
- Lazy Loading: Use the loading="lazy" attribute on images to defer loading until they are in view.
- Responsive Images: Use the srcSet and sizes attributes to serve appropriately sized images based on the device and screen resolution.
- Local Storage Management: Efficiently manage local storage to avoid performance issues with large amounts of data.
- Code Splitting: Implement code splitting using React's lazy and Suspense to load components only when needed.