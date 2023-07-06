export default PopupWithForm;

function PopupWithForm({ name, title, titleButton, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'} `} >
      <div className="popup__container">
        <button type="button" className="popup__close popup__close_type-edit" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form action="" name="editData" className="popup__form popup__form_type-edit" noValidate="">
          <fieldset className="popup__set">
            {children}
            <button type="submit" className="popup__button">{titleButton || 'Сохранить'}</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}