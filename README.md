# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

//Chris Bala CRM

User Signup Page:

Input Fields:

Username
Email
Password
Functionality:

Users enter their details and submit the signup form.
An email with a verification link is sent to the provided email address.
Users click on the link to verify their signup.
User Login Page (Extended):

Additional Functionality:
Users who have not verified their email cannot access the dashboard.
After successful verification, they gain access to the dashboard and ticket management features.
Email Verification Flow:

Email Template:

When a user signs up, an email is sent with a unique verification link. The email contains instructions and a link for verification.
Verification Link:

Clicking the verification link confirms the user's email address.
Verification Status:

The user's account is marked as verified in the database.



Admin Creates Employee Account:

The admin logs into the admin control panel of the CRM system.
The admin has the ability to create new employee accounts by providing a username, email, and setting an initial password.
Send Verification Email:

Upon creating an employee account, the system generates a unique verification link.
An email containing this link, username and password is sent to the specified email address for the employee.
Employee Email Verification:

The employee receives the verification email and clicks on the provided link.
Clicking the link verifies the employee's email and account.
Access CRM Employee Login:

After successful email verification, the employee gains access to the CRM system.
The employee logs in using their email and password.


User (Client) Submits Technical Complaint:

Users log into the CRM system to submit technical complaints or issues they are experiencing.
Information collected may include details about the device, software, operating system, and a description of the problem.

Categorization and Severity Level:

Upon complaint submission, the CRM system automatically categorizes the issue based on predefined categories (e.g., software bug, hardware malfunction, user error).
Users may indicate the severity level of the issue, helping prioritize the resolution process.


Admin Review and Assignment:

Admins review the incoming technical complaints and assign them to the appropriate technical support staff(employee).
Assignment may consider factors such as the nature of the issue, expertise of the support staff, and workload.

Employee Technical Support:

Assigned technical support employees access the CRM system to view their assigned tickets.
They communicate with admin through the ticket system.

Ticket Closure and Final Communication:

Once the complaint is resolved, the employee updates the ticket status.

User Login page
username: chrisbala32@gmail.com
password: chrisbala

Employee Login page
username: chrisbala8888@gmail.com
password: chrisbala

Admin Login page
username: balachris8888@gmail.com
password: chrisbala