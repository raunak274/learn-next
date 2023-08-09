export default (req, res) => {
    if (req.method == 'POST') {
        const { body } = req;
        const { id } = (req.query);
        console.log(body, id);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.status(201).send(
            JSON.stringify({
                status: true,
                id: id,
                name: body.name,
            })
        );
    } else if(req.method == "GET") {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(
            JSON.stringify({
                status: true,
                data: "some data in get"
            })
        );
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(
            JSON.stringify({
                status: true,
                data: "some data in else"
            })
        );
    }

}