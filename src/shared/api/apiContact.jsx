import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6565f26deb8bb4b70ef2a6f1.mockapi.io/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const deleteContact = id => {
  return contactsInstance.delete(`/${id}`);
};

export const addContact = data => {
  return contactsInstance.post('/', data);
};

export const editContact = data => {
  return contactsInstance.put(`/${data.id}`, {
    avatar: data.avatar,
    name: data.name,
    phone: data.phone,
  });
};