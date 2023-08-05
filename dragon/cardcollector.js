async function loadCards()
{
    try{
        const response = await fetch('http://127.0.0.1:5500/dragon/card.json');
        let cardsJason= await response.json();
        console.log(cardsJason);

    } catch (error) {
        alert(error);

    }

}