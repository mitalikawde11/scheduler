# Interview Scheduler

Interview scheduler is a React application that allows users to book and cancel interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

## Book appointment: 
When creating a new appointment, click on the add button, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week.


![""](https://github.com/mitalikawde11/scheduler/blob/master/docs/appointment_form.png?raw=true)

## Cancel appointment: 
When to delete an appointment, hover over the appointment & click on delete icon. It will show the delete confiramation message. If user clicks on confirm, it deletes an appointment.

![""](https://github.com/mitalikawde11/scheduler/blob/master/docs/delete_appointment.png?raw=true)


## Edit appointment: 
User can also edit an appointment. Hover over appointment & click on edit icon. It will display the form with previous student name & interviewer. User can edit student name and interviewer, click on the save button to save changes. 

![""](https://github.com/mitalikawde11/scheduler/blob/master/docs/appointment_display.png?raw=true)



## Handling error:
when something goes wrong while saving or deleting interview then save error or delete error will display.  

![""](https://github.com/mitalikawde11/scheduler/blob/master/docs/delete_error.png?raw=true)



## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## dependencies:
axios
@testing-library/react-hooks
react-test-renderer
storybook
cypress

