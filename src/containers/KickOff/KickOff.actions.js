export const GET_API_DATA = 'containers/App/GET_API_DATA';
export const GET_API_DATA_LOADED = 'containers/App/GET_API_DATA_LOADED';
export const GET_API_DATA_ERROR = 'containers/App/GET_API_DATA_ERROR';

export const getAPIData = () => ({
  type: GET_API_DATA,
});

export const getAPIDataLoaded = (data) => ({
  type: GET_API_DATA_LOADED,
  data,
});

export const getAPIDataError = (error) => ({
  type: GET_API_DATA_ERROR,
  error,
});