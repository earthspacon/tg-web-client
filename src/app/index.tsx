import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TdClient from 'tdweb'

import { App } from './app'

const apiId = 26475872
const apiHash = 'd1987043ac73062b66e6086c52b3a7d4'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const tdClient = new TdClient({})

await tdClient.send({
  '@type': 'setTdlibParameters',
  parameters: {
    '@type': 'tdParameters',
    use_test_dc: false,
    api_id: apiId,
    api_hash: apiHash,
    system_language_code: navigator.language || 'en',
    device_model: getBrowser(),
    system_version: getOSName(),
    application_version: '0.0.1',
    use_secret_chats: false,
    use_message_database: true,
    use_file_database: false,
    database_directory: '/db',
    files_directory: '/',
  },
})

await tdClient.send({
  '@type': 'checkDatabaseEncryptionKey',
  phone_number_: '+998901334729',
})

tdClient.send({
  '@type': 'setAuthenticationPhoneNumber',
  phone_number_: '+998901334729',
})

console.log({ tdClientInstance: tdClient })

function getBrowser() {
  const { userAgent } = window.navigator

  let browser_name = ''
  const isIE = /*@cc_on!@*/ false || Boolean(document.documentMode)
  const isEdge = !isIE && Boolean(window.StyleMedia)
  if (userAgent.includes('Chrome') && !isEdge) {
    browser_name = 'Chrome'
  } else if (userAgent.includes('Safari') && !isEdge) {
    browser_name = 'Safari'
  } else if (userAgent.includes('Firefox')) {
    browser_name = 'Firefox'
  } else if (userAgent.includes('MSIE') || Boolean(document.documentMode) === true) {
    //IF IE > 10
    browser_name = 'IE'
  } else if (isEdge) {
    browser_name = 'Edge'
  } else {
    browser_name = 'Unknown'
  }

  return browser_name
}

function getOSName() {
  const { userAgent } = window.navigator

  let OSName = 'Unknown'
  if (userAgent.includes('Windows NT 10.0')) OSName = 'Windows 10'
  if (userAgent.includes('Windows NT 6.2')) OSName = 'Windows 8'
  if (userAgent.includes('Windows NT 6.1')) OSName = 'Windows 7'
  if (userAgent.includes('Windows NT 6.0')) OSName = 'Windows Vista'
  if (userAgent.includes('Windows NT 5.1')) OSName = 'Windows XP'
  if (userAgent.includes('Windows NT 5.0')) OSName = 'Windows 2000'
  if (userAgent.includes('Mac')) OSName = 'Mac/iOS'
  if (userAgent.includes('X11')) OSName = 'UNIX'
  if (userAgent.includes('Linux')) OSName = 'Linux'

  return OSName
}
