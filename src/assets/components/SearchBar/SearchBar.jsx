import { Formik, Form, Field } from 'formik';

export default function SearchBar({ onSearch }) {
    return (
        <Formik 
            initialValues={{ search: "" }}
            onSubmit={(values, actions) => {
                onSearch(values.search);
                actions.resetForm();
            }}
        >
            <Form>
                <Field name='search' placeholder="Search images and photos" />
                <button type="submit">Search</button>
            </Form>
        </Formik>
    );
}
