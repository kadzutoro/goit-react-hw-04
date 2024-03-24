import { Formik, Form, Field } from 'formik';
import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {
    return (
        <div className={css.header}>
        <Formik 
            initialValues={{ search: "" }}
            onSubmit={(values, actions) => {
                onSearch(values.search);
                actions.resetForm();
            }}
        >
            <Form className={css.form}>
            <div className={css.searchBox}>
                <Field className={css.imput} name='search' placeholder="Search images and photos" />
                <button className={css.button} type="submit"><IoSearchOutline /></button>
                </div>
            </Form>
        </Formik>
        </div>
    );
}
