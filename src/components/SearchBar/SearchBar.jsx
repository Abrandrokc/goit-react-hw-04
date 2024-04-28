import css from "./SearchBar.module.css"
import { Field, Form, Formik } from "formik"
import toast, { Toaster } from 'react-hot-toast';
export default function SearchBar({ onSubmit }) {
    return <header className={css.hed}>
        <Formik
            initialValues={{ query: "" }}
            onSubmit={(values, actions) => {
                if (values.query === "") {
                    toast.error("This didn't work. Need some words")
                    
                }
                 onSubmit(values.query);
                actions.resetForm()
           }}
        >
            <Form className={css.but}>
                <Field
      type="text"
      autoComplete="off"
      autoFocus
                    placeholder="Search images and photos"
                    name= "query"
    />
                <button type="submit">Search</button>
                <Toaster/>
            </Form>
    
  </Formik>
</header>
}