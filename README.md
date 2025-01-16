<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Healthy Diet Plans</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Healthy Diet Plans</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#plans">Diet Plans</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home">
        <div class="container">
            <h2>Welcome to your personalized diet plans!</h2>
            <p>Explore different diet plans tailored for your health and wellness goals.</p>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <h2>About Us</h2>
            <p>We provide expert-curated diet plans that suit various fitness goals including weight loss, muscle gain, and general health.</p>
        </div>
    </section>

    <section id="plans">
        <div class="container">
            <h2>Diet Plans</h2>
            <div class="diet-plan">
                <h3>Weight Loss Plan</h3>
                <p>A balanced diet plan designed to help you lose weight healthily and sustainably.</p>
                <ul>
                    <li>Breakfast: Oats with fruits</li>
                    <li>Lunch: Grilled chicken with vegetables</li>
                    <li>Dinner: Salmon with a side of salad</li>
                </ul>
            </div>
            <div class="diet-plan">
                <h3>Muscle Gain Plan</h3>
                <p>Our muscle gain plan focuses on providing adequate protein for muscle repair and growth.</p>
                <ul>
                    <li>Breakfast: Scrambled eggs with avocado</li>
                    <li>Lunch: Turkey with quinoa</li>
                    <li>Dinner: Steak with brown rice and vegetables</li>
                </ul>
            </div>
            <div class="diet-plan">
                <h3>General Health Plan</h3>
                <p>This plan focuses on overall health and well-being, providing a balanced intake of nutrients.</p>
                <ul>
                    <li>Breakfast: Smoothie with spinach, banana, and almond milk</li>
                    <li>Lunch: Grilled fish with steamed vegetables</li>
                    <li>Dinner: Chicken stir-fry with quinoa</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or need personalized advice, feel free to reach out to us!</p>
            <form action="submit-form.php" method="POST">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Healthy Diet Plans. All Rights Reserved.</p>
        </div>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>
