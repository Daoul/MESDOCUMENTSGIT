import {Request, Response} from 'express';
import { User } from '../models/UserModel';

export const getUsuarios = async (req: Request, res: Response) => {
    const listUsuarios = await User.findAll();
    res.json(listUsuarios);
}

export const getUsuario= async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await User.findByPk(id);

    if (usuario) {
        res.json(usuario)
    }else{
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await User.findByPk(id);
    if (!usuario) {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }else{
        await User.destroy();
        res.json({
            msg: 'El usuario fue eliminado con exito'
        })
    }
}
export const postUsuario =  async (req: Request, res: Response) => {
    const {body} = req;
    try{
        await User.create(body);
        res.json({
            msg: '!El usuario fue agregado con exito!'
        })
    }catch (error){
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`

        })
    }
}
export const updateUsuario =  async (req: Request, res: Response) => {
    const {body} = req;
    const {id} = req.params;
    try{
        const usuario = await User.findByPk(id);
        if(usuario){
            await usuario.update(body);
            res.json({
                msg: '!El usuario fue actualizado con exito!'
            })
        }else{
            res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            })
        }
        
    }catch (error){
    console.log(error);
    res.json({
        msg: `Upps ocurrio un error, comuniquese con soporte`

        })
    }
}
