"use client";

import { useState } from "react";
import "./page.css";

export default function Profil() {
  return (
    <div className="profil-page">
      <div className="title-section">
        <h2>Profil</h2>
        <p>
          Vous trouverez ci-dessous les informations de votre profil pour votre
          compte.
        </p>
      </div>
      <div className="">
        <form action="">
        <div className="form-group required">
            <label htmlFor="username" className="form-label">
              Nom d'utilisateur
            </label>
            <div className="form-input">
              <input
                type="text"
                required
                name="username"
                autoComplete="false"
                id="username"
                placeholder="dev-45237"
              />
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="name" className="form-label">
              Nom
            </label>
            <div className="form-input">
              <input
                type="text"
                required
                name="name"
                autoComplete="false"
                id="name"
                placeholder="Pena daniel"
              />
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="lastname" className="form-label">
              Prénom
            </label>
            <div className="form-input">
              <input
                type="text"
                required
                name="lastname"
                autoComplete="false"
                id="lastname"
                placeholder="eX: daniel josue"
              />
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="email" className="form-label">
              Adresse email
            </label>
            <div className="form-input">
              <input
                type="email"
                required
                name="email"
                autoComplete="false"
                id="email"
                placeholder="pena@danie.com"
              />
            </div>
          </div>

          <button className="btn btn-main" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}
