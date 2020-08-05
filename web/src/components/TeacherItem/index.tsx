import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
return (
<article className="teacher-item">
    <header>
        <img src="https://avatars0.githubusercontent.com/u/51282495?s=460&u=82be8af0981a38fa9e6cf2e514b73227326d547e&v=4" alt="Monica Hillman" />
        <div>
            <strong>Monica Hillman</strong>
            <span>Matemática</span>
        </div>
    </header>

    <p>
        A Matemática é uma ciência que relaciona a lógica com situações práticas habituais.
<br /><br />
Ela desenvolve uma constante busca pela veracidade dos fatos por meio de técnicas precisas e exatas. Ao longo da história, a Matemática foi sendo construída e aperfeiçoada, prosseguindo em constante evolução, investigando novas situações e estabelecendo relações com os acontecimentos cotidianos.
</p>

    <footer>
        <p>
            Preço/hora
        <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
    </button>
    </footer>
</article>
);
}

export default TeacherItem;