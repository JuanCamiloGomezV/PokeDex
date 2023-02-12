import { useState, useEffect } from 'react'

const getFetch = (url, type) => {
    const [resultado, setResultado] = useState({ cargando: true, data: null })

    useEffect(() => {
        getDatos(url)
    }, [url, type])
    const getDatos = async(url) => {
        if (type)
            try {
                fetch(url)
                    .then(response => response.json())
                    .then(res => res = res.pokemon)
                    .then(data => data = data.map(p => p.pokemon))
                    .then(data => setResultado({ cargando: false, data: data }))
            } catch (e) {
                console.log(e)
            }
        else {
            try {
                fetch(url)
                    .then(response => response.json())
                    .then(data => setResultado({ cargando: false, data: data }));
            } catch (e) {
                console.log(e)
            }
        }

    }
    return resultado
}

export default getFetch