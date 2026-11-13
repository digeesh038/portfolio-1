const React = require('react');
const ReactPDF = require('@react-pdf/renderer');
const fs = require('fs');

const { Document, Page, Text, View, StyleSheet, Font, Link } = ReactPDF;

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Times-Roman',
    fontSize: 9.5,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    color: '#111111',
    lineHeight: 1.32
  },
  header: {
    alignItems: 'center',
    marginBottom: 10
  },
  name: {
    fontFamily: 'Times-Bold',
    fontSize: 22,
    marginBottom: 2
  },
  title: {
    fontFamily: 'Times-Bold',
    fontSize: 11,
    marginBottom: 3
  },
  contact: {
    fontSize: 9,
    color: '#222222',
    marginBottom: 2
  },
  links: {
    fontSize: 9,
    color: '#222222'
  },
  sectionTitle: {
    fontFamily: 'Times-Bold',
    fontSize: 10.5,
    marginTop: 8,
    marginBottom: 2,
    borderBottomWidth: 0.8,
    borderBottomColor: '#222222',
    paddingBottom: 2
  },
  summaryText: {
    fontSize: 9,
    textAlign: 'justify',
    marginTop: 3,
    marginBottom: 4,
    lineHeight: 1.35
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 2
  },
  boldText: {
    fontFamily: 'Times-Bold'
  },
  italicText: {
    fontFamily: 'Times-Italic'
  },
  bulletList: {
    marginLeft: 6,
    marginBottom: 3
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 2
  },
  bulletPoint: {
    width: 8,
    fontSize: 9
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.32,
    textAlign: 'justify'
  },
  skillRow: {
    fontSize: 9,
    marginBottom: 2.5,
    lineHeight: 1.32
  }
});

const ResumeDocument = () => (
  React.createElement(Document, null,
    // Page 1
    React.createElement(Page, { size: "A4", style: styles.page },
      // Header
      React.createElement(View, { style: styles.header },
        React.createElement(Text, { style: styles.name }, "Digeesh Sakthivel"),
        React.createElement(Text, { style: styles.title }, "Full Stack Developer"),
        React.createElement(Text, { style: styles.contact }, "Bangalore, India  |  digeesh038@gmail.com  |  +91 7339343016"),
        React.createElement(Text, { style: styles.links }, "Portfolio  |  LinkedIn  |  GitHub")
      ),

      // Professional Summary
      React.createElement(Text, { style: styles.sectionTitle }, "Professional Summary"),
      React.createElement(Text, { style: styles.summaryText },
        "Full Stack Developer with 1.2+ year of experience developing and maintaining web applications using React.js, TypeScript, JavaScript, Node.js, Express.js, Python, FastAPI, REST APIs, PostgreSQL, MongoDB, and Docker. Experienced in building responsive user interfaces, reusable React components, backend services, authentication, database integration, API validation, CRUD workflows, dashboards, and containerized applications. Strong understanding of end-to-end application development, API integration, debugging, and modern web architecture."
      ),

      // Experience
      React.createElement(Text, { style: styles.sectionTitle }, "Experience"),
      
      // Oraxiz
      React.createElement(View, { style: styles.rowBetween },
        React.createElement(Text, { style: styles.boldText }, "Full Stack Developer – Oraxiz India Private Limited, Remote"),
        React.createElement(Text, { style: styles.boldText }, "Jun 2026 – Sep 2026")
      ),
      React.createElement(View, { style: styles.bulletList },
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Worked on Delex, an asset inspection and maintenance platform, using React.js, TypeScript, FastAPI, and MongoDB.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Built screens and REST APIs for the asset register, inspection checklists, equipment history, and functional areas.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Added defect and corrective action pages, with image upload for both defects and fixes.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Built the flow from inspection to maintenance: create, schedule, and assign work orders, track progress, and record manpower, material, and machinery costs.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Made dashboards and reports for inspection, repair, defect, and work-order status, and added JWT login with file uploads and exports.")
        )
      ),

      // Archle Labs
      React.createElement(View, { style: styles.rowBetween },
        React.createElement(Text, { style: styles.boldText }, "MERN Stack Developer – Archle Labs Private Limited, Bengaluru, Karnataka"),
        React.createElement(Text, { style: styles.boldText }, "Sep 2025 – May 2026")
      ),
      React.createElement(View, { style: styles.bulletList },
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Worked for 3 months as an Intern and 6 months as a Trainee on MERN stack projects.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Contributed to Hydrology ERP, a system to manage industrial water treatment plants.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Built frontend pages in React.js and Tailwind CSS for plant monitoring, shift handover, assets, maintenance, work orders, procurement, and inventory.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Made forms to record plant readings like pH, TDS, turbidity, flow, and pressure for each treatment stage.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Connected the pages to REST APIs, and used Git and GitHub for version control.")
        )
      ),

      // Education
      React.createElement(Text, { style: styles.sectionTitle }, "Education"),
      React.createElement(View, { style: styles.rowBetween },
        React.createElement(Text, { style: styles.boldText }, "Sri Ramakrishna Engineering College, Coimbatore, Tamil Nadu"),
        React.createElement(Text, { style: styles.boldText }, "Nov 2021 – May 2025")
      ),
      React.createElement(View, { style: styles.rowBetween },
        React.createElement(Text, null, "Bachelor of Technology in Information Technology"),
        React.createElement(Text, { style: styles.boldText }, "CGPA: 7.05/10")
      ),

      // Technical Skills
      React.createElement(Text, { style: styles.sectionTitle }, "Technical Skills"),
      React.createElement(Text, { style: styles.skillRow },
        React.createElement(Text, { style: styles.boldText }, "Programming Languages: "),
        "JavaScript (ES6+), TypeScript, Python, SQL"
      ),
      React.createElement(Text, { style: styles.skillRow },
        React.createElement(Text, { style: styles.boldText }, "Frontend Development: "),
        "HTML5, CSS3, React.js, Next.js, Tailwind CSS, Responsive Web Design"
      ),
      React.createElement(Text, { style: styles.skillRow },
        React.createElement(Text, { style: styles.boldText }, "Backend Development: "),
        "FastAPI, Node.js, Express.js, REST APIs, Socket.IO"
      ),
      React.createElement(Text, { style: styles.skillRow },
        React.createElement(Text, { style: styles.boldText }, "Databases: "),
        "PostgreSQL, MongoDB, Mongoose, MySQL, Redis"
      ),
      React.createElement(Text, { style: styles.skillRow },
        React.createElement(Text, { style: styles.boldText }, "Authentication & Security: "),
        "JWT, Google OAuth, Passport.js, Role-Based Access Control (RBAC), Zod, CORS"
      ),
      React.createElement(Text, { style: styles.skillRow },
        React.createElement(Text, { style: styles.boldText }, "Tools & Deployment: "),
        "Git, GitHub, Docker, Firebase, Vercel, Netlify, Postman"
      ),
      React.createElement(Text, { style: styles.skillRow },
        React.createElement(Text, { style: styles.boldText }, "Core Concepts: "),
        "RESTful APIs, CRUD Operations, API Integration, Database Integration, State Management"
      ),

      // Projects (Section start)
      React.createElement(Text, { style: styles.sectionTitle }, "Projects"),
      React.createElement(Text, { style: [styles.boldText, { marginTop: 4, marginBottom: 2 }] }, "Delex – Asset Inspection & Maintenance Management Platform"),
      React.createElement(View, { style: styles.bulletList },
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Developed and maintained a full-stack industrial asset management platform using React.js, TypeScript, FastAPI, and MongoDB to manage equipment inspections, defects, corrective actions, maintenance, and work orders.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Built workflows covering asset/Ex-register management, inspection checklists, equipment history, defect analysis, corrective actions, functional areas, and work-order management, connecting user actions to REST APIs and persistent data.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Implemented inspection-to-maintenance flow including defect and corrective-image uploads, work-order creation, scheduling, assignment, progress/completion tracking, and maintenance cost details for manpower, material, and machinery.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Developed dashboards and reports for project overview, inspection status, repair status, defect analysis, work-order status, failure trends, and plan-vs-actual tracking; also implemented JWT-based access control, file handling, exports, and reusable data components.")
        )
      )
    ),

    // Page 2
    React.createElement(Page, { size: "A4", style: styles.page },
      // Hydrology ERP
      React.createElement(Text, { style: [styles.boldText, { marginBottom: 2 }] }, "Hydrology ERP – Industrial Water Treatment & Plant Operations ERP"),
      React.createElement(View, { style: styles.bulletList },
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Developed a centralized ERP using React.js, FastAPI, Supabase/PostgreSQL, and REST APIs to manage industrial water-treatment operations, maintenance, procurement, inventory, compliance, and reporting.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Built modules for plant monitoring, process data, shift handover, assets, maintenance, work orders, procurement, vendors, water/salt/material inventory, energy monitoring, compliance, documents, and analytics.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Implemented process-monitoring workflows for Water Intake, Aeration, Clarifier, RO, Evaporation, and ATFD stages, capturing operational parameters such as pH, TDS, turbidity, flow, pressure, dissolved oxygen, temperature, steam consumption, salt yield, and moisture.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Developed API and database workflows for operational records, approvals, CRUD operations, and analytics; implemented JWT authentication, plant-scoped access, and role-based permissions for administrators, managers, operators, and employees.")
        )
      ),

      // Esports Points Table Maker
      React.createElement(Text, { style: [styles.boldText, { marginTop: 4, marginBottom: 2 }] }, "Esports Points Table Maker – Full-Stack Tournament Management Platform"),
      React.createElement(View, { style: styles.bulletList },
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Developed a full-stack tournament management platform using React.js, Node.js, Express.js, PostgreSQL, and Redis to manage tournaments, matches, players, standings, and scoring workflows.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Implemented tournament creation, match scoring, leaderboard calculation, player rankings, standings, and tie-breaker processing.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Built REST APIs using Node.js and Express.js and integrated them with the React frontend for tournament and match management.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Implemented Socket.IO for real-time score and leaderboard updates without page refreshes.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Integrated Google OAuth, JWT authentication, Razorpay payments, PDF exports, Docker containerization, and Vercel deployment.")
        )
      ),

      // Drill App
      React.createElement(Text, { style: [styles.boldText, { marginTop: 4, marginBottom: 2 }] }, "Drill App – MERN Coding Practice Platform"),
      React.createElement(View, { style: styles.bulletList },
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Developed a MERN stack coding practice platform using React.js, Node.js, Express.js, MongoDB, and Mongoose for interactive coding practice and performance tracking.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Designed the user flow for attempting coding drills, submitting answers, calculating instant scores, and reviewing performance feedback through reusable React components.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Implemented secure authentication using Google OAuth, Passport.js, and JWT, with protected routes and user account workflows.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Added Zod request validation and secured REST APIs with Helmet, CORS, and rate limiting; used Tailwind CSS and Docker for frontend consistency and development environments.")
        )
      ),

      // Bino Master
      React.createElement(Text, { style: [styles.boldText, { marginTop: 4, marginBottom: 2 }] }, "Bino Master – Dynamic Page Generation Engine"),
      React.createElement(View, { style: styles.bulletList },
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Developed a dynamic page generation platform using Next.js, Express.js, MongoDB, and Mongoose to generate web pages from structured JSON data.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Designed the data flow to receive page content through REST APIs, store it in MongoDB, and render dynamically generated pages through reusable frontend components.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Implemented dynamic URL routing and separated frontend rendering from backend API services to maintain a modular application architecture.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Added SEO capabilities including meta tags, XML sitemaps, and robots.txt, with interactive UI animations using Framer Motion.")
        )
      ),

      // Farm Connect
      React.createElement(Text, { style: [styles.boldText, { marginTop: 4, marginBottom: 2 }] }, "Farm Connect – Agricultural Marketplace Platform"),
      React.createElement(View, { style: styles.bulletList },
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Developed an agricultural marketplace connecting farmers and buyers for product discovery, transactions, and agricultural services.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Designed separate workflows and interfaces for Farmers, Buyers, and Admins, supporting role-specific marketplace operations.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Implemented product, user, and transaction management using PHP and MySQL, including database-backed marketplace workflows.")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Developed equipment rental functionality and implemented role-based access control to restrict features according to user roles.")
        )
      ),

      // Certifications
      React.createElement(Text, { style: styles.sectionTitle }, "Certifications"),
      React.createElement(View, { style: styles.bulletList },
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Learn to CSS Masterclass – 2022")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Mastering JavaScript: From Basics to Dynamic Web Development – 2023")
        ),
        React.createElement(View, { style: styles.bulletItem },
          React.createElement(Text, { style: styles.bulletPoint }, "•"),
          React.createElement(Text, { style: styles.bulletText }, "Learn SQL – Skillrack – 2023")
        )
      )
    )
  )
);

async function generate() {
  console.log("Generating updated resume PDF...");
  await ReactPDF.renderToFile(React.createElement(ResumeDocument), 'public/digeesh_resume.pdf');
  await ReactPDF.renderToFile(React.createElement(ResumeDocument), 'src/digee_resume.pdf');
  console.log("Successfully generated public/digeesh_resume.pdf and src/digee_resume.pdf");
}

generate().catch(err => {
  console.error("Error generating resume:", err);
  process.exit(1);
});

