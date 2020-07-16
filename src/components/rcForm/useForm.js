import {useRef} from 'react';

class FormStore {
  constructor () {
    this.store = {}
    this.callBacks = {}
  }
  setCallBack = (callback) => {
    this.callBacks = {
      ...callback,
      ...this.callBacks
    }
  }
  getFieldValue = (name) => {
    return this.store[name]
  }
  getFieldsValue = () => {
    return {...this.store}
  }
  setFieldValue = (newStore) => {
    this.store =  {
      ...this.store,
      ...newStore
    }
    console.log(this.store);
  }
  submit = () => {

  }
  getform = () => {
    return {
      submit: this.submit,
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldValue: this.setFieldValue,
      setCallBack: this.setCallBack
    }
  }
}
const useForm = (form) => {
  const formRef = useRef()
  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getform()
    }
  }
  return [formRef.current]
}
 
export default useForm;