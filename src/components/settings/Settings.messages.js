import { defineMessages } from "react-intl"

const messages = {
  language: {
    id: `app.settings.language`,
    defaultMessage: 'Language:'
  },
  concentrationTime: {
    id: 'app.settings.concentration-time',
    defaultMessage: `Concentration time`
  },
  concentrationMinutes: {
    id: 'app.settings.concentration-minutes',
    defaultMessage: `{min} min`
  },
  restTime: {
    id: `app.settings.rest-time`,
    defaultMessage: 'Rest time'
  },
  restMinutes: {
    id: 'app.settings.rest-minutes',
    defaultMessage: `{min} min`,
  },
  stepCount: {
    id: 'app.settings.step-count',
    defaultMessage: `Step count`
  }
}

const definedMessages = defineMessages(messages)

export default definedMessages

