# REFLECTION.md

## 1. Can I explain what my code does?

My code creates a dynamic, interactive survey form using HTML, CSS, and JavaScript. The HTML is responsible for structuring the form, including input fields like text inputs, radio buttons, checkboxes, and a dropdown menu. The CSS provides styling to ensure the form looks visually appealing, is responsive, and maintains a consistent design across different screen sizes. JavaScript handles the form validation by checking if fields are filled correctly before submission, using functions to validate each input type and providing user feedback through error messages. This ensures that users have a seamless experience while filling out the form.

## 2. What was my coding process?

I began by planning the structure of the form, deciding which input types were required to make it engaging and comprehensive. After organizing my project files, I started building the HTML form and added all the necessary input fields. I then styled the form using CSS, focusing on creating a responsive and user-friendly design. My next step was implementing JavaScript for input validation, where I created functions for each validation scenario, such as checking empty fields and using regular expressions for pattern matching. Throughout the project, I used Git for version control, working on separate branches for each task to keep my progress organized. After completing each part, I merged the changes back into the main branch.

## 3. What challenges did I have?

One of the challenges I faced was implementing regex validation for specific input fields, such as the username field. It took some trial and error to design a pattern that allowed flexibility but still enforced the required format. Additionally, ensuring that the form maintained a consistent appearance across different browsers was tricky, as certain CSS properties rendered differently in each browser. To overcome this, I did extensive testing and adjusted my CSS to be more standardized. Another challenge was ensuring the form's accessibility, particularly in linking labels correctly to inputs and using ARIA attributes for better screen reader compatibility.

## 4. What would I do differently now?

If I were to start over, I would adopt a mobile-first design approach from the beginning. By designing the form with mobile users in mind initially, it would simplify making the layout responsive for other devices later. Additionally, I would invest more time in setting up automated testing for form validation, which could help catch errors more efficiently during development. I would also experiment with adding subtle animations or transitions to enhance the user experience, such as animations when displaying error messages or focus transitions for better input navigation. Overall, this project taught me the importance of planning, testing, and iterating on user experience and functionality.