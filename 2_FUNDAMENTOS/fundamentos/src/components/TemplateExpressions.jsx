import MyComponent from "./MyComponent";

const TemplateExpressions = () => {

    const name = "Danilo";
    const data = {
        idade: 37,
        funcao: "Programador",
    };

    return (
        <>
            <h1>Olá, {name}, seja bem vindo ...</h1>
            <h2>Você atua como: {data.funcao}</h2>
            <h2>Sua idade é: {data.idade}</h2>
            <MyComponent />
        </>
    );
};

export default TemplateExpressions;