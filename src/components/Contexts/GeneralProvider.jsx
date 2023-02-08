import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import generalService from '../../services/general.service'

const initialGeneralData = {
  loading: false,
  alertData: null,
  roles: [],
  formats: [],
  categories: [],
  handleGetData: () => { },
  setAlertData: () => { },
  toggleLoading: () => { }
}

const GeneralContext = createContext(initialGeneralData)

export const GeneralProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [formats, setFormats] = useState([]);
  const [categories, setCategories] = useState([]);
  const [alertData, setAlertData] = useState(null);
  const [loading, toggleLoading] = useState(false);

  useEffect(() => {
    handleGetData();
  }, []);

  useEffect(() => {
    if (alertData) {
      console.log(alertData, ' [INCOMING ALERT DATA]')
      setTimeout(() => {
        setAlertData(null);
      }, 3000);
    }
  }, [alertData]);

  const handleGetRoles = async () => {
    let result = await generalService.getRoles();

    if (result.data.code === 'roles/not_found') {
      setAlertData({ type: 1, details: result.data.message });
    }

    setRoles(result.data.data);
  }

  const handleGetFormats = async () => {
    let result = await generalService.getFormats();

    if (result.data.code === 'format/not_found') {
      setAlertData({ type: 1, details: result.data.message });
    }

    setFormats(result.data.data);
  }

  const handleGetCategories = async () => {
    let result = await generalService.getCategories();

    if (result.data.code === 'categories/not_found') {
      setAlertData({ type: 1, details: result.data.message });
    }

    setCategories(result.data.data);
  }

  const handleGetData = async () => {
    await handleGetRoles();
    await handleGetCategories();
    await handleGetFormats();
  }

  const value = useMemo(
    () => ({
      loading,
      alertData,
      roles,
      formats,
      categories,
      handleGetData,
      setAlertData,
      toggleLoading
    }),
    [loading, alertData, roles, formats, categories]
  )

  return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
}

export const useGeneral = () => {
  return useContext(GeneralContext)
}
