import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';

function App() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
}

  return (
    
<>
    <Header/>
    <Main/>
    <Footer/>
<PopupWithForm 
name='edit-profile'
title='Редактировать профиль'
titleButton='Сохранить'/>
 
 <PopupWithForm 
name='add-profile'
title='Новое место'
titleButton='Создать'/>

<PopupWithForm 
name='avatar'
title='Обновить аватар'
titleButton='Сохранить'/>

<PopupWithForm 
name='delete'
title='ВЫ уверена?'
titleButton='Да'/>




  <div class="popup popup_type_edit-profile">
    <div class="popup__container">
      <button type="button" class="popup__close popup__close_type-edit"></button>
      <h2 class="popup__title">Редактировать профиль</h2>
      <form action="" name="editData" class="popup__form popup__form_type-edit" novalidate>
        <fieldset class="popup__set">
          <div class="popup__field">
            <input type="text" name="name" class="popup__input" id="nameInput" minlength="2" maxlength="40"
              required/>
            <span class="popup__error popup__error_type_name"></span>
          </div>
          <div class="popup__field">
            <input type="text" name="jobs" class="popup__input" id="jobs" minlength="2" maxlength="200" required/>
            <span class="popup__error popup__error_type_jobs"></span>
          </div>
          <button type="submit" class="popup__button">Сохранить!</button>
        </fieldset>
      </form>
    </div>
  </div>

  <div class="popup popup_type_delete">
    <div class="popup__container">
      <button type="button" class="popup__close popup__close_type-delete"></button>
      <h2 class="popup__title">Вы уверены?</h2>
      <form action="" name="delete" class="popup__form popup__form_type-delete" novalidate>
          <button type="submit" class="popup__button popup__button_type-delete" id="popup__button-delete">Да</button>
      </form>
    </div>
  </div>


  <div class="popup popup_type_avatar">
    <div class="popup__container">
      <button type="button" class="popup__close popup__close_type-avatar"></button>
      <h2 class="popup__title">Обновить аватар</h2>
      <form action="" name="editAvatar" class="popup__form popup__form_type-avatar" novalidate>
        <fieldset class="popup__set">
          <div class="popup__field">
            <input type="url" name="avatar" class="popup__input" id="jjjj" placeholder="Ссылка на аватарку"  required/>
            <span class="popup__error popup__error_type_avatar"></span>
          </div>
          <button type="submit" class="popup__button popup__button_type-avatar" id="popup__button-avatar">Сохранить</button>
        </fieldset>
      </form>
    </div>
  </div>
  <div class="popup popup_type_add-profile">
    <div class="popup__container">
      <button type="button" class="popup__close popup__close_type-add"></button>
      <h2 class="popup__title">Новое место</h2>
      <form action="" name="addData" class="popup__form popup__form_type-add" novalidate>
        <fieldset class="popup__set">
          <div class="popup__field">
            <input type="text" name="title" class="popup__input" id="title-card" placeholder="Название" minlength="2"
              maxlength="30" required/>
            <span class="popup__error popup__error_type_title"></span>
          </div>
          <div class="popup__field">
            <input type="url" name="link" class="popup__input" id="img-src" placeholder="Ссылка на картинку"
              required/>
            <span class="popup__error popup__error_type_link"></span>
          </div>
          <button type="submit" class="popup__button" id="popup__button-add">Создать</button>
        </fieldset>
      </form>
    </div>
  </div>
  <div class="popup popup_type_image">
    <div class="popup__container popup__container_type_zoom-place">
      <button type="button" class="popup__close popup__close_type-image"></button>
      <img src="#" alt="#" class="popup__img"/>
      <p class="popup__text"></p>
    </div>
  </div>
  <template id="element_card">
    <div class="elements__element">
      <button type="button" class="elements__delete"></button>
      <img src="" class="elements__img"/>
      <div class="elements__tab">
        <h2 class="elements__title"></h2>
        <div class="elements__likes">
        <button type="button" name="button_love" class="elements__love"></button>
        <p class="elements__count"></p>
      </div>
      </div>
    </div>
  </template>






  </>



  );
}

export default App;
