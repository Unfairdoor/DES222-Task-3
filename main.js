const cameraData = {
    // Curiosity cameras
    Curiosity: {
        FHAZ: {
            title: 'Front Hazard Avoidance Camera',
            imgSrc: '',
            description: 'Captures images to help avoid obstacles in front of the rover.',
            date: '',
            highlightImage: 'img/FHAZ_highlight.png',
        },
        RHAZ: {
            title: 'Rear Hazard Avoidance Camera',
            imgSrc: '',
            description: 'Captures images to help avoid obstacles behind the rover.',
            date: '',
            highlightImage: 'img/RHAZ_highlight.png',
        },
        MAST: {
            title: 'Mast Camera',
            imgSrc: '',
            description: 'Provides detailed panoramic images and color views of the Martian landscape.',
            date: '',
            highlightImage: 'img/MAST_highlight.png',
        },
        CHEMCAM: {
            title: 'Chemistry and Camera Complex',
            imgSrc: '',
            description: 'Analyzes the composition of rocks and soil from a distance.',
            date: '',
            highlightImage: 'img/CHEMCAM_highlight.png',
        },
        MAHLI: {
            title: 'Mars Hand Lens Imager',
            imgSrc: '',
            description: 'Provides close-up views of rocks and soil at microscopic detail.',
            date: '',
            highlightImage: 'img/MAHLI_highlight.png',
        },
        MARDI: {
            title: 'Mars Descent Imager',
            imgSrc: '',
            description: 'Captured video of the rover’s descent and landing.',
            date: '',
            highlightImage: 'img/MARDI_highlight.png',
        },
        NAVCAM: {
            title: 'Navigation Camera',
            imgSrc: '',
            description: 'Used for driving and navigation across the Martian surface.',
            date: '',
            highlightImage: 'img/NAVCAM_highlight.png',
        }
    },
    // Perseverance cameras
    Perseverance:{
        EDL_RUCAM: {
            title: 'EDL Up-Look Camera',
            imgSrc: '',
            description: 'Captured the parachute deployment during entry, descent, and landing (EDL).',
            date: '',
            highlightImage: 'img/EDL_RUCAM_highlight.png',
        },
        EDL_RDCAM: {
            title: 'EDL Down-Look Camera',
            imgSrc: '',
            description: 'Captured images of the ground during the descent stage.',
            date: '',
            highlightImage: 'img/EDL_RDCAM_highlight.png',
        },
        EDL_DDCAM: {
            title: 'EDL Descent Stage Down-Look Camera',
            imgSrc: '',
            description: 'Provided views of the landing site as the descent stage approached.',
            date: '',
            highlightImage: 'img/EDL_DDCAM_highlight.png',
        },
        EDL_PUCAM1: {
            title: 'EDL Parachute Up-Look Camera 1',
            imgSrc: '',
            description: 'Captured images of the parachute deployment process.',
            date: '',
            highlightImage: 'img/EDL_PUCAM1_highlight.png',
        },
        EDL_PUCAM2: {
            title: 'EDL Parachute Up-Look Camera 2',
            imgSrc: '',
            description: 'Captured additional views of the parachute deployment.',
            date: '',
            highlightImage: 'img/EDL_PUCAM2_highlight.png',
        },
        NAVCAM_LEFT: {
            title: 'Navigation Camera - Left',
            imgSrc: '',
            description: 'Used for navigation and path planning, positioned on the left.',
            date: '',
            highlightImage: 'img/NAVCAM_LEFT_highlight.png',
        },
        NAVCAM_RIGHT: {
            title: 'Navigation Camera - Right',
            imgSrc: '',
            description: 'Used for navigation and path planning, positioned on the right.',
            date: '',
            highlightImage: 'img/NAVCAM_RIGHT_highlight.png',
        },
        MCZ_LEFT: {
            title: 'Mastcam-Z Left',
            imgSrc: '',
            description: 'Captures high-definition images and videos with zoom capability on the left side.',
            date: '',
            highlightImage: 'img/MCZ_LEFT_highlight.png',
        },
        MCZ_RIGHT: {
            title: 'Mastcam-Z Right',
            imgSrc: '',
            description: 'Captures high-definition images and videos with zoom capability on the right side.',
            date: '',
            highlightImage: 'img/MCZ_RIGHT_highlight.png',
        },
        FRONT_HAZCAM_LEFT_A: {
            title: 'Front Hazard Avoidance Camera - Left',
            imgSrc: '',
            description: 'Helps avoid obstacles in the rovers front path on the left side.',
            date: '',
            highlightImage: 'img/FRONT_HAZCAM_LEFT_A_highlight.png',
        },
        FRONT_HAZCAM_RIGHT_A: {
            title: 'Front Hazard Avoidance Camera - Right',
            imgSrc: '',
            description: 'Helps avoid obstacles in the roverss front path on the right side.',
            date: '',
            highlightImage: 'img/FRONT_HAZCAM_RIGHT_A_highlight.png',
        },
        REAR_HAZCAM_LEFT: {
            title: 'Rear Hazard Avoidance Camera - Left',
            imgSrc: '',
            description: 'Helps avoid obstacles in the roverss rear path on the left side.',
            date: '',
            highlightImage: 'img/REAR_HAZCAM_LEFT_highlight.png',
        },
        REAR_HAZCAM_RIGHT: {
            title: 'Rear Hazard Avoidance Camera - Right',
            imgSrc: '',
            description: 'Helps avoid obstacles in the roverss rear path on the right side.',
            date: '',
            highlightImage: 'img/REAR_HAZCAM_RIGHT_highlight.png',
        },
        SKYCAM: {
            title: 'Sky Camera',
            imgSrc: '',
            description: 'Monitors weather and dust in the Martian atmosphere.',
            date: '',
            highlightImage: 'img/SKYCAM_highlight.png',
        },
        SHERLOC_WATSON: {
            title: 'SHERLOC WATSON Camera',
            imgSrc: '',
            description: 'Captures microscopic images for SHERLOCs analysis of rock and soil samples.',
            date: '',
            highlightImage: 'img/SHERLOC_WATSON_highlight.png',
        }
    }
};
  //List of Curiosity's Cameras
const roverData = {
    Curiosity:{
        cameras: [
            'FHAZ',
            'RHAZ',
            'MAST', 
            'CHEMCAM',
            'MAHLI',
            'MARDI',
            'NAVCAM'
        ]
    },
     //List of Perseverance's Cameras
    Perseverance:{
        cameras: [
            'EDL_RUCAM',
            'EDL_RDCAM',
            'EDL_DDCAM',
            'EDL_PUCAM1',
            'EDL_PUCAM2',
            'NAVCAM_LEFT',
            'NAVCAM_RIGHT',
            'MCZ_LEFT',
            'MCZ_RIGHT',
            'FRONT_HAZCAM_LEFT_A',
            'FRONT_HAZCAM_RIGHT_A',
            'REAR_HAZCAM_LEFT',
            'REAR_HAZCAM_RIGHT',
            'SKYCAM',
            'SHERLOC_WATSON'
        ]
    }
};

// fetch('./cameraData.json')
//     .then(response => response.json())
//     .then(data => {
//         // Store the JSON data as cameraData object
//         const cameraData = data;
//         console.log(cameraData.Curiosity.FHAZ.title); // example for debugging
//     })
//     .catch(error => console.error("There was an issue loading the camera data:", error));


// Once the page has loaded, set up the buttons for the cameras
document.addEventListener('DOMContentLoaded', () => {
    setupCameraButtonListeners('curiosity'); // Initialise with Curiosity
});


function switchRover(roverName){
    //Function called from rover button press
    console.log("Switching to : " + roverName);
    updateCameraTabs(roverName); //Change the tabs to reflect the chosen rover
    preloadCameraImages(roverName); //Query API for image URL's
    setupCameraButtonListeners(roverName); //Add the listeners for each button
}

function updateCameraTabs(roverName) {
    //Dynamically change the camera tabs depending on which rover is selected
    const navContainer = document.querySelector('.header__rowNavigation');
    navContainer.innerHTML = ''; // Clear existing tabs

    // Get the list of cameras for the selected rover
    const cameras = roverData[roverName].cameras;
    // console.log(cameras);

    cameras.forEach(camera => {
        // Create the button element for each camera
        const cameraButton = document.createElement('button');
        cameraButton.className = 'camera-button';
        cameraButton.dataset.camera = camera;
        cameraButton.innerHTML = `<p class="header__menu-item ui text size-textmd">${camera}</p>`;

        // Add event listener to each button
        cameraButton.addEventListener('click', () => {
            getImageURL(roverName, camera);
        });

        navContainer.appendChild(cameraButton);
    });
}

function preloadCameraImages(roverName) {
    // Send the API request for the image URL and date info
    const cameras = roverData[roverName].cameras; // Correctly reference the cameras array
    cameraName = "NAVCAM"

    cameras.forEach(cameraName => {
        const apiUrl = `https://mars-photos.herokuapp.com/api/v1/rovers/${roverName}/latest_photos?camera=${cameraName}`;
        
        fetchWithRetry(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.latest_photos && data.latest_photos.length > 0) {
                    const imgSrc = data.latest_photos[0].img_src;
                    const dateSrc = data.latest_photos[0].earth_date;
                    
                    // Store image URL and date in the cameraData object
                    cameraData[roverName][cameraName].imgSrc = imgSrc;
                    cameraData[roverName][cameraName].date = dateSrc;
                } else {
                    console.warn(`No image found for ${cameraName} camera on ${roverName}`);
                    cameraData[roverName][cameraName].imgSrc = 'path/to/placeholder-image.jpg';
                    cameraData[roverName][cameraName].date = 'No date available';
                }
            })
            .catch(error => {
                console.error(`Error fetching image for ${cameraName}: ${error.message}`);
            });
    });
}

function fetchWithRetry(url, retries = 3, delay = 2000) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).catch(error => {
        if (retries > 0) {
            console.log(`Retrying... Attempts left: ${retries}`);
            return new Promise(resolve => setTimeout(resolve, delay))
                .then(() => fetchWithRetry(url, retries - 1, delay));
        } else {
            console.error('All retry attempts failed:', error);
            throw error;
        }
    });
}




function updateTabContent(cameraName) {
    //Add the content stored in the cameraData to the HTML
    const tabImage = document.querySelector('.opentab__cameraPicture');
    const tabTitle = document.querySelector('.opentab__title');
    const tabDescription = document.querySelector('.opentab__description');
    const tabDate = document.querySelector('.opentab__date');
    const tabHighlightImage = document.querySelector('.opentab__hightlightImage');

    // Update elements with the fetched data
    tabImage.src = cameraData[cameraName].imgSrc;
    tabDescription.textContent = cameraData[cameraName].description;
    tabTitle.textContent = cameraData[cameraName].title;
    tabDate.textContent = `Date taken: ${cameraData[cameraName].date}`;
    tabHighlightImage.src = cameraData[cameraName].highlightImage;
}

function setupCameraButtonListeners(roverName) {
    //Add listeners for the camera buttons
    const cameraButtons = document.querySelectorAll('.camera-button');

    cameraButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cameraName = button.getAttribute('data-camera');
            console.log(`Camera selected: ${cameraName}`);
            
            // Display the preloaded data for the selected camera
            updateTabContent(cameraName, roverName);
        });
    });
}

