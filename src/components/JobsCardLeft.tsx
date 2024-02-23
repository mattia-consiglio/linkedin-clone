import React from 'react';




const JobsCardLeft = () => {
    return (
        <>
        <div className="card">
            <h6 className="title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
      <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
    </svg>Le mie offerte di lavoro</h6>
            <h6 className="title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
      <path d="M7 4a2 2 0 11-2-2 2 2 0 012 2zm2-1v2h12V3zm-4 7a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9zm-4 5a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9z"></path>
    </svg>Preferenze</h6>
            <h6 className="title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
      <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
    </svg>Valutazione delle competenze</h6>
            <h6 className="title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
    </svg>Indicazioni per chi cerca lavoro</h6>
            <h6 className="title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
      <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
    </svg>Impostazioni candidatura</h6>
        </div>
        <div className='PenButton'>
    <button className="card-button" style={{ display: 'flex', alignItems: 'center' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="compose-medium" aria-hidden="true" role="none" data-supported-dps="24x24" fill="currentColor" width="24" height="24">
  <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
</svg>
        <h6 className='h6Offerta'>Pubblica <br />offerta grauita</h6>
    
    </button>
       </div>        
</>
    );
};

export default  JobsCardLeft;
