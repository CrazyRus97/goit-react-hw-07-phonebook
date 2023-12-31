import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Tooltip } from '@chakra-ui/react';
import Avatar from '@mui/material/Avatar';

import { getRandomHexColor } from 'utils/getRandomHexColor';
import { abbrevName } from 'utils/abbrevName';

import { ContactModal } from 'components/Modal/Modal';

import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/selectors';

import { IoPersonRemove } from 'react-icons/io5';
import {
  Btn,
  ContactDescr,
  Item,
  ModalPictureWrapper,
  WhatsappIcon,
  WhatsappShareButton,
  WrapperBtns,
} from './ContactItem.styled';

export const ContactItem = ({ name, phone, id }) => {
  const contacts = useSelector(selectContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const closeModal = () => {
    setSelectedContact(null);
  };

  const setModalData = id => {
    const selectContact = contacts.find(contact => contact.id === id);
    setSelectedContact(selectContact);
  };

  function stringAvatar(name) {
    //console.log(name);
    return {
      sx: {
        bgcolor: getRandomHexColor(),
      },
      children: abbrevName(name),
    };
  }

  return (
    <>
      <Item>
        <Tooltip label="Click" color="#000" fontSize="xs">
          <ModalPictureWrapper>
            <Avatar
              onClick={() => setModalData(id)}
              {...stringAvatar(Object.values(name).join(''))}
            />
          </ModalPictureWrapper>
        </Tooltip>
        <ContactDescr>
          <span>{name} </span>
          <Tooltip label="Call" color="#000" fontSize="xs">
            <span>
              <a href={'tel:' + phone}>{phone}</a>
            </span>
          </Tooltip>
          <WrapperBtns>
            <Tooltip label="Share" color="#000" fontSize="xs">
              <WhatsappShareButton
                url={'tel:' + phone}
                title={'contact' + name}
                hashtag="#number"
              >
                <WhatsappIcon size={30} round={true} />
              </WhatsappShareButton>
            </Tooltip>
            <Tooltip label="Delete" color="#000" fontSize="xs">
              <Btn type="button" onClick={() => onDeleteContact(id)}>
                <IoPersonRemove size="14" />
              </Btn>
            </Tooltip>
          </WrapperBtns>
        </ContactDescr>
      </Item>
      <ContactModal
        isOpen={selectedContact !== null}
        onClose={closeModal}
        data={selectedContact}
      />
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};