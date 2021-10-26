import axios from "axios";
import { INSTRUMENT_LIST_CREATE_ENDPOINT, INSTRUMENT_RETRIEVE_UPDATE_DELETE_ENDPOINT } from "../constants"


export function postInstruments(data, onSuccessfullPostInstruments, onErrorPostInstruments, onDonePostInstruments){
  axios.post(INSTRUMENT_LIST_CREATE_ENDPOINT, data).then(onSuccessfullPostInstruments).catch(onErrorPostInstruments).then(onDonePostInstruments);
}

export function getInstruments(limit, page, onSuccefullListInstruments, onErrorListInstruments, onDoneListInstruments){
  const url = INSTRUMENT_LIST_CREATE_ENDPOINT + "?limit=" + limit +"&page=" + page;
  axios.get(url)
  .then(onSuccefullListInstruments)
  .catch(onErrorListInstruments)
  .then(onDoneListInstruments);
}

export function getInstrumentDetail(id, onSuccefull, onError, onDone){
  const url = INSTRUMENT_RETRIEVE_UPDATE_DELETE_ENDPOINT.replace("<id>", id)
  axios.get(url).then(onSuccefull).catch(onError).then(onDone);
}

export function putInstrumentUpdated(data, onSuccefull, onError, onDone){
  const url = INSTRUMENT_RETRIEVE_UPDATE_DELETE_ENDPOINT.replace("<id>", data.id)
  axios.put(url).then(onSuccefull).catch(onError).then(onDone);
}

export function deleteInstrument(id, onSuccefull, onError, onDone){
  const url = INSTRUMENT_RETRIEVE_UPDATE_DELETE_ENDPOINT.replace("<id>", id)
  axios.delete(url).then(onSuccefull).catch(onError).then(onDone);
}
