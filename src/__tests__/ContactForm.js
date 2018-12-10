import React from 'react'
import {render} from 'react-testing-library'
import ContactForm from '../ContactForm'

test('renders a form with title, content, tags, and a submit button', () => {
  const {getByLabelText, getByText} = render(<ContactForm />)
  getByLabelText(/name/i)
  getByLabelText(/email/i)
  getByLabelText(/content/i)
  getByText(/submit/i)
})
