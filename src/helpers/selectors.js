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

}