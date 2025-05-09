import i18n from '../../../i18n'

export default {
  async setorder (context, payload) {
    const userId = context.rootGetters['auth/userId']
    const response = await fetch(
      `https://mobilestore-b36ec-default-rtdb.firebaseio.com/orders/${userId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(payload)
      }
    )
    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          i18n.t('errorAndNote.store.ordersModule.setorderfiled')
      )
      throw error
    }

    context.commit('setorder', payload)
  },
  async fetchorders (context) {
    const userId = context.rootGetters['auth/userId']
    const response = await fetch(
      `https://mobilestore-b36ec-default-rtdb.firebaseio.com/orders/${userId}.json`
    )
    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          i18n.t('errorAndNote.store.ordersModule.fetchordersfiled')
      )
      throw error
    }

    const orders = []

    for (const order in responseData) {
      const orderData = {
        accid: responseData[order].accid,
        ordernumber: responseData[order].ordernumber,
        date: responseData[order].date,
        total: responseData[order].total,
        paymentstatus: responseData[order].paymentstatus,
        fulfillmentstatus: responseData[order].fulfillmentstatus
      }
      orders.push(orderData)
    }
    context.commit('setneworders', orders)
  }
}
