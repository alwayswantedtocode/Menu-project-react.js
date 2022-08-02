import React from "react";

const Menu = ({ menus }) => {
  return (
    <div className="section-center">
      {menus.map((Menu) => {
        const { id, title, img, desc, price } = Menu;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="items-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
