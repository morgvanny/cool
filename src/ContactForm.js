import React from 'react'

export default function ContactForm(props) {
  return (
    <form>
      <label htmlFor="name-input">Name</label>
      <input id="name-input" />
      <label htmlFor="email-input">Email</label>
      <input id="email-input" />
      <label htmlFor="content-input">Content</label>
      <input id="content-input" />
      <button type="submit">Submit</button>
    </form>
  )
}
