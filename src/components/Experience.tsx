import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faBuilding, faCircle } from '@fortawesome/free-solid-svg-icons';


const Experience: React.FC = () => {
    return (
      <div>
        <div className="experience">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <h3>Esperienza</h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="company-accent-4">
  <path fill="#e7e2dc" d="M0 0h128v128H0z"/>
  <path fill="#9db3c8" d="M48 16h64v112H48z"/>
  <path fill="#788fa5" d="M16 80h32v48H16z"/>
  <path fill="#56687a" d="M48 80h32v48H48z"/>
</svg>
            </div>
            <div>
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: '30px' }} />
              <FontAwesomeIcon icon={faPen} style={{ marginRight: '30px' }}/>
            </div>
          </div>
          <h4>Webmaster</h4>
          <h4>WM snc. Part-time</h4>
          <p>gen 2018 - nov 2023. 5 anni 11 mesi</p>
          <p>Bologna, Italia</p>
          <p>Creazione e manutenzione dei siti web in Wordpress.</p>
          <p>Gestione cPanel e WHM per creazione account hosting, e-mail, redirect, certificat SSL....</p>
        </div>
        <div className='formation'>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <h3>Formazione</h3>
              <img src="https://static.licdn.com/aero-v1/sc/h/8zzzkhxduv0r11cuxbs48pg03" alt="Profile" width="50px"/>
            </div>
            <div>
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: '30px' }} />
              <FontAwesomeIcon icon={faPen} style={{ marginRight: '30px' }}/>
            </div>
          </div>
          <h4>IIS Enrico Mattei</h4>
          <p>Diploma di Specializzazione di 1° livello DS1 in Scienze dell'Economia e della Gestione Aziendale, Sistemi di
gestione delle informazioni, generale</p>
          <p>2010 - 2017</p>
          <p>Votazione: 67</p>
        </div>
      </div>
    );
};

export default Experience;