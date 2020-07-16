import React from 'react';
import FormContext from './formContext';
import useForm from './useForm';
const Form = ({form, children, onFinish, onFinishFail}) => {
  const [formData] = useForm(form)
  formData.setCallBack({
    onFinish,
    onFinishFail
  })
  return ( 
    <form onSubmit = {e => {
      e.preventDefault()
      formData.submit()
    }}>
      <FormContext.Provider value={formData}>
        {children}
      </FormContext.Provider>
    </form>
   );
}
 
export default Form;