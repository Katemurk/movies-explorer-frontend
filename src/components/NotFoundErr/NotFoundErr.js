import React from "react";
import "../NotFoundErr/NotFoundErr.css";
import { Link, useNavigate } from "react-router-dom";

function NotFoundErr() {
  const navigate = useNavigate();
  return (
    <section className="notFoundErr">
      <div className="notFoundErr__container">
        <h2 className="notFoundErr__title">404</h2>
        <p className="notFoundErr__subtitle">Страница не найдена</p>
        <Link to="" onClick={() => navigate(-1)} className="notFoundErr__link">
          Назад
        </Link>
      </div>
    </section>
  );
}

export default NotFoundErr;
