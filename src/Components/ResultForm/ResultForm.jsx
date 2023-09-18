import './ResultForm.css'
import PropTypes from 'prop-types';


function ResultForm({data}) {


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

ResultForm.propTypes = {
    inputValue: PropTypes.string.isRequired,
  };

export default ResultForm;