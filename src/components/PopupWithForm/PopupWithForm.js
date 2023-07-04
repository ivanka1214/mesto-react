export default PopupWithForm;

function PopupWithForm({name, title, titleButton}) {
return (

<div className={`popup popup_type_${name}`} >
    <div class="popup__container">
      <button type="button" class="popup__close popup__close_type-edit"></button>
      <h2 class="popup__title">{title}</h2>
      <form action="" name="editData" class="popup__form popup__form_type-edit" novalidate>
        <fieldset class="popup__set">

          <button type="submit" class="popup__button">{titleButton}</button>
        </fieldset>
      </form>
    </div>
  </div>
    
)
}