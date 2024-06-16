import { DivRow, MainFrame, Panel } from "../componentes/contenedores";
import { MenuVertical } from "../componentes/MenuVertical";

export function Home() {
    return (
        <>
            <DivRow>
                <MenuVertical />
                <Panel>
                    <DivRow>
                        <MainFrame>
                            <div>
                                <h1>Home page</h1>
                            </div>
                        </MainFrame>
                    </DivRow>
                </Panel>
            </DivRow>
        </>

    )
}