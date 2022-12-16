import useHttp from './useHttp';
const useServices = () => {
  const { request, error } = useHttp();
  const getData = async (resource) => {
    return await request(resource);
  };
  return { getData, error };
};
export default useServices;
