import { Field, Formik } from "formik"

export default function SearchBar () {
    return (
        <Formik 
        initialValues={{search: ""}}
        onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
        }}>
            <form>
                <Field name='seacrh' placeholder="Search images and photos" />
                <button type="submit">Search</button>
            </form>
        </Formik>
    )
}
