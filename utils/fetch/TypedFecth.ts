export const typedFetch = async <T>(
    url: string,
    options?: RequestInit
  ): Promise<T | number> => {
    try {
      const res = await fetch(url, options);
  
      if (res.headers.get('content-type')?.includes('application/json')) {
        const data = await res.json();
        return data;
      } else {
        // Si la réponse n'est pas du JSON, renvoyer le code de statut
        return res.status;
      }
    } catch (error) {
      if (typeof error === "string") throw new Error(error);
      else throw error;
    }
  };
  
  