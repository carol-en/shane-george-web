import { people } from '../../data';

export default function People(req, res) {
    if(people.length) {
        res.status(200).json(people);
    } else {
        res.status(400).json( {message: "not found!!" });
    }
}