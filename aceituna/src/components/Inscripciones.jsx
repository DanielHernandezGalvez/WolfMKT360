import React, { useState } from "react";
import Navbar from "./Navbar";


const Inscripciones = ({ isOpenInscription, onCloseInscription }) => {
    if (!isOpenInscription) return null;

    return (
        <>
            <div className="fixed inset-0 flex justify-center ">
                <div className="bg-[--gray] opacity-80 absolute inset-0"></div>
                <div className="bg-[--beige-clear]  monserrat 
          text-[--brown]  z-10 overflow-y-auto w-full h-full">


                    <Navbar />
                    <div className="font-bold  text-base px-6 py-6">
                        <button
                            className="mb-8 p-2 bg-[--brown] cursor-pointer
                            monserrat text-white rounded"
                            onClick={onCloseInscription}>
                            Volver
                        </button>
                        <div className="flex justify-center items-center  flex-col">
                            <p className="text-center text-2xl mb-4 ">¿CÓMO FUNCIONA ACEITUNA?</p> <br /> 

                            <p className="font-medium  text-overflow-ellipsis"
                            >
                                <span className="text-start font-bold text-xl flex items-center gap-5"> <img width={50} src="https://cdn-icons-png.flaticon.com/128/7856/7856434.png" alt="" />TU INSCRIPCION ES GRATIS </span> <br /> <br />
                                <span className="font-bold">¿Cómo hacerlo?</span>
                                <br />
                                Entras en contacto con nosotros:<br />
                                1. Via Whatsapp al 33 1302 2587 y te apoyamos.<br />
                                2. Manda un mensaje via Instagram: <a className="text-[--gray] underline" href="https://instagram.com/aceitunaexperience/" target="_blank">Click aqui</a> <br />
                                
                                3. Contáctanos vía Facebook :<a className="text-[--gray] underline" href="https://www.facebook.com/profile.php?id=61554323523242&locale=es_LA" target="_blank">Click aqui</a>
                               <br />
                                4. Via nuestra pagina web : www.aceitunaexperience.com,
                                En el Menu, da click en “Contacto”, nos mandas un mensaje y te responderemos.<br />
                                5. Escribe un mensaje a contacto@aceitunaexperience.com y te contactaremos.<br />
                                6. Nos puedes visitar, previa una cita concertada, a nuestra oficina en : Casa
                                Rubens, Rubens 5273, colonia Real Vallarta, 45020 Zapopan (Jalisco), muy
                                cerca del COSTCO de Rafael Sanzio.<br /> <br />
                                <span className="text-xl font-bold flex items-center gap-5">  <img width={50} src="https://cdn-icons-png.flaticon.com/128/10178/10178999.png" alt="" />PUEDES CONSULTAR EL CALENDARIO DE ACTIVIDADES ASI:</span><br /> <br />
                                1. En la pagina web.<br />
                                2. En nuestra cuenta Instagram & Facebook.<br />
                                3. Via Whatsapp (33 1302 2587) y te mandamos el calendario de actividades.<br /> <br />
                                <span className="text-start text-xl font-bold flex items-center gap-5">  <img width={50} src="https://cdn-icons-png.flaticon.com/128/11247/11247782.png" alt="" />PARA RESERVAR O APUNTARTE A UNA ACTIVIDAD ES MUY FACIL:</span><br /> <br />
                                1. Mándanos un mensaje Whatsapp o nos marcas al 33 1302 2587 y te apoyamos.<br /><br />
                                <span className="text-start text-xl font-bold flex items-center gap-5"> <img width={50} src="https://cdn-icons-png.flaticon.com/128/5293/5293329.png" alt="" /> CADA ACTIVIDAD TIENE UN COSTO:</span><br /><br />
                                1. Puedes consular los precios por actividad en nuestro calendario de actividades en:
                                página web: www.aceitunaexperience.com<br />
                                2. Instagram: <a className="text-[--gray] underline" href="https://instagram.com/aceitunaexperience/" target="_blank">Click aquí</a><br />
                                3. Facebook: <a className="text-[--gray] underline" href="https://facebook.com/profile.php?id=61554323523242&locale=es_LA" target="_blank">Click aquí</a> <br />
                                2. Mándanos un mensaje Whatsapp o nos marcas al 33 1302 2587 y te apoyamos para el pago.<br />
                                3. Puedes pagar de varias maneras:<br />
                                · En efectivo directamente a la oficina de Aceituna, previa una cita concertada, en
                                Casa Rubens, Rubens 5273, colonia Real Vallarta, 45020 Zapopan (Jalisco), muy
                                cerca del COSTCO de Rafael Sanzio.<br />
                                · Con una transferencia bancaria o pago a tarjeta : nos mandas un mensaje via
                                Whatsapp (33 1302 2587) y te pasamos nuestros datos bancarios.<br /> <br />
                                <span className="text-start text-xl font-bold flex items-center gap-5"><img width={50} src="https://cdn-icons-png.flaticon.com/128/5834/5834841.png" alt="" /> HAY MEMBRESIAS CON BENEFICIOS :</span><br /> <br />
                                1. Consulta nuestra pagina web www.aceitunaexperience.com o nuestras cuentas
                                Instagram & Facebook.<br />
                                2. ¡Aprovechalo! se te regresa hasta el 20% de tus compras de actividades.<br />
                                3. Mándanos un mensaje Whatsapp o nos marcas al 33 1302 2587 y te apoyamos para
                                hacer el pago.<br /> <br />
                                <span className="text-start text-xl font-bold flex items-center gap-5"><img width={50} src="https://cdn-icons-png.flaticon.com/128/447/447031.png" alt="" /> ¿DONDE SE HACEN LAS ACTIVIDADES ?</span><br /> <br />
                                1. En las oficinas de Aceituna.<br />
                                2. En el jardin de las oficinas de Aceituna.<br />
                                3. En los locales de los Partners aliados de Aceituna.<br /> <br />
                                <span className="text-start text-xl font-bold flex items-center gap-5"><img width={50} src="https://cdn-icons-png.flaticon.com/128/1660/1660165.png" alt="" />¿MAS PREGUNTAS?</span><br /> <br />
                                1. Mándanos un mensaje Whatsapp o nos marcas al 33 1302 2587 y te apoyamos con mucho gusto.
                            </p>
                    <div className="flex  mt-6">
                        <a href="https://api.whatsapp.com/send?phone=523313022587&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20talleres%20." className="text-center bg-[--brown] text-white p-4 mt-6 mb-16">Quiero Inscribirme</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inscripciones;