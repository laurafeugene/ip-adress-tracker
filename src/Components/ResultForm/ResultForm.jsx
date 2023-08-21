import { useEffect, useState } from 'react';
import './ResultForm.css'
import {client} from '../../api/api';
import PropTypes from 'prop-types';


function ResultForm({inputValue}) {
    const [data, setData] = useState(null);


    useEffect(() => {
        client
          .get('', {
            params: {
              ipAddress: inputValue,
            },
          })
          .then((response) => {
            setData(response.data);
            console.log(response.data);
          });
      }, [inputValue]);
      console.log(`Erreur ici :`, inputValue);
    
    if (!data) return (<div>Loading...</div>);
    
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