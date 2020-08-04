import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQE6swU9iTaZ0w/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=5V2O5jrKU4sYUzO_dsc_PUgsJWILCv9zNyj7FnqVr7A"
          alt="Victor Borsatto"
        />
        <div>
          <strong>Victor Borsatto</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut diam
        at purus pulvinar finibus in eget risus. In in sem ut nulla dictum
        volutpat.
        <br />
        <br />
        Nullam risus lacus, interdum in arcu id, porta facilisis dui. Phasellus
        lectus quam, ultricies vitae tincidunt eget, consequat eget nisi. Nunc
        eget pulvinar libero. Sed blandit, quam id malesuada maximus, turpis
        sapien facilisis neque, vestibulum hendrerit augue augue sit amet lacus.
        Vivamus interdum venenatis nisi tempor pulvinar.
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
