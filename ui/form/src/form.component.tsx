import React                       from 'react'
import { FC }                      from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { FormContent }             from './form-content/form-content.component'
import { FormProps }               from './form.interface'

const doNothing = () => {
  // do nothing
}

const sitekey = '6Lcsi1slAAAAAJgCMds-XAyW4MBJ9Vr4l87pejtE'

const Form: FC<FormProps> = ({ language, onSuccess = doNothing, onFailure = doNothing }) => (
  <GoogleReCaptchaProvider reCaptchaKey={sitekey}>
    <FormContent language={language} onFailure={onFailure} onSuccess={onSuccess} />
  </GoogleReCaptchaProvider>
)

export { Form }
