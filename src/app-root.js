import { customElement, property, LitElement, html, css } from 'lit-element';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property() message = 'Learn LitElement';

  static get styles() {
    return css`
      h1 {
        font-size: 4rem;
      }
      .site{
          background-image: url("https://img.freepik.com/vector-gratis/elegante-fondo-blanco-textura_23-2148431731.jpg?size=626&ext=jpg");
      }
      .site-main{
          margin: auto 25px auto 25px;
          background: linear-gradient(315deg, #E67300 0%, #FFFB6B 50%, #E67300 100%);
          opacity: 0.8;
      }
      .site-title{
          color: #000000;
          font-size: 2.5rem;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1;
          letter-spacing: 4.5px;
          text-transform: uppercase;
          font-family: "Playfair Display", serif;
      }
      .site-header{
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(315deg, #FFFB6B 0%, #E67300 50%, #FFFB6B 100%);
          margin: auto auto auto auto;
      }
      .site-content{
          justify-content: center;
          align-items: center;
          flex-direction: column;
      }
      .title-header-page{
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          color: black;
          font-weight: bold;
          font-size: 2.5rem;
          margin: auto 20px auto 10px;
          font-family: Arial;
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          letter-spacing: 3px;
      }
      .alerta-header-page{
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          color: #d5080c;
          font-weight: bold;
          font-size: 2.5rem;
          margin: auto 20px auto 10px;
          font-family: Arial;
          text-shadow: -1.7px 0 #d5080c, 0 1.7px #d5080c, 1.7px 0 #d5080c, 0 -1.7px #d5080c;
          letter-spacing: 3px;
      }
      a {
          text-decoration: none;
          color: white;
          font-weight: bold;
      }
      a:hover{
          color: #C90D93;
      }
      .link {
        color: white;
      }
      .entry-content{
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
      }
      .servicio-page{
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          color: black;
          font-style: italic;
          font-family: Arial;
          font-size: 2rem;
          font-weight: bold;
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          letter-spacing: 1px;
      }
      .servicio-centro{
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          color: #d5080c;
          font-weight: bold;
          font-size: 2.5rem;
          margin: auto 20px auto 10px;
          font-family: Arial;
          text-shadow: -1px 0 #d5080c, 0 1px #d5080c, 1px 0 #d5080c, 0 -1px #d5080c;
          letter-spacing: 3px;
      }
      .seccion{
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          column-count: 2;
          column-gap: 3em;
          column-width: 320px;
      }
      .imagen-prop{
          margin: auto 20px auto 20px;
      }
      img{
          max-width: 100%;
          height: auto;
          vertical-align: middle;
      }
      .titulo-servicio{
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          color: black;
          font-weight: bold;
          font-size: 2rem;
          margin: auto 20px auto 10px;
          font-family: Arial;
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          letter-spacing: 3px;
      }
      .opciones-servicio{
          justify-content: left;
          align-items: left;
          text-align: left;
          color: black;
          font-weight: bold;
          font-size: 1.5rem;
          margin: auto 20px auto 10px;
          font-family: Arial;
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          letter-spacing: 3px;
      }
      .seccion-reverse{
          flex-direction: column-reverse;
          justify-content: center;
          align-items: center;
          text-align: center;
          column-count: 2;
          column-gap: 3em;
          column-width: 320px;
      }
      .seccion-contactos{
          flex-direction: column-reverse;
          justify-content: center;
          align-items: center;
          text-align: center;
          column-count: 3;
          column-gap: 3em;
          column-width: 240px;
          margin: auto 100px auto 100px;
      }
      .icono-fb{
          background-color: #3B5998;
          padding: 30px 40px 30px 40px;
          border-radius: 20px;
      }
      .icono-fb:hover{
          background-color: #ffffff;
      }
      .link-fb:hover{
          color: #3B5998;
      }
      .icono-wsp{
          background-color: #25d366;
          padding: 30px 37px 30px 37px;
          border-radius: 20px;
      }
      .icono-wsp:hover{
          background-color: #ffffff;
      }
      .link-wsp:hover{
          color: #25d366;
      }
      .icono-email{
          background-color: #dd4b39;
          padding: 33px 35px 33px 35px;
          border-radius: 20px;
      }
      .icono-email:hover{
          background-color: #ffffff;
      }
      .link-email:hover{
          color: #dd4b39;
      }
      .opciones-contacto{
          justify-content: center;
          align-items: center;
          text-align: center;
          color: black;
          font-weight: bold;
          font-size: 1.5rem;
          margin: auto 20px auto 10px;
          font-family: Arial;
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          letter-spacing: 3px;
      }
      .site-footer{
          background-color: #ffffff;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: black;
      }
      .link-f{
          text-decoration: none;
          color: black;
          font-weight: bold;
      }
      .link-f:hover{
          color: cyan;
      }
      br{
          height: 100h;
      }
    `;
  }

  render() {
    return html`
    <div id="page" class="site">

        <header id="masthead" class="site-header">
            <div class="site-header-main">
                <div class="wrapper">
                    <div class="site-branding">
                        <div class="site-identity">
                            <p class="site-title"><a href="./" rel="home">Servicio de Contaduria OnLine</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <br/>

        <div id="content" class="site-content">
            <div class="wrapper">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main">
                        <article id="post-77" class="post-77 page type-page status-publish hentry">
                            <div class="entry-content">
                                <br/>
                                <br/>
                                <h2 class="alerta-header-page"><b>¿Problemas con el SRI?</b></h2>
                                <br/>
                                <br/>
                                <h2 class="title-header-page"><strong><span class="has-inline-color">Ing. CPA David Calasanz B. &amp; Asociados</span></strong></h2>
                                <span class="servicio-page">ASESORIA CONTABLE</span>
                                <br/>
                                <br/>
                                <br/>
                                <span style="color:#ed0101" class="servicio-centro">Te ofrecemos múltiples servicios como</span>
                                <br/>
                                <br/>
                                <div class="seccion">
                                    <div class="column">
                                        <div class="titulo-servicio">
                                            <h3><strong>Declaraciones</strong></h3>
                                        </div>
                                        <div class="opciones-servicio">
                                            <ul>
                                                <li>Declaración de retención de la Fuente – Formulario 103</li>
                                                <br/>
                                                <li>Declaración de impuesto al valor agregado mensual – Formulario 104</li>
                                                <br/>
                                                <li>Y muchos mas</li>
                                                <br/>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="imagen-prop">
                                            <img src="https://imagenes.lainformacion.com/files/image_656_370/uploads/imagenes/2020/03/19/5e70a000b80d5.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <div class="seccion-reverse">
                                    <div class="column">
                                        <div class="imagen-prop">
                                            <img src="https://i2.wp.com/accounter.co/cdn/2019/07/post-contadores.jpg?fit=768%2C480&ssl=1" alt="">
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="titulo-servicio">
                                            <h3><strong>Anexos</strong></h3>
                                        </div>
                                        <div class="opciones-servicio">
                                            <ul>
                                                <li>Anexo transaccional simplificado – ATS</li>
                                                <br/>
                                                <li>Anexo de retención en la fuente bajo relación de dependencia – RDEP</li>
                                                <br/>
                                                <li>Anexo de dividendos, utilidades o beneficios – ADI. Y mas...</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <div class="seccion">
                                    <div class="column">
                                        <div class="titulo-servicio">
                                            <h3><strong>Formularios IESS</strong></h3>
                                        </div>
                                        <div class="opciones-servicio">
                                            <ul>
                                                <li>IESS planillas de seguridad social</li>
                                                <br/>
                                                <li>IESS fondos de reserva</li>
                                                <br/>
                                                <li>Y muchos mas</li>
                                                <br/>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="imagen-prop">
                                            <img src="https://www.eltelegrafo.com.ec/images/eltelegrafo/Quito/2014/29-05-14-quito-pago-Rodas-grande.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <h2 class="title-header-page">Contactamos a través de:</h2>
                                <br/>
                                <br/>
                                <div class="seccion-contactos">
                                    <a class="link-fb" href="https://www.facebook.com/Asesoria-Contable-533548124233605">
                                        <div>
                                            <svg aria-hidden="true" width="30px" focusable="false" data-prefix="fab" data-icon="facebook-f" class="icono-fb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                        </div>
                                        <h3><strong>FanPage Facebook</strong></h3>
                                    </a>
                                    <a class="link-wsp" href="https://api.whatsapp.com/send?phone=+593994488745&amp;text=Hola! Deseo asesoria">
                                        <div>
                                            <svg aria-hidden="true" width="40px" focusable="false" data-prefix="fab" data-icon="whatsapp" class="icono-wsp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                                        </div>
                                        <h3><strong>WhatsApp</strong></h3>
                                    </a>
                                    <a class="link-email" href="mailto:asesor.contable21@gmail.com">
                                        <div>
                                            <svg aria-hidden="true" width="40px" focusable="false" data-prefix="far" data-icon="envelope" class="icono-email" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                                        </div>
                                        <h3><strong>Correo Electronico</strong></h3>
                                    </a>
                                </div>
                                <br/>
                                <span style="color:#ed0101" class="servicio-centro">Nuestros numeros de contacto</span>
                                <br/>
                                <div class="opciones-contacto">
                                    <h3><strong>+593994488745 +593991923195</strong></h3>
                                </div>
                                <br/>
                                <h2 class="title-header-page"><strong><span class="has-inline-color">“EFICIENCIA, PUNTUALIDAD, FIDELIDAD, TU CONTABILIDAD SOLO EN NOSOTROS PUEDES CONFIAR”</span></strong></h2>
                                <br/>
                                <br/>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <!--Footer-->
        <footer id="colophon" class="site-footer">
            <br/>
        	<div id="site-generator">
        		<div class="site-info">
        			<div class="wrapper">Copyright © 2021 Ecuador
        				<a class="link-f" href="mailto:jloza_666@hotmail.com">Riobamba DevOps</a>
        				<span class="sep"> | </span>Contruido con:
        				<a class="link-f" href="https://www.snowpack.dev">Snowpack - LitElements</a>
        			</div>
        		</div>
        	</div>
            <br/>
        </footer>
    </div>

    `;
  }
}
