import fs from "fs";
import { faker } from "@faker-js/faker";

const NUM_USERS = 100000;

const departments = [
  "Development",
  "Marketing",
  "Design",
  "QA",
  "HR",
  "Data",
  "Sales",
  "Customer Support",
  "Finance",
  "Legal",
  "Operations",
  "Product Management",
  "IT",
  "Research & Development",
  "Business Intelligence",
  "Procurement",
  "Administration",
  "Training & Development",
  "Security",
  "Supply Chain",
];
const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "UX/UI Designer",
  "Graphic Designer",
  "QA Engineer",
  "Test Automation Engineer",
  "HR Manager",
  "Recruiter",
  "Data Analyst",
  "Data Scientist",
  "Business Analyst",
  "Product Manager",
  "Project Manager",
  "Sales Executive",
  "Account Manager",
  "Customer Support Specialist",
  "Financial Analyst",
  "Legal Advisor",
  "IT Support Specialist",
  "Network Engineer",
  "Operations Manager",
  "Security Analyst",
  "Research Scientist",
  "Procurement Specialist",
  "Trainer",
  "Logistics Coordinator",
];

const currencies = ["USD", "EUR", "PKR", "INR", "GBP"];

const users = [];

for (let i = 1; i <= NUM_USERS; i++) {
  const age = faker.number.int({ min: 22, max: 60 });
  const salary = faker.number.int({ min: 30000, max: 150000 });
  const experience = faker.number.int({ min: 0, max: 20 });

  users.push({
    id: i,
    name: faker.person.fullName(), // ✅ Correct
    gender: faker.person.sex(), // ✅ Correct
    age,
    dob: faker.date.birthdate({ min: 22, max: 60, mode: "age" }),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    zip: faker.location.zipCode(),
    address: faker.location.streetAddress(),
    role: faker.helpers.arrayElement(roles),
    department: faker.helpers.arrayElement(departments),
    salary,
    currency: faker.helpers.arrayElement(currencies),
    joiningDate: faker.date.past({ years: 10 }).toISOString().split("T")[0],
    isActive: faker.datatype.boolean(),
    skills: faker.helpers.arrayElements(
      ["JavaScript", "Python", "React", "Node.js", "SQL", "Java", "C++"],
      faker.number.int({ min: 1, max: 5 })
    ),
    languages: faker.helpers.arrayElements(
      ["English", "Spanish", "French", "German", "Urdu", "Arabic"],
      faker.number.int({ min: 1, max: 3 })
    ),
    experience,
    projects: faker.helpers.arrayElements(
      ["Project A", "Project B", "Project C", "Project D", "Project E"],
      faker.number.int({ min: 1, max: 3 })
    ),
    performanceScore: faker.number.int({ min: 50, max: 100 }),
    bonus: faker.number.int({ min: 500, max: 10000 }),
    lastPromotionDate: faker.date
      .past({ years: 5 })
      .toISOString()
      .split("T")[0],
  });
}

// Write to db.json
const db = { users };
fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
console.log(`Generated ${NUM_USERS} users in db.json`);
