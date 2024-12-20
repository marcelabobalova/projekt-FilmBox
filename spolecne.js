/* 3) Na všech stránkách webu je horní navigace se třemi odkazy. Pro úsporu místa na malých zařízeních se mění na tlačítko s ikonkou hamburgeru. Zařiďte, aby klikání na tlačítko  rozbalovalo a opět skrývalo položky menu.

    V souboru spolecne.js najděte pomocí document.querySelector prvek s id menu-tlacitko.

    Přidejte mu posluchač události kliknutí.

    Přidejte prvku s id menu-polozky třídu show ve chvíli, kdy událost nastane.

    Rozšiřte kód tak, aby se třída show naopak odebrala, pokud ji prvek již měl.

Bonus

Změňte ikonku tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené.

    HTML ikonky křížku: <i class="fas fa-xmark"></i>
    HTML ikonky hamburgeru: <i class="fas fa-bars"></i>*/

const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');
const ikona = menuTlacitko.querySelector('i');

menuTlacitko.addEventListener('click', () => {
    const menu = menuPolozky.classList.toggle('show');
    ikona.className = menu ? 'fas fa-xmark' : 'fas fa-bars';
});
