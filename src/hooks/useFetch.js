import {useState, useEffect, useRef} from 'react'

const UseFetch = (url) => {


  const [state, setState] = useState({data: null, loading: true, error: null});

  const isMounted = useRef(true)


  useEffect(() => {
    return () => {
      isMounted.current = false
    };
  }, []);


  useEffect(() => {

    setState({
      loading: true,
      error: null,
      data: null
    })


    fetch(url)
      .then(res => res.json())
      .then(data => {

        setTimeout(() => {

          if (isMounted.current) {

            setState({
              loading: false,
              error: null,
              data
            })
          }else{
            console.log('setState no se llamo')
          }

        }, 4000)
      })

  }, [url]);


  return state


}

export default UseFetch




