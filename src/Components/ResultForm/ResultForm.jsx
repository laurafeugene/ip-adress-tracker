import './ResultForm.css'


function ResultForm({data}) {

// TODO : ajouter du style à cette div
    if (!data) return (<div>Enter an IP Address...</div>);
    
      return (
     <div className="resultform">
        <article><h3>IP Address</h3>
            <p>{data.ip}</p>
        </article>
        <article><h3>Localisation</h3>
            <p>{data.location.city}</p>
        </article>
        <article><h3>Timezone</h3>
            <p>{data.location.timezone}</p>
        </article>
        <article><h3>ISP</h3>
            <p>{data.isp}</p>
        </article>
     </div>
      )
}

export default ResultForm;