import { Boton } from "../componentes/Boton";
import { DivCanva, DivCol, DivRow, Panel } from "../componentes/contenedores";
import { TextField } from "../componentes/TextField";

export function Login() {
    return (
        <>
            <Panel>
                <DivRow>
                    <img src="/Assets/montain.jpg" />
                    <DivCanva>
                        <DivCol>
                            <h1>Bienvenido a lite inventory</h1>
                            <p>Inicia sesion</p>
                            <TextField label={"Usuario"} />
                            <TextField label={"Password"} isPass={true} />
                            <Boton color={'principal'}>Login</Boton>
                        </DivCol>
                    </DivCanva>
                </DivRow>
            </Panel>
        </>
    )
}