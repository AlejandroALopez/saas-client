/* eslint-disable no-multi-str */
import { Plan, Week } from "../types/planTypes";

export const testWeeks: Week = {
  "Week 1": ["Some task A", "Some task B", "Extra C", "Extra 2"],
  "Week 2": ["Some task C", "Some task D"],
  "Week 3": ["Some task E", "Some task F"],
  "Week 4": ["Some task G", "Some task H"],
};

export const testPlan1: Plan = {
  goal: "Learn Python",
  numWeeks: 4,
  tasks: [
    {
      title: "Install Python and an IDE",
      description:
        "Download and set up Python along with an Integrated Development Environment (IDE) for coding.",
      week: 1,
    },
    {
      title: "Learn basic syntax and data types",
      description:
        "Understand the fundamental syntax of Python and learn about different data types like strings, \
        integers, floats, and booleans.",
      week: 1,
    },
    {
      title: "Practice writing simple programs",
      description:
        "Start coding simple programs to get hands-on experience with Python syntax and data types.",
      week: 2,
    },
    {
      title: "Explore control flow (if statements, loops)",
      description:
        "Learn about conditional statements (if, elif, else) and loops (for, while) to control the \
          flow of your programs.",
      week: 3,
    },
    {
      title: "Study functions and modules",
      description:
        "Understand how to define and use functions in Python, and explore modules to extend the \
        functionality of your programs.",
      week: 4,
    },
  ],
};
