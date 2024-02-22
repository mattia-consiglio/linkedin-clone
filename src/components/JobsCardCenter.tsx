import React from 'react';


const JobsCardCenter = () => {
    return (
        <div className="new-card">
            <h5>Le principali offerte di lavoro per te</h5>
            <p>Sulla base del tuo profilo e della tua cronologia di ricerche</p>
            <div className="logo-container">
           <img src="https://media.licdn.com/dms/image/D4E0BAQGyJM90uPP_iQ/company-logo_100_100/0/1692352081106/repubblica_e_cantone_ticino_logo?e=1716422400&v=beta&t=0pUgtSGtnc_zpeTmJp3EzvQOZJu6QKStV-VZAJyS_WE" alt="" width="60px" className='LogoJobs'/>
           <div className="PerformerBootcamp">
            <h5 style={{ marginBottom: '5px', color:'#0a66c2' }}>Performer Bootcamp</h5>
            <p style={{ margin: '5px', color:'black' }}>Performer</p>
            <p style={{ marginTop: '5px' }}>Bologna Emilia Romagna</p>
           </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="close-small" aria-hidden="true" role="none" data-supported-dps="16x16" fill="currentColor" width="30" height="30"  style={{ marginLeft: '300px' }}>
  <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
</svg>
 </div>
 <hr style={{ borderColor: 'black', borderWidth: '1px', height: '1px', backgroundColor: 'black', opacity: 1 }} />

        </div>
    );
};

export default JobsCardCenter;