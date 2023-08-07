import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
       setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    })
  }, []);
  
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, {interview})
    .then(() => {
      updateSpots(appointments)
      setState((prev) => {
        return { ...prev, appointments}
      })
    })
  }
  
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      updateSpots(appointments)
      setState((prev) => {
        return { ...prev, appointments}
      })
    })
  }

  function updateSpots(appointments) {
    const dayObject = state.days.find(day => {
      if (day.name === state.day) {
        return day
      }
    })
    const appointmentArrOfDay = dayObject.appointments;
    let spots = 0;
    for (const key in appointments) {
      const appointment = appointments[key]
      if (appointmentArrOfDay.includes(appointment.id)) {
        if (!appointment.interview) {
          spots += 1;
        }
      }
    }
    setState((prev) => {
          for (const day of prev.days) {
            if(prev.day === day.name) {
              day.spots = spots;
            }
          }
          return prev;
        })
  }

  return { state, setDay, bookInterview, cancelInterview }
}