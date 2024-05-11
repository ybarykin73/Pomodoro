import React from "react"
import { FormattedMessage } from "react-intl"

import Button from "../subcomponents/button/Button"
import LanguageContext from "../../context/languageContext"

import messages from "./Settings.messages"
import './Settings.scss'

const Settings = () => {
  const [open, setOpen] = React.useState(false)
  const { setLanguage } = React.useContext(LanguageContext)

  return (
    <div className="setting">
      <Button
        style='base'
        onClick={() => setOpen(true)}
      >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.91276 0L9.26431 3.28047C8.17415 3.68453 7.17307 4.25091 6.29591 4.95879L3.08983 3.87207L0 9.12793L2.56797 11.3217C2.46925 11.9174 2.41812 12.4694 2.41812 13C2.41812 13.5314 2.47078 14.0824 2.56797 14.6783V14.6809L0 16.8746L3.08983 22.1279L6.29332 21.0438C7.17057 21.752 8.17392 22.3152 9.26431 22.7195L9.91276 26H16.0872L16.7357 22.7195C17.8266 22.3152 18.8265 21.7497 19.7041 21.0412L22.9102 22.1279L25.9974 16.8746L23.432 14.6783C23.5308 14.0826 23.5819 13.5306 23.5819 13C23.5819 12.4702 23.5305 11.9189 23.432 11.3242V11.3217L26 9.12539L22.9102 3.87207L19.7067 4.95625C18.8294 4.24799 17.8261 3.68476 16.7357 3.28047L16.0872 0H9.91276ZM12.0932 2.6H13.9068L14.4209 5.2L15.8005 5.71289C16.632 6.02091 17.3791 6.44378 18.0274 6.96719L19.1693 7.88633L21.7114 7.02813L22.6182 8.56934L20.5876 10.3061L20.8202 11.7355V11.7381C20.901 12.2255 20.9364 12.6344 20.9364 13C20.9364 13.3656 20.901 13.7744 20.8202 14.2619L20.5851 15.6914L22.6157 17.4281L21.7089 18.9719L19.1693 18.1111L18.0248 19.0328C17.3766 19.5562 16.632 19.9791 15.8005 20.2871H15.7979L14.4183 20.8L13.9042 23.4H12.0932L11.5791 20.8L10.1995 20.2871C9.36796 19.9791 8.62086 19.5562 7.97258 19.0328L6.83068 18.1137L4.28855 18.9719L3.38176 17.4307L5.41494 15.6914L5.17985 14.267V14.2645C5.10012 13.7749 5.06359 13.3649 5.06359 13C5.06359 12.6344 5.09897 12.2256 5.17985 11.7381L5.41494 10.3086L3.38176 8.57188L4.28855 7.02813L6.83068 7.88887L7.97258 6.96719C8.62086 6.44378 9.36796 6.02091 10.1995 5.71289L11.5791 5.2L12.0932 2.6ZM13 7.8C10.0946 7.8 7.70906 10.1445 7.70906 13C7.70906 15.8555 10.0946 18.2 13 18.2C15.9054 18.2 18.2909 15.8555 18.2909 13C18.2909 10.1445 15.9054 7.8 13 7.8ZM13 10.4C14.4702 10.4 15.6455 11.5551 15.6455 13C15.6455 14.4449 14.4702 15.6 13 15.6C11.5298 15.6 10.3545 14.4449 10.3545 13C10.3545 11.5551 11.5298 10.4 13 10.4Z" />
        </svg>
      </Button>
      {
        open &&
          <div className="setting-modal">
            <div className="setting-modal__header">
              <Button
                style='base'
                onClick={() => setOpen(false)}
              >
                <svg height="26" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="26" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                </svg>
              </Button>
            </div>
            <div className="setting__wrapper">
              <div className="setting__item">
                <h2 className="setting__title">
                  <FormattedMessage {...messages.language} />
                </h2>
                <div className="setting__radio">
                  <label className="setting__radio-item">
                    <input className="setting__radio-input" type="radio" onChange={() => setLanguage('ru')} name="language" defaultChecked />
                    <span className="setting__radio-checked">Rus</span>
                  </label>
                  <label className="setting__radio-item">
                    <input className="setting__radio-input" type="radio" onChange={() => setLanguage('en')} name="language" />
                    <span className="setting__radio-checked">En</span>
                  </label>
                </div>
              </div>
              <div className="setting__item">
                <div className="setting__item-header">
                  <div className="setting__item-subtitle">
                    <FormattedMessage {...messages.concentrationMinutes} values={{min: 20}} />
                  </div>
                  <h2 className="setting__title">
                    <FormattedMessage {...messages.concentrationTime} />
                  </h2>
                </div>
                <div className="setting__item-body">
                  <Button style='circle'>
                    <svg width="22" height="22" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/>
                    </svg>
                  </Button>
                  <Button style='circle'>
                    <svg width="22" height="22" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z"/>
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="setting__item">
                <div className="setting__item-header">
                  <div className="setting__item-subtitle">
                    <FormattedMessage {...messages.restMinutes} values={{min: 5}}/>
                  </div>
                  <h2 className="setting__title">
                    <FormattedMessage {...messages.restTime}/>
                  </h2>
                </div>
                <div className="setting__item-body">
                  <Button style='circle'>
                    <svg width="22" height="22" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/>
                    </svg>
                  </Button>
                  <Button style='circle'>
                    <svg width="22" height="22" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z"/>
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="setting__item">
                <div className="setting__item-header">
                  <div className="setting__item-subtitle">5</div>
                  <h2 className="setting__title">
                    <FormattedMessage {...messages.stepCount} />
                  </h2>
                </div>
                <div className="setting__item-body">
                  <Button style='circle'>
                    <svg width="22" height="22" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/>
                    </svg>
                  </Button>
                  <Button style='circle'>
                    <svg width="22" height="22" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Settings
