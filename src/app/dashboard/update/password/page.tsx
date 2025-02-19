"use client";

import { useState } from "react";
import "./page.css";

export default function Password() {
  const [pshow, setPshow] = useState<string>("password");
  const [cPshow, setCpShow] = useState<string>("password");

  return (
    <div className="passwrd-page">
      <div className="title-section">
        <h2>Mot de passe</h2>
        <p>
          Vous devez renseigner votre mot de passe actuel pour changer de mot de
          passe.
        </p>
      </div>
      <div className="">
        <form action="">
          <div className="form-group required">
            <label htmlFor="password" className="form-label">
              Ancien mot de passe
            </label>
            <div className="form-input has-icon">
              <input
                type={pshow}
                required
                name="password"
                autoComplete="false"
                id="password"
                placeholder="votre ancien mot de passe"
              />
              <svg
                className="icon"
                onClick={() => setPshow(pshow == "text" ? "password" : "text")}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.818-9C2.122 6.88 6.608 3 12 3m0 16a9.005 9.005 0 0 0 8.778-7a9.005 9.005 0 0 0-17.555 0A9.005 9.005 0 0 0 12 19m0-2.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                />
              </svg>
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="newpassword" className="form-label">
              Nouveau du mot de passe
            </label>
            <div className="form-input has-icon">
              <input
                type={cPshow}
                required
                name="newpassword"
                autoComplete="false"
                id="newpassword"
                placeholder="votre nouveau mot de passe"
              />
              <svg
                className="icon"
                onClick={() => setCpShow(pshow == "text" ? "password" : "text")}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.818-9C2.122 6.88 6.608 3 12 3m0 16a9.005 9.005 0 0 0 8.778-7a9.005 9.005 0 0 0-17.555 0A9.005 9.005 0 0 0 12 19m0-2.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                />
              </svg>
            </div>
            <small className="form-info">
              Doit contenir au minimum 8 caractères, avec au moins une
              majuscule, un chiffre et un caractère spécial.
            </small>
          </div>

          <button className="btn btn-main" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}
