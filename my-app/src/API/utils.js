import to from "await-to-js";

/**
 * @param { Promise } hcmApiFunctionPromise - A promise for making a call to the HCM API using axios.
 * @return { Promise } A Promise object that will resolve to the 'return' object
 * on a successful request. Rejects to an array of error messages
 * from the ‘errors’ and 'message' objects if available.
 * */
export const makeHCMApiCall = async (hcmApiFunctionPromise) => {
  const [err, res] = await to(hcmApiFunctionPromise);

  if (err) {
    const errorMessages = err.response?.data?.return?.errors ??
      err.response?.data ??
      err.message ?? [err.message];
    return Promise.reject(errorMessages);
  } else {
    const data = res.data?.return ?? res.data ?? [];

    return Promise.resolve(data);
  }
};
