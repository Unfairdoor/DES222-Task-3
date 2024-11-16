const cameraData = {
    // Curiosity cameras
    Curiosity: {
        FHAZ: {
            title: 'Front Hazard Avoidance Camera',
            imgSrc: '',
            description: "The FHAZ (Front Hazard Avoidance Camera) on Curiosity is located on the rover's front hull, facing forward. It helps the rover navigate by providing stereo images to detect and avoid obstacles in its path. This camera is crucial for autonomous movement, ensuring Curiosity safely traverses the Martian surface.",
            date: '',
            highlightImage: 'img/CURIOSITY-FHAZ.png',
        },
        RHAZ: {
            title: 'Rear Hazard Avoidance Camera',
            imgSrc: '',
            description: "The RHAZ (Rear Hazard Avoidance Camera) is located on the rear of the Curiosity rover. It works similarly to the FHAZ, providing images to help with navigation, specifically for reverse driving and backing up. The RHAZ helps ensure the rover avoids obstacles while moving in reverse.",
            date: '',
            highlightImage: 'img/CURIOSITY-RHAZ.png',
        },
        MAST: {
            title: 'Mast Camera',
            imgSrc: '',
            description:"The MAST (MastCam) is located on the rover's mast, which is the tall structure on top of Curiosity. It is used for capturing high-resolution images of the Martian landscape, enabling the study of surface features, weather, and atmosphere. The MastCam is essential for sending back panoramic photos and 3D images for scientific analysis.",
            date: '',
            highlightImage: 'img/CURIOSITY-MAST.png',
        },
        CHEMCAM: {
            title: 'Chemistry and Camera Complex',
            imgSrc: '',
            description: "The CHEMCAM (Chemistry and Camera) is located on the rover's mast, just above the MastCam. It is a laser-induced breakdown spectroscopy (LIBS) system, which uses a laser to vaporize rock surfaces and analyze the resulting plasma to determine the chemical composition of materials. ChemCam helps identify minerals and study Martian geology from a distance, providing critical data for mission planning and scientific research.",
            date: '',
            highlightImage: 'img/CURIOSITY-CHEMCAM.png',
        },
        MAHLI: {
            title: 'Mars Hand Lens Imager',
            imgSrc: '',
            description: "MAHLI (Mars Hand Lens Imager) is located on the robotic arm of the Curiosity rover. It is a high-resolution camera designed to take close-up images of rocks, soil, and other surfaces on Mars. MAHLI can capture detailed pictures with a resolution of up to 14 megapixels, helping scientists examine the texture, composition, and features of Martian materials in fine detail. This camera is essential for studying small-scale geological features and conducting in-depth analysis of rocks.",
            date: '',
            highlightImage: 'img/CURIOSITY-MAHLI.png',
        },
        MARDI: {
            title: 'Mars Descent Imager',
            imgSrc: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/00100/mrdi/0100MD0000340000101525I01_DXXX.jpg',
            description: 'Captured video of the rover’s descent and landing.',
            date: '2012-11-16',
            highlightImage: 'img/CURIOSITY-MARDI.png',
        },
        NAVCAM: {
            title: 'Navigation Camera',
            imgSrc: '',
            description: "NAVCAM (Navigation Camera) is located on the mast of the Curiosity rover. It is used primarily for navigation and obstacle avoidance, providing wide-angle images to help guide the rover across the Martian terrain. NAVCAM assists in creating 3D maps of the rover's surroundings, enabling safe navigation and path planning. These cameras play a critical role in autonomous movement, allowing Curiosity to explore Mars without constant manual control. NAVCAM also captures panoramic images of the Martian landscape.",
            date: '',
            highlightImage: 'img/CURIOSITY-NAVCAM.png',
        }
    },
    // Perseverance cameras
    Perseverance:{
        EDL_RUCAM: {
            title: 'EDL Up-Look Camera',
            imgSrc: 'https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00001/ids/edr/browse/edl/EUF_0001_0667022666_963ECV_N0010052EDLC00001_0010LUJ01_1200.jpg',
            description: "EDL_RUCAM (Entry, Descent, and Landing Remote Upper Camera) is located on the top of the Perseverance rover, facing upward. This camera is part of the suite of instruments used during the rover’s entry, descent, and landing (EDL) phase. It helps capture high-resolution images of the Martian atmosphere, surface, and the rover's surroundings during its descent. These images assist in the deployment of the rover, and the camera is used for visual confirmation of the rover’s location and orientation.",
            date: '2021-02-19',
            highlightImage: 'img/PERSEVERANCE-RUCAM.png',
        },
        EDL_RDCAM: {
            title: 'EDL Down-Look Camera',
            imgSrc: 'https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00001/ids/edr/browse/edl/EDF_0001_0667022424_464ECM_N0010052EDLC00001_0010LUJ01_1200.jpg',
            description: "RDCAM (Rear Descent Camera) is located on the rear of the Perseverance rover, positioned facing downward during the rover's descent to Mars. RDCAM is designed to capture high-resolution images of the rover's descent and the surrounding environment as it approaches the surface. The camera assists in the navigation and landing process, providing critical visual data about the landing site. These images are important for analyzing the descent and ensuring the rover's safe touch down, especially in the final stages of landing.",
            date: '2021-02-19',
            highlightImage: 'img/PERSEVERANCE-RDCAM.png',
        },
        NAVCAM_LEFT: {
            title: 'Navigation Camera - Left',
            imgSrc: '',
            description: "NAVCAM Left (Navigation Camera Left) is located on the left side of Perseverance's mast. It is part of the rover's navigation system, used to capture panoramic images of the Martian surface, helping the rover to navigate autonomously and avoid obstacles. The camera plays a critical role in the rover's movement and path planning, enabling it to map its surroundings in 3D and make decisions on the best route forward. NAVCAM Left works in conjunction with the NAVCAM Right to provide a stereoscopic view of the terrain.",
            date: '',
            highlightImage: 'img/PERSEVERANCE-NAVCAM.png',
        },
        NAVCAM_RIGHT: {
            title: 'Navigation Camera - Right',
            imgSrc: '',
            description: "NAVCAM Left (Navigation Camera Right) is located on the right side of Perseverance's mast. It is part of the rover's navigation system, used to capture panoramic images of the Martian surface, helping the rover to navigate autonomously and avoid obstacles. The camera plays a critical role in the rover's movement and path planning, enabling it to map its surroundings in 3D and make decisions on the best route forward. NAVCAM Left works in conjunction with the NAVCAM Left to provide a stereoscopic view of the terrain.",
            date: '',
            highlightImage: 'img/PERSEVERANCE-NAVCAM.png',
        },
        MCZ_LEFT: {
            title: 'Mastcam-Z Left',
            imgSrc: '',
            description: "MCZ Left (Mastcam-Z Left) is located on the left side of Perseverance's mast. It is part of the Mastcam-Z system, which is a pair of high-resolution cameras that provide 3D imaging and color photography of the Martian surface. The MCZ Left camera works alongside its counterpart, the MCZ Right, to capture detailed panoramic images, allowing scientists to study the geology, weather, and surface conditions of Mars. Mastcam-Z's zoom capabilities also enable close-up images of rock formations and other features, contributing to the rover’s science goals.",
            date: '',
            highlightImage: 'img/PERSEVERANCE-MASTCAM.png',
        },
        MCZ_RIGHT: {
            title: 'Mastcam-Z Right',
            imgSrc: '',
            description: "MCZ Left (Mastcam-Z Right) is located on the right side of Perseverance's mast. It is part of the Mastcam-Z system, which is a pair of high-resolution cameras that provide 3D imaging and color photography of the Martian surface. The MCZ Left camera works alongside its counterpart, the MCZ Left, to capture detailed panoramic images, allowing scientists to study the geology, weather, and surface conditions of Mars. Mastcam-Z's zoom capabilities also enable close-up images of rock formations and other features, contributing to the rover’s science goals.",
            date: '',
            highlightImage: 'img/PERSEVERANCE-MASTCAM.png',
        },
        FRONT_HAZCAM_LEFT_A: {
            title: 'Front Hazard Avoidance Camera - Left',
            imgSrc: '',
            description: "Front Hazcam Left (FHAZ Left) is located on the front of Perseverance and is one of the Hazard Avoidance Cameras (Hazcams). These cameras are mounted on the rover's front and rear to help it navigate the Martian terrain. The Front Hazcam Left captures black-and-white images of the terrain in front of the rover, providing real-time feedback to prevent obstacles or hazards from interfering with the rover's movement. These cameras are crucial for safe driving and maneuvering, allowing Perseverance to avoid potential obstacles, rocks, or cliffs that could damage the rover.",
            date: '',
            highlightImage: 'img/PERSEVERANCE-FHAZ.png',
        },
        FRONT_HAZCAM_RIGHT_A: {
            title: 'Front Hazard Avoidance Camera - Right',
            imgSrc: '',
            description: "Front Hazcam Left (FHAZ Right) is located on the front of Perseverance and is one of the Hazard Avoidance Cameras (Hazcams). These cameras are mounted on the rover's front and rear to help it navigate the Martian terrain. The Front Hazcam Right captures black-and-white images of the terrain in front of the rover, providing real-time feedback to prevent obstacles or hazards from interfering with the rover's movement. These cameras are crucial for safe driving and maneuvering, allowing Perseverance to avoid potential obstacles, rocks, or cliffs that could damage the rover.",
            date: '',
            highlightImage: 'img/PERSEVERANCE-FHAZ.png',
        },
        REAR_HAZCAM_LEFT: {
            title: 'Rear Hazard Avoidance Camera - Left',
            imgSrc: '',
            description: "Rear Hazcam Left (RHAZ Left) is located on the rear of Perseverance and is part of the Hazard Avoidance Cameras (Hazcams) system. Positioned at the rover’s rear, this camera provides black-and-white imagery of the terrain behind the rover, helping it navigate when backing up or when reversing. The Rear Hazcam Left works alongside its counterpart on the right and the front-facing Hazcams, ensuring the rover avoids obstacles in all directions, particularly during reverse maneuvers. This helps Perseverance safely traverse the Martian surface and avoid hazards that could damage the rover.",
            date: '',
            highlightImage: 'img/PERSEVERANCE-RHAZ.png',
        },
        REAR_HAZCAM_RIGHT: {
            title: 'Rear Hazard Avoidance Camera - Right',
            imgSrc: '',
            description: "Rear Hazcam Right (RHAZ Right) is located on the rear of Perseverance and is part of the Hazard Avoidance Cameras (Hazcams) system. Positioned at the rover’s rear, this camera provides black-and-white imagery of the terrain behind the rover, helping it navigate when backing up or when reversing. The Rear Hazcam Right works alongside its counterpart on the left and the front-facing Hazcams, ensuring the rover avoids obstacles in all directions, particularly during reverse maneuvers. This helps Perseverance safely traverse the Martian surface and avoid hazards that could damage the rover.",
            date: '',
            highlightImage: 'img/PERSEVERANCE-RHAZ.png',
        },
        SKYCAM: {
            title: 'Sky Camera',
            imgSrc: 'https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00100/ids/edr/browse/meda/WSM_0100_0675827328_000ECM_N0040218MEDA03145_0000LUJ01_1200.jpg',
            description: "SkyCam (SKYCAM) is located on top of the Perseverance rover's hull, facing upward to capture images of the Martian sky. It's primarily used to observe the Martian atmosphere, including monitoring dust storms and cloud formations, and studying the weather. SkyCam is also used in conjunction with other instruments to support studies of atmospheric conditions. One interesting feature is that it can capture images of Mars' thin atmosphere, which is crucial for understanding the planet's weather patterns and its potential for human exploration in the future.",
            date: '2021-05-31',
            highlightImage: 'img/PERSEVERANCE-SKYCAM.png',
        },
        SHERLOC_WATSON: {
            title: 'SHERLOC WATSON Camera',
            imgSrc: 'https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/01304/ids/edr/browse/shrlc/SIF_1304_0782740375_648EBY_N0610376SRLC08046_0000LMJ01_1200.jpg',
            description: "SHERLOC and WATSON are both located on the Perseverance rover’s arm. SHERLOC uses a laser and spectrometers to analyze rocks for signs of organic compounds and past life, playing a key role in searching for ancient life on Mars. WATSON, positioned next to SHERLOC, captures high-resolution close-up images of rocks and terrain, supporting SHERLOC's findings and helping scientists study the Martian surface in detail. Together, these instruments are vital for assessing Mars' habitability and searching for evidence of life.",
            date: '2024-10-19',
            highlightImage: 'img/PERSEVERANCE-SHERLOC_WATSON.png',
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

const roverDescriptions = {
    Curiosity: {
        title: "Curiosity Rover",
        description: "The Curiosity Rover is a car-sized rover that landed on Mars in August 2012 as part of NASA's Mars Science Laboratory mission. It is designed to explore the surface of Mars and analyze its geology, climate, and potential habitability. Curiosity's primary mission was planned to last about two Earth years, but it has far exceeded expectations, continuing to operate well beyond that time. As of now, it is still sending valuable scientific data from Mars, helping scientists understand the planet’s history and its potential for life.",
        imgSrc: "img/Curiosity_rover.jpg", // Image for Curiosity
        highlightImage: "img/CURIOSITY-3d.png"
    },
    Perseverance: {
        title: "Perseverance Rover",
        description: "The Perseverance Rover is a car-sized rover that landed on Mars in February 2021 as part of NASA's Mars 2020 mission. Its main objective is to search for signs of ancient life and collect samples for potential future return to Earth. Perseverance is equipped with advanced scientific tools to study the planet’s geology, climate, and its potential for past microbial life. Its primary mission is expected to last about one Martian year (approximately 687 Earth days), but like Curiosity, it is designed to continue operating well beyond its initial mission timeline.",
        imgSrc: "img/Perseverance_rover.jpg", // Image for Perseverance
        highlightImage: "img/PERSEVERANCE-3d.png"
    }
};

const cameraDataCache = {};
let latestSol = null;

// Once the page has loaded, set up the buttons for the cameras and fetch the latest sol
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const sol = await fetchLatestSol();
        latestSol = sol - 1;
        // updateCameraTabs('Curiosity'); // Start with Curiosity's cameras
        switchRover('Curiosity');

        // Add event listeners for the rover buttons
        const curiosityButton = document.getElementById('curiosityButton');
        const perseveranceButton = document.getElementById('perseveranceButton');

        curiosityButton.addEventListener('click', () => switchRover('Curiosity'));
        perseveranceButton.addEventListener('click', () => switchRover('Perseverance'));
    } catch (error) {
        console.error("Error fetching latest sol:", error);
    }
});

async function fetchLatestSol() {
    const latestSolUrl = 'https://mars.nasa.gov/rss/api/?feed=raw_images&category=mars2020&feedtype=json&latest=true';

    return fetch(latestSolUrl)
    //error handling sol lookup
        .then(response=>{
            if(!response.ok){
                throw new Error(`Failed to fetch latest sol: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data=>data.latest_sols[data.latest_sols.length -1])
        .catch(error=>console.error("Error fetching last sol: ",error));
}



function switchRover(roverName) {
    // Function to switch between rovers and update the content
    const roverData = roverDescriptions[roverName];
    
    if (roverData) {
        updateRoverHomeScreen(roverName, roverData);
    } else {
        console.error(`No data available for rover: ${roverName}`);
    }
}

// Function to update the home screen with rover information
function updateRoverHomeScreen(roverName, roverData) {
    // Update the title and description
    const titleElement = document.querySelector('.opentab__title');
    const descriptionElement = document.querySelector('.opentab__description');
    const imageElement = document.querySelector('.opentab__cameraPicture');
    const highlightImage = document.querySelector('.opentab__highlightImage');

    // Update the text content
    titleElement.textContent = roverData.title || 'No title available';
    descriptionElement.textContent = roverData.description || 'No description available';
    console.log(highlightImage.src);
    highlightImage.src = roverDescriptions[roverName].highlightImage;
    console.log(roverDescriptions[roverName].highlightImage);
    // Update the camera tabs
    updateCameraTabs(roverName);

    // Update the rover image (on the right)
    imageElement.src = roverData.imgSrc;
}

function updateCameraTabs(roverName) {
    // Dynamically change the camera tabs depending on which rover is selected
    const navContainer = document.querySelector('.header__rowNavigation');
    navContainer.innerHTML = ''; // Clear existing tabs

    // Get the list of cameras for the selected rover
    const cameras = roverData[roverName].cameras;

    cameras.forEach(camera => {
        // Create the button element for each camera
        const cameraButton = document.createElement('button');
        cameraButton.className = 'camera-button';
        cameraButton.dataset.camera = camera;
        cameraButton.innerHTML = `<p class="header__menu-item ui text size-textmd">${camera}</p>`;

        // Attach the event listener directly here, eliminating the need for setupCameraButtonListeners
        cameraButton.addEventListener('click', () => {
            preloadCameraImages(roverName, camera);
        });

        navContainer.appendChild(cameraButton);
    });
}

function preloadCameraImages(roverName, cameraName) {
    // Check if the camera data is cached
    if (cameraDataCache[cameraName]) {
        console.log('Using cached data for', cameraName);
        updateTabContent(roverName, cameraName); // Use the cached data to update the UI
    } else {
        // If not cached, fetch the data
        const apiUrl = `https://mars-photos.herokuapp.com/api/v1/rovers/${roverName}/photos?camera=${cameraName}&sol=${latestSol}`;
        console.log(apiUrl);
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.photos && data.photos.length > 0) {
                // Fetch the image and data from the JSON
                const imgSrc = data.photos[0].img_src;
                const dateSrc = data.photos[0].earth_date;
                // Store it in the cameraData dictionary
                cameraData[roverName][cameraName].imgSrc = imgSrc;
                cameraData[roverName][cameraName].date = dateSrc;
                // Store the fetched data in the cache
                cameraDataCache[cameraName] = { imgSrc, date: dateSrc };
                
                // Update the UI with the fetched data
                updateTabContent(roverName, cameraName); // Call updateTabContent with the cameraName
            } else {
                console.warn(`No image found for ${cameraName} camera on ${roverName}`);
                cameraDataCache[cameraName] = {};
                updateTabContent(roverName, cameraName); // Call updateTabContent even if no image is found
            }
        })
        .catch(error => {
            console.error(`Error fetching image for ${cameraName}:`, error);
            updateTabContent(roverName, cameraName); // Call updateTabContent to handle errors
        });
    }
}


function updateTabContent(roverName, cameraName) {
    // Fetch the appropriate HTML elements
    const tabImage = document.querySelector('.opentab__cameraPicture');
    const tabTitle = document.querySelector('.opentab__title');
    const tabDescription = document.querySelector('.opentab__description');
    const tabDate = document.querySelector('.opentab__date');
    const tabHighlightImage = document.querySelector('.opentab__highlightImage');

    // Access the camera data from the cameraData object using roverName and cameraName
    const roverData = cameraData[roverName];
    const cameraShorthand = roverData[cameraName];


    // Update the UI with the camera data
    tabImage.src = cameraShorthand.imgSrc;
    tabDescription.textContent = cameraShorthand.description || 'No description available';
    tabTitle.textContent = cameraShorthand.title || 'No title available';
    tabDate.textContent = `Date taken: ${cameraShorthand.date}`;
    tabHighlightImage.src = cameraShorthand.highlightImage;
}