export default class TestContoller {
    static async PrimeiraFuncao(req, res) {
        return res.json({ message: "este é o controller funcionando" })
    }

    static async get(req, res) {
        return res.json({ message:"Você veio pagar alguma coisa ?" })
    }

    static async post(req, res) {
        const name = req.body;
        return res.json({ message:`oi voce veio adicionar seu nome? --- ${name}` })
    }

    static async put(req, res) {
        const {dados} = req.body;
        return res.json({ message:`voce veio editar dados? --- ${dados}` })
    }

    static async delete(req, res) {
        const { id } = req.body;
        return res.json({ message:`voce quer deletar esse id? --- ${id}` })
    }
}