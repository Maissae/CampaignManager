import CustomStore from 'devextreme/data/custom_store';
import { sendRequest } from '../libs/utils/utils';

const apiUri = `${window.location.origin}/api/country`;

export const countryStore = new CustomStore({
    key: 'id',
    byKey: (key) => sendRequest(`${apiUri}/${key}`),
    load: () => sendRequest(`${apiUri}`),
    insert: (data) => sendRequest(`${apiUri}`, 'POST', JSON.stringify(data)),
    update: (key, data) => sendRequest(`${apiUri}/${key}`, 'PUT', JSON.stringify(data)),
    remove: (key) => sendRequest(`${apiUri}/${key}`, 'DELETE'),
});