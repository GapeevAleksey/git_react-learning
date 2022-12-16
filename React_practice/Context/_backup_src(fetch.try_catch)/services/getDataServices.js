import useHttp from '../hooks/useHttp';

const useDataServices = () => {
  const { request, err } = useHttp();
  const getNames = async () => {
    if (err) {
        throw err
    }
    const data = await request();
    return data.map((user) => user.name);
    
  };
  const getUserNames = async () => {
    if (err) {
        return err
    }
    const data = await request();
    return data.map((user) => user.username);
  };
  const getEmails = async () => {
    if (err) {
        return err
    }
    const data = await request();
    return data.map((user) => user.email);
  };
  return  [getNames, getUserNames, getEmails] ;
};

export default useDataServices;
