import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { conformToMask } from 'react-text-mask';
import mailSender from '../../utils/functions/mailSender';

import './Form.css';

function Form() {
  const [states, setStates] = useState([]);
  const [user, setUser] = useState({});
  const [modalUnlock, setModalUnlock] = useState(false);

  const {
    register, reset, handleSubmit, setValue, formState: { errors },
  } = useForm();

  useEffect(() => {
    async function requestAllStates() {
      const data = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      const statesToUpdateReactState = await data.json();

      setStates(statesToUpdateReactState);
    }

    requestAllStates();
  }, []);

  async function requestLocationWithCep(cep) {
    const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const location = await data.json();

    setValue('state', location.uf);
    setValue('city', location.localidade);
    setValue('district', location.bairro);
    setValue('address', location.logradouro);
  }

  function resetLocationValues() {
    setValue('state', states[0].sigla);
    setValue('city', '');
    setValue('district', '');
    setValue('address', '');
  }

  function maskNumberApplier(phoneNumber) {
    const phoneNumberMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    const conformedPhoneNumber = conformToMask(
      phoneNumber,
      phoneNumberMask,
      { guide: false },
    );

    setValue('phone', conformedPhoneNumber.conformedValue);
  }

  const onSubmit = (data) => {
    setUser(data);
    setModalUnlock(true);

    window.location.href = '#bitBuildersLogo';

    mailSender(data.name, data.mail);

    setTimeout(() => {
      setModalUnlock(false);
    }, 2500);

    reset();
  };

  return (
    <div id="form" className="form-container">
      <h1>
        Inscreava-se
        {' '}
        <br />
        {' '}
        gratuitamente
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="form-element">
        <label htmlFor="input-name">
          Nome Completo
          <input
            style={{ borderColor: !errors.name ? 'black' : 'red' }}
            {...register('name', { maxLength: 30, required: true })}
            id="input-name"
            autoComplete="off"
          />
        </label>

        <label htmlFor="input-phone">
          Telefone
          <input
            style={{ borderColor: !errors.phone ? 'black' : 'red' }}
            {...register('phone', {
              maxLength: 15,
              required: true,
              onChange: ({ target }) => maskNumberApplier(target.value),
            })}
            id="input-phone"
            type="text"
            autoComplete="off"
          />
        </label>

        <label id="label-input-mail" htmlFor="input-mail">
          E-mail
          <input
            style={{ borderColor: !errors.mail ? 'black' : 'red' }}
            {...register('mail', { pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, required: true })}
            id="input-mail"
            autoComplete="off"
            type="email"
          />
        </label>

        <label htmlFor="input-cep">
          CEP
          <input
            style={{ borderColor: !errors.cep ? 'black' : 'red' }}
            {...register('cep', {
              maxLength: 8,
              minLength: 8,
              required: true,
              onChange: ({ target }) => {
                if (target.value.length === 8) requestLocationWithCep(target.value);
                else resetLocationValues();
              },
            })}
            id="input-cep"
            type="number"
            autoComplete="off"
          />
        </label>

        <div className="input-state-container">
          <label id="label-input-state" htmlFor="input-state">
            Estado
            <select
              style={{ borderColor: !errors.state ? 'black' : 'red' }}
              {...register('state', { required: true })}
              id="input-state"
            >
              { states.map(({ nome, sigla }) => (
                <option key={sigla} value={sigla}>{ nome }</option>
              )) }
            </select>
          </label>
        </div>

        <label htmlFor="input-city">
          Cidade
          <input
            style={{ borderColor: !errors.city ? 'black' : 'red' }}
            {...register('city', { maxLength: 30, required: true })}
            id="input-city"
            type="text"
            autoComplete="off"
          />
        </label>

        <label htmlFor="input-district">
          Bairro
          <input
            style={{ borderColor: !errors.district ? 'black' : 'red' }}
            {...register('district', { maxLength: 30, required: true })}
            id="input-district"
            type="text"
            autoComplete="off"
          />
        </label>

        <label id="label-input-address" htmlFor="input-address">
          Logradouro
          <input
            style={{ borderColor: !errors.address ? 'black' : 'red' }}
            {...register('address', { maxLength: 65, required: true })}
            id="input-address"
            type="text"
            autoComplete="off"
          />
        </label>

        <div className="input-submit-container">
          <button onClick={() => setModalUnlock(true)} id="input-submit" type="submit">ENVIAR</button>
        </div>
      </form>
      {
        modalUnlock
      && (
      <div className="modal">
        {`${user.name ? user.name.split(' ')[0] : ''}, será um prazer te encontrar em nosso evento, estaremos enviando todas as orientações para seu e-mail: ${user.mail}`}
      </div>
      )
      }
    </div>
  );
}

export default Form;
