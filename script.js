document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Close Mobile Menu on Link Click
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });

  // Contact Form Submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Collect form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // API endpoint for Google Apps Script
      const apiUrl =
        "https://script.google.com/macros/s/AKfycbwZKSE-4Ae4-q71bm6uXvbxJH0Uvz277I6-LzvilQgliqA1C4__RHOSuWlf62MrOQhF/exec"; // Google Apps Script URL

      // FormData object to send data to the server
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      // Send form data using fetch API
      fetch(apiUrl, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Your message has been sent successfully.");
            document.getElementById("contact-form").reset(); // Reset the form
          } else {
            alert("There was an error sending your message. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error sending your message. Please try again.");
        });
    });

  // Scroll Transition for "Projects" Section
  const projectsSection = document.querySelector(".projects");

  if (projectsSection) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add "visible" class when in view
          } else {
            entry.target.classList.remove("visible"); // Remove "visible" class when out of view
          }
        });
      },
      {
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    observer.observe(projectsSection);
  }

  // Scroll Transition for "Skills" Section
  const skillsSection = document.querySelector(".skills");

  if (skillsSection) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add "visible" class when in view
          } else {
            entry.target.classList.remove("visible"); // Remove "visible" class when out of view
          }
        });
      },
      {
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    observer.observe(skillsSection);
  }

  // Scroll Transition for "Contact Me" Section
  const contactSection = document.querySelector(".contact");

  if (contactSection) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add "visible" class when in view
          } else {
            entry.target.classList.remove("visible"); // Remove "visible" class when out of view
          }
        });
      },
      {
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    observer.observe(contactSection);
  }

  // Smooth Scroll for Anchors
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Scroll Transition for Project Boxes
  const projectBoxes = document.querySelectorAll(".projects-box");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add "visible" class when in view
        } else {
          entry.target.classList.remove("visible"); // Remove "visible" class when out of view
        }
      });
    },
    {
      threshold: 0.2 // Trigger when 20% of the box is visible
    }
  );

  projectBoxes.forEach((box) => {
    observer.observe(box);
  });
});
