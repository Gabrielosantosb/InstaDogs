import { useEffect, useCallback, useState } from "react";


export const useFetch = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [error]);

  const request = useCallback(async (url, options) => {
    try {
      setError("");
      setLoading(true);
      const response = await fetch(url, options);
      const json = await response.json();
      if (response.status === 403) {
        setError("Usuário já existente");
      } else if (response.status === 406) {
        setError("Dados incompletos");
      }
      setData(json);
      setLoading(false);
      return { response, json };
    } catch (err) {
      setError("Falha na API");
      console.error(err);
      setLoading(false);
      return { response: null, json: null };
    }
  }, []);

  return { data, error, loading, request };
};



//     try {
//       setError("");
//       setLoading(true);
//       response = await fetch(url, options);
//       json = response.json();
//       if (response.status != 200) throw new Error(json.message);

//     } catch (error) {
//       json = null
//       console.log("Error aqui: " + error);
//     } finally {
//       setData(json)
//       setLoading(false);
//       return{response, json}
//     }
//   }, []);
//   return {
//     data,
//     loading,
//     error,
//     request,
//   };
// };
