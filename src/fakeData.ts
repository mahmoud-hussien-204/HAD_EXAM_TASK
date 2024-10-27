import {IExam} from "@/app/(dashboard)/exams/interfaces";

export const fakeDataNotifications = [
  {
    id: "1",
    type: "Message",
    sender: "John Doe",
    message: "Hey, how are you?",
    timestamp: "2024-04-18 10:30:00",
  },
  {
    id: "2",
    type: "Alert",
    sender: "Admin",
    message: "Server maintenance scheduled for tomorrow.",
    timestamp: "2024-04-17 15:45:00",
  },
  {
    id: "3",
    type: "Reminder",
    sender: "Calendar",
    message: "Meeting at 3 PM today.",
    timestamp: "2024-04-18 12:00:00",
  },
  {
    id: "4",
    type: "Message",
    sender: "Jane Smith",
    message: "Don't forget to submit your report by EOD.",
    timestamp: "2024-04-16 09:20:00",
  },
  {
    id: "5",
    type: "Alert",
    sender: "System",
    message: "Low disk space on server.",
    timestamp: "2024-04-15 17:00:00",
  },
];

export const fakeDataExams: IExam[] = [
  {
    id: 1,
    title: "Basic Mathematics Exam",
    description: "This exam tests fundamental concepts in arithmetic and geometry.",
    questions: [
      {
        title: "What is 2 + 2?",
        description: "Choose the correct answer for the sum of 2 and 2.",
        answers: [
          {title: "3", isCorrect: false, description: "Incorrect answer"},
          {title: "4", isCorrect: true, description: "Correct answer"},
          {title: "5", isCorrect: false, description: "Incorrect answer"},
        ],
      },
      {
        title: "Which shape is a triangle?",
        description: "Identify the shape with three sides.",
        answers: [
          {title: "Square", isCorrect: false, description: "Has four sides"},
          {title: "Circle", isCorrect: false, description: "Has no sides"},
          {title: "Triangle", isCorrect: true, description: "Has three sides"},
          {title: "Rectangle", isCorrect: false, description: "Has four sides"},
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Science Basics Exam",
    description: "This exam tests basic knowledge of science concepts.",
    questions: [
      {
        title: "What is the chemical symbol for water?",
        description: "Choose the correct symbol for water.",
        answers: [
          {title: "H2O", isCorrect: true, description: "Correct answer"},
          {title: "O2", isCorrect: false, description: "Incorrect answer"},
          {title: "CO2", isCorrect: false, description: "Incorrect answer"},
        ],
      },
      {
        title: "What planet is known as the Red Planet?",
        description: "Identify the planet also known as the Red Planet.",
        answers: [
          {title: "Earth", isCorrect: false, description: "Not the Red Planet"},
          {title: "Mars", isCorrect: true, description: "Correct answer"},
          {title: "Jupiter", isCorrect: false, description: "Incorrect answer"},
        ],
      },
    ],
  },
];
