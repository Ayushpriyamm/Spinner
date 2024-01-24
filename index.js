
        let slides = [
            {
                image: "telecom.jpg",
                title: "Telecom",
                text: "The Telecom Industry in India is the second largest in the world with a subscriber base of over 1.2bn. The Mobile industry is expected to create total economic value of $217.4..."
            },
            {
                image: "textile.jpg",
                title: "Textile & Garments",
                text: "The Indian textiles industry is one of the oldest and largest in the world, contributing to 7% of industrial output, 2% of GDP, and 15% of exports. The sector employs over 45 million people..."
            },
            {
                image: "agriculture.jpg",
                title: "Agriculture",
                text: "India is the world's largest producer of milk, pulses, and jute, and ranks as the second largest producer of rice, wheat, sugarcane, cotton, fruits, and vegetables. The sector accounts for 18% of GDP and 50% of workforce..."
            },
            {
                image: "healthcare.jpg",
                title: "Healthcare",
                text: "The Indian healthcare sector is expected to reach $372 billion by 2022, driven by rising incomes, greater health awareness, lifestyle diseases, and increasing access to insurance. The sector comprises hospitals, medical devices, clinical trials, outsourcing, telemedicine, and health insurance..."
            },
            {
                image: "tourism.jpg",
                title: "Tourism",
                text: "India is one of the most popular tourist destinations in the world, attracting over 10 million foreign visitors and generating $30 billion in foreign exchange earnings in 2019. The sector contributes to 9.2% of GDP and 8.1% of total employment..."
            }
        ];

        // The container element for the slider
        let slider = document.getElementById("slider");

        // The container element for the text box
        let textBox = document.getElementById("textBox");

        // A function to create a slide element
        function createSlide(slide) {
            // Create a div element for the slide
            let slideDiv = document.createElement("div");
            // Add a class name for styling
            slideDiv.className = "slide";
            // Set the background image to the slide image
            slideDiv.style.backgroundImage = "url(" + slide.image + ")";
            // Create a span element for the slide title
            let slideTitle = document.createElement("span");
            // Add a class name for styling
            slideTitle.className = "slideTitle";
            // Set the text content to the slide title
            slideTitle.textContent = slide.title;
            // Append the slide title to the slide div
            slideDiv.appendChild(slideTitle);
            // Return the slide div
            return slideDiv;
        }

        // A function to create a text element
        function createText(slide) {
            // Create a div element for the text
            let textDiv = document.createElement("div");
            // Add a class name for styling
            textDiv.className = "text";
            // Create a h3 element for the text title
            let textTitle = document.createElement("h3");
            // Set the text content to the slide title
            textTitle.textContent = slide.title;
            // Append the text title to the text div
            textDiv.appendChild(textTitle);
            // Create a p element for the text content
            let textContent = document.createElement("p");
            // Set the text content to the slide text
            textContent.textContent = slide.text;
            // Append the text content to the text div
            textDiv.appendChild(textContent);
            // Return the text div
            return textDiv;
        }

        // A function to display a slide in the text box
        function displaySlide(index) {
            // Clear the text box
            textBox.innerHTML = "";
            // Get the slide data from the slides array
            let slide = slides[index];
            // Create a text element from the slide data
            let text = createText(slide);
            // Append the text element to the text box
            textBox.appendChild(text);
        }

        // Loop through the slides array
        for (let i = 0; i < slides.length; i++) {
            // Get the slide data from the slides array
            let slide = slides[i];
            // Create a slide element from the slide data
            let slideElement = createSlide(slide);
            // Add an event listener to the slide element
            slideElement.addEventListener("click", function () {
                // Display the slide in the text box
                displaySlide(i);
            });
            // Append the slide element to the slider
            slider.appendChild(slideElement);
        }

        // Display the first slide by default
        displaySlide(0);

   