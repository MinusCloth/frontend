import axios from "axios"



export const axiosInstance=axios.create({
    baseURL:"http://localhost:8080"
})

export class UsuarioService{

    listaTodos(){
        return axiosInstance.get("/usuario");
    }

    inserir(usuario:Projeto.usuario){
        return axiosInstance.post("/usuario",usuario);
    }

    alterar(usuario : Projeto.usuario){
        return axiosInstance.put("/usuario",usuario);
    }

    excluir(id:number){
        return axiosInstance.delete("/usuario/"+id);
    }


}