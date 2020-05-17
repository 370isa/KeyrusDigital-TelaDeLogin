// Configura as ações no destino das rotas.
module.exports = {
  index(req, res) {
    return res.render('login-screen/index', { display: 'style = "display: none;"' })
  },

  post(req, res) {
    const keys = Object.keys(req.body)
    let fields

    for (let key of keys) {
      if (req.body[key] == '') {
        fields = false
      }
      else
        fields = true
    }

    return res.render('login-screen/index', { fields })
  }
}
