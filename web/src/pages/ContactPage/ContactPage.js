
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  useMutation,
} from '@redwoodjs/web'

import BlogLayout from 'src/layouts/BlogLayout'
var useForm = require("react-hook-form").useForm;

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: ContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = (props) => {
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      alert('Thank you for your submission!')
    },
  })


  console.log("Register here ", useForm())
  // extending react hook form manually
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => {

    console.log(data)
    create({ variables: { input: data } })
  }

  const customFormHandler = (data) => {
    console.log("Form handling ", data)
  }
  return (
    <BlogLayout>
      <form onSubmit={handleSubmit(customFormHandler)}

      >
        <input name="i1" ref={register} /><br />
        <input name="i2" ref={register} /><br />
        <select id="cars" name="carlist"
          ref={register}
        >

          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <input type="submit" />
      </form>
    </BlogLayout>
  )
}

export default ContactPage