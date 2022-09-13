import axios from "axios"

export const getListDocumentaryFromTypeId = async (id) => {
    await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/documentary/list/${id}`)
    .then(result => result.data[0] === undefined ? '' : localStorage.setItem(`list_dispatch_${result.data[0].category_id}`, JSON.stringify(result.data)));
}

export const getAllDocumetary = async () => {
    await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/documentary`)
    .then(result => result.data[0] === undefined ? '' : localStorage.setItem(`list_all_dispatch`, JSON.stringify(result.data)));
}