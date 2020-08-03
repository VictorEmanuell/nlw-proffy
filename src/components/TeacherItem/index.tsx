import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/66982212?s=460&u=3897966ef2279971574a308fc8fe9b62bde98ea6&v=4" alt="VictorEmanuell"/>
                        <div>
                            <strong>Victor Emanuell</strong>
                            <span>Matemática</span>
                        </div>
                    </header>

                    <p>
                        Um dos dev's mais famosos do planeta. Um fenômeno, criador do JavaScript e de muitas outras grandes tecnologias.
                        <br/>
                        <br/>
                        Hoje eu fui comprar pão. Saí de casa, fui na padaria, comprei o pão, voltei, e estou aqui escrevendo essa bobagem. Não liga pra esse texto é só decorativo cara fica tranquilo!
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 980,00</strong>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;