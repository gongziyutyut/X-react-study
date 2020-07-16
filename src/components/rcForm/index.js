import _Form from './form'
import Field from './field'
import useForm from './useForm'

const Form = _Form
Form.Item = Field
Form.useForm = useForm
export {
  Form, Field, useForm
}
export default Form