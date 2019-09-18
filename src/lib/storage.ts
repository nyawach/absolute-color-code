/**
  WebStorage API
 */

export enum STORAGE_TYPE {
  HISTORY = "history"
}

export type StrageType = "localStorage" | "sessionStorage"

export const storageAvailable = (type: StrageType) => {
  let storage
	try {
	  const x = "__storage_test__"
		storage = window[type]
		storage.setItem(x, x)
		storage.removeItem(x)
		return true;
	}
  catch(e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
  }
}

export const getHistory = () => {
  if(!storageAvailable("localStorage")) return null
  return JSON.parse(localStorage.getItem(STORAGE_TYPE.HISTORY))
}

export const setHistory = (history: number[]) => {
  if(!storageAvailable("localStorage")) return null
  return localStorage.setItem(STORAGE_TYPE.HISTORY, JSON.stringify(history))
}
