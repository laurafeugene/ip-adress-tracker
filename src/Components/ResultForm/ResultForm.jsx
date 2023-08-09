import { useEffect, useState } from 'react';
import './ResultForm.css'
import {client} from '../../api/api';

function ResultForm() {
    const [data, setData] = useState(null);

    useEffect(() => {
        client.get("", {
            params: {
                apiKey: "at_6Ew9bBFZfU5khd8IKOvOTARMLhzdP",
                // ipAddress: "8.8.8.8",
            },
        }).then((response) => {
            setData(response.data);
        });
    }, []);
    
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

export default ResultForm;