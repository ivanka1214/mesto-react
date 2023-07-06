export default Card;

function Card({ card, onCardClick }) {
    console.log(card)
    return (
        <>
            <button type="button" className="elements__delete"></button>
            <img src={card.link}
                alt={card.name}
                className="elements__img"
                onClick={() => onCardClick({ link: card.link, name: card.name })} />
            <div className="elements__tab">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__likes">
                    <button type="button" name="button_love" className="elements__love"></button>
                    <p className="elements__count">{card.likes.length}</p>
                </div>
            </div>
        </>
    )
}