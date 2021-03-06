import { DialogflowConversation, GoogleCloudDialogflowV2WebhookRequest, DialogflowV1WebhookRequest } from 'actions-on-google'
import { Dict } from '../../../i18n/Dict'
import { dict } from '../../../i18n/en'
import { dict as de } from '../../../i18n/de'

function resolveLang(lang: string): Dict {
    switch(lang) {
        case 'de': return de
        default: return dict
    }
}

function cleanLang(lang: string): string {
    switch(lang) {
        case 'de': return 'de'
        default: return 'en'
    }
}

export class CustomConversation extends DialogflowConversation {
    lang: string
    dict: Dict
    hasDisplay: boolean
}

export function displayMiddleware(conv: CustomConversation) : CustomConversation {
    conv.hasDisplay = conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')
    return conv
}

export function i18nMiddleware(conv: CustomConversation) : CustomConversation {
    const body = conv.body as GoogleCloudDialogflowV2WebhookRequest
    if (!body.queryResult || !body.queryResult.languageCode) {
        const bodyV1 = conv.body as DialogflowV1WebhookRequest
        if (!bodyV1.lang) {
            console.error(new Error('Could not find language code in request. Default to en.'))
            conv.lang = 'en'
        } else {
            console.log('Didn\' find v2 lang, but v1 lang')
            conv.lang = cleanLang(bodyV1.lang)
        }
        
    } else {
        conv.lang = cleanLang(body.queryResult.languageCode)
    }
    conv.dict = resolveLang(conv.lang)
    return conv
} 