export function getAppointmentsForDay(state, day) {
  let result = [];
 
  if (!state.days) {
    return result;
  }
  
  // ----- 1 method: appointments as object
  for (const e of state.days) {
    if (e.name === day) {
      const appointmentArr = e.appointments;
      for (const key in state.appointments) {
        if (appointmentArr.includes(state.appointments[key].id)) {
          result.push(state.appointments[key]);
        }
      }
    } 
  }

  return result;



  // ----- 2 method: converting appointments object into array and using filter method -----
  // for (const e of state.days) {
  //   if (e.name === day) {
  //     const appointmentArr = e.appointments;
  //     // for (const key in state.appointments) {
  //     const appointmentsArray = Object.values(state.appointments);
  //     result = appointmentsArray.filter((e) => {
  //       if (appointmentArr.includes(e.id)) {
  //         return e;
  //       }
  //     })
  //   } 
  // }
  // return result;

};


export function getInterview(state, interview) {
  let interviewData = {};

  if (!interview) {
    return null;
  }
  
  const interviewerId = interview.interviewer;
  const interviewerObj = state.interviewers[interviewerId];

  interviewData = {
    student: interview.student,
    interviewer: {
      id: interviewerObj.id,
      name: interviewerObj.name,
      avatar: interviewerObj.avatar
    }
  };

  return interviewData;

};


export function getInterviewersForDay(state, day) {
  let result = [];
 
  if (!state.days) {
    return result;
  }
  
  // ----- 1 method: interviewers as object
  for (const e of state.days) {
    if (e.name === day) {
      const interviewersArr = e.interviewers;
      for (const key in state.interviewers) {
        if (interviewersArr.includes(state.interviewers[key].id)) {
          result.push(state.interviewers[key]);
        }
      }
    } 
  }

  return result;
};