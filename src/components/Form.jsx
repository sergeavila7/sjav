import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iqox5q5',
        'template_e93i07i',
        e.target,
        'user_wS2EM6YFGEi4s1zghyD61'
      )
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: '¡Mensaje Enviado con Exito!',
            text: 'Pronto me pondre en contacto contigo',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      );
    e.target.reset();
  }
  return (
    <section className='contact'>
      {/* <h2>Contacto</h2> */}
      <div className='container'>
        <form className='contact-form' onSubmit={sendEmail}>
          <div className='col-12 row justify-content-center align-items-center'>
            <div className='form-field col-lg-4'>
              <input
                id='name'
                className='input-text'
                type='text'
                name='name'
                required
                pattern='[a-zA-ZÀ-ÿ\s]{1,25}'
                title='Username should only contain lowercase letters. e.g. Juan'
              />
              <label htmlFor='name' class='label'>
                Nombre(s)
              </label>
            </div>

            <div className='form-field col-lg-4'>
              <input
                id='lastnames'
                className='input-text'
                type='text'
                name='lastname'
                required
                pattern='[a-zA-ZÀ-ÿ\s]{1,40}'
                title='Username should only contain lowercase letters. e.g. Juan'
              />
              <label htmlFor='lastnames' class='label'>
                Apellidos
              </label>
            </div>

            <div className='form-field col-lg-4'>
              <input
                id='email'
                className='input-text'
                type='email'
                name='email'
                required
                pattern='^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$'
                title='Ingrese una cuenta de correo valida. example@example.com'
              />
              <label htmlFor='email' class='label'>
                Correo electronico
              </label>
            </div>

            {/* <div className='form-field col-lg-4'>
              <input
                className='input-text'
                type='phone'
                name='Phone'
                required
                pattern='[0-9]{10,12}'
                title='Ingrese un numero telefonico valido de 10 digitos.'
              />
              <label for='phone' class='label'>
                Telefono
              </label>
            </div> */}

            <div className='form-field col-lg-4'>
              <textarea
                id='message'
                className='textarea'
                name='message'
                required
              />
              <label htmlFor='message' class='label-msg'>
                Mensaje
              </label>
            </div>

            <div className='form-field col-lg-4'>
              <input className='submit-btn' type='submit' name='submit' />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
