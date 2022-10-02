export const state = () => ({
    eventName: 'we meet',
    startDate: '09/03/2022',
    eventDate: '12/24/2022'
  })

export const getters = {
    getEventName: state => {
        return state.eventName;
    },
    getStartDate: state => {
        return state.startDate;
    },
    getEventDate: state => {
        return state.eventDate;
    }
}

export const mutations = {
    addEventDate(state, text) {
        state.eventDate = text
      },
    addEventName(state, text) {
        state.eventName = text;
    },
    addStartDate(state, text) {
        state.startDate = text;
    }
}