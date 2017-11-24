import {EMAIL_CHANGED, PASS_CHANGED} from './types'

export const changeEmailText = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const changePasswordText = (text) => {
    return {
        type: PASS_CHANGED,
        payload: text
    }
}