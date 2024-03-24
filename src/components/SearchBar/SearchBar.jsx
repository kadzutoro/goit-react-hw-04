import { Formik, Form, Field } from 'formik';
import { IoSearchOutline } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

    const handleSubmit = (values, actions) => {
        const searchQuery = values.search;
        if (!searchQuery.trim()) {
            toast('Type something to search', { duration: 2000, position: 'top-right' });
            return;
        }
        
        onSearch(searchQuery);
        actions.resetForm();
    };

    return (
        <div className={css.header}>
            <Formik 
                initialValues={{ search: "" }}
                onSubmit={handleSubmit}
            >
                <Form className={css.form}>
                    <div className={css.searchBox}>
                        <Field className={css.imput} name='search' placeholder="Search images and photos" />
                        <button className={css.button} type="submit"><IoSearchOutline /></button>
                    </div>
                </Form>
            </Formik>
            <Toaster />
        </div>
    );
}
