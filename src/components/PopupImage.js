export default PopupImage;

function PopupImage({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_image ${isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_zoom-place">
        <button type="button" className="popup__close popup__close_type-image" onClick={onClose}></button>
        <img src={card.link ? card.link : '#'} alt={card.name ? card.name : '#'} className="popup__img" />
        <p className="popup__text">{card.name ? card.name : '#'}</p>
      </div>
    </div>
  )
}