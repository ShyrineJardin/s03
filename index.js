let username, password, role;

function login() {
  username = prompt("Enter your username:").trim();
  password = prompt("Enter your password:").trim();
  role = prompt("Enter your role (admin, teacher, or student):").trim();

  if (!username || !password || !role) {
    alert("Input should not be empty!");
  } else {
    switch (role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        const grades = [90, 89, 79, 82, 91, 89, 71];
        console.log("Grades:");
        grades.forEach((grade, index) => {
          console.log(`Grade [${index + 1}]: ${grade}`);
        });
        calculateAverage(grades);
        break;
      default:
        alert("Role out of range.");
        break;
    }
  }
}

function calculateAverage(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = Math.round(sum / grades.length);

  console.log(`Your Average is: ${average}`);

  if (average <= 74) {
    console.log(`Hello, student. Your average is ${average}. The letter equivalent is F`);
  } else if (average >= 85 && average <= 89) {
    console.log(`Hello, student. Your average is ${average}. The letter equivalent is B`);
  } else if (average >= 90 && average <= 95) {
    console.log(`Hello, student. Your average is ${average}. The letter equivalent is A`);
  } else if (average > 96) {
    console.log(`Hello, student. Your average is ${average}. The letter equivalent is A+`);
  }
}

// Function call to execute the code
login();
