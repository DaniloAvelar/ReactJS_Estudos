const vlr1 = 8;
const vlr2 = 7;

const Challenge = () =>{
    return(
        <>
            <h2>Vamos somar?</h2>
            <h3>{vlr1} + {vlr2}</h3>
            <button onClick={HandleSoma}>Somar</button>
            <button onClick={()=> console.log(vlr1 - vlr2)}>Subtrair</button>
        </>   
    );
};

const HandleSoma = () =>{
    console.log(vlr1 + vlr2)
}

export default Challenge;