import { useState } from "react"
import { MuffinDisplay } from "../muffin/MuffinDisplay/MuffinDisplay"


export const MainView = () => {
    const [cover,setCover]=useState("")
    const [fill,setFill]=useState("")
    const [extra,setExtra]=useState("")
    const [topping,setTopping]=useState("")
  return (
    <div className={`w-screen h-screen max-w-screen flex flex-col bg-amber-950`}>
        <div className="flex flex-col justify-center items-center  text-2xl w-full h-1/12">{/*Header*/}
            <b>¡Make your Muffin!</b>
        </div>
        <div className="flex flex-row h-11/12">{/*Content*/}
            <div className="w-2/12 h-full">{/*Relleno/Covertura*/}
                <div className="flex flex-col gap-3" >{/*Selector covertura*/}
                    <p>Convertura</p>
                    <select
                        className="select"
                        value={cover}
                        onChange={(event)=>{
                            setCover(event.target.value)
                        }}
                    >
                        <option value={""}>
                            Sin covertura
                        </option>
                        <option value={`${import.meta.env.BASE_URL}/CoverBeish.png`}>
                            Beige
                        </option>
                        <option value={"public/CoverMarron.png"}>
                            Marron
                        </option>
                        <option value={"public/CoverRojoyAzul.png"}>
                            Rojo Y Azul
                        </option>
                        <option value={"public/CoverMarcille.png"}>
                            Marcille
                        </option>
                    </select>
                </div>
                <div className="flex flex-col gap-3" >{/*Selector Relleno*/}
                    <p>Masa</p>
                    <select
                        className="select"
                        value={fill}
                        onChange={(event)=>{
                            setFill(event.target.value)
                        }}
                    >
                        <option value={""}>
                            Sin Masa
                        </option>
                        <option value={"public/MuffinVainilla.png"}>
                            Vainilla
                        </option>
                        <option value={"public/MuffinChocolate.png"}>
                            Chocolate
                        </option>
                        <option value={"public/MuffinLimon.png"}>
                            Limon
                        </option>
                    </select>
                </div>
                <div className="flex flex-col gap-3" >{/*Selector extra*/}
                    <p>Extra</p>
                    <select
                        className="select"
                        value={extra}
                        onChange={(event)=>{
                            setExtra(event.target.value)
                        }}
                    >
                        <option value={""}>
                            Sin extra
                        </option>
                        <option value={"public/ExtraChipsChocolateNegro.png"}>
                            Chips de Chocolate
                        </option>
                        <option value={"public/ExtraChipsChocolateBlanco.png"}>
                            Chips Chocolate Blanco
                        </option>
                        <option value={"public/ExtraFrutosRojos.png"}>
                            Frutos Rojos
                        </option>
                        <option value={"public/ExtraArandanos.png"}>
                            Arandanos
                        </option>
                    </select>
                </div>
                <div className="flex flex-col gap-3" >{/*Selector topping*/}
                    <p>Topping</p>
                    <select
                        className="select"
                        value={topping}
                        onChange={(event)=>{
                            setTopping(event.target.value)
                        }}
                    >
                        <option value={""}>
                            Sin topping
                        </option>
                        <option value={"public/ToppingChocolateConNuez.png"}>
                            Chocolate con Nuez
                        </option>
                        <option value={"public/ToppingGlaceado.png"}>
                            Glaceado de limon
                        </option>
                        <option value={"public/ToppingCrema.png"}>
                            Crema
                        </option>
                        <option value={"public/ToppingOreo.png"}>
                            Oreo con dulce de Leche
                        </option>
                    </select>
                </div>

            </div>
            <div className="w-8/12 h-full">{/*Muffin Display*/}
                <MuffinDisplay
                cover={cover}
                fill={fill}
                extra={extra}
                topping={topping}
                />
            </div>
        </div>
    </div>
  )
}
