import axios from "axios";
import PropertyType from "../types/PropertyType";
import {fireChangeForInputTimeIfValid} from "@testing-library/user-event/dist/keyboard/shared";

/**
 * Here is a service file that contains some API requests
 */
export const getProperties = (onSuccess: (data: PropertyType[]) => void, onError: (data: any) => void) => {
    return axios
        .get<PropertyType[]>('http://192.168.123.25:9039/accommodation-units')
        .then((response) => onSuccess(response.data))
        .catch((err) => onError(err));
};
export const getProperty = (propertyName:string|null, onSuccess: (data: PropertyType[]) => void, onError: (data: any) => void) => {
    return axios
            .get<PropertyType[]>(`http://192.168.123.25:9039/accommodation-units?name=${propertyName}`)
            .then((response) => onSuccess(response.data))
            .catch(err => onError(err));
};

export const deleteProperty = (propertyName:string) => {
    return axios
            .delete('http://192.168.123.25:9039/accommodation-units?name='+ propertyName);
};

export const addReview = (propertyName:string|null, reviewScore: number|null, comment:string[]) => {
    return axios
            .put(`http://192.168.123.25:9039/accommodation-units?name=${propertyName}&review=${reviewScore}&remarks=${comment}`);
};

export const addNewProperty = (formData: PropertyType) => {
    return axios
            .post('http://192.168.123.25:9039/accommodation-units', formData, {
                headers: {
                    'content-type' : 'application/json'
                }
            });
};