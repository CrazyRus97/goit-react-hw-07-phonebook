import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <>
      <Layout>
        <Section title="PhoneBook">
          <ContactForm />
          <Title title="Contacts" />
          <Filter />
          <ContactList />
        </Section>
        <ToastContainer />
      </Layout>
      <GlobalStyle />
    </>
  );
};

// npm i prop-types
// npm i react-toastify
// npm i nanoid
// npm i react
// npm i react-icons
// npm i yup
// npm i formik
// npm i styled-components
// npm i modern-normalize
// npm i react-redux
