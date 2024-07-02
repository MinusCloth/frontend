declare namespace Projeto{
    type usuario={
        id?: number;
        nome:string;
        login:string;
        senha: string;
        email:string;
    }


    type recurso ={
        id?: number;
        nome:string;
        chave:string;
    }

    type Perfil={
        id?: number;
        descricao:string;
    }

}