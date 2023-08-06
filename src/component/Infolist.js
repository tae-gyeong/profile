import { useEffect, useState } from "react"; 

export default function Infolist() {
  const [info, setInfos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setInfos(data);
      });
  }, []);

  return (
    
    <div class="flex-container">
        {info.map(info => (  
            <div class="flex-item item3"><b>{info.info}</b></div>     
        ))}
    </div>

  );
}