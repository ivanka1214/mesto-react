import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import PopupImage from './PopupImage.js';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopup, setImagePopup] = useState(false)

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopup(false)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  // function handleDelete() {

  // }
  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopup(true)
  }


  return (

    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='edit-profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__field">
          <input type="text" name="name" className="popup__input" id="nameInput" minLength={2} maxLength={40}
            required="" />
          <span className="popup__error popup__error_type_name"></span>
        </div>
        <div className="popup__field">
          <input type="text" name="jobs" className="popup__input" id="jobs" minLength={2} maxLength={200} required="" />
          <span className="popup__error popup__error_type_jobs"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name='add-profile'
        title='Новое место'
        titleButton='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__field">
          <input type="text" name="title" className="popup__input" id="title-card" placeholder="Название" minLength={2}
            maxLength={30} required="" />
          <span className="popup__error popup__error_type_title"></span>
        </div>
        <div className="popup__field">
          <input type="url" name="link" className="popup__input" id="img-src" placeholder="Ссылка на картинку"
            required="" />
          <span className="popup__error popup__error_type_link"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__field">
          <input type="url" name="avatar" className="popup__input" id="jjjj" placeholder="Ссылка на аватарку" required="" />
          <span className="popup__error popup__error_type_avatar"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name='delete'
        title='ВЫ уверена?'
        titleButton='Да'>
      </PopupWithForm>
      <PopupImage card={selectedCard} isOpen={isImagePopup} onClose={closeAllPopups} />
    </>
  );
}

export default App;
