 // Function to create and animate the snowflakes
        function createSnowflake(x, y) {
            const snowflake = document.createElement('div');  // Create a div for the snowflake
            const size = Math.random() * 5 + 60; // Random size between 20px and 40px
            const moveX = Math.random() * 300 - 100; // Random horizontal movement
            const moveY = Math.random() * 300 - 100; // Random vertical movement
            
            // Randomly choose an image for the snowflake
            const images = ['snowflake1.png', 'snowflake2.png', 'snowflake3.png'];
            const randomImage = images[Math.floor(Math.random() * images.length)];

            // Random rotation speed and direction
            const rotationSpeed = Math.random() * 360 + 45; // Random speed between 180deg/s and 540deg/s
            const rotationDirection = Math.random() < 0.5 ? 1 : -1; // Randomly choose clockwise (1) or counter-clockwise (-1)
            const rotation = `${rotationDirection * rotationSpeed}deg`; // Apply direction and speed

            // Set up the snowflake style
            snowflake.classList.add('snowflake');
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            snowflake.style.left = `${x - size / 2}px`;
            snowflake.style.top = `${y - size / 2}px`;
            snowflake.style.setProperty('--move-x', `${moveX}px`);
            snowflake.style.setProperty('--move-y', `${moveY}px`);
            snowflake.style.setProperty('--rotate', rotation); // Apply random rotation
            snowflake.style.backgroundImage = `url(${randomImage})`; // Apply random image
            snowflake.style.backgroundSize = 'cover'; // Make sure the image covers the div
            snowflake.style.backgroundPosition = 'center'; // Center the image inside the div

            document.body.appendChild(snowflake);

            // Remove the snowflake after the animation ends
            setTimeout(() => {
                snowflake.remove();
            }, 2000); // Match the duration of the animation
        }

        // Event listener for mouse movement
        document.addEventListener('mousemove', (event) => {
            createSnowflake(event.pageX, event.pageY); // Create a snowflake where the mouse is
        });
